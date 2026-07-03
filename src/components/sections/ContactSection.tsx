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
      <p className="text-sm text-gray-600 font-light"><span className="text-gray-900">Email:</span> <a href="mailto:Gabriel.delCarmen@nih.gov" className="text-gray-600 hover:text-gray-900 transition-colors">Gabriel.delCarmen@nih.gov</a></p>
      <p className="text-sm text-gray-600 font-light"><span className="text-gray-900">Website:</span> <a href="https://gabrieldelcarmen.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">gabrieldelcarmen.com</a></p>
      <p className="text-sm text-gray-600 font-light"><span className="text-gray-900">ORCID:</span> <a href="https://orcid.org/0000-0002-1857-8404" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">0000-0002-1857-8404</a></p>
    </div>
  </section>
);

export default ContactSection;
