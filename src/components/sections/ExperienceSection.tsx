interface SectionProps { isVisible: boolean; }

const work = [
  { title: 'Biology: Cells and Organisms, Brandeis University', role: 'Teaching Assistant', dates: 'Jan – May 2017; Jan – May 2019', location: 'Waltham, MA', bullets: ['Guided student learning through recitation and exam review sessions.', 'Reviewed and graded assignments and examinations.'] },
  { title: 'Physiology, Brandeis University', role: 'Teaching Assistant', dates: 'Aug – Dec 2018', location: 'Waltham, MA', bullets: ['Provided academic support through review sessions, office hours, and individualized assistance.', 'Evaluated student understanding and performance through assignments and examinations.'] },
];

const leadership = [
  { title: 'Gold Humanism Honor Society, McGovern Medical School', role: 'Internal Vice President', dates: 'April 2023 – May 2024', location: 'Houston, TX', bullets: ['Served as student liaison, represented the organization at official functions, and provided logistical support.', 'Directed constitutional updates and revisions.'] },
  { title: 'Gold Humanism Mentorship Program, McGovern Medical School', role: 'Peer Mentor', dates: 'April 2023 – May 2024', location: 'Houston, TX', bullets: ['Mentored third-year medical students on compassion, empathy, and leadership.', 'Facilitated reflective meetings on humanistic patient care.'] },
  { title: 'Summer Health Professions Education, McGovern Medical School', role: 'Student Mentor', dates: 'April 2023 – May 2024', location: 'Houston, TX', bullets: ['Led student panels and informational sessions on medicine and medical school.', 'Mentored students interested in healthcare professions.'] },
  { title: 'Narrative Medicine and Reflection, McGovern Medical School', role: 'Class Coordinator', dates: 'March 2023 – May 2024', location: 'Houston, TX', bullets: ['Created and facilitated workshops on contemporary medical practice.', 'Organized logistics and facilitated group discussions.'] },
  { title: 'Clerkship Stream Captain, McGovern Medical School', role: 'Stream Leader', dates: 'May 2022 – May 2023', location: 'Houston, TX', bullets: ['Established communication between Class of 2024 students and school administration.', 'Organized clerkship administrative, academic, and rotation-site information.'] },
  { title: 'Hot Topics in Ethics, McGovern Medical School', role: 'Course Coordinator', dates: 'July 2021 – May 2022', location: 'Houston, TX', bullets: ['Curated and promoted a weekly bioethics and medical ethics lecture series.', 'Recruited expert speakers for case-based elective discussions.'] },
  { title: 'Wellness and Resilience Committee, McGovern Medical School', role: 'Student Lead for Advocacy Subcommittee, Co-President', dates: 'August 2021 – May 2024', location: 'Houston, TX', bullets: ['Addressed counseling-service accessibility and financial burden of student healthcare.', 'Developed an FAQ document for McGovern Medical School’s website.', 'Enhanced communication between students and counseling services.'] },
  { title: 'Student Diversity Committee, McGovern Medical School', role: 'Student Representative', dates: 'August 2020 – May 2024', location: 'Houston, TX', bullets: ['Represented and advocated for the Class of 2024 on inclusion and diversity.', 'Mentored Cesar Chavez High School students on college applications and healthcare careers.'] },
  { title: 'Active Minds at Brandeis University', role: 'President', dates: 'January 2016 – December 2018', location: 'Waltham, MA', bullets: ['Organized meetings and events to discuss mental health issues and raise awareness on campus.'] },
  { title: 'Student Sexuality Information Services, Brandeis University', role: 'Confidential Trained Peer Counselor', dates: 'August 2016 – May 2019', location: 'Waltham, MA', bullets: ['Completed 60 hours of annual training in reproductive health, sexual health, and assault prevention.', 'Served as a peer counselor for members of the Brandeis community.'] },
  { title: 'All For 1, Brandeis University', role: 'Co-Chair', dates: 'June 2016 – May 2019', location: 'Waltham, MA', bullets: ['Coordinated meetings between universities involved in the coalition.', 'Organized annual agendas and allocated project funding.'] },
  { title: 'H.O.P.E. Institute Tutoring Center', role: 'Student Tutor', dates: 'May – July 2016', location: 'Arlington, TX', bullets: ['Supported elementary and middle school students with coursework.', 'Worked with parents and facilitators to develop learning strategies.'] },
];

const renderRole = (item: typeof leadership[number]) => (
  <article key={`${item.title}-${item.role}`}>
    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between"><h3 className="text-base font-medium text-gray-900">{item.title}</h3><p className="text-sm text-gray-500">{item.dates}</p></div>
    <p className="text-sm text-gray-500 mt-1">{item.role} · {item.location}</p>
    <ul className="mt-2 text-sm text-gray-600 font-light space-y-1 list-disc pl-5">{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
  </article>
);

const ExperienceSection = ({ isVisible }: SectionProps) => (
  <section id="experience" className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
    <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">Work, Volunteer & Leadership Experience</h2>
    <div className="mb-8"><h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Work Experience</h3><div className="space-y-6">{work.map(renderRole)}</div></div>
    <div><h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Volunteer & Leadership Experience</h3><div className="space-y-6">{leadership.map(renderRole)}</div></div>
  </section>
);

export default ExperienceSection;
