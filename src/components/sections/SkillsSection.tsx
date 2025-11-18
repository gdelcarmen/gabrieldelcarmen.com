interface SectionProps {
  isVisible: boolean;
}

const skillGroups = [
  {
    title: 'Research & Data',
    items: [
      'STATA for clinical outcomes analysis',
      'IRB protocol drafting, submission, and amendment revision',
      'REDCap and Microsoft Access for database design and data capture',
    ],
  },
  {
    title: 'Programming & Informatics',
    items: [
      'Python for data analysis, NLP, and model evaluation',
      'SwiftUI and Xcode for iOS app development',
      'Basic web development (HTML/CSS/JavaScript)',
      'Familiarity with ML/LLM workflows',
    ],
  },
  {
    title: 'Clinical Systems',
    items: ['EPIC electronic health record'],
  },
  {
    title: 'Languages',
    items: ['English (native)', 'Spanish (conversational)'],
  },
];

const SkillsSection = ({ isVisible }: SectionProps) => (
  <section
    id="skills"
    className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
  >
    <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">Skills &amp; Interests</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      {skillGroups.map((group) => (
        <div key={group.title} className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">{group.title}</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 font-light">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="mb-8">
      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Professional Memberships</h3>
      <ul className="text-sm text-gray-600 font-light space-y-1">
        <li>• American College of Surgeons (2023 – Present)</li>
        <li>• American Medical Association (2020 – Present)</li>
        <li>• Texas Medical Association (2020 – Present)</li>
        <li>• Harris County Medical Society (2020 – Present)</li>
      </ul>
    </div>

    <div>
      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Interests</h3>
      <ul className="text-sm text-gray-600 font-light space-y-1">
        <li>• Creative writing: Self-published science fiction and horror fiction</li>
        <li>• Reading: Horror fiction and philosophical literature</li>
        <li>• Music production: Compositions using FL Studio and MIDI synthesizers</li>
      </ul>
    </div>
  </section>
);

export default SkillsSection;
