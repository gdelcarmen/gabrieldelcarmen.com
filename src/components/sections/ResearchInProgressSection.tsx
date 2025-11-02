import Tooltip from '../Tooltip';
import { FutureProject } from '../../data/futureProjects';

interface SectionProps {
  isVisible: boolean;
  projects: FutureProject[];
  onProjectClick: (index: number) => void;
}

const ResearchInProgressSection = ({ isVisible, projects, onProjectClick }: SectionProps) => (

  <section
          id="future" // Keep id="future" for nav link stability
          className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">Research in Progress
            <span className="ml-2 text-xs text-gray-400 font-light inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Hover for details
            </span>
          </h2>
          
          <p className="text-gray-600 leading-relaxed font-light mb-6">
            Below are several research initiatives and manuscripts currently in development, under review, or preparation. These projects represent my ongoing commitment to advancing surgical science, medical ethics, and healthcare equity through innovative methodologies and interdisciplinary collaboration.
          </p>
          
          {/* Combined/Enhanced Research Items */}
          <div className="space-y-8"> {/* Changed from space-y-6 */}

            {/* Item 1: Merged NLP/Bariatric */}
            <Tooltip
              content={
                <div>
                  <h4 className="font-medium mb-2">Comparing Attitudes Towards Bariatric Surgery and Medication via Reddit NLP Analysis</h4>
                  <p className="mb-2">Utilizing Natural Language Processing (NLP) and Machine Learning (ML) to analyze user-generated content on Reddit communities (e.g., r/bariatricsurgery, r/Ozempic) dedicated to Roux-en-Y gastric bypass, sleeve gastrectomy, and semaglutide.</p>
                  {/* Removed specific components/status/timeline from tooltip as they are in modal */}
                </div>
              }
              position="bottom"
              width="max-w-md"
            >
              {/* Update onClick to use the new handler and pass index 0 */}
              <div onClick={() => onProjectClick(0)} className="bg-gray-50 p-5 rounded-lg transition-all hover:shadow-md cursor-pointer">
                <h3 className="text-base font-medium text-gray-900 mb-2">{projects[0].title}</h3>
                <p className="text-sm text-gray-600 font-light mb-2">Comparing patient experiences and attitudes towards bariatric surgery vs. weight loss medication using NLP on Reddit data.</p>
                <span className="text-xs text-blue-600 hover:underline inline-flex items-center">Learn more <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
              </div>
            </Tooltip>

            {/* Item 2: Spanish Translation (Updated Status) */}
            <Tooltip
              content={
                <div>
                  <h4 className="font-medium mb-2">Bridging the Communication Gap: Google Translate vs. GPT-4o in Spanish Neurology Translations</h4>
                  <p className="mb-2">Comparative analysis evaluating the accuracy and clinical appropriateness of AI translation tools (Google Translate and GPT-4o) for common English-to-Spanish clinical questions used in neurologic assessments.</p>
                  {/* Removed specific components/status/timeline from tooltip */}
                </div>
              }
              position="bottom"
              width="max-w-md"
            >
               {/* Update onClick to use the new handler and pass index 1 */}
              <div onClick={() => onProjectClick(1)} className="bg-gray-50 p-5 rounded-lg transition-all hover:shadow-md cursor-pointer">
                <h3 className="text-base font-medium text-gray-900 mb-2">{projects[1].title}</h3>
                <p className="text-sm text-gray-600 font-light mb-2">Comparing Google Translate vs. GPT-4o for translating English neurology questions to Spanish for patients with LEP.</p>
                <span className="text-xs text-blue-600 hover:underline inline-flex items-center">Learn more <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
              </div>
            </Tooltip>

            {/* Item 3: Moral Status Framework */}
            <Tooltip
              content={
                <div>
                  <h4 className="font-medium mb-2">A Property-Based Framework for Evaluating the Onset of Moral Status</h4>
                  <p className="mb-2">Philosophical essay proposing a novel framework to assess claims about when moral status begins, critically evaluating the "Conception view" often used in abortion ethics debates.</p>
                  {/* Removed specific components/status/timeline from tooltip */}
                </div>
              }
              position="bottom"
              width="max-w-md"
            >
               {/* Update onClick to use the new handler and pass index 2 */}
               <div onClick={() => onProjectClick(2)} className="bg-gray-50 p-5 rounded-lg transition-all hover:shadow-md cursor-pointer">
                 <h3 className="text-base font-medium text-gray-900 mb-2">{projects[2].title}</h3>
                 <p className="text-sm text-gray-600 font-light mb-2">Philosophical analysis proposing and applying a framework to evaluate claims about the beginning of moral status.</p>
                 <span className="text-xs text-blue-600 hover:underline inline-flex items-center">Learn more <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
               </div>
            </Tooltip>

            {/* Item 4: Implicit Bias in LLMs */}
            <Tooltip
              content={
                 <div>
                   <h4 className="font-medium mb-2">Assessing Implicit Bias in Large Language Model Clinical Decision-Making</h4>
                   <p className="mb-2">Investigates whether a widely used LLM (GPT-4o) exhibits implicit biases when responding to clinical vignettes with varying patient characteristics (race, gender, socioeconomic status).</p>
                   {/* Removed specific components/status/timeline from tooltip */}
                 </div>
               }
               position="bottom"
               width="max-w-md"
            >
              {/* Update onClick to use the new handler and pass index 3 */}
              <div onClick={() => onProjectClick(3)} className="bg-gray-50 p-5 rounded-lg transition-all hover:shadow-md cursor-pointer">
                <h3 className="text-base font-medium text-gray-900 mb-2">{projects[3].title}</h3>
                <p className="text-sm text-gray-600 font-light mb-2">Evaluating if LLMs (GPT-4o) show bias in responses to clinical vignettes based on patient demographics.</p>
                <span className="text-xs text-blue-600 hover:underline inline-flex items-center">Learn more <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
              </div>
            </Tooltip>

            {/* Item 5: Accountability & Empathy in AI */}
            <Tooltip
              content={
                 <div>
                   <h4 className="font-medium mb-2">Accountability, Empathy, and the Moral Complexities of Autonomous AI in Healthcare</h4>
                   <p className="mb-2">Ethical analysis exploring the challenges of integrating autonomous AI into healthcare, focusing on accountability, empathy, and patient-centered values.</p>
                   {/* Removed specific components/status/timeline from tooltip */}
                 </div>
               }
               position="bottom"
               width="max-w-md"
            >
               {/* Update onClick to use the new handler and pass index 4 */}
               <div onClick={() => onProjectClick(4)} className="bg-gray-50 p-5 rounded-lg transition-all hover:shadow-md cursor-pointer">
                 <h3 className="text-base font-medium text-gray-900 mb-2">{projects[4].title}</h3>
                 <p className="text-sm text-gray-600 font-light mb-2">Investigating moral complexities, accountability, and empathy concerning autonomous AI in clinical decision-making.</p>
                 <span className="text-xs text-blue-600 hover:underline inline-flex items-center">Learn more <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
               </div>
            </Tooltip>

            {/* Item 6: Benchmarking Vision Models */}
            <Tooltip
              content={
                <div>
                  <h4 className="font-medium mb-2">Benchmarking GPT-4 Vision for Chest X-Ray Interpretation</h4>
                  <p className="mb-2">Evaluates the diagnostic performance of OpenAI's GPT-4 Vision (GPT-4oV) model on interpreting chest X-rays (CXRs) using the VinDr-CXR dataset.</p>
                  {/* Removed specific components/status/timeline from tooltip */}
                 </div>
               }
               position="bottom"
               width="max-w-md"
            >
              {/* Update onClick to use the new handler and pass index 5 */}
              <div onClick={() => onProjectClick(5)} className="bg-gray-50 p-5 rounded-lg transition-all hover:shadow-md cursor-pointer">
                <h3 className="text-base font-medium text-gray-900 mb-2">{projects[5].title}</h3>
                <p className="text-sm text-gray-600 font-light mb-2">Evaluating GPT-4oV's diagnostic performance on Chest X-Rays using zero/one/few-shot learning.</p>
                 <span className="text-xs text-blue-600 hover:underline inline-flex items-center">Learn more <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
              </div>
            </Tooltip>

          </div>
        </section>
);

export default ResearchInProgressSection;
