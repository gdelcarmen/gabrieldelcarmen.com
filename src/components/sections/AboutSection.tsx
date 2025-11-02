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
      I am a surgical resident deeply committed to advancing patient-centered care through surgical excellence and medical ethics, with a strong dedication to reducing disparities in healthcare quality and access. My interests include developing, refining, and promoting the responsible adoption of artificial intelligence tools to augment patient-centered care and improve clinical outcomes. Passionate about the ethical integration of AI in medicine, I aim to ensure these technologies enhance patient experiences without compromising humanistic care. My professional aspiration is to actively contribute to a collaborative, academically rigorous environment that prioritizes innovation, equitable healthcare, and continuous progress in surgery and medical education.
    </p>
  </section>
);

export default AboutSection;
