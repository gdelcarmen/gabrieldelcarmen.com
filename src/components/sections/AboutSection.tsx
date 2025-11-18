interface SectionProps {
  isVisible: boolean;
}

const AboutSection = ({ isVisible }: SectionProps) => (
  <section
    id="about"
    className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
  >
    <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">About</h2>
    <p className="text-gray-600 leading-relaxed font-light mb-4">
      General surgery resident at Albany Medical Center pursuing opportunities to prepare for a career in academic surgical oncology by building expertise in translational research, clinical trials, and clinical outcomes in the field. Seeking opportunities to foster comprehensive surgical skill development, cultivate leadership skills among future surgical leaders, and support initiatives in healthcare equity.
    </p>
    <p className="text-gray-600 leading-relaxed font-light">
      Eager to contribute my passion for patient-centered care, surgical and medical ethics, and commitment to reducing disparities in health quality and access within a collaborative, challenging, and academically rigorous environment.
    </p>
  </section>
);

export default AboutSection;
