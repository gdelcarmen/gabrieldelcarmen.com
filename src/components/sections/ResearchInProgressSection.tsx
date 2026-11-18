import { useState } from 'react';
import { futureProjectsData } from '../../data/futureProjects';
import Chevron from '../Chevron';

const ResearchInProgressSection = () => {
  // Rows start open; each can be closed and reopened in place.
  const [closed, setClosed] = useState<Record<string, boolean>>({});

  return (
    <section id="in-progress">
      <h2 className="section-heading">4. Manuscripts in progress</h2>
      <div className="border-b border-rule">
        {futureProjectsData.map((project, index) => {
          const open = !closed[project.title];
          const panelId = `manuscript-${index}`;
          return (
            <div key={project.title} className="border-t border-rule">
              <button
                type="button"
                onClick={() => setClosed((value) => ({ ...value, [project.title]: open }))}
                aria-expanded={open}
                aria-controls={panelId}
                className="group flex min-h-[44px] w-full items-start justify-between gap-4 py-3 text-left"
              >
                <span>
                  <span className="block font-semibold transition-colors group-hover:text-crimson">
                    {project.title}
                  </span>
                  <span className="mt-0.5 block font-sans text-[13.5px] text-body">
                    <span className="text-xs font-bold uppercase tracking-[0.06em] text-crimson">
                      {project.status}
                    </span>{' '}
                    · <i>{project.venue}</i>
                    {project.coauthors && ` · with ${project.coauthors}`}
                  </span>
                </span>
                <Chevron open={open} className="mt-[5px] print:hidden" />
              </button>
              <div id={panelId} className={open ? 'reveal pb-3.5 pr-8 text-[15px]' : 'hidden pb-3.5 pr-8 text-[15px] print:block'}>
                <p className="mb-1.5">{project.description}</p>
                <p className="font-sans text-[13.5px] text-body">{project.components.join(' · ')}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ResearchInProgressSection;
