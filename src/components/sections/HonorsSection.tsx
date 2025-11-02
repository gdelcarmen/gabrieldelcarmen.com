interface SectionProps {
  isVisible: boolean;
}

const HonorsSection = ({ isVisible }: SectionProps) => (
  <section 
          id="honors" 
          className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">Honors & Awards</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-medium text-gray-900">Gold Humanism Honor Society – McGovern Chapter</h3>
              <p className="text-sm text-gray-500 mt-1">Spring 2023</p>
              <p className="text-sm text-gray-600 mt-1 font-light">Peer nominated for induction into society recognizing exemplars of humanistic patient care who serve as role models, mentors, and leaders in medicine.</p>
            </div>
            
            <div>
              <h3 className="text-base font-medium text-gray-900">Dean's List – Brandeis University</h3>
              <p className="text-sm text-gray-500 mt-1">Fall 2015, Spring 2016, Spring 2018, Fall 2018</p>
            </div>
          </div>
        </section>
);

export default HonorsSection;
