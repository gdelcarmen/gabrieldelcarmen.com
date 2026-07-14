import { NavSection } from '../../data/navigation';

interface NavigationProps {
  activeSection: string;
  sections: readonly NavSection[];
  onNavigate: (sectionId: string) => void;
}

const Navigation = ({ activeSection, sections, onNavigate }: NavigationProps) => (
  <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
    <div className="mx-auto max-w-4xl px-4">
      <ul className="flex gap-5 overflow-x-auto py-3 text-xs md:text-sm">
        {sections.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <li key={section.id} className="shrink-0">
              <button
                onClick={() => onNavigate(section.id)}
                className={`border-b py-1 transition-colors ${
                  isActive
                    ? 'border-gray-700 font-medium text-gray-800'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
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
