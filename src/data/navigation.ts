// Sections listed in the page navigation. `running` is the short form shown
// in the sticky running head while that section is being read.
export const navSections = [
  { id: 'abstract', label: 'Abstract', title: 'Abstract', running: 'Abstract' },
  { id: 'training', label: '1. Training', title: '1. Training and credentials', running: '1 Training' },
  { id: 'research', label: '2. Research', title: '2. Research experience', running: '2 Research' },
  { id: 'software', label: '3. Software', title: '3. Software and clinical AI', running: '3 Software' },
  { id: 'in-progress', label: '4. In progress', title: '4. Manuscripts in progress', running: '4 In progress' },
  { id: 'figure-1', label: 'Figures', title: 'Figures', running: 'Figures' },
  { id: 'references', label: 'References', title: 'References', running: 'References' },
  { id: 'supplement', label: 'Supplement', title: 'Supplementary sections', running: 'Supplement' },
] as const;

export type NavSection = typeof navSections[number];

// Everything the running head can name, in page order.
export const runningSections: readonly { id: string; running: string }[] = [
  ...navSections.slice(0, 6),
  { id: 'figure-2', running: 'Figures' },
  ...navSections.slice(6),
  { id: 'author-note', running: 'Author note' },
];
