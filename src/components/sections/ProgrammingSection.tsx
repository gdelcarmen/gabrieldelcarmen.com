interface SectionProps { isVisible: boolean; }

const projects = [
  { title: 'SurgicAI LLC', role: 'Founder & Principal Architect — May 2025 – Present', summary: 'Physician-founded startup developing point-of-care tools for surgical practice.', highlights: ['Established a design standard that tools are built and validated to the evidentiary bar of clinical practice.', 'Portfolio spans institutional decision support, ambient clinical documentation, and point-of-care reference and tracking.', 'Serves as architect and specification lead while directing autonomous coding agents through implementation.'] },
  { title: 'MARCUS – Clinical Knowledge & Decision Platform', role: 'Creator, Architect, Principal Developer — May 2025 – Present', summary: 'Multi-tenant retrieval-augmented clinical knowledge platform for institution-specific guidelines, protocols, and reference material.', highlights: ['Architected hybrid retrieval with pgvector dense vector search, PostgreSQL full-text search, reciprocal-rank fusion, cross-encoder ranking, and semantic caching.', 'Engineered a Next.js and FastAPI monorepo with SSE streaming, role-based multi-tenant access control, and end-to-end suite testing.', 'Designed to answer clinicians’ natural-language questions at the point of care.'] },
  { title: 'Trauma Practice Management Guidelines', role: 'Creator & Developer — October 2025', summary: 'SwiftUI application centralizing Albany Medical Center trauma practice management guidelines into a searchable, offline-capable reference.', highlights: ['Designed for quick bedside retrieval with clear sectioning.', 'Built with SwiftUI and Xcode from institution-sourced practice management guidelines in collaboration with Dr. Kurt Edwards.'] },
  { title: 'DrainBow', role: 'Creator & Developer — July 2026', summary: 'Native iOS application that captures bedside photos of surgical drain output, performs on-device color detection, and logs output volume by drain.', highlights: ['Builds a rainbow visualization plotting drain-output color over time alongside volume entries.', 'Surfaces trend shifts for clinical monitoring.'] },
];

const ProgrammingSection = ({ isVisible }: SectionProps) => (
  <section id="programming" className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
    <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">Software & Clinical Artificial Intelligence Development</h2>
    <div className="space-y-6">
      {projects.map((project) => (
        <article key={project.title} className="bg-gray-50 border border-gray-100 rounded-lg p-5 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3"><h3 className="text-base font-medium text-gray-900">{project.title}</h3><p className="text-xs uppercase tracking-wide text-gray-500">{project.role}</p></div>
          <p className="text-sm text-gray-600 font-light mb-3">{project.summary}</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 font-light">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
        </article>
      ))}
    </div>
  </section>
);

export default ProgrammingSection;
