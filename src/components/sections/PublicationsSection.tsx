import Tooltip from '../Tooltip';

interface SectionProps {
  isVisible: boolean;
}

type PublicationItem = {
  id: string;
  citation: JSX.Element;
  details?: JSX.Element;
};

const originalPublications: PublicationItem[] = [
  {
    id: 'oara-2024',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>, Guthrie E, Levy D.{' '}
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/38365551/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          The Operating and Anesthetic Reference Assistant (OARA): A Fine-Tuned Large Language Model for Resident Teaching.
        </a>{' '}
        <em>American Journal of Surgery</em>. 2024 Aug 23.
      </>
    ),
    details: (
      <div>
        <p className="mb-2 text-sm text-gray-600">
          Developed and evaluated a domain-specific large language model to augment surgical and anesthesia resident education,
          demonstrating 65% accuracy across 150 scenario-based queries.
        </p>
        <ul className="list-disc pl-4 text-xs text-gray-500 space-y-1">
          <li>Fine-tuned a 7B-parameter foundation model on 266,000+ lines of curated operative and anesthetic content.</li>
          <li>Benchmarked performance on procedural planning, intraoperative decision-making, and anesthetic calculations.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'case-files-hematology',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>. Disseminated Intravascular Coagulopathy. In: Toy EC, Toy AL, eds.{' '}
        <em>Case Files Hematology Body System</em>. New York: McGraw Hill Publishers. In Press.
      </>
    ),
    details: (
      <div>
        <p className="text-sm text-gray-600">
          Contributed a case-based chapter detailing the pathophysiology, diagnostic criteria, and management strategies for DIC
          within McGraw Hill&apos;s flagship Case Files series.
        </p>
      </div>
    ),
  },
  {
    id: 'lynch-surveillance-2023',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>, Reyes-Uribe L, Goyco D, Evans K, Kinnison J, Sepeda V, Weber D, Moskowitz J,
        Mork M, Taggart M, Thirumurthi S, Rodriguez-Bigas M, Lynch P, You YN, Vilar E. Colorectal Cancer Surveillance Outcomes
        from an Institutional Longitudinal Cohort of Lynch Syndrome Patients. <em>Frontiers in Oncology</em>. 2023 Apr 11.
      </>
    ),
    details: (
      <div>
        <p className="text-sm text-gray-600">
          An institutional cohort analysis evaluating colorectal cancer surveillance outcomes for patients with Lynch Syndrome,
          linking mismatch repair mutations to interval cancer risk.
        </p>
      </div>
    ),
  },
  {
    id: 'to-choose-the-self-2023',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span> (2023).{' '}
        <a
          href="https://humanties.me/2023/03/22/to-choose-the-self/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          To Choose the Self.
        </a>{' '}
        <em>Human Ties Digest</em>. 2023 Mar 22.
      </>
    ),
    details: (
      <div>
        <p className="text-sm text-gray-600">
          Reflective narrative examining the interplay between self-compassion and clinical duty within medical training.
        </p>
      </div>
    ),
  },
  {
    id: 'reflections-trauma-2022',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span> (2022).{' '}
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/36445067/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          Reflections from a Trauma Bay.
        </a>{' '}
        <em>Academic Emergency Medicine</em>. 2022 Nov 29. doi: 10.1111/acem.14634.
      </>
    ),
  },
  {
    id: 'hope-covid-2022',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span> (2022).{' '}
        <a
          href="https://humanties.me/2022/01/14/hope-in-the-time-of-covid/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          Hope in the Time of Covid.
        </a>{' '}
        <em>Human Ties Digest</em>. 2022 Jan 14.
      </>
    ),
  },
  {
    id: 'immigration-colon-cancer-2021',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>, et al.{' '}
        <a
          href="https://doi.org/10.1016/j.jss.2021.06.005"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          The Paradoxical Protective Effect of Immigration on Colon Cancer Survivals.
        </a>{' '}
        <em>Journal of Surgical Research</em>. 2021 Jan 6.
      </>
    ),
  },
  {
    id: 'iabp-2020',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>, Axtell A, Chang D, Melnitchouk S, Sundt TM 3rd, Fiedler AG.{' '}
        <a
          href="https://doi.org/10.1186/s13019-020-01259-z"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          Intra-aortic balloon pump placement in coronary artery bypass grafting patients by day of admission.
        </a>{' '}
        <em>Journal of Cardiothoracic Surgery</em>. 2020 Aug 14;15(1):219.
      </>
    ),
  },
  {
    id: 'vte-pancreatectomy-2020',
    citation: (
      <>
        Fong ZV, Sell NM, Fernandez-Del Castillo C, <span className="font-medium">Del Carmen GA</span>, Ferrone CR, Chang DC, Warshaw AL,
        Polk HC Jr, Lillemoe KD, Qadan M.{' '}
        <a
          href="https://doi.org/10.1016/j.hpb.2019.10.2437"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          Does preoperative pharmacologic prophylaxis reduce the rate of venous thromboembolism in pancreatectomy patients?
        </a>{' '}
        <em>HPB (Oxford)</em>. 2020 Jul;22(7):1020-1024.
      </>
    ),
  },
  {
    id: 'cesarean-weekday-2020',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>, Stapleton S, Qadan M, Del Carmen MG, Chang D.{' '}
        <a
          href="https://doi.org/10.1016/j.jss.2019.07.027"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          Does the Day of the Week Predict a Cesarean Section? A Statewide Analysis.
        </a>{' '}
        <em>Journal of Surgical Research</em>. 2020 Jan;245:288-294.
      </>
    ),
  },
  {
    id: 'mental-health-issue-2017',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span> (2017).{' '}
        <a
          href="https://www.amazon.com/Mental-Health-Issue-Why-Matters/dp/1521327793"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          The Mental Health Issue: And Why It Matters.
        </a>{' '}
        Independently Published. ISBN: 1521327793.
      </>
    ),
  },
];

const manuscriptsInProgress: PublicationItem[] = [
  {
    id: 'moral-status-2025',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>. A Property-Based Framework for Evaluating the Onset of Moral Status.{' '}
        <em>Bioethics</em>. Submitted October 2025.
      </>
    ),
  },
  {
    id: 'translation-neurology-2025',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>, Alonzo BR, Cruz G. Bridging the Communication Gap: An Analysis of Google
        Translate and GPT-4o in English to Spanish Translation in Neurology. <em>Patient Education and Counseling</em>. Submitted
        February 2025.
      </>
    ),
  },
  {
    id: 'immunological-landscape-2025',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>, Schmit S, Vilar E. A Review of the Immunological Landscape for Pre-Cancerous
        Colorectal Lesions. Manuscript in progress.
      </>
    ),
  },
  {
    id: 'bariatric-reddit-2025',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>, Patel D, Zaman JA. Pre-Operative Concerns and Post-Operative Satisfaction:
        Comparing Attitudes Towards Bariatric Surgery and Medication Intervention for Weight Loss on Reddit. Manuscript in
        progress.
      </>
    ),
  },
];

const oralPresentations: PublicationItem[] = [
  {
    id: 'asc-2025-ai-ethics',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>. Defining AI&apos;s Role in Medical Ethics: Fine-Tuning Language Models to Enhance
        Surgical Decision-Making. <em>Annual Academic Surgical Congress</em>. 22nd Annual Conference; 2025 Feb 12; Las Vegas, NV.
      </>
    ),
  },
  {
    id: 'asc-2025-goals-of-care',
    citation: (
      <>
        Menon SJ, Mertz G, <span className="font-medium">Del Carmen GA</span>. Simulating Goals of Care Discussions with Language Models:
        Artificial Intelligence as an Adjunct to Physician Skill Training. <em>Annual Academic Surgical Congress</em>. 21st Annual
        Conference; 2025 Feb 12; Las Vegas, NV.
      </>
    ),
  },
  {
    id: 'asc-2025-linguistic',
    citation: (
      <>
        Mertz G, Menon SJ, Krzesaj PK, <span className="font-medium">Del Carmen GA</span>. Linguistic Characteristics of Simulated Goals of
        Care Discussions and Implications for Residency Training. <em>Annual Academic Surgical Congress</em>. 20th Annual
        Conference; 2025 Feb 12; Las Vegas, NV.
      </>
    ),
  },
  {
    id: 'asc-2024-whipple',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>, Chang DC. Reimagining Surgical Patient Materials: Natural Language Processing of
        Online Education for Whipple Procedures. <em>Annual Academic Surgical Congress</em>. 19th Annual Conference; 2024 Feb 8;
        Washington, D.C.
      </>
    ),
  },
  {
    id: 'asc-2023-ethics',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>. Natural Language Processing as a Tool for Ethical Consensus Analysis in Organ
        Transplant Allocation. <em>Annual Academic Surgical Congress</em>. 18th Annual Conference; 2023 Feb 8; Houston, TX.
      </>
    ),
  },
  {
    id: 'asc-2020-ethics',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>, et al. What is the Prevalent Ethical Recommendation in the Medical Literature? An
        Algorithmic Approach. <em>Annual Academic Surgical Congress</em>. 15th Annual Conference; 2020 Feb 3-6; Orlando, FL.
      </>
    ),
  },
  {
    id: 'asc-2019-cesarean',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>, et al. Does the Day of the Week Predict a Cesarean Section? A Statewide Analysis.
        <em>Annual Academic Surgical Congress</em>. 14th Annual Conference; 2019 Feb 5-7; Houston, TX.
      </>
    ),
  },
  {
    id: 'asc-2019-iabp',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>, et al. Pre-Op IABP Placement Rates in Coronary Artery Bypass Grafting Patients by Day of
        Admission. <em>Annual Academic Surgical Congress</em>. 14th Annual Conference; 2019 Feb 5-7; Houston, TX.
      </>
    ),
  },
];

const oralUnderReview: PublicationItem[] = [
  {
    id: 'asc-2026-computer-vision',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>, Chen C, Shahbazov R. Benchmarking Robust Computer Vision Models: GPT&apos;s Vision
        Capabilities in Radiological Interpretation of Chest X-Rays with Zero-Shot, One-Shot, and Few-Shot Learning. <em>Annual
        Academic Surgical Congress</em>. 23rd Annual Conference. Accepted.
      </>
    ),
  },
  {
    id: 'asc-2026-implicit-bias',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>, Mohanraj D, John M, Malcom M, McKay S, Marrin A, Singh TP. Assessing Implicit Bias in the
        Clinical Decision-Making of Large Language Models. <em>Annual Academic Surgical Congress</em>. 23rd Annual Conference.
        Accepted.
      </>
    ),
  },
  {
    id: 'sages-2026-bariatric',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>, Mohanraj D, John M, Malcom M, McKay S, Marrin A, Zaman JA. Pre-Operative Concerns and
        Post-Operative Satisfaction: Comparing Attitudes Towards Bariatric Surgery and Medication Intervention for Weight Loss
        on Reddit. <em>Society of American Gastrointestinal and Endoscopic Surgeons</em>. SAGES 2026. Under review.
      </>
    ),
  },
  {
    id: 'sages-2026-marcus',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>, Shukla D, Zaman J. Multimodal Agentic Retrieval for Clinical Utility and Synthesis (MARCUS):
        A Retrieval Augmented Generation System for Residency Information Centralization. <em>SAGES Emerging Technology 2026</em>.
        Pending submission.
      </>
    ),
  },
];

const posterPresentations: PublicationItem[] = [
  {
    id: 'bcm-2023-whipple',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>. Using Natural Language Processing for Analysis of Readability, Sentiment, and Subjectivity of
        Online Patient Education Materials for Whipple Surgery. <em>Baylor College of Medicine Health Equity Research Summit</em>.
        16 May 2023; Houston, TX.
      </>
    ),
  },
  {
    id: 'bcm-2023-casp',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>, McCleary-Gaddy A. Tackling Scientific Racism: Modifying the Critical Appraisal Skills Programme
        (CASP) Checklist to Advance Health Equity. <em>Baylor College of Medicine Health Equity Research Summit</em>. 16 May 2023;
        Houston, TX.
      </>
    ),
  },
  {
    id: 'lmsa-2023-ethics',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>. Natural Language Processing as a Tool for Ethical Consensus Analysis in Organ Transplant
        Allocation. <em>Latino Medical Student Association National Conference</em>. 4 Feb 2023; Fort Worth, TX.
      </>
    ),
  },
  {
    id: 'apa-2023-psychosis',
    citation: (
      <>
        Burden J, <span className="font-medium">Del Carmen GA</span>, et al. Food and Drug Therapy – High-Dose Olanzapine and Family-Centered Exposure
        Intervention for Complicated and Refractory Psychosis in an Adolescent Male. <em>American Psychiatric Association Annual
        Meeting</em>. 20-24 May 2023; San Francisco, CA.
      </>
    ),
  },
  {
    id: 'asts-2023-living-donor',
    citation: (
      <>
        Menser T, Kolman J, Baek J, Taylor A, <span className="font-medium">Del Carmen GA</span>, Hobeika M. A Broad Review of Living Donor Kidney
        Transplantation Interventions Among Racial and Ethnic Minority Populations. <em>American Society of Transplant Surgeons
        Winter Symposium</em>. 12-15 Jan 2023; Miami, FL.
      </>
    ),
  },
  {
    id: 'mdanderson-2021-lynch',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>, et al. Impact of Hispanic Ethnicity on Colorectal Cancer Surveillance Outcomes and Management in
        an Institutional Longitudinal Cohort of Lynch Syndrome Patients. <em>MD Anderson Summer Experience</em>. 30 Jul 2021;
        Houston, TX.
      </>
    ),
  },
  {
    id: 'harvard-2019-pancreatectomy',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>, et al. Does Preoperative Pharmacologic Prophylaxis Reduce the Rate of Venous Thromboembolism in
        Pancreatectomy Patients? <em>Harvard Surgery Research Day</em>. 9 Mar 2019; Boston, MA.
      </>
    ),
  },
  {
    id: 'mgh-2018-cesarean',
    citation: (
      <>
        <span className="font-medium">Del Carmen GA</span>, et al. Does the Day of the Week Predict a Cesarean Section? A Statewide Analysis. <em>Massachusetts
        General Hospital Clinical Research Day</em>. 4 Oct 2018; Boston, MA.
      </>
    ),
  },
];

const academicConferences: PublicationItem[] = [
  {
    id: 'asc-2025',
    citation: (
      <>
        <span className="font-medium">20th Annual Academic Surgical Congress</span> — February 2025. Accepted submissions included Defining AI&apos;s Role in
        Medical Ethics, Simulating Goals of Care Discussions with Language Models, and Linguistic Characteristics of Simulated
        Goals of Care Discussions.
      </>
    ),
  },
  {
    id: 'asc-2024',
    citation: (
      <>
        <span className="font-medium">19th Annual Academic Surgical Congress</span> — February 2024. Accepted submission: Reimagining Surgical Patient
        Materials: Natural Language Processing of Online Education for Whipple Procedures.
      </>
    ),
  },
  {
    id: 'asc-2023',
    citation: (
      <>
        <span className="font-medium">18th Annual Academic Surgical Congress</span> — February 2023. Accepted submission: Natural Language Processing as a
        Tool for Ethical Consensus Analysis in Organ Transplant Allocation.
      </>
    ),
  },
  {
    id: 'asc-2020',
    citation: (
      <>
        <span className="font-medium">15th Annual Academic Surgical Congress</span> — February 2020. Accepted submission: What is the Prevalent Ethical
        Recommendation in the Medical Literature? An Algorithmic Approach.
      </>
    ),
  },
  {
    id: 'asc-2019',
    citation: (
      <>
        <span className="font-medium">14th Annual Academic Surgical Congress</span> — February 2019. Accepted submissions: Does the Day of the Week Predict a
        Cesarean Section? and Pre-Op IABP Placement Rates in Coronary Artery Bypass Grafting Patients by Day of Admission.
      </>
    ),
  },
  {
    id: 'philosophy-2018',
    citation: (
      <>
        <span className="font-medium">Undergraduate Philosophy Conferences (2018)</span> — North Shore Undergraduate Philosophy Conference, Pacific University,
        Boston-Area Undergraduate Philosophy Conference at Emmanuel College, 7th Annual CUNY Undergraduate Philosophy Conference,
        and the Joint Meeting of the South Carolina and North Carolina Philosophical Societies. Presented analyses on identity,
        causality, and time travel.
      </>
    ),
  },
  {
    id: 'pacific-2017',
    citation: (
      <>
        <span className="font-medium">Pacific University Undergraduate Philosophy Conference</span> — April 2017. Presented &ldquo;A Multiple Causal Model of
        Identity – A Critique of Parfit.&rdquo;
      </>
    ),
  },
];

const renderPublicationList = (items: PublicationItem[]) => (
  <ul className="space-y-4 text-sm text-gray-600 font-light">
    {items.map((item) =>
      item.details ? (
        <Tooltip key={item.id} content={item.details} position="bottom" width="max-w-md">
          <li className="cursor-help">{item.citation}</li>
        </Tooltip>
      ) : (
        <li key={item.id}>{item.citation}</li>
      )
    )}
  </ul>
);

const PublicationsSection = ({ isVisible }: SectionProps) => (
  <section
    id="publications"
    className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
  >
    <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">
      Publications & Scholarly Activity
      <span className="ml-2 text-xs text-gray-400 font-light inline-flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Hover for details
      </span>
    </h2>

    <div className="space-y-10">
      <div>
        <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Original Publications & Book Chapters</h3>
        {renderPublicationList(originalPublications)}
      </div>

      <div>
        <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Manuscripts In Progress or Under Review</h3>
        {renderPublicationList(manuscriptsInProgress)}
      </div>

      <div>
        <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Abstracts Accepted for Oral Presentation</h3>
        {renderPublicationList(oralPresentations)}
      </div>

      <div>
        <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Abstracts Under Consideration</h3>
        {renderPublicationList(oralUnderReview)}
      </div>

      <div>
        <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Abstracts Accepted for Poster Presentation</h3>
        {renderPublicationList(posterPresentations)}
      </div>

      <div>
        <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Academic Conferences</h3>
        {renderPublicationList(academicConferences)}
      </div>
    </div>
  </section>
);

export default PublicationsSection;
