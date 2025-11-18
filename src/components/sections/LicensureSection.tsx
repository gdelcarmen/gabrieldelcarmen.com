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
      <li>
        <span className="font-medium text-gray-800">New York Medical License</span> – Active (2024 – Present)
      </li>
      <li>
        <span className="font-medium text-gray-800">USMLE Step 1</span> – Passed
      </li>
      <li>
        <span className="font-medium text-gray-800">USMLE Step 2 CK</span> – Passed
      </li>
      <li>
        <span className="font-medium text-gray-800">USMLE Step 3</span> – Planned for 2025
      </li>
      <li>
        <span className="font-medium text-gray-800">Advanced Cardiovascular Life Support (ACLS)</span> – Expires October 2026
      </li>
      <li>
        <span className="font-medium text-gray-800">Basic Life Support (BLS)</span> – Expires October 2026
      </li>
      <li>
        <span className="font-medium text-gray-800">Advanced Trauma Life Support (ATLS)</span> – Expires April 2027
      </li>
    </ul>
  </section>
);

export default LicensureSection;
