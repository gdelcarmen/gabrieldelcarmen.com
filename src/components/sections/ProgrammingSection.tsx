interface SectionProps {
  isVisible: boolean;
}

const projects = [
  {
    title: 'Trauma Practice Management Guidelines App',
    role: 'Creator & Developer — October 2025',
    summary:
      "Centralizes Albany Medical Center's trauma practice management guidelines into a single, searchable, offline-capable SwiftUI app for quick bedside retrieval.",
    highlights: [
      'Structured every guideline section for tap-through, on-device access to airway, transfusion, and procedure algorithms.',
      'Implements robust search, bookmarking, and recently-viewed states to speed up trauma bay decision-making.',
      'Built with SwiftUI, Xcode, and institution-sourced guidelines in partnership with Dr. Kurt Edwards.',
    ],
  },
  {
    title: 'DrainBow',
    role: 'Creator & Developer — November 2025',
    summary:
      'iOS app that captures bedside photos of drain output, performs on-device color detection, and logs volume trends for each drain.',
    highlights: [
      'Automates RGB color capture to produce a “rainbow” visualization of drain color changes alongside volume logs.',
      'Stores structured, local-first data models that can be exported for team handoffs or registry upload.',
      'SwiftUI interface optimized for gloved, one-handed use with secure photo storage and PHI-free exports.',
    ],
  },
  {
    title: 'Multimodal Agentic Retrieval for Clinical Utility and Synthesis (MARCUS)',
    role: 'Concept Lead & Developer — 2024 – Present',
    summary:
      'Retrieval-augmented clinical assistant centralizing residency curricula, institutional policies, and service protocols in a single searchable interface.',
    highlights: [
      'Tenant-aware architecture enforces role-specific permissions across services and training levels.',
      'Pipelines emphasize citation fidelity, versioning, and audit logs for every synthesized response.',
      'Combines vector retrieval, structured metadata search, and lightweight agent workflows for multimodal content.',
    ],
  },
];

const ProgrammingSection = ({ isVisible }: SectionProps) => (
  <section
    id="programming"
    className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
  >
    <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">
      Medical Informatics &amp; Software Development
    </h2>
    <p className="text-sm text-gray-600 font-light mb-6">
      Purpose-built tools that merge clinical workflow insight with modern app development, emphasizing secure, offline-capable designs
      and transparent AI/ML integrations when appropriate.
    </p>
    <div className="space-y-6">
      {projects.map((project) => (
        <article key={project.title} className="bg-gray-50 border border-gray-100 rounded-lg p-5 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
            <h3 className="text-base font-medium text-gray-900">{project.title}</h3>
            <p className="text-xs uppercase tracking-wide text-gray-500">{project.role}</p>
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
