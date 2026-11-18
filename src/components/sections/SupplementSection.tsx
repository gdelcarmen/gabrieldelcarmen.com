import type { ReactNode } from 'react';
import { oralPresentations, philosophyPapers, posterPresentations } from '../../data/presentations';
import type { Presentation } from '../../data/presentations';
import { honors, leadership, memberships, skills, teaching } from '../../data/supplement';
import type { Role, SupplementId } from '../../data/supplement';
import Authors from '../Authors';
import Chevron from '../Chevron';

const endsSentence = (text: string) => /[.?!]$/.test(text);

const listClass = 'list-decimal pl-[1.7em] text-[14.5px] leading-[1.45] md:columns-2 md:gap-10';
const itemClass = 'mb-2 break-inside-avoid pl-1 last:mb-0';

const PresentationList = ({ items }: { items: Presentation[] }) => (
  <ol className={`${listClass} mb-6`}>
    {items.map((item) => (
      <li key={item.id} id={item.id} className={itemClass}>
        <Authors list={item.authors} />
        {endsSentence(item.authors) ? ' ' : '. '}
        {item.title}
        {endsSentence(item.title) ? ' ' : '. '}
        {item.venue}; {item.dateCited}; {item.location}.
      </li>
    ))}
  </ol>
);

const RoleList = ({ roles, className = '' }: { roles: Role[]; className?: string }) => (
  <div className={`text-[15px] leading-[1.45] md:columns-2 md:gap-10 ${className}`}>
    {roles.map((role) => (
      <p key={role.lead} className="mb-2.5 break-inside-avoid last:mb-0">
        <b>{role.lead}</b> {role.text}
      </p>
    ))}
  </div>
);

const Subheading = ({ children }: { children: ReactNode }) => <h3 className="caps mb-2">{children}</h3>;

const parts: { id: SupplementId; number: string; title: string; content: ReactNode }[] = [
  {
    id: 's1',
    number: 'S1.',
    title: `Presentations (${oralPresentations.length} oral, ${posterPresentations.length} poster) and philosophy conference papers (${philosophyPapers.length})`,
    content: (
      <>
        <Subheading>Oral presentations ({oralPresentations.length})</Subheading>
        <PresentationList items={oralPresentations} />
        <Subheading>Poster presentations ({posterPresentations.length})</Subheading>
        <PresentationList items={posterPresentations} />
        <Subheading>Undergraduate philosophy conference papers ({philosophyPapers.length})</Subheading>
        <ol className={listClass}>
          {philosophyPapers.map((paper) => (
            <li key={`${paper.title}-${paper.venue}`} className={itemClass}>
              <Authors list={paper.authors} />. {paper.title}. {paper.venue}; {paper.dateCited}.
            </li>
          ))}
        </ol>
      </>
    ),
  },
  {
    id: 's2',
    number: 'S2.',
    title: `Teaching and leadership (${teaching.length + leadership.length} roles)`,
    content: (
      <>
        <Subheading>Teaching ({teaching.length})</Subheading>
        <RoleList roles={teaching} className="mb-6" />
        <Subheading>Volunteer and leadership ({leadership.length})</Subheading>
        <RoleList roles={leadership} />
      </>
    ),
  },
  {
    id: 's3',
    number: 'S3.',
    title: 'Honors, skills and memberships',
    content: (
      <div className="text-[15px] leading-[1.45] md:columns-2 md:gap-10">
        <div className="mb-5 break-inside-avoid">
          <Subheading>Honors and awards</Subheading>
          {honors.map((honor) => (
            <p key={honor.lead} className="mb-2 last:mb-0">
              <b>{honor.lead}</b> {honor.text}
            </p>
          ))}
        </div>
        <div className="mb-5 break-inside-avoid">
          <Subheading>Professional memberships</Subheading>
          <p>{memberships}</p>
        </div>
        <div className="break-inside-avoid">
          <Subheading>Skills</Subheading>
          {skills.map((skill) => (
            <p key={skill.lead} className="mb-2 last:mb-0">
              <b>{skill.lead}</b> {skill.text}
            </p>
          ))}
        </div>
      </div>
    ),
  },
];

interface SupplementSectionProps {
  open: Record<SupplementId, boolean>;
  onToggle: (id: SupplementId) => void;
}

// Supplementary sections open in place. Their content stays in the page when
// closed so that it prints and can be linked to.
const SupplementSection = ({ open, onToggle }: SupplementSectionProps) => (
  <section id="supplement" className="mt-8">
    <h2 className="caps mb-1">Supplementary sections</h2>
    <div className="flex flex-col">
      {parts.map((part) => (
        <div key={part.id}>
          <button
            type="button"
            id={part.id}
            onClick={() => onToggle(part.id)}
            aria-expanded={open[part.id]}
            aria-controls={`${part.id}-panel`}
            className="flex min-h-[48px] w-full items-center justify-between gap-4 border-b border-rule py-1.5 text-left font-sans text-[15px] leading-[1.35] transition-colors hover:bg-[#F5F5F5]"
          >
            <span>
              <b>{part.number}</b> {part.title}
            </span>
            <Chevron open={open[part.id]} className="print:hidden" />
          </button>
          <div
            id={`${part.id}-panel`}
            className={
              open[part.id]
                ? 'reveal border-b border-rule pb-6 pt-5'
                : 'hidden border-b border-rule pb-6 pt-5 print:block'
            }
          >
            {part.content}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SupplementSection;
