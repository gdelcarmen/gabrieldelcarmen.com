import Tooltip from '../Tooltip';
import { FutureProject } from '../../data/futureProjects';

interface SectionProps {
  isVisible: boolean;
  projects: FutureProject[];
  onProjectClick: (index: number) => void;
}

const ResearchInProgressSection = ({ isVisible, projects, onProjectClick }: SectionProps) => (
  <section
    id="future"
    className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
  >
    <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">
      Research in Progress
      <span className="ml-2 text-xs text-gray-400 font-light inline-flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Hover for details
      </span>
    </h2>

    <p className="text-gray-600 leading-relaxed font-light mb-6">
      Below are several research initiatives and manuscripts currently in development, under review, or preparation.
      These projects represent my ongoing commitment to advancing surgical science, medical ethics, and healthcare equity
      through innovative methodologies and interdisciplinary collaboration.
    </p>

    <div className="space-y-8">
      {projects.map((project, index) => (
        <Tooltip
          key={project.title}
          content={
            <div>
              <h4 className="font-medium mb-2">{project.title}</h4>
              <p className="mb-3 text-sm text-gray-600">{project.description}</p>
              <ul className="list-disc pl-4 space-y-1 text-xs text-gray-500">
                {project.components.map((component) => (
                  <li key={component}>{component}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-gray-500 font-medium">{project.status}</p>
            </div>
          }
          position="bottom"
          width="max-w-md"
        >
          <button
            type="button"
            onClick={() => onProjectClick(index)}
            className="bg-gray-50 p-5 rounded-lg text-left transition-all hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            <h3 className="text-base font-medium text-gray-900 mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 font-light mb-2">{project.summary}</p>
            <span className="text-xs text-blue-600 inline-flex items-center">
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </Tooltip>
      ))}
    </div>
  </section>
);

export default ResearchInProgressSection;
