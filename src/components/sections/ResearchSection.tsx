interface SectionProps { isVisible: boolean; }

const roles = [
  { title: 'Vilar Lab, MD Anderson Cancer Center', mentor: 'Dr. Eduardo Vilar-Sanchez, MD PhD', dates: 'June 2021 – June 2024', location: 'Houston, TX', bullets: ['Performed research on inherited colorectal cancer syndromes through hypothesis testing, data analysis, manuscript composition, and revision on multi-site investigation.', 'Analyzed DNA mismatch repair mutations in a Lynch Syndrome patient cohort to assess surveillance outcomes and inform clinical decision-making.', 'Conducted comprehensive scoping review on the immunological research landscape of colorectal cancer syndromes to identify knowledge gaps and future directions.'] },
  { title: 'Transplant in Outcomes Research, Mayo Clinic – Jacksonville', mentor: 'Dr. Terri Menser, PhD', dates: 'June 2021 – July 2024', location: 'Houston, TX', bullets: ['Investigated racial and ethnic disparities in living donor kidney transplantation access through systematic review.', 'Drafted and revised abstracts, posters, and manuscripts for journals and conferences.'] },
  { title: 'Department of Internal Medicine, Mass General Hospital', mentor: 'Jennifer Haas, MD', dates: 'June 2019 – June 2020', location: 'Boston, MA', bullets: ['Contributed to multi-site investigation on cervical cancer screening guidelines and practices with data collection, cleaning, statistical analysis, and organization.', 'Collaborated with teams at Massachusetts General Hospital, UT Southwestern, and Kaiser Permanente Washington.'] },
  { title: 'Codman Center for Clinical Effectiveness, Mass General Hospital', mentor: 'Dr. David Chang, PhD MPH MBA', dates: 'June 2017 – May 2019', location: 'Boston, MA', bullets: ['Applied STATA to analyze statewide datasets and measure clinical outcomes while controlling for clinical and non-clinical covariates.', 'Authored, revised, and submitted original research manuscripts.', 'Participated in biweekly lab meetings and multi-specialty collaboration.'] },
  { title: 'NEBH Hospital Research Assistant, New England Baptist Hospital', mentor: 'Research Assistant', dates: 'March 2018 – May 2019', location: 'Boston, MA', bullets: ['Transformed physical medical records into electronic health records using REDCap.', 'Developed a database to evaluate orthopedic clinical outcomes over multiple years.'] },
  { title: 'Aging, Culture, and Cognition Laboratory, Brandeis University', mentor: 'Dr. Angela Gutchess, PhD', dates: 'August 2016 – May 2019', location: 'Waltham, MA', bullets: ['Measured the relationship between false memory formation and lying.', 'Interviewed participants and elicited psychological data.'] },
];

const ResearchSection = ({ isVisible }: SectionProps) => (
  <section id="research" className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
    <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">Research Experience</h2>
    <div className="space-y-8">
      {roles.map((role) => (
        <article key={role.title}>
          <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <h3 className="text-base font-medium text-gray-900">{role.title}</h3>
            <p className="text-sm text-gray-500">{role.dates}</p>
          </div>
          <p className="text-sm text-gray-500 mt-1">{role.mentor} · {role.location}</p>
          <ul className="mt-2 text-sm text-gray-600 font-light space-y-1 list-disc pl-5">
            {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default ResearchSection;
