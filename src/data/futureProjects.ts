export interface FutureProject {
  title: string;
  status: 'Under review' | 'In progress';
  venue: string;
  coauthors?: string;
  description: string;
  components: string[];
}

export const futureProjectsData: FutureProject[] = [
  {
    title:
      'Bridging the Communication Gap: An Analysis of Google Translate and GPT-4o in English to Spanish Translation in Neurology',
    status: 'Under review',
    venue: 'Patient Education and Counseling',
    coauthors: 'Alonzo BR, Cruz G',
    description:
      'Study analyzing machine translation and large language model performance for patient-facing clinical communication in neurology.',
    components: [
      'English-to-Spanish clinical translation',
      'Google Translate and GPT-4o comparison',
      'Patient education and communication focus',
    ],
  },
  {
    title: 'A Property-Based Framework for Evaluating the Onset of Moral Status',
    status: 'In progress',
    venue: 'Bioethics',
    description:
      'A manuscript in progress examining philosophical criteria for the onset of moral status and their implications for biomedical ethics.',
    components: ['Bioethics framework development', 'Philosophical analysis', 'Manuscript preparation'],
  },
];
