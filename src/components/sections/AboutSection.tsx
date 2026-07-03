interface SectionProps {
  isVisible: boolean;
}

const AboutSection = ({ isVisible }: SectionProps) => (
  <section
    id="about"
    className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
  >
    <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">About</h2>
    <div className="space-y-4 text-gray-600 leading-relaxed font-light">
      <p>
        Cancer immunotherapy research fellow at the National Cancer Institute Surgery Branch and general surgery resident
        following completion of PGY-2 at Albany Medical Center. Career focus centers on academic surgical oncology,
        translational cancer immunotherapy, cellular therapy, outcomes science, and bench-to-bedside clinical translation.
      </p>
      <p>
        Physician-builder of clinical machine learning software systems, spanning foundational research, design, validation,
        and deployment of applied clinical tools intended to meet the evidentiary standards of clinical practice.
      </p>
    </div>
  </section>
);

export default AboutSection;
