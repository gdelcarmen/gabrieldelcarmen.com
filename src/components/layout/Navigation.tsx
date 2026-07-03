import { NavSection } from '../../data/navigation';

interface NavigationProps {
  activeSection: string;
  sections: readonly NavSection[];
  onNavigate: (sectionId: string) => void;
}

const Navigation = ({ activeSection, sections, onNavigate }: NavigationProps) => (
  <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-xl">
    <div className="mx-auto max-w-5xl px-4">
      <ul className="flex gap-2 overflow-x-auto py-3 text-xs md:text-sm">
        {sections.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <li key={section.id} className="shrink-0">
              <button
                onClick={() => onNavigate(section.id)}
                className={`rounded-full px-3 py-2 transition-all ${
                  isActive
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                }`}
              >
                {section.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  </nav>
);

export default Navigation;
