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
              <h3 className="text-base font-medium text-gray-900">Vilar Lab, MD Anderson Cancer Center — Houston, TX</h3>
              <p className="text-sm text-gray-500 mt-1">Research Fellow | June 2021 – June 2024</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Advanced hypotheses on inherited colorectal cancer syndromes through multi-site collaboration.</li>
                <li>• Analyzed DNA mismatch repair mutations in a longitudinal Lynch Syndrome cohort to inform surveillance pathways.</li>
                <li>• Led a scoping review of the immunologic landscape of colorectal neoplasia to surface knowledge gaps.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900">Transplant in Outcomes Research, Mayo Clinic — Jacksonville, FL (Remote)</h3>
              <p className="text-sm text-gray-500 mt-1">Research Associate | June 2021 – July 2024</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Investigated racial and ethnic disparities in living donor kidney transplantation access via systematic review.</li>
                <li>• Drafted and refined abstracts, posters, and manuscripts communicating opportunities for equitable interventions.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900">Department of Internal Medicine, Massachusetts General Hospital — Boston, MA</h3>
              <p className="text-sm text-gray-500 mt-1">Clinical Research Assistant | June 2019 – June 2020</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Coordinated multi-site cervical cancer screening investigations across MGH, UT Southwestern, and Kaiser Permanente.</li>
                <li>• Led data collection, cleaning, and statistical analyses to harmonize screening pathways across institutions.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900">Codman Center for Clinical Effectiveness, Massachusetts General Hospital — Boston, MA</h3>
              <p className="text-sm text-gray-500 mt-1">Clinical Research Assistant | June 2017 – May 2019</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Applied STATA-based analytics on statewide datasets to evaluate cardiothoracic and obstetric outcomes.</li>
                <li>• Authored, revised, and submitted peer-reviewed manuscripts while facilitating cross-specialty collaboration.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900">New England Baptist Hospital — Boston, MA</h3>
              <p className="text-sm text-gray-500 mt-1">Research Assistant | March 2018 – May 2019</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Digitized longitudinal orthopedic records into REDCap to streamline institutional outcomes tracking.</li>
                <li>• Built databases enabling year-over-year quality improvement analysis for joint replacement patients.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900">Aging, Culture, and Cognition Laboratory, Brandeis University — Waltham, MA</h3>
              <p className="text-sm text-gray-500 mt-1">Undergraduate Researcher | August 2016 – May 2019</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Conducted interview-based studies examining memory formation, deception, and cultural context.</li>
                <li>• Facilitated participant engagement and data collection to support cross-cultural cognition research.</li>
              </ul>
            </div>
          </div>
        </section>
);

export default ResearchSection;
