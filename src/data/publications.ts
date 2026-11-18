import type { PlotDate } from './timeline';

// The author's own name as it appears in author lists; it is set in bold.
export const OWN_NAME = 'Del Carmen GA';

export interface Publication {
  // Reference number in the list, newest first.
  n: number;
  kind: 'paper' | 'book' | 'chapter';
  authors: string;
  title: string;
  // Printed after the title: optional lead-in, the italic journal or book, then the rest.
  lead?: string;
  container?: string;
  tail: string;
  link?: { label: string; href: string };
  // For Figure 2 and the hover cards. Entries without a date are not plotted.
  date?: PlotDate;
  dateLabel?: string;
  venueShort: string;
  status?: string;
  // The paragraph in the main text that cites this reference.
  citedIn?: string;
}

export const publications: Publication[] = [
  {
    n: 1,
    kind: 'paper',
    authors: 'Del Carmen GA, Deeb G, Deng N, Sinha KM, Matejcic M, Vilar E, Schmit SL',
    title: 'The Immunological Landscape of Colorectal Pre-Cancers: A Systematic Review',
    container: 'Cancer Prevention Research',
    tail: '. 2026 Aug 21. Online ahead of print.',
    link: { label: 'doi:10.1158/1940-6207.CAPR-26-0037', href: 'https://doi.org/10.1158/1940-6207.CAPR-26-0037' },
    date: { iso: '2026-08-21', precision: 'day' },
    dateLabel: '21 Aug 2026',
    venueShort: 'Cancer Prevention Research',
    status: 'Online ahead of print',
    citedIn: 'e-vilar',
  },
  {
    n: 2,
    kind: 'paper',
    authors: 'Del Carmen GA, Patel D, Zaman JA',
    title:
      'Pre-operative concerns and post-operative satisfaction: comparing attitudes toward bariatric surgery and medication intervention for weight loss on Reddit',
    container: 'Surgical Endoscopy',
    tail: '. 2026 Jul 20. Online ahead of print.',
    link: { label: 'doi:10.1007/s00464-026-13149-x', href: 'https://doi.org/10.1007/s00464-026-13149-x' },
    date: { iso: '2026-07-20', precision: 'day' },
    dateLabel: '20 Jul 2026',
    venueShort: 'Surgical Endoscopy',
    status: 'Online ahead of print',
  },
  {
    n: 3,
    kind: 'paper',
    authors: 'Del Carmen GA, Guthrie E, Levy D',
    title:
      'The Operating and Anesthetic Reference Assistant (OARA): A Fine-Tuned Large Language Model for Resident Teaching',
    container: 'American Journal of Surgery',
    tail: '. 2024 Aug 23.',
    date: { iso: '2024-08-23', precision: 'day' },
    dateLabel: '23 Aug 2024',
    venueShort: 'American Journal of Surgery',
  },
  {
    n: 4,
    kind: 'chapter',
    authors: 'Del Carmen GA',
    title: 'Disseminated Intravascular Coagulopathy',
    lead: 'In: Toy EC, Toy AL, eds. ',
    container: 'Case Files Hematology Body System',
    tail: '. New York: McGraw Hill. In press.',
    venueShort: 'Case Files Hematology Body System',
    status: 'In press',
  },
  {
    n: 5,
    kind: 'paper',
    authors:
      'Del Carmen GA, Reyes-Uribe L, Goyco D, Evans K, Kinnison J, Sepeda V, Weber D, Moskowitz J, Mork M, Taggart M, Thirumurthi S, Rodriguez-Bigas M, Lynch P, You YN, Vilar E',
    title:
      'Colorectal Cancer Surveillance Outcomes from an Institutional Longitudinal Cohort of Lynch Syndrome Patients',
    container: 'Frontiers in Oncology',
    tail: '. 2023 Apr 11.',
    date: { iso: '2023-04-11', precision: 'day' },
    dateLabel: '11 Apr 2023',
    venueShort: 'Frontiers in Oncology',
    citedIn: 'e-vilar',
  },
  {
    n: 6,
    kind: 'paper',
    authors: 'Del Carmen GA',
    title: 'To Choose the Self',
    container: 'Human Ties Digest',
    tail: '. 2023 Mar 22.',
    date: { iso: '2023-03-22', precision: 'day' },
    dateLabel: '22 Mar 2023',
    venueShort: 'Human Ties Digest',
  },
  {
    n: 7,
    kind: 'paper',
    authors: 'Del Carmen GA',
    title: 'Reflections from a Trauma Bay',
    container: 'Academic Emergency Medicine',
    tail: '. 2022 Nov 29.',
    link: { label: 'doi:10.1111/acem.14634', href: 'https://doi.org/10.1111/acem.14634' },
    date: { iso: '2022-11-29', precision: 'day' },
    dateLabel: '29 Nov 2022',
    venueShort: 'Academic Emergency Medicine',
  },
  {
    n: 8,
    kind: 'paper',
    authors: 'Del Carmen GA',
    title: 'Hope in the Time of Covid',
    container: 'Human Ties Digest',
    tail: '. 2022 Jan 14.',
    date: { iso: '2022-01-14', precision: 'day' },
    dateLabel: '14 Jan 2022',
    venueShort: 'Human Ties Digest',
  },
  {
    n: 9,
    kind: 'paper',
    authors: 'Del Carmen GA, et al.',
    title: 'The Paradoxical Protective Effect of Immigration on Colon Cancer Survival',
    container: 'J Surg Res',
    tail: '. 2021 Jan 6.',
    link: { label: 'doi:10.1016/j.jss.2021.06.005', href: 'https://doi.org/10.1016/j.jss.2021.06.005' },
    date: { iso: '2021-01-06', precision: 'day' },
    dateLabel: '6 Jan 2021',
    venueShort: 'J Surg Res',
  },
  {
    n: 10,
    kind: 'paper',
    authors: 'Del Carmen GA, Axtell A, Chang D, Melnitchouk S, Sundt TM 3rd, Fiedler AG',
    title:
      'Intra-aortic balloon pump placement in coronary artery bypass grafting patients by day of admission',
    container: 'J Cardiothorac Surg',
    tail: '. 2020 Aug 14;15(1):219.',
    link: { label: 'PMID 32795363', href: 'https://pubmed.ncbi.nlm.nih.gov/32795363/' },
    date: { iso: '2020-08-14', precision: 'day' },
    dateLabel: '14 Aug 2020',
    venueShort: 'J Cardiothorac Surg',
    citedIn: 'e-codman',
  },
  {
    n: 11,
    kind: 'paper',
    authors:
      'Fong ZV, Sell NM, Fernandez-Del Castillo C, Del Carmen GA, Ferrone CR, Chang DC, Warshaw AL, Polk HC Jr, Lillemoe KD, Qadan M',
    title:
      'Does preoperative pharmacologic prophylaxis reduce the rate of venous thromboembolism in pancreatectomy patients?',
    container: 'HPB (Oxford)',
    tail: '. 2020 Jul;22(7):1020-1024.',
    link: { label: 'PMID 31732463', href: 'https://pubmed.ncbi.nlm.nih.gov/31732463/' },
    date: { iso: '2020-07', precision: 'month' },
    dateLabel: 'Jul 2020',
    venueShort: 'HPB (Oxford)',
    citedIn: 'e-codman',
  },
  {
    n: 12,
    kind: 'paper',
    authors: 'Del Carmen GA, Stapleton S, Qadan M, Del Carmen MG, Chang D',
    title: 'Does the Day of the Week Predict a Cesarean Section? A Statewide Analysis',
    container: 'J Surg Res',
    tail: '. 2020 Jan;245:288-294.',
    link: { label: 'PMID 31421375', href: 'https://pubmed.ncbi.nlm.nih.gov/31421375/' },
    date: { iso: '2020-01', precision: 'month' },
    dateLabel: 'Jan 2020',
    venueShort: 'J Surg Res',
    citedIn: 'e-codman',
  },
  {
    n: 13,
    kind: 'book',
    authors: 'Del Carmen GA',
    title: 'The Mental Health Issue: And Why It Matters',
    tail: 'Independently published; 2017. ISBN 1521327793.',
    date: { iso: '2017', precision: 'year' },
    dateLabel: '2017',
    venueShort: 'Independently published',
  },
];

export const publicationByNumber = (n: number) => publications.find((p) => p.n === n);
