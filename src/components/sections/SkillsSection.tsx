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
              <span className="text-sm text-gray-600 font-light">Microsoft Access</span>
              <span className="text-sm text-gray-600 font-light">IRB submission & amendments</span>
              <span className="text-sm text-gray-600 font-light">SwiftUI</span>
              <span className="text-sm text-gray-600 font-light">Xcode</span>
              <span className="text-sm text-gray-600 font-light">HTML</span>
              <span className="text-sm text-gray-600 font-light">Java (familiarity)</span>
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
              <li>
                • Creative writing: Written and self-published science fiction and horror fiction stories, partnering with
                narrators who broadcast to wide online audiences.
              </li>
              <li>
                • Reading: Horror fiction (especially Stephen King) and existentialist philosophy including Sartre, Camus, and
                Epictetus.
              </li>
              <li>
                • Music production: Compose low-fidelity instrumentals using FL Studio and MIDI synthesizers.
              </li>
            </ul>
          </div>
        </section>
);

export default SkillsSection;
