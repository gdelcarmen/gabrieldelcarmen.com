export interface FutureProject {
  title: string;
  summary: string;
  description: string;
  components: string[];
  status: string;
}

export const futureProjectsData: FutureProject[] = [
  {
    title: 'A Property-Based Framework for Evaluating the Onset of Moral Status',
    summary: 'Bioethics manuscript developing a property-based framework for moral status evaluation.',
    description: 'A manuscript in progress examining philosophical criteria for the onset of moral status and their implications for biomedical ethics.',
    components: ['Bioethics framework development', 'Philosophical analysis', 'Manuscript preparation'],
    status: 'Bioethics — In Progress',
  },
  {
    title: 'Bridging the Communication Gap',
    summary: 'Evaluation of Google Translate and GPT-4o for English-to-Spanish translation in neurology.',
    description: 'Study analyzing machine translation and large language model performance for patient-facing clinical communication in neurology.',
    components: ['English-to-Spanish clinical translation', 'Google Translate and GPT-4o comparison', 'Patient education and communication focus'],
    status: 'Patient Education and Counseling — Under Review',
  },
  {
    title: 'Immunological Landscape for Pre-Cancerous Colorectal Lesions',
    summary: 'Review of the immunological research landscape for pre-cancerous colorectal lesions.',
    description: 'Review manuscript focused on immune features and knowledge gaps in pre-cancerous colorectal disease.',
    components: ['Colorectal cancer prevention', 'Immunological literature synthesis', 'Knowledge-gap mapping'],
    status: 'Cancer Prevention Research — Under Review',
  },
  {
    title: 'Bariatric Surgery and Medication Intervention Attitudes on Reddit',
    summary: 'Analysis of pre-operative concerns and post-operative satisfaction in bariatric surgery and medication intervention discussions.',
    description: 'Natural language analysis of Reddit discourse comparing attitudes toward bariatric surgery and medication-based weight-loss interventions.',
    components: ['Reddit discourse analysis', 'Natural language processing', 'Patient concerns and satisfaction themes'],
    status: 'Surgical Endoscopy — Accepted, pending publication',
  },
];
