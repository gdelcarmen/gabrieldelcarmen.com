// Dates for the two figures. A date can be known to the day, the month or
// only the year; the figures place it in the middle of what is known.
export interface PlotDate {
  iso: string;
  precision: 'day' | 'month' | 'year';
}

export const toDecimalYear = ({ iso, precision }: PlotDate): number => {
  const [year, month = 1, day = 1] = iso.split('-').map(Number);
  if (precision === 'year') return year + 0.5;
  if (precision === 'month') return year + (month - 0.5) / 12;
  const start = Date.UTC(year, 0, 1);
  const end = Date.UTC(year + 1, 0, 1);
  return year + (Date.UTC(year, month - 1, day) - start) / (end - start);
};

export type YearMonth = [year: number, month: number];

export interface TimelineRow {
  id: string;
  label: string;
  kind: 'education' | 'work' | 'software';
  start: YearMonth;
  // null means ongoing: the bar runs to the right edge of the figure.
  end: YearMonth | null;
  // Short span for narrow screens and the year summary.
  span: string;
  // The paragraph in the main text this bar jumps to.
  target: string;
  heading: string;
  lines: [string, string];
}

// Figure 1 runs from the start of 2015 to the end of 2026.
export const figure1Axis = { start: 2015, end: 2027 };
// Figure 2 runs from the start of 2017 to the end of 2026.
export const figure2Axis = { start: 2017, end: 2027 };

export const rowStart = (row: TimelineRow) => row.start[0] + (row.start[1] - 1) / 12;
export const rowEnd = (row: TimelineRow) => (row.end ? row.end[0] + row.end[1] / 12 : figure1Axis.end);
export const rowCoversYear = (row: TimelineRow, year: number) => rowStart(row) < year + 1 && rowEnd(row) > year;

export const timelineRows: TimelineRow[] = [
  {
    id: 'row-brandeis',
    label: 'Brandeis University',
    kind: 'education',
    start: [2015, 8],
    end: [2019, 5],
    span: '2015 to 2019',
    target: 'e-brandeis',
    heading: 'Brandeis University · August 2015 to May 2019 · Waltham, MA',
    lines: [
      'B.S. Health: Science, Society, and Policy; B.A. Biology; B.A. Philosophy. Cum laude.',
      'Dean’s List in four semesters. Research in the Aging, Culture, and Cognition Laboratory.',
    ],
  },
  {
    id: 'row-mgh',
    label: 'Research, Mass General Hospital',
    kind: 'work',
    start: [2017, 6],
    end: [2020, 6],
    span: '2017 to 2020',
    target: 'e-codman',
    heading: 'Research, Mass General Hospital · June 2017 to June 2020 · Boston, MA',
    lines: [
      'Codman Center for Clinical Effectiveness (David Chang), then Internal Medicine (Jennifer Haas).',
      'Statewide outcomes analyses in STATA; multi-site cervical cancer screening study.',
    ],
  },
  {
    id: 'row-mcgovern',
    label: 'McGovern Medical School (MD)',
    kind: 'education',
    start: [2020, 8],
    end: [2024, 5],
    span: '2020 to 2024',
    target: 'e-mcgovern',
    heading: 'McGovern Medical School at UTHealth Houston · August 2020 to May 2024 · Houston, TX',
    lines: [
      'Doctor of Medicine. Scholarly Concentration in Medical Humanities.',
      'Gold Humanism Honor Society, inducted Spring 2023.',
    ],
  },
  {
    id: 'row-mda',
    label: 'MD Anderson and Mayo Clinic',
    kind: 'work',
    start: [2021, 6],
    end: [2024, 7],
    span: '2021 to 2024',
    target: 'e-vilar',
    heading: 'MD Anderson and Mayo Clinic · June 2021 to July 2024 · Houston, TX',
    lines: [
      'Vilar Lab with Eduardo Vilar-Sanchez, and transplant outcomes research with Terri Menser.',
      'Lynch syndrome surveillance outcomes; disparities in living donor kidney transplantation.',
    ],
  },
  {
    id: 'row-albany',
    label: 'Residency, Albany Medical Center',
    kind: 'work',
    start: [2024, 7],
    end: [2026, 6],
    span: '2024 to 2026',
    target: 'e-albany',
    heading: 'General surgery residency, Albany Medical Center · July 2024 to June 2026 · Albany, NY',
    lines: [
      'Department of Surgery. PGY-2 completed; research years underway.',
      'Built the Trauma Practice Management Guidelines reference during residency.',
    ],
  },
  {
    id: 'row-surgicai',
    label: 'SurgicAI',
    kind: 'software',
    start: [2025, 5],
    end: null,
    span: '2025 to present',
    target: 'e-surgicai',
    heading: 'SurgicAI LLC · May 2025 to present',
    lines: [
      'Founder and principal architect. Physician-founded startup building point-of-care tools for surgical practice.',
      'Decision support, ambient clinical documentation, and point-of-care reference and tracking.',
    ],
  },
  {
    id: 'row-nci',
    label: 'NCI Surgery Branch fellowship',
    kind: 'work',
    start: [2026, 7],
    end: null,
    span: '2026 to present',
    target: 'e-nci',
    heading: 'NCI Surgery Branch · July 2026 to present · Bethesda, MD',
    lines: [
      'Cancer Immunotherapy Research Fellow, National Cancer Institute, National Institutes of Health.',
      'Translational cancer immunotherapy; bench-to-bedside translation of cellular immunotherapy.',
    ],
  },
];
