export interface Role {
  lead: string;
  text: string;
}

export const teaching: Role[] = [
  {
    lead: 'Teaching Assistant, Biology: Cells and Organisms.',
    text: 'Brandeis University, Waltham, MA. January to May 2017 and January to May 2019. Guided student learning through recitation and exam review sessions; reviewed and graded assignments and examinations.',
  },
  {
    lead: 'Teaching Assistant, Physiology.',
    text: 'Brandeis University, Waltham, MA. August to December 2018. Provided academic support through review sessions, office hours, and individualized assistance; evaluated student performance through assignments and examinations.',
  },
];

export const leadership: Role[] = [
  {
    lead: 'Internal Vice President, Gold Humanism Honor Society.',
    text: 'McGovern Medical School, April 2023 to May 2024. Served as student liaison, represented the organization at official functions, and directed constitutional updates and revisions.',
  },
  {
    lead: 'Peer Mentor, Gold Humanism Mentorship Program.',
    text: 'McGovern Medical School, April 2023 to May 2024. Mentored third-year medical students on compassion, empathy, and leadership; facilitated reflective meetings on humanistic patient care.',
  },
  {
    lead: 'Student Mentor, Summer Health Professions Education.',
    text: 'McGovern Medical School, April 2023 to May 2024. Led student panels and informational sessions on medicine and medical school; mentored students interested in healthcare professions.',
  },
  {
    lead: 'Class Coordinator, Narrative Medicine and Reflection.',
    text: 'McGovern Medical School, March 2023 to May 2024. Created and facilitated workshops on contemporary medical practice; organized logistics and facilitated group discussions.',
  },
  {
    lead: 'Stream Leader, Clerkship Stream Captain.',
    text: 'McGovern Medical School, May 2022 to May 2023. Established communication between Class of 2024 students and school administration; organized clerkship administrative, academic, and rotation-site information.',
  },
  {
    lead: 'Course Coordinator, Hot Topics in Ethics.',
    text: 'McGovern Medical School, July 2021 to May 2022. Curated and promoted a weekly bioethics and medical ethics lecture series; recruited expert speakers for case-based elective discussions.',
  },
  {
    lead: 'Co-President and Student Lead for Advocacy Subcommittee, Wellness and Resilience Committee.',
    text: 'McGovern Medical School, August 2021 to May 2024. Addressed counseling-service accessibility and the financial burden of student healthcare; developed an FAQ document for the school’s website.',
  },
  {
    lead: 'Student Representative, Student Diversity Committee.',
    text: 'McGovern Medical School, August 2020 to May 2024. Represented and advocated for the Class of 2024 on inclusion and diversity; mentored Cesar Chavez High School students on college applications and healthcare careers.',
  },
  {
    lead: 'President, Active Minds at Brandeis University.',
    text: 'January 2016 to December 2018. Organized meetings and events to discuss mental health issues and raise awareness on campus.',
  },
  {
    lead: 'Confidential Trained Peer Counselor, Student Sexuality Information Services.',
    text: 'Brandeis University, August 2016 to May 2019. Completed 60 hours of annual training in reproductive health, sexual health, and assault prevention; served as a peer counselor for the Brandeis community.',
  },
  {
    lead: 'Co-Chair, All For 1.',
    text: 'Brandeis University, June 2016 to May 2019. Coordinated meetings between universities involved in the coalition; organized annual agendas and allocated project funding.',
  },
  {
    lead: 'Student Tutor, H.O.P.E. Institute Tutoring Center.',
    text: 'Arlington, TX, May to July 2016. Supported elementary and middle school students with coursework; worked with parents and facilitators to develop learning strategies.',
  },
];

export const honors: Role[] = [
  {
    lead: 'Gold Humanism Honor Society, McGovern Chapter.',
    text: 'Spring 2023. Peer nominated for induction into a society recognizing exemplars of humanistic patient care who serve as role models, mentors, and leaders in medicine.',
  },
  {
    lead: 'Dean’s List, Brandeis University.',
    text: 'Fall 2015, Spring 2016, Spring 2018, Fall 2018.',
  },
];

export const memberships =
  'Association for Academic Surgery, since March 2026. American College of Surgeons, since May 2023. American Medical Association, Texas Medical Association and Harris County Medical Society, since July 2020.';

export const skills: Role[] = [
  {
    lead: 'Programming and frameworks.',
    text: 'Python, TypeScript and JavaScript, React and Next.js, FastAPI, SwiftUI and Xcode; familiarity with Java, HTML, and CSS.',
  },
  {
    lead: 'Data, machine learning and AI.',
    text: 'Applied large language model engineering, retrieval-augmented generation, low-rank adaptation fine-tuning, natural language processing, topic modeling, sentiment and subjectivity analysis, computer vision, PostgreSQL with pgvector and vector retrieval.',
  },
  {
    lead: 'Research and clinical informatics.',
    text: 'STATA, REDCap, EPIC, IRB submission and amendment, Microsoft Access, PRISMA systematic-review methodology.',
  },
];

export type SupplementId = 's1' | 's2' | 's3';
