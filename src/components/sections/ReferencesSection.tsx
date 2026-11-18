import { publications } from '../../data/publications';
import type { Publication } from '../../data/publications';
import Authors from '../Authors';

const endsSentence = (text: string) => /[.?!]$/.test(text);

const Reference = ({ reference }: { reference: Publication }) => (
  <li id={`ref-${reference.n}`} className="mb-2 break-inside-avoid pl-1 last:mb-0">
    <Authors list={reference.authors} />
    {endsSentence(reference.authors) ? ' ' : '. '}
    {reference.title}
    {endsSentence(reference.title) ? ' ' : '. '}
    {reference.lead}
    {reference.container && <i>{reference.container}</i>}
    {reference.tail}
    {reference.link && (
      <>
        {' '}
        <a href={reference.link.href} target="_blank" rel="noreferrer" className="link-crimson break-words">
          {reference.link.label}
        </a>
      </>
    )}
    {reference.citedIn && (
      <>
        {' '}
        <a
          href={`#${reference.citedIn}`}
          className="whitespace-nowrap font-sans text-xs text-muted underline underline-offset-2 hover:text-crimson print:hidden"
        >
          Cited in section 2
        </a>
      </>
    )}
  </li>
);

const ReferencesSection = () => (
  <section id="references" className="mt-9">
    <h2 className="section-heading mb-3">References</h2>
    <ol className="references list-decimal pl-[1.7em] text-[14.5px] leading-[1.45] md:columns-2 md:gap-10">
      {publications.map((reference) => (
        <Reference key={reference.n} reference={reference} />
      ))}
    </ol>
  </section>
);

export default ReferencesSection;
