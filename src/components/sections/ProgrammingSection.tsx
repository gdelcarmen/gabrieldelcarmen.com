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
            {/* Project 1: Surgic.AI */}
            <Tooltip
              content={
                <div>
                  <h4 className="font-medium mb-2">Surgic.AI - Enterprise Initiative</h4>
                  <p className="mb-2">An enterprise focused on developing and deploying cutting-edge machine learning solutions tailored for medicine and surgery.</p>
                  <p className="mb-2">Core Goals:</p>
                  <ul className="list-disc pl-4 mb-2">
                    <li>Enhance medical/surgical learning through AI tools.</li>
                    <li>Improve the delivery of high-quality patient care.</li>
                    <li>Mitigate physician burden through intelligent automation and support.</li>
                    <li>Uphold rigorous ethical standards and patient safety in all applications.</li>
                  </ul>
                  <p>Projects like Rounder and Synthetic CXR Generation fall under the Surgic.AI framework.</p>
                </div>
              }
              position="bottom"
              width="max-w-md"
            >
              <div className="bg-gray-50 p-5 rounded-lg transition-all hover:shadow-md cursor-help">
                <h3 className="text-base font-medium text-gray-900 mb-2">Surgic.AI</h3>
                <p className="text-sm text-gray-600 font-light mb-3">Enterprise initiative providing ML solutions to enhance learning and patient care in medicine/surgery.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-full">AI/ML</span>
                  <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">Healthcare Tech</span>
                  <span className="bg-red-50 text-red-700 text-xs px-2 py-1 rounded-full">Enterprise</span>
                  <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Surgery</span>
                </div>
                {/* <a href="https://github.com/[Your-GitHub-Username]/surgic-ai" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">View Project →</a> */}
                <span className="text-sm text-gray-400">Website coming soon</span>
              </div>
            </Tooltip>

            {/* Project 2: Rounder App */}
            <Tooltip
              content={
                <div>
                  <h4 className="font-medium mb-2">Rounder - Clinical Workflow App</h4>
                  <p className="mb-2">Mobile application designed to streamline clinical rounds documentation while maintaining HIPAA compliance.</p>
                  <p className="mb-2">Key Features:</p>
                  <ul className="list-disc pl-4 mb-2">
                    <li>Voice-to-text note capture during rounds.</li>
                    <li>Automatic formatting of notes into SOAP structure.</li>
                    <li>Secure patient list creation via encrypted photo capture (OCR-based).</li>
                    <li>Automatic assignment of notes to corresponding patients.</li>
                    <li>Focus on hands-off operation to prioritize patient interaction.</li>
                    <li>Ensures data privacy and security according to HIPAA standards.</li>
                  </ul>
                  <p>Currently under active development.</p>
                </div>
              }
              position="bottom"
              width="max-w-md"
            >
              <div className="bg-gray-50 p-5 rounded-lg transition-all hover:shadow-md cursor-help">
                <h3 className="text-base font-medium text-gray-900 mb-2">Rounder App</h3>
                <p className="text-sm text-gray-600 font-light mb-3">HIPAA-compliant app for efficient rounds notes (voice-to-SOAP, patient list photos).</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">Mobile App</span>
                  <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Clinical Workflow</span>
                  <span className="bg-yellow-50 text-yellow-700 text-xs px-2 py-1 rounded-full">AI/ML</span>
                  <span className="bg-red-50 text-red-700 text-xs px-2 py-1 rounded-full">HIPAA</span>
                </div>
                <span className="text-sm text-gray-400">Preview coming soon</span>
              </div>
            </Tooltip>

            {/* Project 3: Synthetic CXR Generation */}
            <Tooltip
              content={
                <div>
                  <h4 className="font-medium mb-2">Synthetic Chest X-Ray (CXR) Generation</h4>
                  <p className="mb-2">AI-powered tool to generate high-fidelity, anatomically accurate synthetic chest X-ray images for medical education.</p>
                  <p className="mb-2">Project Goals:</p>
                  <ul className="list-disc pl-4 mb-2">
                    <li>Provide a diverse and extensive dataset for training residents and medical students.</li>
                    <li>Generate images depicting various common and rare pathologies.</li>
                    <li>Allow for controllable parameters to simulate different patient scenarios.</li>
                    <li>Benchmark generative models (like GANs or Diffusion models) against real CXR datasets (e.g., VinDr-CXR) for fidelity.</li>
                    <li>Integrate with educational platforms for interactive learning modules.</li>
                  </ul>
                  <p>Focuses on improving radiological interpretation skills without relying solely on limited real patient data.</p>
                </div>
              }
              position="bottom"
              width="max-w-md"
            >
              <div className="bg-gray-50 p-5 rounded-lg transition-all hover:shadow-md cursor-help">
                <h3 className="text-base font-medium text-gray-900 mb-2">Synthetic CXR Generation</h3>
                <p className="text-sm text-gray-600 font-light mb-3">AI tool generating realistic synthetic CXRs for medical education and training.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-full">AI/ML</span>
                  <span className="bg-orange-50 text-orange-700 text-xs px-2 py-1 rounded-full">Generative Models</span>
                  <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">Medical Education</span>
                  <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Radiology</span>
                </div>
                <span className="text-sm text-gray-400">Preview coming soon</span>
              </div>
            </Tooltip>

            {/* Project 4: Trauma Practice Management Guidelines */}
            <Tooltip
              content={
                <div>
                  <h4 className="font-medium mb-2">Trauma Practice Management Guidelines</h4>
                  <p className="mb-2">SwiftUI application that centralizes Albany Medical Center's trauma practice management guidelines into a single, searchable, offline-capable reference.</p>
                  <p className="mb-2">Key Features:</p>
                  <ul className="list-disc pl-4 mb-2">
                    <li>Designed for quick bedside retrieval with clear sectioning and ease of retrieval.</li>
                    <li>Offline-capable for use in any clinical setting.</li>
                    <li>Searchable interface for rapid access to specific guidelines.</li>
                    <li>Developed in collaboration with Dr. Kurt Edwards.</li>
                  </ul>
                  <p>Developed October 2025 using SwiftUI and XCode.</p>
                </div>
              }
              position="bottom"
              width="max-w-md"
            >
              <div className="bg-gray-50 p-5 rounded-lg transition-all hover:shadow-md cursor-help">
                <h3 className="text-base font-medium text-gray-900 mb-2">Trauma Practice Management Guidelines</h3>
                <p className="text-sm text-gray-600 font-light mb-3">SwiftUI app centralizing trauma guidelines for quick bedside reference.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">SwiftUI</span>
                  <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Mobile App</span>
                  <span className="bg-red-50 text-red-700 text-xs px-2 py-1 rounded-full">Trauma</span>
                  <span className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-full">Clinical Reference</span>
                </div>
                <span className="text-sm text-gray-400">Developed October 2025</span>
              </div>
            </Tooltip>

            {/* Project 5: DrainBow */}
            <Tooltip
              content={
                <div>
                  <h4 className="font-medium mb-2">DrainBow</h4>
                  <p className="mb-2">Minimally working product that captures bedside photos of drain output, performs on-device color detection, and logs output with associated drain number.</p>
                  <p className="mb-2">Key Features:</p>
                  <ul className="list-disc pl-4 mb-2">
                    <li>Captures bedside photos of drain output.</li>
                    <li>On-device color detection for accurate tracking.</li>
                    <li>"Rainbow" visualization displaying drain output color over time next to volume entries.</li>
                    <li>Surfaces trend shifts for clinical decision-making.</li>
                    <li>Local-first data models with exportable logs.</li>
                  </ul>
                  <p>Developed November 2025 using SwiftUI and XCode.</p>
                </div>
              }
              position="bottom"
              width="max-w-md"
            >
              <div className="bg-gray-50 p-5 rounded-lg transition-all hover:shadow-md cursor-help">
                <h3 className="text-base font-medium text-gray-900 mb-2">DrainBow</h3>
                <p className="text-sm text-gray-600 font-light mb-3">Mobile app for tracking surgical drain output with color detection and visualization.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">SwiftUI</span>
                  <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Mobile App</span>
                  <span className="bg-yellow-50 text-yellow-700 text-xs px-2 py-1 rounded-full">Computer Vision</span>
                  <span className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-full">Clinical Workflow</span>
                </div>
                <span className="text-sm text-gray-400">Developed November 2025</span>
              </div>
            </Tooltip>

          </div>
        </section>
);

export default ProgrammingSection;
