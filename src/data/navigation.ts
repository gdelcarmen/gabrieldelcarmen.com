export const navSections = [
  { id: 'education', label: 'Education' },
  { id: 'licensure', label: 'Licensure' },
  { id: 'about', label: 'About' },
  { id: 'publications', label: 'Publications' },
  { id: 'research', label: 'Research' },
  { id: 'programming', label: 'Informatics' },
  { id: 'future', label: 'Research in Progress' },
  { id: 'honors', label: 'Honors' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const;

export type NavSection = typeof navSections[number];
