interface SectionProps {
  isVisible: boolean;
}

const ContactSection = ({ isVisible }: SectionProps) => (
  <section 
          id="contact" 
          className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">Contact</h2>
          <div className="space-y-4">
            <p className="text-sm text-gray-600 font-light">
              <span className="text-gray-900">Email:</span> <a href="mailto:delcarg@amc.edu" className="text-gray-600 hover:text-gray-900 transition-colors">delcarg@amc.edu</a>
            </p>
            <p className="text-sm text-gray-600 font-light">
              <span className="text-gray-900">Location:</span> Albany, NY
            </p>
            <p className="text-sm text-gray-600 font-light">
              <span className="text-gray-900">ORCID:</span> <a href="https://orcid.org/0000-0002-1857-8404" target="_blank" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="#A6CE39">
                  <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-1.975 4.022-3.712 0-2.434-1.35-3.731-4.097-3.731h-2.222z"/>
                </svg>
                0000-0002-1857-8404
              </a>
            </p>
          </div>
        </section>
);

export default ContactSection;
