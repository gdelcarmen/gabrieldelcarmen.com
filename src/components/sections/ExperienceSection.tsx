interface SectionProps {
  isVisible: boolean;
}

const ExperienceSection = ({ isVisible }: SectionProps) => (
  <section 
          id="experience" 
          className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">Leadership Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-base font-medium text-gray-900">Gold Humanism Honor Society, McGovern Medical School</h3>
              <p className="text-sm text-gray-500 mt-1">Internal Vice President | 2023 – 2024</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Served as student liaison between student body and honor society</li>
                <li>• Directed constitutional updates and revisions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base font-medium text-gray-900">Narrative Medicine and Reflection, McGovern Medical School</h3>
              <p className="text-sm text-gray-500 mt-1">Class Coordinator | 2023 – 2024</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Facilitated workshops on contemporary medical practice issues</li>
                <li>• Organized sessions and facilitated discussions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base font-medium text-gray-900">Wellness and Resilience Committee, McGovern Medical School</h3>
              <p className="text-sm text-gray-500 mt-1">Student Lead for Advocacy | 2021 – Present</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Addressed health and wellness-related concerns</li>
                <li>• Enhanced communication between students and counseling services</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base font-medium text-gray-900">Student Diversity Committee, McGovern Medical School</h3>
              <p className="text-sm text-gray-500 mt-1">Student Representative | 2020 – 2024</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Represented Class of 2024 on issues of inclusion and diversity</li>
                <li>• Mentored high school students on career paths in healthcare</li>
              </ul>
            </div>
          </div>
        </section>
);

export default ExperienceSection;
