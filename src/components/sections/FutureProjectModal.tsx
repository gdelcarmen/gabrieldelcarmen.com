import { FutureProject } from '../../data/futureProjects';

interface FutureProjectModalProps {
  project: FutureProject;
  onClose: () => void;
}

const FutureProjectModal = ({ project, onClose }: FutureProjectModalProps) => (
  <div
    className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-gray-800 bg-opacity-70"
    onClick={onClose}
  >
    <div
      className="relative max-w-4xl w-full rounded-lg p-6 shadow-xl bg-white overflow-y-auto max-h-[90vh]"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        aria-label="Close projects"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <h2 className="text-xl font-light mb-6 text-gray-800">{project.title}</h2>

      <div className="space-y-8">
        <div>
          <div className="prose max-w-none text-sm text-gray-600 font-light">
            <p className="mb-4">{project.description}</p>
            {project.components && (
              <>
                <h4 className="text-base font-medium text-gray-800 mt-4 mb-2">Project Components:</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  {project.components.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}
            {project.status && (
              <>
                <h4 className="text-base font-medium text-gray-800 mt-4 mb-2">Current Status:</h4>
                <p>{project.status}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FutureProjectModal;
