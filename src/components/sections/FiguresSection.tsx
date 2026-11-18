import { useRef } from 'react';
import type { MouseEvent, ReactNode } from 'react';
import { oralPresentations, posterPresentations } from '../../data/presentations';
import { publications } from '../../data/publications';
import type { SupplementId } from '../../data/supplement';
import {
  figure1Axis,
  figure2Axis,
  rowCoversYear,
  rowEnd,
  rowStart,
  timelineRows,
  toDecimalYear,
} from '../../data/timeline';
import type { TimelineRow } from '../../data/timeline';
import { useDrawOnView } from '../../hooks/useDrawOnView';
import { useElementWidth } from '../../hooks/useElementWidth';
import Authors from '../Authors';
import { useTooltip } from '../Tooltip';
import type { TooltipOptions } from '../Tooltip';

type Lane = 'paper' | 'talk' | 'poster';

// One mark in Figure 2.
interface Output {
  id: string;
  lane: Lane;
  noun: 'paper' | 'book' | 'talk' | 'poster';
  time: number;
  year: number;
  href: string;
  title: string;
  authors: string;
  dateLabel: string;
  meta: ReactNode;
  // Set for talks and posters, which live in supplementary section S1.
  supplementTarget?: string;
  action: string;
}

const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

const outputs: Output[] = [
  ...publications.flatMap((reference): Output[] => {
    if (!reference.date || !reference.dateLabel) return [];
    const noun = reference.kind === 'book' ? 'book' : 'paper';
    return [
      {
        id: `mark-ref-${reference.n}`,
        lane: 'paper',
        noun,
        time: toDecimalYear(reference.date),
        year: Number(reference.date.iso.slice(0, 4)),
        href: `#ref-${reference.n}`,
        title: reference.title,
        authors: reference.authors,
        dateLabel: reference.dateLabel,
        meta: (
          <>
            {capitalize(noun)} · {reference.dateLabel} ·{' '}
            {noun === 'book' ? reference.venueShort : <i>{reference.venueShort}</i>}
            {reference.status && ` · ${reference.status}`} · reference {reference.n}
          </>
        ),
        action: `Go to reference ${reference.n}`,
      },
    ];
  }),
  ...[...oralPresentations, ...posterPresentations].map(
    (item): Output => ({
      id: `mark-${item.id}`,
      lane: item.kind,
      noun: item.kind,
      time: toDecimalYear(item.date),
      year: Number(item.date.iso.slice(0, 4)),
      href: `#${item.id}`,
      title: item.title,
      authors: item.authors,
      dateLabel: item.dateLabel,
      meta: `${capitalize(item.kind)} · ${item.dateLabel} · ${item.venueShort ?? item.venue} · ${item.location}`,
      supplementTarget: item.id,
      action: 'Show in the supplement',
    })
  ),
].sort((a, b) => a.time - b.time);

const lanes: { id: Lane; label: string }[] = [
  { id: 'paper', label: 'Papers' },
  { id: 'talk', label: 'Talks' },
  { id: 'poster', label: 'Posters' },
];

const yearsOf = (axis: { start: number; end: number }) =>
  Array.from({ length: axis.end - axis.start }, (_, index) => axis.start + index);

const figure1Years = yearsOf(figure1Axis);
const figure2Years = yearsOf(figure2Axis);

const percent = (value: number, axis: { start: number; end: number }) =>
  ((value - axis.start) / (axis.end - axis.start)) * 100;

// "2 papers, 1 talk, 5 posters"
const countOutputs = (items: Output[]) =>
  (['paper', 'book', 'talk', 'poster'] as const)
    .map((noun) => {
      const count = items.filter((item) => item.noun === noun).length;
      return count ? `${count} ${noun}${count > 1 ? 's' : ''}` : '';
    })
    .filter(Boolean)
    .join(', ');

const cardLabel = 'text-[11.5px] font-bold uppercase tracking-[0.08em] text-crimson';

// What a year holds across both figures. The compact form leaves out the
// list of titles and is short enough to sit between the two figures.
const YearCard = ({ year, compact = false }: { year: number; compact?: boolean }) => {
  const rows = timelineRows.filter((row) => rowCoversYear(row, year));
  const items = outputs.filter((item) => item.year === year);
  const figure2Label = `Figure 2 · ${items.length ? countOutputs(items) : 'nothing plotted'}`;
  return (
    <>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-[15px] font-bold">{year}</span>
        {compact && <span className={cardLabel}>{figure2Label}</span>}
      </div>
      <div className={`${compact ? 'mt-0.5' : 'mt-1.5'} ${cardLabel}`}>Figure 1 · under way</div>
      <ul>
        {rows.map((row) => (
          <li key={row.id} className="flex justify-between gap-3">
            <span>{row.label}</span>
            <span className="whitespace-nowrap text-muted">{row.span}</span>
          </li>
        ))}
      </ul>
      {!compact && (
        <>
          <div className={`mt-2 ${cardLabel}`}>{figure2Label}</div>
          {items.length > 0 ? (
            <ul>
              {items.map((item) => (
                <li key={item.id} className="truncate">
                  <span className="text-muted">
                    {capitalize(item.noun)}, {item.dateLabel}.
                  </span>{' '}
                  {item.title}
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-muted">
              {year < figure2Axis.start
                ? `Figure 2 begins in ${figure2Axis.start}.`
                : 'No dated papers, talks or posters.'}
            </div>
          )}
        </>
      )}
    </>
  );
};

const actionLink = 'link-crimson mt-1 inline-flex min-h-[36px] items-center font-semibold';

interface FiguresSectionProps {
  // Opens a supplementary section and brings one of its entries into view.
  onReveal: (part: SupplementId, targetId: string) => void;
}

const FiguresSection = ({ onReveal }: FiguresSectionProps) => {
  const { activeId, bind, hide, hoverCapable } = useTooltip();
  const [figure1Ref, figure1Phase] = useDrawOnView<HTMLDivElement>();
  const [figure2Ref, figure2Phase] = useDrawOnView<HTMLDivElement>();
  const [plotRef, plotWidth] = useElementWidth<HTMLDivElement>();
  const rowsRef = useRef<HTMLDivElement>(null);

  // The year, bar or mark being highlighted is whichever one the card hangs from.
  const activeYear = activeId?.startsWith('year-') ? Number(activeId.slice(-4)) : null;
  const barActive = Boolean(activeId?.startsWith('bar-'));
  const markActive = Boolean(activeId?.startsWith('mark-'));

  const yearOptions = (year: number, figure: 'f1' | 'f2'): TooltipOptions => ({
    id: `year-${figure}-${year}`,
    content: <YearCard year={year} compact={figure === 'f1'} />,
    compactContent: figure === 'f2' ? <YearCard year={year} compact /> : undefined,
    width: 430,
    // Either way the card stays off the plot, so the highlighted year can be read.
    prefer: figure === 'f1' ? 'above' : 'below',
    clear: () => (figure === 'f1' ? rowsRef.current : plotRef.current),
  });

  const yearSummary = (year: number) => {
    const under = timelineRows.filter((row) => rowCoversYear(row, year)).map((row) => row.label);
    const items = outputs.filter((item) => item.year === year);
    return `${year}. Under way: ${under.join('; ')}. ${items.length ? countOutputs(items) : 'Nothing plotted in Figure 2'}.`;
  };

  const yearBand = (year: number | null, axis: { start: number; end: number }) =>
    year !== null && year >= axis.start && year < axis.end ? (
      <div
        className="absolute inset-y-0 bg-crimson/[0.08]"
        style={{ left: `${percent(year, axis)}%`, width: `${100 / (axis.end - axis.start)}%` }}
      />
    ) : null;

  const barOptions = (row: TimelineRow): TooltipOptions => ({
    id: `bar-${row.id}`,
    width: 460,
    content: (
      <>
        <div className="font-bold">{row.heading}</div>
        <div>{row.lines[0]}</div>
        <div className="text-muted">{row.lines[1]}</div>
        {!hoverCapable && (
          <a href={`#${row.target}`} onClick={() => hide(`bar-${row.id}`, true)} className={actionLink}>
            Go to this entry
          </a>
        )}
      </>
    ),
  });

  const reveal = (item: Output) => (event: MouseEvent) => {
    if (!item.supplementTarget) return;
    event.preventDefault();
    hide(item.id, true);
    onReveal('s1', item.supplementTarget);
  };

  const markOptions = (item: Output): TooltipOptions => ({
    id: item.id,
    width: 520,
    prefer: 'above',
    clear: () => plotRef.current,
    content: (
      <>
        <div className="text-muted">{item.meta}</div>
        <div className="font-bold">{item.title}</div>
        <div className="text-body">
          <Authors list={item.authors} />
        </div>
        {!hoverCapable && (
          <a
            href={item.href}
            onClick={item.supplementTarget ? reveal(item) : () => hide(item.id, true)}
            className={actionLink}
          >
            {item.action}
          </a>
        )}
      </>
    ),
  });

  // Marks are placed by date, then nudged right where two would overlap. The
  // date stays a percentage so the figure still reads true at any width,
  // including on paper; only the nudge is in pixels.
  const markWidth = plotWidth >= 600 ? 3 : 2;
  const positions = new Map<string, string>();
  for (const lane of lanes) {
    let previous = -Infinity;
    for (const item of outputs.filter((output) => output.lane === lane.id)) {
      const share = percent(item.time, figure2Axis);
      const natural = (share / 100) * plotWidth;
      const x = plotWidth ? Math.max(Math.round(natural), previous + markWidth + 2) : natural;
      previous = x;
      positions.set(item.id, `calc(${share.toFixed(3)}% + ${(x - natural).toFixed(1)}px)`);
    }
  }

  const yearButton = 'year font-sans text-[11px] text-muted md:text-[12.5px]';
  const yearText = (year: number) => (
    <>
      <span className="md:hidden">’{String(year).slice(2)}</span>
      <span className="hidden md:inline">{year}</span>
    </>
  );
  const verb = hoverCapable ? 'Hover or focus' : 'Tap';

  return (
    <>
      <figure id="figure-1" className="mt-9 border-t border-ink pb-[18px] pt-5">
        <div ref={figure1Ref} className={`figure-${figure1Phase}`}>
          <div className="md:pl-[246px]">
            <div className="grid grid-cols-12">
              {figure1Years.map((year) => (
                <button
                  key={year}
                  type="button"
                  aria-label={yearSummary(year)}
                  className={`${yearButton} h-8 text-center md:h-6 ${activeYear === year ? 'is-active' : ''}`}
                  {...bind(yearOptions(year, 'f1'))}
                >
                  {yearText(year)}
                </button>
              ))}
            </div>
          </div>
          <div ref={rowsRef} className="relative">
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 right-0 md:left-[246px]">
              {[...figure1Years, figure1Axis.end].map((year, index) => (
                <div
                  key={year}
                  className={`absolute inset-y-0 w-px bg-rule ${index % 3 ? 'hidden md:block' : ''}`}
                  style={
                    year === figure1Axis.end ? { right: 0 } : { left: `${percent(year, figure1Axis)}%` }
                  }
                />
              ))}
              {yearBand(activeYear, figure1Axis)}
            </div>
            <div className="relative py-1.5 md:py-1">
              {timelineRows.map((row, index) => {
                const hot = activeId === `bar-${row.id}` || (activeYear !== null && rowCoversYear(row, activeYear));
                const dim = !hot && (activeYear !== null || barActive);
                const left = percent(rowStart(row), figure1Axis);
                const width = percent(rowEnd(row), figure1Axis) - left;
                const fill =
                  row.kind === 'software' ? 'bar-hatched' : row.kind === 'education' ? 'bg-[#8C8C8C]' : 'bg-ink';
                const tooltip = bind(barOptions(row));
                return (
                  <div key={row.id} className="py-1.5 md:flex md:h-10 md:items-center md:py-0">
                    <div className="whitespace-nowrap font-sans text-sm leading-5 md:w-[246px] md:shrink-0">
                      <span className="relative bg-white pr-1.5 md:bg-transparent md:pr-0">
                        {row.label}
                        <span className="text-muted md:hidden">, {row.span}</span>
                      </span>
                    </div>
                    <div className="relative mt-1 h-4 md:mt-0 md:flex-1">
                      <a
                        href={`#${row.target}`}
                        aria-label={row.heading}
                        className={`bar absolute inset-y-0 block ${fill} ${hot ? 'is-hot' : ''} ${dim ? 'is-dim' : ''}`}
                        style={{ left: `${left}%`, width: `${width}%`, animationDelay: `${index * 0.08}s` }}
                        {...tooltip}
                        onClick={tooltip.onClick ?? (() => hide(`bar-${row.id}`, true))}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="mt-2 font-sans text-[13.5px] leading-[22px] text-muted md:pl-[246px] print:hidden">
            {verb} a bar for the detail, or a year to see it across both figures.
            {hoverCapable && ' Click a bar to jump to its entry.'}
          </p>
        </div>
        <figcaption className="mt-3 font-sans text-sm text-body">
          <b className="text-ink">Figure 1.</b> Training, research and software from 2015 to 2026, drawn to scale.
          Grey, education; black, medicine and research; hatched, software. Bars that reach the right edge are
          ongoing.
        </figcaption>
      </figure>

      <figure id="figure-2" className="border-b border-t border-b-ink border-t-rule pb-[18px] pt-6">
        <div ref={figure2Ref} className={`figure-${figure2Phase}`}>
          <div className="pl-[62px] md:pl-24">
            <div ref={plotRef} className="relative">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                {yearBand(activeYear, figure2Axis)}
              </div>
              {lanes.map((lane) => (
                <div key={lane.id} className="relative h-9 border-b border-[#B8B8B8]">
                  <span className="absolute bottom-0.5 right-full w-[62px] font-sans text-sm leading-5 md:w-24">
                    {lane.label}
                  </span>
                  {outputs
                    .filter((item) => item.lane === lane.id)
                    .map((item) => {
                      const hot = activeId === item.id || activeYear === item.year;
                      const dim = !hot && (activeYear !== null || markActive);
                      const tooltip = bind(markOptions(item));
                      return (
                        <a
                          key={item.id}
                          href={item.href}
                          aria-label={`${capitalize(item.noun)}, ${item.dateLabel}: ${item.title}`}
                          className={`mark absolute bottom-0 block h-6 bg-ink ${hot ? 'is-hot' : ''} ${dim ? 'is-dim' : ''}`}
                          style={{ left: positions.get(item.id), width: markWidth }}
                          // The year buttons carry the same entries for keyboard users,
                          // so the marks stay out of the tab order.
                          tabIndex={-1}
                          {...tooltip}
                          onClick={
                            tooltip.onClick ?? (item.supplementTarget ? reveal(item) : () => hide(item.id, true))
                          }
                        />
                      );
                    })}
                </div>
              ))}
              <div aria-hidden="true" className="wipe pointer-events-none absolute inset-0 bg-white" />
            </div>
            <div className="mt-1.5 grid grid-cols-10">
              {figure2Years.map((year) => (
                <button
                  key={year}
                  type="button"
                  aria-label={yearSummary(year)}
                  className={`${yearButton} h-8 border-l border-[#8C8C8C] pl-[5px] text-left leading-[22px] md:h-[22px] ${
                    activeYear === year ? 'is-active' : ''
                  }`}
                  {...bind(yearOptions(year, 'f2'))}
                >
                  {yearText(year)}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-2 font-sans text-[13.5px] leading-[21px] text-muted print:hidden">
            {hoverCapable
              ? 'Hover a mark to read it, or hover or focus a year to see that year across both figures. Paper marks jump to the reference list; talks and posters open in the supplement.'
              : 'Tap a year to see that year across both figures.'}
          </p>
        </div>
        <figcaption className="mt-3 font-sans text-sm text-body">
          <b className="text-ink">Figure 2.</b> Every dated paper, talk and poster from 2017 to 2026, one mark each,
          placed by date. One chapter in press and the two manuscripts in section 4 are not plotted.
        </figcaption>
      </figure>
    </>
  );
};

export default FiguresSection;
