interface SectionProps {
  isVisible: boolean;
}

const originalPublications = [
  'Del Carmen GA, Guthrie E, Levy D. The Operating and Anesthetic Reference Assistant (OARA): A Fine-Tuned Large Language Model for Resident Teaching. American Journal of Surgery. 2024 Aug 23.',
  'Del Carmen GA. Disseminated Intravascular Coagulopathy. In: Toy EC, Toy AL, eds. Case Files Hematology Body System. Case Files Collection, New York: McGraw Hill Publishers, In Press.',
  'Del Carmen GA, Reyes-Uribe L, Goyco D, Evans K, Kinnison J, Sepeda V, Weber D, Moskowitz J, Mork M, Taggart M, Thirumurthi S, Rodriguez-Bigas M, Lynch P, You Y.N, Vilar E. Colorectal Cancer Surveillance Outcomes from an Institutional Longitudinal Cohort of Lynch Syndrome Patients. Frontiers in Oncology. 2023 Apr 11.',
  'Del Carmen GA (2023). To Choose the Self. Human Ties Digest. 2023 Mar 22.',
  'Del Carmen GA (2022). Reflections from a Trauma Bay. Academic Emergency Medicine. 2022 Nov 29. doi: 10.1111/acem.14634.',
  'Del Carmen GA (2022). Hope in the Time of Covid. Human Ties Digest. 2022 Jan 14.',
  'Del Carmen GA, et al. The Paradoxical Protective Effect of Immigration on Colon Cancer Survival. J Surg Res. 2021 Jan 6. doi: 10.1016/j.jss.2021.06.005.',
  'Del Carmen GA, Axtell A, Chang D, Melnitchouk S, Sundt TM 3rd, Fiedler AG. Intra-aortic balloon pump placement in coronary artery bypass grafting patients by day of admission. J Cardiothorac Surg. 2020 Aug 14;15(1):219. doi: 10.1186/s13019-020-01259-z. PMID: 32795363; PMCID: PMC7427863.',
  'Fong ZV, Sell NM, Fernandez-Del Castillo C, Del Carmen GA, Ferrone CR, Chang DC, Warshaw AL, Polk HC Jr, Lillemoe KD, Qadan M. Does preoperative pharmacologic prophylaxis reduce the rate of venous thromboembolism in pancreatectomy patients? HPB (Oxford). 2020 Jul;22(7):1020-1024. doi: 10.1016/j.hpn.2019.10.2437. Epub 2019 Nov 12. PMID: 31732463.',
  'Del Carmen GA, Stapleton S, Qadan M, Del Carmen MG, Chang D. Does the Day of the Week Predict a Cesarean Section? A Statewide Analysis. J Surg Res. 2020 Jan;245:288-294. doi: 10.1016/j.jss.2019.07.027. Epub 2019 Aug 14. PMID: 31421375.',
  'Del Carmen GA (2017). The Mental Health Issue: And Why It Matters. Independently Published. ISBN:1521327793.',
];

const manuscripts = [
  'Del Carmen GA. A Property-Based Framework for Evaluating the Onset of Moral Status. Bioethics. In Progress.',
  'Del Carmen GA, Alonzo BR, Cruz G. Bridging the Communication Gap: An Analysis of Google Translate and GPT-4o in English to Spanish Translation in Neurology. Patient Education and Counseling. Under Review.',
  'Del Carmen GA, Schmit S, Vilar E. A Review of the Immunological Landscape for Pre-Cancerous Colorectal Lesions. Cancer Prevention Research. Under Review.',
  'Del Carmen GA, Patel D, Zaman JA. Pre-Operative Concerns and Post-Operative Satisfaction: Comparing Attitudes Towards Bariatric Surgery and Medication Intervention for Weight Loss on Reddit. Surgical Endoscopy. Accepted, pending publication.',
];

const oralPresentations = [
  'Del Carmen GA, Patel D, Zaman J. Pre-Operative Concerns and Post-Operative Satisfaction: Comparing Attitudes Towards Bariatric Surgery and Medication Intervention for Weight Loss On Reddit. Society of American Gastrointestinal and Endoscopic Surgeons. SAGES 2026. 2026 March 26; Tampa, FL.',
  'Del Carmen GA, Mohanraj D, John M, Malcom M, McKay S, Marrin A, Singh TP. Assessing Implicit Bias in the Clinical Decision-Making of Large Language Models. Annual Academic Surgical Congress. 21st Annual Conference. 2026 Feb 5; Orlando, FL.',
  'Del Carmen GA, Chen C, Shahbazov R. Benchmarking Robust Computer Vision Models: GPT’s Vision Capabilities in Radiological Interpretation of Chest X-Rays with Zero-Shot, One-Shot, and Few-Shot Learning. Annual Academic Surgical Congress. 21st Annual Conference; 2026 Feb 4; Orlando, FL.',
  "Del Carmen GA. Defining AI's Role in Medical Ethics: Fine-Tuning Language Models to Enhance Surgical Decision-Making. Annual Academic Surgical Congress. 20th Annual Conference; 2025 Feb 12; Las Vegas, NV.",
  'Menon SJ, Mertz G, Del Carmen GA. Simulating Goals of Care Discussions with Language Models: Artificial Intelligence as an Adjunct to Physician Skill Training. Annual Academic Surgical Congress. 20th Annual Conference; 2025 Feb 12; Las Vegas, NV.',
  'Mertz G, Menon SJ, Krzesaj PK, Del Carmen GA. Linguistic Characteristics of Simulated Goals of Care Discussions and Implications for Residency Training. Annual Academic Surgical Congress. 20th Annual Conference; 2025 Feb 12; Las Vegas, NV.',
  'Del Carmen GA, Chang DC. Reimagining Surgical Patient Materials: Natural Language Processing of Online Education for Whipple Procedures. Annual Academic Surgical Congress. 19th Annual Conference; 2024 Feb 8; Washington D.C., USA.',
  'Del Carmen GA. Natural Language Processing as a Tool for Ethical Consensus Analysis in Organ Transplant Allocation. Annual Academic Surgical Congress. 18th Annual Conference; 2023 Feb 8; Houston, TX.',
  'Del Carmen GA, et al. What is the Prevalent Ethical Recommendation in the Medical Literature? An Algorithmic Approach. Annual Academic Surgical Congress. 15th Annual Conference; 2020 Feb 3-6; Orlando, FL.',
  'Del Carmen GA, et al. Does the Day of the Week Predict a Cesarean Section? A Statewide Analysis. Annual Academic Surgical Congress. 14th Annual Conference; 2019 Feb 5-7; Houston, TX.',
  'Del Carmen GA, et al. Pre-Op IABP Placement Rates in Coronary Artery Bypass Grafting Patients by Day of Admission. Annual Academic Surgical Congress. 14th Annual Conference; 2019 Feb 5-7; Houston, TX.',
];

const posters = [
  'Del Carmen G.A. Using Natural Language Processing for Analysis of Readability, Sentiment, and Subjectivity of Online Patient Education Materials for Whipple Surgery. Baylor College of Medicine. 2023 Health Equity Research Summit. 16 May 2023; Houston, TX.',
  'Del Carmen G.A., McCleary-Gaddy A. Tackling Scientific Racism: Modifying the Critical Appraisal Skills Programme (CASP) Checklist to Advance Health Equity. Baylor College of Medicine. 2023 Health Equity Research Summit. 16 May 2023; Houston, TX.',
  'Del Carmen GA. Natural Language Processing as a Tool for Ethical Consensus Analysis in Organ Transplant Allocation. Latino Medical Student Association. 11th Annual Conference; 2023 Feb 4; Fort Worth, TX.',
  'Burden J, Del Carmen GA, et al. Food and Drug Therapy – High-Dose Olanzapine and Family-Centered Exposure Intervention for Complicated and Refractory Psychosis in an Adolescent Male. American Psychiatric Association. 2023 Annual Meeting; 2023 May 20-24; San Francisco, CA.',
  'Menser T, Kolman J, Baek J, Taylor A, Del Carmen GA, Hobeika M. A Broad Review of Living Donor Kidney Transplantation Interventions Among Racial and Ethnic Minority Populations. American Society of Transplant Surgeons. 2023 Winter Symposium; 2023 January 12-15; Miami, FL.',
  'Del Carmen GA, et al. Impact of Hispanic Ethnicity on Colorectal Cancer Surveillance Outcomes and Management in an Institutional Longitudinal Cohort of Lynch Syndrome Patients. MD Anderson Summer Experience; 2021 July 30; Houston, TX.',
  'Del Carmen GA, et al. Does Preoperative Pharmacologic Prophylaxis Reduce the Rate of Venous Thromboembolism in Pancreatectomy Patients? 8th Annual Harvard Surgery Research Day; 2019 Mar 9; Boston, MA.',
  'Del Carmen GA, et al. Does the Day of the Week Predict a Cesarean Section? A Statewide Analysis. Massachusetts General Hospital Clinical Research Day. 16th Annual Conference at Massachusetts General Hospital. 2018 Oct 4; Boston, MA.',
];

const renderList = (items: string[]) => (
  <ol className="space-y-3 text-sm text-gray-600 font-light list-decimal pl-5">
    {items.map((item) => <li key={item}>{item}</li>)}
  </ol>
);

const PublicationsSection = ({ isVisible }: SectionProps) => (
  <section id="publications" className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
    <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">Publications & Presentations</h2>
    <div className="space-y-10">
      <div><h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Original Publications</h3>{renderList(originalPublications)}</div>
      <div><h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Manuscripts Currently in Progress or Considered for Publication</h3>{renderList(manuscripts)}</div>
      <div><h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Abstracts Accepted for Oral Presentation</h3>{renderList(oralPresentations)}</div>
      <div><h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Abstracts Under Consideration for Oral Presentation</h3><p className="text-sm text-gray-600 font-light">None at present.</p></div>
      <div><h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Abstracts Accepted for Poster Presentation</h3>{renderList(posters)}</div>
    </div>
  </section>
);

export default PublicationsSection;
