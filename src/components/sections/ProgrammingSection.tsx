interface SectionProps {
  isVisible: boolean;
}

const projects = [
  {
    title: 'Trauma Practice Management Guidelines App',
    role: 'Creator & Developer, Albany Medical Center — October 2025',
    summary:
      'SwiftUI iOS application that centralizes Albany Medical Center trauma practice management guidelines into a single, searchable, offline-capable resource for bedside use.',
    highlights: [
      'Structured guideline content for rapid tap-through access to airway management, transfusion protocols, and key procedure algorithms.',
      'Implemented search, bookmarking, and recently-viewed features to streamline decision-making in the trauma bay.',
      'Developed in collaboration with Kurt Edwards, MD, using institution-sourced trauma guidelines.',
    ],
  },
  {
    title: 'DrainBow',
    role: 'Creator & Developer — November 2025',
    summary:
      'iOS application that captures bedside photos of surgical drain output, performs on-device color detection, and logs drain-specific volume trends.',
    highlights: [
      'Automates RGB color capture to generate a “rainbow” visualization of drain color changes over time alongside volume logs for each drain.',
      'Implements local-first, structured data storage with secure image handling and PHI-free data export for team handoffs or registry use.',
      'SwiftUI interface optimized for gloved, one-handed use in clinical environments.',
    ],
  },
  {
    title: 'MARCUS (Multimodal Agentic Retrieval for Clinical Utility & Synthesis)',
    role: 'Concept Lead & Developer — 2024 – Present',
    summary:
      'Retrieval-augmented clinical assistant that centralizes residency curricula, institutional policies, and service protocols into a single searchable interface.',
    highlights: [
      'Tenant-aware architecture enforcing role-specific permissions across services, programs, and training levels.',
      'Pipelines emphasizing citation fidelity, document versioning, and audit logging for each synthesized response.',
      'Combines vector retrieval, structured metadata search, and lightweight agent workflows to support multimodal clinical content.',
    ],
  },
];

const ProgrammingSection = ({ isVisible }: SectionProps) => (
  <section
    id="programming"
    className={`mb-16 transition-opacity duration-700 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}
  >
    <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">
      Medical Informatics &amp; Software Development
    </h2>
    <p className="text-sm text-gray-600 font-light mb-6">
      Purpose-built tools that merge clinical workflow insight with modern app development,
      emphasizing secure, offline-capable designs and transparent AI/ML integrations when appropriate.
    </p>
    <div className="space-y-6">
      {projects.map((project) => (
        <article
          key={project.title}
          className="bg-gray-50 border border-gray-100 rounded-lg p-5 shadow-sm"
        >
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
            <h3 className="text-base font-medium text-gray-900">{project.title}</h3>
            <p className="text-xs uppercase tracking-wide text-gray-500">
              {project.role}
            </p>
          </div>
          <p className="text-sm text-gray-600 font-light mb-3">{project.summary}</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 font-light">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default ProgrammingSection;
