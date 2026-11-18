// An entry in the main text whose name opens a card with the full detail.
export interface DetailedEntry {
  id: string;
  name: string;
  // Text that follows the name in the paragraph.
  summary: string;
  detailHeading: string;
  detail: string[];
  // Reference numbers cited at the end of the paragraph, and how to print them.
  cites?: number[];
  citeLabel?: string;
}

export const research: DetailedEntry[] = [
  {
    id: 'e-vilar',
    name: 'Vilar Lab, MD Anderson Cancer Center',
    summary:
      '(2021 to 2024; mentor Eduardo Vilar-Sanchez, MD PhD). Inherited colorectal cancer syndromes. Analyzed DNA mismatch repair mutations in a Lynch syndrome cohort to assess surveillance outcomes; scoping review of the immunological research landscape.',
    detailHeading: 'June 2021 to June 2024 · Houston, TX · Mentor: Eduardo Vilar-Sanchez, MD PhD',
    detail: [
      'Performed research on inherited colorectal cancer syndromes through hypothesis testing, data analysis, manuscript composition, and revision on multi-site investigation.',
      'Analyzed DNA mismatch repair mutations in a Lynch Syndrome patient cohort to assess surveillance outcomes and inform clinical decision-making.',
      'Conducted comprehensive scoping review on the immunological research landscape of colorectal cancer syndromes to identify knowledge gaps and future directions.',
    ],
    cites: [1, 5],
    citeLabel: '[1, 5]',
  },
  {
    id: 'e-mayo',
    name: 'Transplant Outcomes Research, Mayo Clinic Jacksonville',
    summary:
      '(2021 to 2024; mentor Terri Menser, PhD). Systematic review of racial and ethnic disparities in access to living donor kidney transplantation.',
    detailHeading: 'June 2021 to July 2024 · Houston, TX · Mentor: Terri Menser, PhD',
    detail: [
      'Investigated racial and ethnic disparities in living donor kidney transplantation access through systematic review.',
      'Drafted and revised abstracts, posters, and manuscripts for journals and conferences.',
    ],
  },
  {
    id: 'e-mgh-im',
    name: 'Department of Internal Medicine, Mass General Hospital',
    summary:
      '(2019 to 2020; mentor Jennifer Haas, MD). Multi-site investigation of cervical cancer screening guidelines and practices.',
    detailHeading: 'June 2019 to June 2020 · Boston, MA · Mentor: Jennifer Haas, MD',
    detail: [
      'Contributed to multi-site investigation on cervical cancer screening guidelines and practices with data collection, cleaning, statistical analysis, and organization.',
      'Collaborated with teams at Massachusetts General Hospital, UT Southwestern, and Kaiser Permanente Washington.',
    ],
  },
  {
    id: 'e-codman',
    name: 'Codman Center for Clinical Effectiveness, Mass General Hospital',
    summary:
      '(2017 to 2019; mentor David Chang, PhD MPH MBA). Statewide dataset analyses in STATA measuring clinical outcomes.',
    detailHeading: 'June 2017 to May 2019 · Boston, MA · Mentor: David Chang, PhD MPH MBA',
    detail: [
      'Applied STATA to analyze statewide datasets and measure clinical outcomes while controlling for clinical and non-clinical covariates.',
      'Authored, revised, and submitted original research manuscripts.',
      'Participated in biweekly lab meetings and multi-specialty collaboration.',
    ],
    cites: [10, 11, 12],
    citeLabel: '[10–12]',
  },
  {
    id: 'e-nebh',
    name: 'New England Baptist Hospital',
    summary: '(2018 to 2019). Built a REDCap database to evaluate orthopedic clinical outcomes over multiple years.',
    detailHeading: 'March 2018 to May 2019 · Boston, MA · Research Assistant',
    detail: [
      'Transformed physical medical records into electronic health records using REDCap.',
      'Developed a database to evaluate orthopedic clinical outcomes over multiple years.',
    ],
  },
  {
    id: 'e-accl',
    name: 'Aging, Culture, and Cognition Laboratory, Brandeis University',
    summary:
      '(2016 to 2019; mentor Angela Gutchess, PhD). The relationship between false memory formation and lying.',
    detailHeading: 'August 2016 to May 2019 · Waltham, MA · Mentor: Angela Gutchess, PhD',
    detail: [
      'Measured the relationship between false memory formation and lying.',
      'Interviewed participants and elicited psychological data.',
    ],
  },
];
