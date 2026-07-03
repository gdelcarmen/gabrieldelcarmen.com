interface SectionProps {
  isVisible: boolean;
}

const conferences = [
  ['SAGES 2026 Annual Meeting', 'March 2026', 'Accepted Submission – Pre-Operative Concerns and Post-Operative Satisfaction: Comparing Attitudes Towards Bariatric Surgery and Medication Intervention for Weight Loss On Reddit'],
  ['21st Annual Academic Surgical Congress', 'February 2026', 'Accepted submissions – Assessing Implicit Bias in the Clinical Decision-Making of Large Language Models; Benchmarking Robust Computer Vision Models: GPT’s Vision Capabilities in Radiological Interpretation of Chest X-Rays with Zero-Shot, One-Shot, and Few-Shot Learning.'],
  ['20th Annual Academic Surgical Congress', 'February 2025', "Accepted submissions – Defining AI's Role in Medical Ethics: Fine-Tuning Language Models to Enhance Surgical Decision-Making; Simulating Goals of Care Discussions with Language Models; Linguistic Characteristics of Simulated Goals of Care Discussions and Implications for Residency Training."],
  ['19th Annual Academic Surgical Congress', 'February 2024', 'Accepted submission – Reimagining Surgical Patient Materials: Natural Language Processing of Online Education for Whipple Procedures.'],
  ['18th Annual Academic Surgical Congress', 'February 2023', 'Accepted submission – Natural Language Processing as a Tool for Ethical Consensus Analysis in Organ Transplant Allocation.'],
  ['15th Annual Academic Surgical Congress', 'February 2020', 'Accepted submission – What is the Prevalent Ethical Recommendation in the Medical Literature? An Algorithmic Approach.'],
  ['14th Annual Academic Surgical Congress', 'February 2019', 'Accepted submissions – Does the Day of the Week Predict a Cesarean Section? A Statewide Analysis; Pre-Op IABP Placement Rates in Coronary Artery Bypass Grafting Patients by Day of Admission.'],
  ['2018 North Shore Undergraduate Philosophy Conference', 'April 2018', 'Accepted submission – On the Logical Permissibility of Time Travel.'],
  ["Pacific University’s 2018 Undergraduate Philosophy Conference", 'April 2018', 'Accepted submission – On the Logical Permissibility of Time Travel.'],
  ['Boston-Area Undergraduate Philosophy Conference at Emmanuel College', 'April 2018', 'Accepted submission – A Multiple Causal Model of Identity – A Critique of Parfit.'],
  ['7th Annual CUNY Undergraduate Philosophy Conference', 'April 2018', 'Accepted submission – A Multiple Causal Model of Identity – A Critique of Parfit.'],
  ['2018 Joint Meeting of the South Carolina Society for Philosophy and the North Carolina Philosophical Society', 'March 2018', 'Accepted submission – A Multiple Causal Model of Identity – A Critique of Parfit.'],
  ["Pacific University’s 2017 Undergraduate Philosophy Conference", 'April 2017', 'Accepted submission – A Multiple Causal Model of Identity – A Critique of Parfit.'],
];

const ConferencesSection = ({ isVisible }: SectionProps) => (
  <section id="conferences" className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
    <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">Academic Conferences</h2>
    <div className="space-y-5">
      {conferences.map(([title, date, description]) => (
        <article key={`${title}-${date}`}>
          <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <h3 className="text-base font-medium text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
          <p className="mt-1 text-sm text-gray-600 font-light">{description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default ConferencesSection;
