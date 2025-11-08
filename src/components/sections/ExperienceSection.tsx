interface SectionProps {
  isVisible: boolean;
}

const ExperienceSection = ({ isVisible }: SectionProps) => (
  <section 
          id="experience" 
          className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">Leadership & Service</h2>
          <div className="space-y-10">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Medical School Leadership</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-medium text-gray-900">Gold Humanism Honor Society — McGovern Medical School</h4>
                  <p className="text-sm text-gray-500 mt-1">Internal Vice President | April 2023 – May 2024</p>
                  <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                    <li>• Served as liaison between students and the chapter, representing the organization at formal functions.</li>
                    <li>• Led constitutional revisions and operational planning for humanism-focused programming.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-medium text-gray-900">Clerkship Stream Captain — McGovern Medical School</h4>
                  <p className="text-sm text-gray-500 mt-1">Stream Leader | May 2022 – May 2023</p>
                  <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                    <li>• Centralized clerkship logistics, contacts, and site-specific insights for the Class of 2024.</li>
                    <li>• Maintained clear communication channels between students and academic leadership.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-medium text-gray-900">Wellness and Resilience Committee — McGovern Medical School</h4>
                  <p className="text-sm text-gray-500 mt-1">Advocacy Subcommittee Lead & Co-President | August 2021 – May 2024</p>
                  <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                    <li>• Advocated for expanded counseling access and reduced financial barriers to student healthcare.</li>
                    <li>• Authored an institutional FAQ to improve visibility of wellness resources.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-medium text-gray-900">Student Diversity Committee — McGovern Medical School</h4>
                  <p className="text-sm text-gray-500 mt-1">Student Representative | August 2020 – May 2024</p>
                  <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                    <li>• Represented classmates on diversity, equity, and inclusion initiatives.</li>
                    <li>• Mentored Cesar Chavez High School students on college readiness and healthcare careers.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Mentorship & Education</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-medium text-gray-900">Gold Humanism Mentorship Program — McGovern Medical School</h4>
                  <p className="text-sm text-gray-500 mt-1">Peer Mentor | April 2023 – May 2024</p>
                  <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                    <li>• Guided third-year students through compassionate care practices and leadership development.</li>
                    <li>• Facilitated reflective conversations on empathy, professionalism, and humanism in medicine.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-medium text-gray-900">Summer Health Professions Education Program — McGovern Medical School</h4>
                  <p className="text-sm text-gray-500 mt-1">Student Mentor | April 2023 – Present</p>
                  <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                    <li>• Led panels and workshops offering academic and career guidance to aspiring health professionals.</li>
                    <li>• Provided individualized mentorship supporting professional identity formation.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-medium text-gray-900">Narrative Medicine & Reflection Elective — McGovern Medical School</h4>
                  <p className="text-sm text-gray-500 mt-1">Class Coordinator | March 2023 – May 2024</p>
                  <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                    <li>• Designed workshops centered on narrative inquiry and ethics in contemporary medical practice.</li>
                    <li>• Facilitated reflective writing sessions fostering clinician wellness and empathy.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-medium text-gray-900">Hot Topics in Ethics Elective — McGovern Medical School</h4>
                  <p className="text-sm text-gray-500 mt-1">Course Coordinator | July 2021 – May 2022</p>
                  <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                    <li>• Curated weekly lecture series on bioethics with invited subject matter experts.</li>
                    <li>• Organized case-based discussions examining ethical dilemmas across specialties.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Community & Wellness Advocacy</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-medium text-gray-900">Student Sexuality Information Services — Brandeis University</h4>
                  <p className="text-sm text-gray-500 mt-1">Confidential Peer Counselor | August 2016 – May 2019</p>
                  <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                    <li>• Completed 60+ hours of annual training across reproductive health, sexual wellness, and crisis response.</li>
                    <li>• Provided confidential counseling and resource navigation for peers.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-medium text-gray-900">Active Minds at Brandeis University</h4>
                  <p className="text-sm text-gray-500 mt-1">President | January 2016 – December 2018</p>
                  <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                    <li>• Led campus-wide initiatives destigmatizing mental health and promoting help-seeking behaviors.</li>
                    <li>• Organized educational programming and advocacy campaigns alongside peer institutions.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-medium text-gray-900">All For 1 Coalition — Brandeis University</h4>
                  <p className="text-sm text-gray-500 mt-1">Co-Chair | June 2016 – May 2019</p>
                  <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                    <li>• Coordinated annual agendas and shared initiatives across partner universities.</li>
                    <li>• Managed budgets and resource allocation for coalition-wide projects.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-medium text-gray-900">H.O.P.E. Institute Tutoring Center — Arlington, TX</h4>
                  <p className="text-sm text-gray-500 mt-1">Student Tutor | May – July 2016</p>
                  <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                    <li>• Supported elementary and middle school students through individualized academic coaching.</li>
                    <li>• Partnered with families to develop strategies that improved student confidence and performance.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
);

export default ExperienceSection;
