import { NavSection } from '../../data/navigation';

interface NavigationProps {
  activeSection: string;
  sections: readonly NavSection[];
  onNavigate: (sectionId: string) => void;
}

const Navigation = ({ activeSection, sections, onNavigate }: NavigationProps) => {
  const midpoint = Math.ceil(sections.length / 2);
  const left = sections.slice(0, midpoint);
  const right = sections.slice(midpoint);

  const renderLink = (section: NavSection) => (
    <li key={section.id} className="mr-4 md:mr-5 last:mr-0">
      <button
        onClick={() => onNavigate(section.id)}
        className={`${activeSection === section.id ? 'text-blue-700 font-medium' : 'text-gray-500'} transition-colors`}
      >
        {section.label}
      </button>
    </li>
  );

  return (
    <nav className="sticky top-0 bg-white border-b border-gray-100 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between">
          <ul className="flex py-3 text-xs md:text-sm">
            {left.map(renderLink)}
          </ul>
          <ul className="flex py-3 text-xs md:text-sm">
            {right.map(renderLink)}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
