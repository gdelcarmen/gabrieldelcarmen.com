export const navSections = [
  { id: 'current', label: 'Current' },
  { id: 'education', label: 'Education' },
  { id: 'about', label: 'About' },
  { id: 'publications', label: 'Publications' },
  { id: 'research', label: 'Research' },
  { id: 'honors', label: 'Honors' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'programming', label: 'Programming' },
  { id: 'future', label: 'In Progress' },
  { id: 'contact', label: 'Contact' }
] as const;

export type NavSection = typeof navSections[number];
