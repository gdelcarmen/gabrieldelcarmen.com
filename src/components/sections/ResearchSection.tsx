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
              <p className="text-sm text-gray-500 mt-1">Dr. Eduardo Vilar-Sanchez, MD PhD | June 2021 – June 2024 | Houston, TX</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Performed research on inherited colorectal cancer syndromes through hypothesis testing, data analysis, manuscript composition and revision on multi-site investigation</li>
                <li>• Analyzed DNA mismatch repair mutations in a Lynch Syndrome patient cohort to assess surveillance outcomes and inform clinical decision-making</li>
                <li>• Conducted comprehensive scoping review on the immunological research landscape of colorectal cancer syndromes to identify knowledge gaps and future directions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900">Transplant in Outcomes Research, Mayo Clinic – Jacksonville</h3>
              <p className="text-sm text-gray-500 mt-1">Dr. Terri Menser, PhD | June 2021 – July 2024 | Houston, TX</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Investigated racial and ethnic disparities in living donor kidney transplantation access through a systematic review, highlighting areas for improvement and mapping out prior interventions</li>
                <li>• Effectively communicated research findings by drafting and revising abstracts, posters, and manuscripts for journals and conferences</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900">Department of Internal Medicine, Mass General Hospital</h3>
              <p className="text-sm text-gray-500 mt-1">Dr. Jennifer Haas, MD | June 2019 – June 2020 | Boston, MA</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Contributed to multi-site investigation on cervical cancer screening guidelines and practices with a preeminent focus on data collection, data cleaning, statistical analysis, and multi-site organization</li>
                <li>• Collaborated closely with research teams at Massachusetts General Hospital, UT Southwestern, and Kaiser Permanente Washington to ensure smooth project execution</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900">Codman Center for Clinical Effectiveness, Mass General Hospital</h3>
              <p className="text-sm text-gray-500 mt-1">Dr. David Chang, PhD MPH MBA | June 2017 – May 2019 | Boston, MA</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Applied statistical techniques using STATA to analyze statewide datasets and measure clinical outcomes while controlling for a wide array of both clinical and non-clinical covariates</li>
                <li>• Authored, revised, and submitted original research manuscripts to medical and academic journals</li>
                <li>• Actively participated in biweekly lab meetings, sharing insights and fostering multi-specialty collaboration</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900">NEBH Hospital Research Assistant, New England Baptist Hospital</h3>
              <p className="text-sm text-gray-500 mt-1">Research Assistant | March 2018 – May 2019 | Boston, MA</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Transformed physical medical records into electronic health records using RedCap, streamlining data access and analysis</li>
                <li>• Developed a database to evaluate clinical outcomes for orthopedic patients over multiple years at a single institution</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900">Aging, Culture, and Cognition Laboratory, Brandeis University</h3>
              <p className="text-sm text-gray-500 mt-1">Dr. Angela Gutchess PhD | August 2016 – May 2019 | Waltham, MA</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Measured the relationship between the establishment of false memories and lying</li>
                <li>• Interviewed participants and interacted with patients to elicit required psychological data</li>
              </ul>
            </div>
          </div>
        </section>
);

export default ResearchSection;
