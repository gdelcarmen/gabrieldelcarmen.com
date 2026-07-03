interface SectionProps {
  isVisible: boolean;
}

const LicensureSection = ({ isVisible }: SectionProps) => (
  <section
    id="licensure"
    className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
  >
    <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">
      Licensure & Certifications
    </h2>
    <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600 font-light">
      <li><span className="font-medium text-gray-800">USMLE Step 3</span> – Passed January 2026</li>
      <li><span className="font-medium text-gray-800">New York State Unrestricted Medical License</span> – 43970</li>
      <li><span className="font-medium text-gray-800">USMLE Step 1</span> – Passed</li>
      <li><span className="font-medium text-gray-800">USMLE Step 2 CK</span> – Passed</li>
      <li><span className="font-medium text-gray-800">Basic Life Support</span> – Current</li>
      <li><span className="font-medium text-gray-800">Advanced Cardiovascular Life Support</span> – Current</li>
    </ul>
  </section>
);

export default LicensureSection;
