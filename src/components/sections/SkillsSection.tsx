interface SectionProps { isVisible: boolean; }

const skillGroups = [
  { title: 'Programming & Frameworks', items: ['Python', 'TypeScript/JavaScript', 'React/Next.js', 'FastAPI', 'SwiftUI/Xcode', 'Familiarity with Java, HTML, and CSS'] },
  { title: 'Data, ML & AI', items: ['Applied large language model engineering', 'Retrieval-augmented generation', 'Low-rank adaptation fine-tuning', 'Natural language processing', 'Topic modeling, sentiment, and subjectivity analysis', 'Computer vision', 'PostgreSQL/pgvector and vector retrieval'] },
  { title: 'Research & Clinical Informatics', items: ['STATA', 'REDCap', 'EPIC', 'IRB submission and amendment', 'Microsoft Access', 'PRISMA systematic-review methodology'] },
];

const memberships = ['Association for Academic Surgery (March 2026 – Present)', 'American College of Surgeons (May 2023 – Present)', 'American Medical Association (July 2020 – Present)', 'Texas Medical Association (July 2020 – Present)', 'Harris County Medical Society (July 2020 – Present)'];
const interests = ['Creative writing: self-published science fiction and horror fiction stories with independent narrators broadcasting stories online.', 'Reading: horror fiction, especially Stephen King; philosophical and existentialist literature, including Sartre, Camus, and Epictetus.', 'Music production: melodies and instrumental pieces using FL Studio and MIDI synthesizers, with a focus on low-fidelity compositions.'];

const SkillsSection = ({ isVisible }: SectionProps) => (
  <section id="skills" className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
    <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">Skills, Memberships & Interests</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">{skillGroups.map((group) => <div key={group.title} className="bg-gray-50 rounded-lg p-4"><h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">{group.title}</h3><ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 font-light">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div>
    <div className="mb-8"><h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Professional Memberships</h3><ul className="text-sm text-gray-600 font-light space-y-1 list-disc pl-5">{memberships.map((item) => <li key={item}>{item}</li>)}</ul></div>
    <div><h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Hobbies & Interests</h3><ul className="text-sm text-gray-600 font-light space-y-1 list-disc pl-5">{interests.map((item) => <li key={item}>{item}</li>)}</ul></div>
  </section>
);

export default SkillsSection;
