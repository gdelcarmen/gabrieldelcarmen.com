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
      I am an academic-minded general surgery resident focused on blending translational research, outcomes science, and
      compassionate surgical care. My work centers on creating equitable systems that elevate patient voices, whether by
      redesigning clinical trials for inclusivity, using natural language processing to surface disparities, or
      strengthening mentorship pathways for future surgeons.
    </p>
    <p className="text-gray-600 leading-relaxed font-light mt-3">
      Across every project I prioritize ethical reflection and responsible innovation—particularly in the integration of
      artificial intelligence. I am motivated by collaborative environments where rigorous science, patient advocacy, and
      thoughtful leadership move surgical oncology forward.
    </p>
  </section>
);

export default AboutSection;
