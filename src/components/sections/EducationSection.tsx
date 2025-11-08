interface SectionProps {
  isVisible: boolean;
}

const EducationSection = ({ isVisible }: SectionProps) => (
  <section
    id="education"
    className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
  >
    <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">Education</h2>
    <div className="space-y-8">
      <div>
        <h3 className="text-base font-medium text-gray-900">McGovern Medical School at UTHealth Houston — Houston, TX</h3>
        <p className="text-sm text-gray-500 mt-1">Doctor of Medicine | August 2020 – May 2024</p>
        <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
          <li>• Scholarly Concentration in Medical Humanities</li>
          <li>• Institute for Healthcare Improvement Basic Certificate in Quality and Safety</li>
        </ul>
      </div>
      <div>
        <h3 className="text-base font-medium text-gray-900">Brandeis University — Waltham, MA</h3>
        <p className="text-sm text-gray-500 mt-1">
          Bachelor of Science in Health: Science, Society, and Policy · Bachelor of Arts in Biology · Bachelor of Arts in
          Philosophy | August 2015 – May 2019
        </p>
        <p className="text-sm text-gray-600 mt-2 font-light">Graduated cum laude</p>
      </div>
    </div>
  </section>
);

export default EducationSection;
