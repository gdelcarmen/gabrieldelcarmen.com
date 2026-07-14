interface SectionProps {
  isVisible: boolean;
}

const positions = [
  {
    title: 'Cancer Immunotherapy Research Fellow',
    institution: 'Surgery Branch, National Cancer Institute, National Institutes of Health',
    dates: 'July 2026 – Present',
    location: 'Bethesda, MD',
  },
  {
    title: 'General Surgery Resident, Completion of Post-Graduate Year 2',
    institution: 'Department of Surgery, Albany Medical Center',
    dates: 'July 2024 – June 2026; pending completion of research years',
    location: 'Albany, NY',
  },
];

const objectives = [
  'General surgeon-scientist training at the National Cancer Institute Surgery Branch with a focus on translational cancer immunotherapy, bridging bench-to-bedside translation of cellular immunotherapy, and building toward an academic surgical oncology practice integrating outcomes science and translational research.',
  'Physician-builder of clinical machine learning software systems working from foundational research through design, validation, and deployment of applied clinical tools that meet the evidentiary standards of clinical practice.',
];

const CurrentPositionSection = ({ isVisible }: SectionProps) => (
  <section
    id="current-position"
    className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
  >
    <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">Current Position & Objectives</h2>
    <div className="grid gap-4 md:grid-cols-2">
      {positions.map((position) => (
        <article key={position.title} className="border-t border-gray-200 py-4">
          <h3 className="text-base font-medium text-gray-900">{position.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{position.institution}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-gray-500">{position.dates}</p>
          <p className="mt-1 text-sm text-gray-500">{position.location}</p>
        </article>
      ))}
    </div>
    <div className="mt-6 space-y-3 text-sm font-light leading-6 text-gray-600">
      {objectives.map((objective) => (
        <p key={objective}>{objective}</p>
      ))}
    </div>
  </section>
);

export default CurrentPositionSection;
