interface SectionProps {
  isVisible: boolean;
}

const ExperienceSection = ({ isVisible }: SectionProps) => (
  <section 
          id="experience" 
          className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">Leadership & Volunteer Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-base font-medium text-gray-900">Gold Humanism Honor Society, McGovern Medical School</h3>
              <p className="text-sm text-gray-500 mt-1">Internal Vice President | April 2023 – May 2024</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Served as student liaison between student body and honor society, represented organization at official functions</li>
                <li>• Provided logical support and overall direction for academic functions</li>
                <li>• Directed constitutional updates and revisions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900">Gold Humanism Mentorship Program, McGovern Medical School</h3>
              <p className="text-sm text-gray-500 mt-1">Peer Mentor | April 2023 – May 2024</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Mentored third-year medical students on issues relating to compassion, empathy, and leadership</li>
                <li>• Facilitated reflective meetings on humanistic patient care and provided insights to aspiring physician leaders</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900">Summer Health Professions Education, McGovern Medical School</h3>
              <p className="text-sm text-gray-500 mt-1">Student Mentor | April 2023 – May 2024</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Led student panels and facilitated informational sessions on medicine and medical school</li>
                <li>• Mentored and offered support, facilitated skill development, and provided academic planning for students interested in healthcare professions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900">Narrative Medicine and Reflection, McGovern Medical School</h3>
              <p className="text-sm text-gray-500 mt-1">Class Coordinator | March 2023 – May 2024</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Created and facilitated workshops focused on prevalent issues within contemporary medical practice</li>
                <li>• Organized logistics, held group-sessions, and facilitated group discussions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900">Clerkship Stream Captain, McGovern Medical School</h3>
              <p className="text-sm text-gray-500 mt-1">Stream Leader | May 2022 – May 2023</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Established communication between the Class of 2024 student body and school administration</li>
                <li>• Organized information on clerkships including administrative and academic points of contact and logistical information on rotation sites</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900">Hot Topics in Ethics, McGovern Medical School</h3>
              <p className="text-sm text-gray-500 mt-1">Course Coordinator | July 2021 – May 2022</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Curated and promoted a weekly lecture series on bioethics and medical ethics</li>
                <li>• Recruited expert speakers to share their professional experiences and perspectives on ethical issues in practice</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900">Wellness and Resilience Committee, McGovern Medical School</h3>
              <p className="text-sm text-gray-500 mt-1">Student Lead for Advocacy Subcommittee, Co-President | August 2021 – May 2024</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Endorsed student well-being by addressing health and wellness-related concerns, such as counseling service accessibility and financial burden of student healthcare</li>
                <li>• Developed an informative FAQ document for McGovern Medical School's website with an emphasis on increased access to the services and resources of the Student Counseling Service</li>
                <li>• Enhanced communication between students and counseling services</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900">Student Diversity Committee, McGovern Medical School</h3>
              <p className="text-sm text-gray-500 mt-1">Student Representative | August 2020 – May 2024</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Represented and advocated for the Class of 2024 student body on issues relating to inclusion and diversity</li>
                <li>• Mentored Cesar Chavez High School students on college applications, career paths in healthcare, and professional development</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900">Active Minds at Brandeis University</h3>
              <p className="text-sm text-gray-500 mt-1">President | January 2016 – December 2018</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Organized meetings to discuss mental health issues on campus and beyond, fostering an active dialogue and awareness of issues relating to mental illness prevention</li>
                <li>• Coordinated events to raise awareness of mental health issues, promoting a supportive campus environment</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900">Student Sexuality Information Services, Brandeis University</h3>
              <p className="text-sm text-gray-500 mt-1">Confidential Trained Peer Counselor | August 2016 – May 2019</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Completed 60 hours of annual training on various topics related to reproductive health topics including physiology, sexual health, and assault prevention</li>
                <li>• Served as a compassionate and knowledgeable peer counselor for members of the Brandeis community</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-medium text-gray-900">All For 1, Brandeis University</h3>
              <p className="text-sm text-gray-500 mt-1">Co-Chair | June 2016 – May 2019</p>
              <ul className="mt-2 text-sm text-gray-600 font-light space-y-1">
                <li>• Coordinated meetings between universities involved in the project</li>
                <li>• Organized annual agenda for colleges within the coalition, allocated funding for projects</li>
              </ul>
            </div>
          </div>
        </section>
);

export default ExperienceSection;
