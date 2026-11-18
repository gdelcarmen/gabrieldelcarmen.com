import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { FocusEvent, MouseEvent, ReactNode } from 'react';
import { useHoverCapable } from '../hooks/useHoverCapable';

// One card for the whole page. It hangs from whatever is being highlighted:
// the card sits next to its anchor and a crimson connector joins the two.

export interface TooltipOptions {
  id: string;
  content: ReactNode;
  // A shorter form of the content, used when the full card will not fit on
  // the preferred side of its anchor.
  compactContent?: ReactNode;
  // The pointer can move onto the card, so its links can be used.
  interactive?: boolean;
  width?: number;
  prefer?: 'below' | 'above';
  // Keep the card clear of this element (for example a row of chart marks);
  // the connector spans the distance back to the anchor.
  clear?: () => HTMLElement | null;
  // Start the connector this many pixels inside the anchor, for text anchors
  // whose box extends below the underline.
  inset?: number;
}

interface ActiveTooltip extends TooltipOptions {
  anchor: HTMLElement;
}

interface Placement {
  id: string;
  left: number;
  top: number;
  width: number;
  stemLeft: number;
  stemTop: number;
  stemHeight: number;
  above: boolean;
}

interface TooltipContextValue {
  activeId: string | null;
  hoverCapable: boolean;
  show: (anchor: HTMLElement, options: TooltipOptions) => void;
  hide: (id: string, immediate?: boolean) => void;
}

const TooltipContext = createContext<TooltipContextValue | null>(null);

const CARD_ID = 'tooltip-card';
const GAP = 10;
const HIDE_DELAY = 140;
// Height kept free at the top of the viewport for the sticky running head.
const HEADROOM = 60;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), Math.max(min, max));

interface TooltipProviderProps {
  children: ReactNode;
  className?: string;
}

export const TooltipProvider = ({ children, className }: TooltipProviderProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<number>();
  const [active, setActive] = useState<ActiveTooltip | null>(null);
  const [placement, setPlacement] = useState<Placement | null>(null);
  // The card that has fallen back to its compact content, if any.
  const [compactId, setCompactId] = useState<string | null>(null);
  const hoverCapable = useHoverCapable();
  const compact = Boolean(active && active.compactContent && compactId === active.id);

  const cancelHide = useCallback(() => window.clearTimeout(hideTimer.current), []);

  const show = useCallback(
    (anchor: HTMLElement, options: TooltipOptions) => {
      cancelHide();
      // Built once per call: React may re-run the updater, and a fresh object
      // each time would look like a new card and restart positioning.
      const next: ActiveTooltip = { ...options, anchor };
      setActive((previous) => (previous && previous.id === next.id && previous.anchor === anchor ? previous : next));
    },
    [cancelHide]
  );

  const hide = useCallback(
    (id: string, immediate = false) => {
      cancelHide();
      const close = () => setActive((previous) => (previous && previous.id === id ? null : previous));
      if (immediate) close();
      else hideTimer.current = window.setTimeout(close, HIDE_DELAY);
    },
    [cancelHide]
  );

  useEffect(() => cancelHide, [cancelHide]);

  // Work out where the card goes once its content has been laid out.
  useLayoutEffect(() => {
    const root = rootRef.current;
    const card = cardRef.current;
    if (!active || !root || !card) return;

    const rootRect = root.getBoundingClientRect();
    const rootStyle = window.getComputedStyle(root);
    const innerLeft = parseFloat(rootStyle.paddingLeft) || 0;
    const innerRight = rootRect.width - (parseFloat(rootStyle.paddingRight) || 0);

    const width = Math.min(active.width ?? 440, innerRight - innerLeft);
    card.style.width = `${width}px`;
    const height = card.offsetHeight;

    // A wrapped inline anchor has one box per line: hang from the last line,
    // or sit above the first.
    const boxes = active.anchor.getClientRects();
    const whole = active.anchor.getBoundingClientRect();
    const lastBox = boxes.length > 1 ? boxes[boxes.length - 1] : whole;
    const firstBox = boxes.length > 1 ? boxes[0] : whole;
    const clearRect = active.clear?.()?.getBoundingClientRect();
    const inset = active.inset ?? 0;

    const belowTop = Math.max(lastBox.bottom, clearRect ? clearRect.bottom : lastBox.bottom) + GAP;
    const aboveBottom = Math.min(firstBox.top, clearRect ? clearRect.top : firstBox.top) - GAP;
    const fitsBelow = belowTop + height <= window.innerHeight - 8;
    const fitsAbove = aboveBottom - height >= HEADROOM;
    const preferAbove = active.prefer === 'above';

    // Rather than flip to the far side, where it may cover what it is
    // describing, a card with a compact form tries that first.
    if (active.compactContent && !compact && !(preferAbove ? fitsAbove : fitsBelow)) {
      setCompactId(active.id);
      return;
    }

    const above = preferAbove ? fitsAbove || !fitsBelow : !fitsBelow && fitsAbove;

    const box = above ? firstBox : lastBox;
    const stemX = clamp(box.left - rootRect.left + Math.min(box.width / 2, 22), innerLeft + 12, innerRight - 12);
    const left = clamp(stemX - 28, innerLeft, innerRight - width);
    const stemStart = above ? aboveBottom : lastBox.bottom - inset;
    const stemEnd = above ? firstBox.top + inset : belowTop;

    const next: Placement = {
      id: active.id,
      left,
      top: (above ? aboveBottom - height : belowTop) - rootRect.top,
      width,
      stemLeft: stemX - 1,
      stemTop: stemStart - rootRect.top,
      stemHeight: Math.max(0, stemEnd - stemStart),
      above,
    };
    setPlacement((previous) =>
      previous && (Object.keys(next) as (keyof Placement)[]).every((key) => previous[key] === next[key])
        ? previous
        : next
    );
    // Keyed on what the card is and where it hangs, not on object identity.
  }, [active?.id, active?.anchor, compact]);

  // Close on Escape, on resize, and on a press anywhere else.
  useEffect(() => {
    if (!active) return;
    const close = () => hide(active.id, true);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (active.anchor.contains(target) || cardRef.current?.contains(target)) return;
      close();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('resize', close);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('resize', close);
    };
  }, [active, hide]);

  const value = useMemo<TooltipContextValue>(
    () => ({ activeId: active?.id ?? null, hoverCapable, show, hide }),
    [active, hoverCapable, show, hide]
  );

  const placed = active && placement && placement.id === active.id ? placement : null;

  return (
    <TooltipContext.Provider value={value}>
      <div ref={rootRef} className={`relative ${className ?? ''}`}>
        {children}
        {active && (
          <div className="print:hidden">
            {placed && placed.stemHeight > 0 && (
              <span
                key={`${active.id}-stem`}
                aria-hidden="true"
                className={`tooltip-stem ${placed.above ? 'is-above' : ''}`}
                style={{ left: placed.stemLeft, top: placed.stemTop, height: placed.stemHeight }}
              />
            )}
            <div
              key={active.id}
              ref={cardRef}
              id={CARD_ID}
              role="tooltip"
              className={`tooltip-card ${placed?.above ? 'is-above' : ''} ${
                active.interactive ? 'pointer-events-auto' : 'pointer-events-none'
              }`}
              style={{
                left: placed?.left ?? 0,
                top: placed?.top ?? 0,
                width: placed?.width,
                visibility: placed ? 'visible' : 'hidden',
              }}
              onMouseEnter={active.interactive ? cancelHide : undefined}
              onMouseLeave={active.interactive ? () => hide(active.id) : undefined}
            >
              {compact ? active.compactContent : active.content}
            </div>
          </div>
        )}
      </div>
    </TooltipContext.Provider>
  );
};

type AnyElement = HTMLElement;

export interface TriggerProps {
  onMouseEnter?: (event: MouseEvent<AnyElement>) => void;
  onMouseLeave?: () => void;
  onFocus?: (event: FocusEvent<AnyElement>) => void;
  onBlur?: () => void;
  onClick?: (event: MouseEvent<AnyElement>) => void;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
}

export const useTooltip = () => {
  const context = useContext(TooltipContext);
  if (!context) throw new Error('useTooltip must be used inside a TooltipProvider');
  const { activeId, hoverCapable, show, hide } = context;

  // Props for the element the card hangs from. With a mouse the card follows
  // hover and focus; on touch screens a tap opens and closes it.
  const bind = useCallback(
    (options: TooltipOptions): TriggerProps => {
      if (hoverCapable) {
        return {
          onMouseEnter: (event) => show(event.currentTarget, options),
          onMouseLeave: () => hide(options.id),
          onFocus: (event) => show(event.currentTarget, options),
          onBlur: () => hide(options.id),
          'aria-describedby': activeId === options.id ? CARD_ID : undefined,
        };
      }
      return {
        onClick: (event) => {
          event.preventDefault();
          if (activeId === options.id) hide(options.id, true);
          else show(event.currentTarget, { ...options, interactive: true });
        },
        'aria-expanded': activeId === options.id,
      };
    },
    [activeId, hoverCapable, show, hide]
  );

  return { activeId, hoverCapable, bind, hide };
};
