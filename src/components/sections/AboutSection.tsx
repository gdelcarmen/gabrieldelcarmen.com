interface SectionProps {
  isVisible: boolean;
}

const AboutSection = ({ isVisible }: SectionProps) => (
  <section
    id="about"
    className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
  >
    <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">About</h2>
    <p className="text-gray-600 leading-relaxed font-light">
      General surgery resident at Albany Medical Center pursuing a career in academic surgical oncology, with a focus on translational research, clinical trials, and surgical outcomes in colorectal and pancreatic disease. Committed to patient-centered care, ethical and evidence-based decision-making, and reducing disparities in health quality and access through leadership and education.
    </p>
  </section>
);

export default AboutSection;
