interface SectionProps {
  isVisible: boolean;
}

const SkillsSection = ({ isVisible }: SectionProps) => (
  <section 
          id="skills" 
          className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">Skills & Interests</h2>
          
          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Technical Skills</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <span className="text-sm text-gray-600 font-light">STATA</span>
              <span className="text-sm text-gray-600 font-light">RedCap</span>
              <span className="text-sm text-gray-600 font-light">EPIC</span>
              <span className="text-sm text-gray-600 font-light">Python</span>
              <span className="text-sm text-gray-600 font-light">Java</span>
              <span className="text-sm text-gray-600 font-light">HTML</span>
              <span className="text-sm text-gray-600 font-light">Microsoft Access</span>
              <span className="text-sm text-gray-600 font-light">IRB Submissions</span>
            </div>
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
              <li>• Creative writing: Written and self-published science fiction and horror fiction stories, with independent narrators broadcasting stories to wide audiences online</li>
              <li>• Reading: Fond of horror fiction, particularly Stephen King; among nonfiction, enjoy philosophical and existentialist literature, with an interest in works by Sartre, Camus, and Epictetus</li>
              <li>• Music production: Composes melodies and instrumental pieces using FL Studio and MIDI synthesizers, with a focus on low-fidelity compositions</li>
            </ul>
          </div>
        </section>
);

export default SkillsSection;
