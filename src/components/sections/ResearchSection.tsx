interface SectionProps {
  isVisible: boolean;
}

const ResearchSection = ({ isVisible }: SectionProps) => (
  <section
          id="research"
          className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">Research Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-base font-medium text-gray-900">Vilar Lab, MD Anderson Cancer Center</h3>
              <p className="text-sm text-gray-500 mt-1">Research Associate | 2021 – 2024</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Performed research on inherited colorectal cancer syndromes</li>
                <li>• Analyzed DNA mismatch repair mutations in a Lynch Syndrome patient cohort</li>
                <li>• Conducted comprehensive scoping review on immunological research in colorectal cancer</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900">Transplant in Outcomes Research, Mayo Clinic – Jacksonville</h3>
              <p className="text-sm text-gray-500 mt-1">Research Associate | 2021 – Present</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Investigated racial and ethnic disparities in living donor kidney transplantation access</li>
                <li>• Communicated research findings through abstracts, posters, and manuscripts</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900">Internal Medicine Lab (Haas Lab), Mass General Hospital</h3>
              <p className="text-sm text-gray-500 mt-1">Research Assistant | 2019 – 2020</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Focused on cervical cancer screening pathways and identifying points of care breakdown</li>
                <li>• Conducted qualitative/quantitative stakeholder analyses (pathologists, primary care physicians)</li>
                <li>• Performed large-scale chart reviews to inform pathway optimization</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900">Codman Center for Clinical Effectiveness, Mass General Hospital</h3>
              <p className="text-sm text-gray-500 mt-1">Research Assistant | 2017 – 2019</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Applied statistical techniques using STATA to analyze statewide datasets</li>
                <li>• Authored research manuscripts for medical and academic journals</li>
              </ul>
            </div>
          </div>
        </section>
);

export default ResearchSection;
