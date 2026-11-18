import { useState } from 'react';
import type { KeyboardEvent } from 'react';
import type { DetailedEntry } from '../data/research';
import { publicationByNumber } from '../data/publications';
import Authors from './Authors';
import { useTooltip } from './Tooltip';

const EntryDetail = ({ entry }: { entry: DetailedEntry }) => (
  <>
    <div className="font-bold">{entry.detailHeading}</div>
    <ul className="mt-1.5 space-y-1">
      {entry.detail.map((item) => (
        <li key={item}>– {item}</li>
      ))}
    </ul>
  </>
);

// The card behind a citation marker: each cited reference in full.
const CitationCard = ({ numbers, onNavigate }: { numbers: number[]; onNavigate: () => void }) => (
  <div className="divide-y divide-rule">
    {numbers.map((number) => {
      const reference = publicationByNumber(number);
      if (!reference) return null;
      return (
        <div key={number} className="py-2.5 first:pt-0 last:pb-0">
          <div className="font-bold">
            <span className="text-crimson">{number}.</span> {reference.title}
          </div>
          <div className="text-body">
            <Authors list={reference.authors} />
          </div>
          <div className="text-body">
            <i>{reference.venueShort}</i>
            {reference.dateLabel && ` · ${reference.dateLabel}`}
            {reference.status && ` · ${reference.status}`}
          </div>
          <div className="flex flex-wrap gap-x-[18px]">
            {reference.link && (
              <a
                href={reference.link.href}
                target="_blank"
                rel="noreferrer"
                className="link-crimson inline-flex min-h-[32px] items-center font-semibold"
              >
                {reference.link.label.startsWith('PMID') ? 'Open on PubMed' : 'Open the paper'}
              </a>
            )}
            <a
              href={`#ref-${number}`}
              onClick={onNavigate}
              className="link-crimson inline-flex min-h-[32px] items-center font-semibold"
            >
              Go to reference {number}
            </a>
          </div>
        </div>
      );
    })}
  </div>
);

// One paragraph of the main text. The underlined name opens the full entry:
// as a card hanging from the name with a mouse, in place on touch screens.
const EntryParagraph = ({ entry }: { entry: DetailedEntry }) => {
  const { bind, hide, hoverCapable } = useTooltip();
  const [open, setOpen] = useState(false);
  const panelId = `${entry.id}-detail`;
  const citeId = `${entry.id}-cites`;

  const toggle = () => setOpen((value) => !value);
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle();
    }
  };

  const termProps = hoverCapable
    ? bind({ id: panelId, content: <EntryDetail entry={entry} />, width: 440, inset: 4 })
    : { onClick: toggle, onKeyDown, 'aria-expanded': open, 'aria-controls': panelId };

  return (
    <div className="mb-3 last:mb-0">
      <p id={entry.id}>
        <span role="button" tabIndex={0} className="term" {...termProps}>
          {entry.name}
        </span>{' '}
        {entry.summary}
        {entry.cites && (
          <>
            {' '}
            <a
              href={`#ref-${entry.cites[0]}`}
              className="cite"
              {...(hoverCapable
                ? bind({
                    id: citeId,
                    content: <CitationCard numbers={entry.cites} onNavigate={() => hide(citeId, true)} />,
                    interactive: true,
                    width: 460,
                    inset: 4,
                  })
                : {})}
              onClick={() => hide(citeId, true)}
            >
              {entry.citeLabel}
            </a>
          </>
        )}
      </p>
      {!hoverCapable && open && (
        <div id={panelId} className="reveal mt-2 border-l-2 border-crimson bg-tint px-3 py-2.5 font-sans text-[13.5px] leading-[1.45] print:hidden">
          <EntryDetail entry={entry} />
        </div>
      )}
      {/* The printed CV carries the full entry. */}
      <ul className="mt-1 hidden list-disc pl-5 text-[14px] print:block">
        {entry.detail.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default EntryParagraph;
