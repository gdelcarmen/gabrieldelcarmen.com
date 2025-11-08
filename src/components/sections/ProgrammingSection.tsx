import Tooltip from '../Tooltip';

interface SectionProps {
  isVisible: boolean;
}

const ProgrammingSection = ({ isVisible }: SectionProps) => (
  <section
          id="programming"
          className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">Programming Projects & Initiatives
            <span className="ml-2 text-xs text-gray-400 font-light inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Hover for details
            </span>
          </h2>

          <div className="flex items-center mb-5">
            <a href="https://github.com/gdelcarmen" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors mr-4">
              <svg className="h-6 w-6 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub Profile
            </a>
            {/* Consider adding LinkedIn or other relevant profiles */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Tooltip
              content={
                <div>
                  <h4 className="font-medium mb-2">Trauma Practice Management Guidelines</h4>
                  <p className="mb-2">
                    SwiftUI application centralizing Albany Medical Center&apos;s trauma practice management guidelines for rapid
                    bedside reference.
                  </p>
                  <p className="mb-2">Key capabilities include:</p>
                  <ul className="list-disc pl-4 mb-2">
                    <li>Offline-first architecture with locally cached guideline content organized by specialty.</li>
                    <li>Global search with highlighted results to expedite decision-making.</li>
                    <li>Responsive typography and color cues to differentiate urgency and procedural steps.</li>
                    <li>Collaboration with institutional trauma leadership to ensure version control and governance.</li>
                  </ul>
                  <p>Released October 2025 to support consistent trauma coverage across services.</p>
                </div>
              }
              position="bottom"
              width="max-w-md"
            >
              <div className="bg-gray-50 p-5 rounded-lg transition-all hover:shadow-md cursor-help">
                <h3 className="text-base font-medium text-gray-900 mb-2">Trauma Practice Management Guidelines</h3>
                <p className="text-sm text-gray-600 font-light mb-3">
                  SwiftUI app delivering searchable, offline trauma protocols for Albany Medical Center clinicians.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">SwiftUI</span>
                  <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Clinical Operations</span>
                  <span className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-full">Offline-First</span>
                </div>
                <span className="text-sm text-gray-400">Internal distribution</span>
              </div>
            </Tooltip>

            <Tooltip
              content={
                <div>
                  <h4 className="font-medium mb-2">DrainBow</h4>
                  <p className="mb-2">
                    Minimal viable product capturing drain photos, performing on-device color detection, and logging trends to
                    support postoperative monitoring.
                  </p>
                  <p className="mb-2">Feature highlights:</p>
                  <ul className="list-disc pl-4 mb-2">
                    <li>Secure photo capture workflow mapped to individual drains with timestamped entries.</li>
                    <li>Color analysis rendered as &ldquo;rainbow&rdquo; visualization alongside volume data to surface concerning shifts.</li>
                    <li>Local-first storage with exportable logs for integration into care team handoffs.</li>
                    <li>Designed with surgical faculty to reduce cognitive load during high-volume rounds.</li>
                  </ul>
                  <p>Prototype completed November 2025; exploring institutional pilot opportunities.</p>
                </div>
              }
              position="bottom"
              width="max-w-md"
            >
              <div className="bg-gray-50 p-5 rounded-lg transition-all hover:shadow-md cursor-help">
                <h3 className="text-base font-medium text-gray-900 mb-2">DrainBow</h3>
                <p className="text-sm text-gray-600 font-light mb-3">
                  Local-first drain tracking app pairing color analytics with volume logs to spotlight postoperative changes.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">SwiftUI</span>
                  <span className="bg-pink-50 text-pink-700 text-xs px-2 py-1 rounded-full">Computer Vision</span>
                  <span className="bg-yellow-50 text-yellow-700 text-xs px-2 py-1 rounded-full">On-Device ML</span>
                </div>
                <span className="text-sm text-gray-400">Prototype stage</span>
              </div>
            </Tooltip>
          </div>
        </section>
);

export default ProgrammingSection;
