import { useState } from 'react';
import { navSections } from '../../data/navigation';
import Chevron from '../Chevron';

const printPage = () => {
  if (typeof window !== 'undefined') window.print();
};

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-rule font-sans print:hidden">
      {/* Wide screens: one row of section links. */}
      <div className="hidden flex-wrap items-center justify-between gap-x-6 text-[14.5px] md:flex">
        <nav aria-label="Sections" className="flex flex-wrap gap-x-5">
          {navSections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="nav-link inline-flex min-h-[44px] items-center">
              {section.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={printPage}
          className="inline-flex min-h-[44px] items-center font-semibold underline underline-offset-[3px] hover:text-crimson"
        >
          Print or save as PDF
        </button>
      </div>

      {/* Narrow screens: a contents list that opens in place. */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="contents-list"
          className="flex min-h-[44px] w-full items-center justify-between text-left text-[14.5px] font-semibold"
        >
          Contents
          <Chevron open={open} />
        </button>
        {open && (
          <nav id="contents-list" aria-label="Sections" className="reveal flex flex-col pb-2 text-[15px]">
            {navSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center border-t border-[#E4E4E4]"
              >
                {section.title}
              </a>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navigation;
