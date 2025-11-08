interface SectionProps {
  isVisible: boolean;
}

const CurrentPositionSection = ({ isVisible }: SectionProps) => (
  <section
    id="current"
    className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
  >
    <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">Current Position & Objective</h2>
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-medium text-gray-900">General Surgery Resident, Post-Graduate Year 2</h3>
        <p className="text-sm text-gray-500 mt-1">Department of Surgery, Albany Medical Center — Albany, NY</p>
        <p className="text-sm text-gray-500">July 2024 – Present</p>
        <p className="text-sm text-gray-600 font-light mt-3">
          745 Broadway Unit 218, Albany, NY 12208 · 817-307-6735 ·{' '}
          <a
            href="mailto:delcarg@amc.edu"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            delcarg@amc.edu
          </a>
        </p>
      </div>

      <div>
        <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Objective</h4>
        <p className="text-gray-600 leading-relaxed font-light">
          General surgery resident at Albany Medical Center pursuing opportunities to prepare for a career in academic
          surgical oncology by building expertise in translational research, clinical trials, and clinical outcomes. I am
          committed to comprehensive surgical skill development, cultivating leadership among future surgical leaders, and
          supporting initiatives in healthcare equity.
        </p>
        <p className="text-gray-600 leading-relaxed font-light mt-3">
          I bring a passion for patient-centered care, a deep interest in surgical and medical ethics, and a dedication to
          reducing disparities in health quality and access. I thrive in collaborative, challenging, and academically
          rigorous environments where innovation and compassionate care go hand in hand.
        </p>
      </div>

      <div>
        <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Focus Areas</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 font-light">
          <li>Translational research that accelerates innovations in colorectal and hepatopancreatobiliary oncology.</li>
          <li>Design and execution of clinical trials and outcomes research that foreground equity and patient experience.</li>
          <li>Ethical integration of artificial intelligence to augment surgical decision-making without compromising humanity.</li>
          <li>Mentorship and leadership development to empower interdisciplinary surgical teams.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default CurrentPositionSection;
