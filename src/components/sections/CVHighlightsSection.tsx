interface SectionProps {
  isVisible: boolean;
}

const highlights = [
  {
    label: 'Current position',
    value: 'Cancer Immunotherapy Research Fellow',
    detail: 'Surgery Branch, National Cancer Institute, NIH · July 2026 – Present',
  },
  {
    label: 'Surgical training',
    value: 'General Surgery Resident, PGY-2 completed',
    detail: 'Albany Medical Center · July 2024 – June 2026; research years underway',
  },
  {
    label: 'Research focus',
    value: 'Translational cancer immunotherapy and surgical oncology',
    detail: 'Cellular immunotherapy, outcomes science, clinical AI/ML, ethics, and health equity',
  },
  {
    label: 'Clinical credentials',
    value: 'NY unrestricted medical license; USMLE Step 3 passed',
    detail: 'License 43970; BLS and ACLS current',
  },
];

const CVHighlightsSection = ({ isVisible }: SectionProps) => (
  <section
    id="cv-highlights"
    className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
  >
    <div className="mb-6 flex flex-col gap-2 border-b border-gray-100 pb-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">Complete CV overview</p>
        <h2 className="mt-1 text-xl font-light text-gray-800">CV at a Glance</h2>
      </div>
      <p className="max-w-xl text-sm font-light leading-6 text-gray-600">
        Updated from the provided CV content, including current position, objectives, education,
        scholarship, conferences, research, software, work, leadership, skills, licensure, memberships, and interests.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {highlights.map((item) => (
        <article key={item.label} className="border-t border-gray-200 py-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">{item.label}</p>
          <h3 className="mt-2 text-base font-medium text-gray-900">{item.value}</h3>
          <p className="mt-2 text-sm font-light leading-6 text-gray-600">{item.detail}</p>
        </article>
      ))}
    </div>
  </section>
);

export default CVHighlightsSection;
