import type { PlotDate } from './timeline';

export interface Presentation {
  id: string;
  kind: 'talk' | 'poster';
  authors: string;
  title: string;
  // Venue as cited in the list, and a shorter form for hover cards.
  venue: string;
  venueShort?: string;
  // Date as cited in the list, and as shown in hover cards.
  dateCited: string;
  dateLabel: string;
  location: string;
  date: PlotDate;
}

const asc = (edition: string) => `${edition} Annual Academic Surgical Congress`;

export const oralPresentations: Presentation[] = [
  {
    id: 'talk-1',
    kind: 'talk',
    authors: 'Del Carmen GA, Patel D, Zaman J',
    title:
      'Pre-Operative Concerns and Post-Operative Satisfaction: Comparing Attitudes Towards Bariatric Surgery and Medication Intervention for Weight Loss on Reddit',
    venue: 'Society of American Gastrointestinal and Endoscopic Surgeons, SAGES 2026',
    venueShort: 'SAGES 2026',
    dateCited: '2026 Mar 26',
    dateLabel: '26 Mar 2026',
    location: 'Tampa, FL',
    date: { iso: '2026-03-26', precision: 'day' },
  },
  {
    id: 'talk-2',
    kind: 'talk',
    authors: 'Del Carmen GA, Mohanraj D, John M, Malcom M, McKay S, Marrin A, Singh TP',
    title: 'Assessing Implicit Bias in the Clinical Decision-Making of Large Language Models',
    venue: asc('21st'),
    dateCited: '2026 Feb 5',
    dateLabel: '5 Feb 2026',
    location: 'Orlando, FL',
    date: { iso: '2026-02-05', precision: 'day' },
  },
  {
    id: 'talk-3',
    kind: 'talk',
    authors: 'Del Carmen GA, Chen C, Shahbazov R',
    title:
      'Benchmarking Robust Computer Vision Models: GPT’s Vision Capabilities in Radiological Interpretation of Chest X-Rays with Zero-Shot, One-Shot, and Few-Shot Learning',
    venue: asc('21st'),
    dateCited: '2026 Feb 4',
    dateLabel: '4 Feb 2026',
    location: 'Orlando, FL',
    date: { iso: '2026-02-04', precision: 'day' },
  },
  {
    id: 'talk-4',
    kind: 'talk',
    authors: 'Del Carmen GA',
    title:
      'Defining AI’s Role in Medical Ethics: Fine-Tuning Language Models to Enhance Surgical Decision-Making',
    venue: asc('20th'),
    dateCited: '2025 Feb 12',
    dateLabel: '12 Feb 2025',
    location: 'Las Vegas, NV',
    date: { iso: '2025-02-12', precision: 'day' },
  },
  {
    id: 'talk-5',
    kind: 'talk',
    authors: 'Menon SJ, Mertz G, Del Carmen GA',
    title:
      'Simulating Goals of Care Discussions with Language Models: Artificial Intelligence as an Adjunct to Physician Skill Training',
    venue: asc('20th'),
    dateCited: '2025 Feb 12',
    dateLabel: '12 Feb 2025',
    location: 'Las Vegas, NV',
    date: { iso: '2025-02-12', precision: 'day' },
  },
  {
    id: 'talk-6',
    kind: 'talk',
    authors: 'Mertz G, Menon SJ, Krzesaj PK, Del Carmen GA',
    title:
      'Linguistic Characteristics of Simulated Goals of Care Discussions and Implications for Residency Training',
    venue: asc('20th'),
    dateCited: '2025 Feb 12',
    dateLabel: '12 Feb 2025',
    location: 'Las Vegas, NV',
    date: { iso: '2025-02-12', precision: 'day' },
  },
  {
    id: 'talk-7',
    kind: 'talk',
    authors: 'Del Carmen GA, Chang DC',
    title:
      'Reimagining Surgical Patient Materials: Natural Language Processing of Online Education for Whipple Procedures',
    venue: asc('19th'),
    dateCited: '2024 Feb 8',
    dateLabel: '8 Feb 2024',
    location: 'Washington, DC',
    date: { iso: '2024-02-08', precision: 'day' },
  },
  {
    id: 'talk-8',
    kind: 'talk',
    authors: 'Del Carmen GA',
    title: 'Natural Language Processing as a Tool for Ethical Consensus Analysis in Organ Transplant Allocation',
    venue: asc('18th'),
    dateCited: '2023 Feb 8',
    dateLabel: '8 Feb 2023',
    location: 'Houston, TX',
    date: { iso: '2023-02-08', precision: 'day' },
  },
  {
    id: 'talk-9',
    kind: 'talk',
    authors: 'Del Carmen GA, et al.',
    title: 'What is the Prevalent Ethical Recommendation in the Medical Literature? An Algorithmic Approach',
    venue: asc('15th'),
    dateCited: '2020 Feb 3-6',
    dateLabel: 'Feb 2020',
    location: 'Orlando, FL',
    date: { iso: '2020-02-03', precision: 'day' },
  },
  {
    id: 'talk-10',
    kind: 'talk',
    authors: 'Del Carmen GA, et al.',
    title: 'Does the Day of the Week Predict a Cesarean Section? A Statewide Analysis',
    venue: asc('14th'),
    dateCited: '2019 Feb 5-7',
    dateLabel: 'Feb 2019',
    location: 'Houston, TX',
    date: { iso: '2019-02-05', precision: 'day' },
  },
  {
    id: 'talk-11',
    kind: 'talk',
    authors: 'Del Carmen GA, et al.',
    title: 'Pre-Op IABP Placement Rates in Coronary Artery Bypass Grafting Patients by Day of Admission',
    venue: asc('14th'),
    dateCited: '2019 Feb 5-7',
    dateLabel: 'Feb 2019',
    location: 'Houston, TX',
    date: { iso: '2019-02-05', precision: 'day' },
  },
];

export const posterPresentations: Presentation[] = [
  {
    id: 'poster-1',
    kind: 'poster',
    authors: 'Del Carmen GA',
    title:
      'Using Natural Language Processing for Analysis of Readability, Sentiment, and Subjectivity of Online Patient Education Materials for Whipple Surgery',
    venue: 'Baylor College of Medicine, 2023 Health Equity Research Summit',
    venueShort: 'Baylor College of Medicine Health Equity Research Summit',
    dateCited: '2023 May 16',
    dateLabel: '16 May 2023',
    location: 'Houston, TX',
    date: { iso: '2023-05-16', precision: 'day' },
  },
  {
    id: 'poster-2',
    kind: 'poster',
    authors: 'Del Carmen GA, McCleary-Gaddy A',
    title:
      'Tackling Scientific Racism: Modifying the Critical Appraisal Skills Programme (CASP) Checklist to Advance Health Equity',
    venue: 'Baylor College of Medicine, 2023 Health Equity Research Summit',
    venueShort: 'Baylor College of Medicine Health Equity Research Summit',
    dateCited: '2023 May 16',
    dateLabel: '16 May 2023',
    location: 'Houston, TX',
    date: { iso: '2023-05-16', precision: 'day' },
  },
  {
    id: 'poster-3',
    kind: 'poster',
    authors: 'Burden J, Del Carmen GA, et al.',
    title:
      'Food and Drug Therapy: High-Dose Olanzapine and Family-Centered Exposure Intervention for Complicated and Refractory Psychosis in an Adolescent Male',
    venue: 'American Psychiatric Association, 2023 Annual Meeting',
    venueShort: 'American Psychiatric Association Annual Meeting',
    dateCited: '2023 May 20-24',
    dateLabel: '20 May 2023',
    location: 'San Francisco, CA',
    date: { iso: '2023-05-20', precision: 'day' },
  },
  {
    id: 'poster-4',
    kind: 'poster',
    authors: 'Del Carmen GA',
    title: 'Natural Language Processing as a Tool for Ethical Consensus Analysis in Organ Transplant Allocation',
    venue: 'Latino Medical Student Association, 11th Annual Conference',
    dateCited: '2023 Feb 4',
    dateLabel: '4 Feb 2023',
    location: 'Fort Worth, TX',
    date: { iso: '2023-02-04', precision: 'day' },
  },
  {
    id: 'poster-5',
    kind: 'poster',
    authors: 'Menser T, Kolman J, Baek J, Taylor A, Del Carmen GA, Hobeika M',
    title:
      'A Broad Review of Living Donor Kidney Transplantation Interventions Among Racial and Ethnic Minority Populations',
    venue: 'American Society of Transplant Surgeons, 2023 Winter Symposium',
    venueShort: 'American Society of Transplant Surgeons Winter Symposium',
    dateCited: '2023 Jan 12-15',
    dateLabel: '12 Jan 2023',
    location: 'Miami, FL',
    date: { iso: '2023-01-12', precision: 'day' },
  },
  {
    id: 'poster-6',
    kind: 'poster',
    authors: 'Del Carmen GA, et al.',
    title:
      'Impact of Hispanic Ethnicity on Colorectal Cancer Surveillance Outcomes and Management in an Institutional Longitudinal Cohort of Lynch Syndrome Patients',
    venue: 'MD Anderson Summer Experience',
    dateCited: '2021 Jul 30',
    dateLabel: '30 Jul 2021',
    location: 'Houston, TX',
    date: { iso: '2021-07-30', precision: 'day' },
  },
  {
    id: 'poster-7',
    kind: 'poster',
    authors: 'Del Carmen GA, et al.',
    title:
      'Does Preoperative Pharmacologic Prophylaxis Reduce the Rate of Venous Thromboembolism in Pancreatectomy Patients?',
    venue: '8th Annual Harvard Surgery Research Day',
    dateCited: '2019 Mar 9',
    dateLabel: '9 Mar 2019',
    location: 'Boston, MA',
    date: { iso: '2019-03-09', precision: 'day' },
  },
  {
    id: 'poster-8',
    kind: 'poster',
    authors: 'Del Carmen GA, et al.',
    title: 'Does the Day of the Week Predict a Cesarean Section? A Statewide Analysis',
    venue: 'Massachusetts General Hospital Clinical Research Day, 16th Annual Conference',
    venueShort: 'Massachusetts General Hospital Clinical Research Day',
    dateCited: '2018 Oct 4',
    dateLabel: '4 Oct 2018',
    location: 'Boston, MA',
    date: { iso: '2018-10-04', precision: 'day' },
  },
];

export interface ConferencePaper {
  authors: string;
  title: string;
  venue: string;
  dateCited: string;
}

const parfit = 'A Multiple Causal Model of Identity: A Critique of Parfit';
const timeTravel = 'On the Logical Permissibility of Time Travel';

export const philosophyPapers: ConferencePaper[] = [
  {
    authors: 'Del Carmen GA',
    title: timeTravel,
    venue: '2018 North Shore Undergraduate Philosophy Conference',
    dateCited: '2018 Apr',
  },
  {
    authors: 'Del Carmen GA',
    title: timeTravel,
    venue: 'Pacific University’s 2018 Undergraduate Philosophy Conference',
    dateCited: '2018 Apr',
  },
  {
    authors: 'Del Carmen GA',
    title: parfit,
    venue: 'Boston-Area Undergraduate Philosophy Conference at Emmanuel College',
    dateCited: '2018 Apr',
  },
  {
    authors: 'Del Carmen GA',
    title: parfit,
    venue: '7th Annual CUNY Undergraduate Philosophy Conference',
    dateCited: '2018 Apr',
  },
  {
    authors: 'Del Carmen GA',
    title: parfit,
    venue:
      '2018 Joint Meeting of the South Carolina Society for Philosophy and the North Carolina Philosophical Society',
    dateCited: '2018 Mar',
  },
  {
    authors: 'Del Carmen GA',
    title: parfit,
    venue: 'Pacific University’s 2017 Undergraduate Philosophy Conference',
    dateCited: '2017 Apr',
  },
];
