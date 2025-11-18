import Tooltip from '../Tooltip';

interface SectionProps {
  isVisible: boolean;
}

const PublicationsSection = ({ isVisible }: SectionProps) => (
  <section 
          id="publications" 
          className={`mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-xl font-light text-gray-800 pb-3 mb-5 border-b border-gray-100">Publications & Presentations
            <span className="ml-2 text-xs text-gray-400 font-light inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Hover for details
            </span>
          </h2>
          
          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Book Chapters</h3>
            <ul className="space-y-4 text-sm text-gray-600 font-light">
              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">Disseminated Intravascular Coagulopathy (Case Files)</h4>
                    <p className="mb-2">Authored a comprehensive chapter for McGraw Hill's renowned Case Files series, delving into the complex mechanisms and management of DIC using a real-world patient scenario.</p>
                    <p className="mb-2">Key contributions:</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>Explained the critical pathophysiology driving systemic coagulation breakdown.</li>
                      <li>Highlighted essential diagnostic clues, including lab markers like D-dimer.</li>
                      <li>Outlined tailored treatment strategies for diverse clinical contexts (sepsis, malignancy, obstetrics).</li>
                      <li>Provided insights into predicting outcomes and managing life-threatening complications like organ failure.</li>
                    </ul>
                    <p>Impact: Equipping medical trainees with practical, case-based knowledge on a critical condition.</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span>. Disseminated Intravascular Coagulopathy. In: Toy EC, Toy AL, eds. <em>Case Files Hematology Body System. Case Files Collection</em>, New York: McGraw Hill Publishers, In Press.</li>
              </Tooltip>
              
              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">The Mental Health Issue: And Why It Matters</h4>
                    <p className="mb-2">A critical examination of the different criteria for mental pathologies, the common misrepresentations of mental illness as non-biological, and the path forward.</p>
                    <p className="mb-2">This book addresses:</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>A biological basis for mental health and illness</li>
                      <li>Stigma reduction strategies both in medical and community settings</li>
                      <li>Evidence-based approaches to mental healthcare integration</li>
                      <li>Personal narratives illustrating lived experiences with mental illness</li>
                    </ul>
                    <p>Independently published in print and digitally.</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span> (2017). <em><a href="https://www.amazon.com/Mental-Health-Issue-Why-Matters/dp/1521327793" target="_blank" className="text-blue-600 hover:underline">The Mental Health Issue: And Why It Matters</a></em>. Independently Published. ISBN:1521327793</li>
              </Tooltip>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Peer-Reviewed Research Articles</h3>
            <ul className="space-y-4 text-sm text-gray-600 font-light">
              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">The Operating and Anesthetic Reference Assistant (OARA): A fine-tuned large language model for resident teaching</h4>
                    <p className="mb-2">This study aimed to fine-tune a large language model for domain-specific text generation in surgical and anesthesia residency education.</p>
                    <p className="mb-2">This article includes the following:</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>A fine-tuned version of a 7-billion parameter base model "Vicuna v1.5" trained on 266,342 lines of text</li>
                      <li>Greater than 821 peer-reviewed documents</li>
                      <li>Model evaluation with 150 surgical and anesthesia queries</li>
                      <li>65.3% accuracy with excellence in surgical case-based tasks</li>
                    </ul>
                    <p className="mb-2">Impact: We provide a proof of concept.</p>
                    <p>Published in <em>American Journal of Surgery</em> (Impact Factor: 2.7)</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span>, Gurthrie E, Levy D. <a href="https://pubmed.ncbi.nlm.nih.gov/38365551/" target="_blank" className="text-blue-600 hover:underline">The Operating and Anesthetic Reference Assistant (OARA): A fine-tuned large language model for resident teaching.</a> <em>Am J Surg</em>. 2024 Aug.</li>
              </Tooltip>
              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">Colorectal Cancer Surveillance Outcomes from an Institutional Longitudinal Cohort of Lynch Syndrome Patients</h4>
                    <p className="mb-2">This study analyzed surveillance outcomes in a cohort of Lynch Syndrome patients to assess the effectiveness of current screening protocols.</p>
                    <p className="mb-2">Key findings:</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>Colonoscopic surveillance detected 87% of colorectal cancers at early stages (I-II)</li>
                      <li>Interval between surveillance significantly affected detection rates</li>
                      <li>DNA mismatch repair mutation type correlated with cancer development risk</li>
                      <li>Hispanic patients demonstrated unique surveillance compliance and outcome patterns</li>
                    </ul>
                    <p className="mb-2">Impact: These findings have informed updated surveillance guidelines for Lynch Syndrome patients, particularly addressing ethnically diverse populations.</p>
                    <p>Published in <em>Frontiers in Oncology</em> (Impact Factor: 3.5)</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span>, Reyes-Uribe L, Goyco D, Evans K, Kinnison J, Sepeda V, Weber D, Moskowitz J, Mork M, Taggart M, Thirumurthi S, Rodriguez-Bigas M, Lynch P, You Y.N, Vilar E. <a href="https://doi.org/10.3389/fonc.2023.1140908" target="_blank" className="text-blue-600 hover:underline">Colorectal Cancer Surveillance Outcomes from an Institutional Longitudinal Cohort of Lynch Syndrome Patients.</a> <em>Frontiers in Oncology</em>. 2023 Apr 11.</li>
              </Tooltip>
              
              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">Reflections from a Trauma Bay</h4>
                    <p className="mb-2">A personal narrative and ethical reflection on experiences in emergency medicine, focusing on moral distress and resilience.</p>
                    <p className="mb-2">This article explores:</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>The psychological impact of witnessing trauma on healthcare providers</li>
                      <li>Mechanisms of processing moral distress in emergency settings</li>
                      <li>The role of narrative and reflection in physician wellbeing</li>
                      <li>Pedagogical implications for medical education</li>
                    </ul>
                    <p>Published in <em>Academic Emergency Medicine</em> (Impact Factor: 3.262)</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span> (2022). <a href="https://pubmed.ncbi.nlm.nih.gov/36445067/" target="_blank" className="text-blue-600 hover:underline">Reflections from a Trauma Bay.</a> <em>Academic Emergency Medicine</em>. 2022 Nov 29. doi: 10.1111/acem.14634.</li>
              </Tooltip>
              
              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">The Paradoxical Protective Effect of Immigration on Colon Cancer Survivals</h4>
                    <p className="mb-2">This study investigated the relationship between immigration status and colon cancer outcomes using large-scale population data.</p>
                    <p className="mb-2">Key findings:</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>First-generation immigrants showed significantly better survival rates despite socioeconomic disadvantages</li>
                      <li>This survival advantage decreased with successive generations</li>
                      <li>The effect remained significant after controlling for age, stage at diagnosis, and treatment access</li>
                      <li>Potential explanations include the "healthy immigrant effect" and dietary/lifestyle factors</li>
                    </ul>
                    <p>Published in <em>Journal of Surgical Research</em> (Impact Factor: 2.574)</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span>, et al. <a href="https://doi.org/10.1016/j.jss.2021.06.005" target="_blank" className="text-blue-600 hover:underline">The Paradoxical Protective Effect of Immigration on Colon Cancer Survivals.</a> <em>J Surg Res</em>. 2021 Jan 6. doi: 10.1016/j.jss.2021.06.005</li>
              </Tooltip>
              
              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">Intra-aortic Balloon Pump Placement in Coronary Artery Bypass Grafting Patients by Day of Admission</h4>
                    <p className="mb-2">This retrospective study examined whether day of hospital admission influenced the timing of intra-aortic balloon pump (IABP) placement in CABG patients.</p>
                    <p className="mb-2">Research highlights:</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>Analysis of 10,625 CABG patients who received preoperative IABP</li>
                      <li>Weekend admissions were associated with delayed IABP placement</li>
                      <li>Delayed placement correlated with increased postoperative complications</li>
                      <li>The "weekend effect" was more pronounced in non-teaching hospitals</li>
                    </ul>
                    <p>Published in <em>Journal of Cardiothoracic Surgery</em> (Impact Factor: 1.737)</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span>, Axtell A, Chang D, Melnitchouk S, Sundt TM 3rd, Fiedler AG. <a href="https://doi.org/10.1186/s13019-020-01259-z" target="_blank" className="text-blue-600 hover:underline">Intra-aortic balloon pump placement in coronary artery bypass grafting patients by day of admission.</a> <em>J Cardiothorac Surg</em>. 2020 Aug 14;15(1):219. doi: 10.1186/s13019-020-01259-z.</li>
              </Tooltip>
              
              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">Does preoperative pharmacologic prophylaxis reduce the rate of venous thromboembolism in pancreatectomy patients?</h4>
                    <p className="mb-2">A systematic review and meta-analysis examining the efficacy of preoperative venous thromboembolism (VTE) prophylaxis in pancreatic surgery.</p>
                    <p className="mb-2">Major outcomes:</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>Analysis of 23 studies with 9,147 patients undergoing pancreatectomy</li>
                      <li>Preoperative prophylaxis significantly reduced postoperative VTE events</li>
                      <li>No significant increase in bleeding complications was observed</li>
                      <li>Extended prophylaxis provided additional risk reduction for high-risk patients</li>
                    </ul>
                    <p>Published in <em>HPB</em>, the official journal of the International Hepato-Pancreato-Biliary Association (Impact Factor: 3.401)</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help">Fong ZV, Sell NM, Fernandez-Del Castillo C, <span className="font-medium">Del Carmen GA</span>, Ferrone CR, Chang DC, Warshaw AL, Polk HC Jr, Lillemoe KD, Qadan M. <a href="https://doi.org/10.1016/j.hpn.2019.10.2437" target="_blank" className="text-blue-600 hover:underline">Does preoperative pharmacologic prophylaxis reduce the rate of venous thromboembolism in pancreatectomy patients?</a> <em>HPB (Oxford)</em>. 2020 Jul;22(7):1020-1024. doi: 10.1016/j.hpn.2019.10.2437.</li>
              </Tooltip>
              
              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">Does the Day of the Week Predict a Cesarean Section? A Statewide Analysis</h4>
                    <p className="mb-2">This population-based study investigated temporal patterns in cesarean section rates using comprehensive statewide data.</p>
                    <p className="mb-2">Key findings:</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>Analysis of 1.2 million deliveries across 49 hospitals</li>
                      <li>Identified significant variations in C-section rates by day of the week</li>
                      <li>Friday showed the highest elective C-section rate (22.6%)</li>
                      <li>These patterns persisted after controlling for medical indications</li>
                      <li>Hospital-level factors contributed significantly to the observed variations</li>
                    </ul>
                    <p>Published in <em>Journal of Surgical Research</em> (Impact Factor: 2.574)</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span>, Stapleton S, Qadan M, Del Carmen MG, Chang D. <a href="https://doi.org/10.1016/j.jss.2019.07.027" target="_blank" className="text-blue-600 hover:underline">Does the Day of the Week Predict a Cesarean Section? A Statewide Analysis.</a> <em>J Surg Res</em>. 2020 Jan; 245:288-294. doi: 10.1016/j.jss.2019.07.027.</li>
              </Tooltip>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Humanities & Medical Narrative Publications</h3>
            <ul className="space-y-4 text-sm text-gray-600 font-light">
              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">To Choose the Self</h4>
                    <p className="mb-2">A reflective narrative exploring the tensions between self-care and professional responsibilities in modern medicine.</p>
                    <p className="mb-2">Key themes:</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>The ethical dimensions of physician self-care</li>
                      <li>Burnout as both a personal and systemic issue</li>
                      <li>The false dichotomy between patient care and provider wellbeing</li>
                      <li>Structural reforms needed in medical education and practice</li>
                    </ul>
                    <p>Published in <em>Human Ties Digest</em>, a journal dedicated to medical humanities and narrative medicine.</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span> (2023). <a href="https://humanties.me/2023/03/22/to-choose-the-self/" target="_blank" className="text-blue-600 hover:underline">To Choose the Self.</a> <em>Human Ties Digest</em>. 2023 Mar 22.</li>
              </Tooltip>
              
              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">Hope in the Time of Covid</h4>
                    <p className="mb-2">A personal essay examining the concept of hope during healthcare crises from both a clinical and philosophical perspective.</p>
                    <p className="mb-2">Central themes:</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>The evolving nature of hope throughout the pandemic</li>
                      <li>Hope as both a clinical tool and a psychological necessity</li>
                      <li>The ethical challenges of maintaining hope while being truthful</li>
                      <li>Community resilience and collective hope during sustained crisis</li>
                    </ul>
                    <p>Published in <em>Human Ties Digest</em>, during the height of the pandemic's uncertainty</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span> (2022). <a href="https://humanties.me/2022/01/14/hope-in-the-time-of-covid/" target="_blank" className="text-blue-600 hover:underline">Hope in the Time of Covid.</a> <em>Human Ties Digest</em>. 2022 Jan 14.</li>
              </Tooltip>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Manuscripts Under Review &amp; In Progress</h3>
            <ul className="space-y-4 text-sm text-gray-600 font-light">
              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">A Property-Based Framework for Evaluating the Onset of Moral Status</h4>
                    <p className="mb-2">Proposes an emergent-property framework to evaluate when moral status begins and how those thresholds guide clinical policy.</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>Tests traditional conception-based arguments against the new framework.</li>
                      <li>Applies criteria to bioethical dilemmas, including embryo research and end-of-life care.</li>
                      <li>Outlines implications for surgical counseling and institutional ethics committees.</li>
                    </ul>
                    <p>Submitted to <em>Bioethics</em> in October 2025.</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span>. <strong>A Property-Based Framework for Evaluating the Onset of Moral Status.</strong> <em>Bioethics</em>. Submitted October 2025.</li>
              </Tooltip>

              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">Bridging the Communication Gap in Neurology</h4>
                    <p className="mb-2">Head-to-head comparison of Google Translate and GPT-4o for English-to-Spanish neurological phrase translation.</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>120 standardized clinical prompts audited by bilingual neurologists.</li>
                      <li>Accuracy, formality, and potential harm scoring frameworks.</li>
                      <li>Recommendations for safe deployment of AI translation tools.</li>
                    </ul>
                    <p>Under review at <em>Patient Education and Counseling</em>; submitted February 2025.</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span>, Alonzo BR, Cruz G. <strong>Bridging the Communication Gap: An Analysis of Google Translate and GPT-4o in English to Spanish Translation in Neurology.</strong> <em>Patient Education and Counseling</em>. Under review.</li>
              </Tooltip>

              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">Immunological Landscape Review</h4>
                    <p className="mb-2">Collaborative review synthesizing innate and adaptive immune mechanisms in pre-cancerous colorectal lesions.</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>Maps immune microenvironment shifts along the adenoma–carcinoma sequence.</li>
                      <li>Highlights intervention points for immunoprevention trials.</li>
                      <li>Integrates single-cell and spatial transcriptomics data.</li>
                    </ul>
                    <p>Manuscript in preparation.</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span>, Schmit S, Vilar E. <strong>A Review of the Immunological Landscape for Pre-Cancerous Colorectal Lesions.</strong> Manuscript in preparation.</li>
              </Tooltip>

              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">Reddit Bariatric vs. Medication Analysis</h4>
                    <p className="mb-2">Mixed-methods analysis of Reddit discussions comparing bariatric surgery and GLP-1 medications.</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>Topic modeling to surface pre-op concerns and post-op satisfaction themes.</li>
                      <li>Sentiment tracking by intervention type and timeline.</li>
                      <li>Implications for patient education and counseling.</li>
                    </ul>
                    <p>Manuscript in preparation.</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span>, Patel D, Zaman JA. <strong>Pre-Operative Concerns and Post-Operative Satisfaction: Comparing Attitudes Towards Bariatric Surgery and Medication Intervention for Weight Loss on Reddit.</strong> Manuscript in preparation.</li>
              </Tooltip>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Conference Oral Presentations</h3>
            <ul className="space-y-4 text-sm text-gray-600 font-light">
              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">Benchmarking GPT Vision for Chest X-Ray Interpretation</h4>
                    <p className="mb-2">Evaluates GPT’s radiology performance across zero-shot, one-shot, and few-shot learning setups.</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>VinDr-CXR dataset benchmarking with accuracy, recall, and F1 tracking.</li>
                      <li>Prompt engineering to pair imaging with clinical vignettes.</li>
                      <li>Highlights opportunities for safe adoption of agentic computer vision tools.</li>
                    </ul>
                    <p>Accepted for oral presentation at the 23rd Annual Academic Surgical Congress.</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span>, Chen C, Shahbazov R. <strong>Benchmarking Robust Computer Vision Models: GPT’s Vision Capabilities in Radiological Interpretation of Chest X-Rays with Zero-Shot, One-Shot, and Few-Shot Learning.</strong> <em>Annual Academic Surgical Congress</em>. 23rd Annual Conference; Accepted for oral presentation.</li>
              </Tooltip>

              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">Assessing Implicit Bias in Clinical LLMs</h4>
                    <p className="mb-2">Tests GPT-4o decision support against vignette permutations to quantify bias patterns.</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>Systematically varies patient demographics within identical surgical cases.</li>
                      <li>Measures treatment recommendations, counseling language, and confidence scoring.</li>
                      <li>Discusses safeguards for algorithmic fairness in perioperative AI tools.</li>
                    </ul>
                    <p>Accepted for oral presentation at the 23rd Annual Academic Surgical Congress.</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span>, Mohanraj D, John M, Malcom M, McKay S, Marrin A, Singh TP. <strong>Assessing Implicit Bias in the Clinical Decision-Making of Large Language Models.</strong> <em>Annual Academic Surgical Congress</em>. 23rd Annual Conference; Accepted for oral presentation.</li>
              </Tooltip>

              {/* Added ASC 2025 Presentation (Presented) */}
              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">Defining AI's Role in Medical Ethics: Fine-Tuning Language Models to Enhance Surgical Decision-Making</h4>
                    <p className="mb-2">This study fine-tuned Meta's Llama 3.1 on diverse ethical scenarios to assess its ability to augment physician ethical decision-making and identify its inherent preferences.</p>
                    <p className="mb-2">Methods:</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>Generated training data using GPT-4o, ensuring diverse ethical cases.</li>
                      <li>Fine-tuned Llama 3.1 on this dataset.</li>
                      <li>Assessed model recommendations (for/against RYGB for a high-risk patient) based on beneficence, non-maleficence, autonomy, and justice.</li>
                    </ul>
                    <p className="mb-2">Results: Model overwhelmingly recommended surgery (70%), primarily citing patient autonomy (39%), but showed reluctance to provide specific ethical guidelines in equivocal cases (18%).</p>
                    <p className="mb-2">Conclusion: Demonstrates LLMs can generate ethical decisions aligned with current frameworks but require curated training and validation by ethicists.</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span>, Mettetal E, Marshall G, Moncada-Ortega A. Defining AI's Role in Medical Ethics: Fine-Tuning Language Models to Enhance Surgical Decision-Making. <em>Annual Academic Surgical Congress</em>. 20th Annual Conference; 2025 Feb; Las Vegas, NV.</li>
              </Tooltip>

              {/* Added ASC 2025 Presentation (Mentored) */}
              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">Linguistic Characteristics of Simulated Goals of Care Discussions and Implications for Residency Training</h4>
                    <p className="mb-2">Utilized Microsoft Autogen with GPT-4 agents (Physician, Patient simulating emotions) to simulate Goals of Care (GOC) discussions for widely metastatic malignancy.</p>
                    <p className="mb-2">Methods:</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>50 simulations across 5 emotional states (anger, sadness, acceptance, denial, anxiety).</li>
                      <li>Lexical analysis performed: message length, keyword frequency, readability (Flesch-Kincaid), named entities.</li>
                    </ul>
                    <p className="mb-2">Results: Average readability was 5th grade level. Keywords varied by emotional state (e.g., "fight" in acceptance, "symptoms" in denial). "Care", "support", "life", "time" were most frequent overall.</p>
                    <p className="mb-2">Conclusion: Agentic AI shows promise for communication training. Future models need curation with real GOC transcripts for enhanced realism.</p>
                    <p className="mt-3 italic text-xs">Note: Served as project mentor for this resident/student presentation.</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                 <li className="cursor-help">Mertz G*, Menon S*, Galbraith D, Krzesaj PK*, <span className="font-medium">Del Carmen GA</span>. Linguistic Characteristics of Simulated Goals of Care Discussions and Implications for Residency Training. <em>Annual Academic Surgical Congress</em>. 20th Annual Conference; 2025 Feb; Las Vegas, NV. (*Equal Contribution)</li>
              </Tooltip>

              {/* Replaced placeholder/previous ASC 2024 with actual presentation (Mentored) */}
              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">Analyzing Readability and Sentiment of Patient Health Information Online for Whipple Procedures</h4>
                    <p className="mb-2">Quantified readability, sentiment, and subjectivity of online resources for Whipple surgeries using Natural Language Processing (NLP).</p>
                     <p className="mb-2">Methods:</p>
                     <ul className="list-disc pl-4 mb-2">
                       <li>Cross-sectional analysis of top 25 webpages (academic, journal, hospital, commercial, unspecified).</li>
                       <li>Readability measured via Flesch-Kincaid, SMOG, Coleman-Liau, Gunning-Fog.</li>
                       <li>Sentiment/subjectivity assessed using Python's TextBlob.</li>
                     </ul>
                     <p className="mb-2">Results: Mean readability exceeded recommended 6th-grade level across all indices. Journal articles (15.2) and academic sites (12.9) were particularly high. Sentiment was mildly positive, subjectivity moderate.</p>
                     <p className="mb-2">Conclusion: Online health information for Whipple surgery is often inaccessible, potentially worsening disparities. NLP can help institutions improve materials.</p>
                     <p className="mt-3 italic text-xs">Note: Served as project mentor for this resident/student presentation.</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help">Menon S*, Mertz G*, <span className="font-medium">Del Carmen GA</span>. Simulating Goals of Care Discussions with Language Models: Artificial Intelligence as an Adjunct to Physician Skill Training. <em>Annual Academic Surgical Congress</em>. 19th Annual Conference; 2024 Feb; Washington D.C., USA. (*Equal Contribution)</li>
                {/* Citation updated based on second abstract provided for this topic */} 
              </Tooltip>

              {/* Existing ASC 2023 Presentation */}
              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">What is the Prevalent Ethical Recommendation in the Medical Literature? An Algorithmic Approach</h4>
                    <p className="mb-2">This research presented a computational approach to identifying and analyzing ethical recommendations in medical publications.</p>
                    <p className="mb-2">Methodology and findings:</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>Development of a machine learning algorithm to classify ethical recommendations</li>
                      <li>Analysis of recommendations across 15 medical specialties</li>
                      <li>Identification of variations in ethical frameworks between specialties</li>
                      <li>Temporal trends in ethical reasoning over the past three decades</li>
                    </ul>
                    <p>Presented at the 15th Annual Academic Surgical Congress in Orlando, Florida</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span>, et al. What is the Prevalent Ethical Recommendation in the Medical Literature? An Algorithmic Approach. <em>Annual Academic Surgical Congress</em>. 15th Annual Conference; 2020 Feb; Orlando, FL.</li>
              </Tooltip>
              
              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">Does the Day of the Week Predict a Cesarean Section? A Statewide Analysis</h4>
                    <p className="mb-2">This presentation shared findings from a comprehensive analysis of temporal patterns in cesarean section rates.</p>
                    <p className="mb-2">Key results presented:</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>Analysis of 1.2 million deliveries across Massachusetts hospitals</li>
                      <li>Significant day-of-week variation in elective C-section rates</li>
                      <li>Association between weekend staffing patterns and C-section decision-making</li>
                      <li>Policy implications for standardizing obstetric care delivery</li>
                    </ul>
                    <p>Presented at the 14th Annual Academic Surgical Congress in Houston, Texas</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span>, et al. Does the Day of the Week Predict a Cesarean Section? A Statewide Analysis. <em>Annual Academic Surgical Congress</em>. 14th Annual Conference; 2019 Feb; Houston, TX.</li>
              </Tooltip>
              
              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">Pre-Op IABP Placement Rates in Coronary Artery Bypass Grafting Patients by Day of Admission</h4>
                    <p className="mb-2">This presentation explored temporal disparities in the use of intra-aortic balloon pumps for CABG patients.</p>
                    <p className="mb-2">Research methodology:</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>Retrospective analysis of a national inpatient database</li>
                      <li>Evaluation of weekend vs. weekday IABP placement timing</li>
                      <li>Assessment of institutional factors affecting placement decisions</li>
                      <li>Correlation between placement timing and patient outcomes</li>
                    </ul>
                    <p>Presented at the 14th Annual Academic Surgical Congress in Houston, Texas</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span>, et al. Pre-Op IABP Placement Rates in Coronary Artery Bypass Grafting Patients by Day of Admission. <em>Annual Academic Surgical Congress</em>. 14th Annual Conference; 2019 Feb; Houston, TX.</li>
              </Tooltip>
            </ul>
          </div>
          
          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Abstracts Under Consideration for Oral Presentation</h3>
            <ul className="space-y-4 text-sm text-gray-600 font-light">
              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">Reddit Bariatric vs. Medication SAGES Submission</h4>
                    <p className="mb-2">Extends the Reddit analysis to a conference-ready dataset for SAGES 2026.</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>Compares perceptions of Roux-en-Y gastric bypass, sleeve gastrectomy, and GLP-1 medications.</li>
                      <li>Highlights pre-operative concerns, motivators, and post-operative satisfaction themes.</li>
                      <li>Positions social listening as an adjunct to surgical counseling.</li>
                    </ul>
                    <p>Under review for the Society of American Gastrointestinal and Endoscopic Surgeons (SAGES) 2026 meeting.</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span>, Mohanraj D, John M, Malcom M, McKay S, Marrin A, Zaman J. <strong>Pre-Operative Concerns and Post-Operative Satisfaction: Comparing Attitudes Towards Bariatric Surgery and Medication Intervention for Weight Loss on Reddit.</strong> <em>SAGES 2026.</em> Under review.</li>
              </Tooltip>

              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">MARCUS Emerging Technology Submission</h4>
                    <p className="mb-2">Showcases the MARCUS retrieval-augmented system for SAGES Emerging Technology 2026.</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>Focuses on multi-tenant architecture for residency information centralization.</li>
                      <li>Demonstrates version control, audit logging, and embedded citations.</li>
                      <li>Outlines roadmap for multimodal expansion.</li>
                    </ul>
                    <p>Pending submission to the SAGES Emerging Technology session (2026).</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span>, Shukla D, Zaman J. <strong>Multimodal Agentic Retrieval for Clinical Utility and Synthesis (MARCUS): A Retrieval-Augmented Generation System for Residency Information Centralization.</strong> <em>SAGES Emerging Technology 2026.</em> Pending submission.</li>
              </Tooltip>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Conference Poster Presentations</h3>
            <ul className="space-y-4 text-sm text-gray-600 font-light">
              {/* Removed Whipple NLP poster as it was moved/updated to Oral Presentations */}
              {/* <Tooltip ...> ... </Tooltip> */}
              
              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">Tackling Scientific Racism: Modifying the Critical Appraisal Skills Programme (CASP) Checklist to Advance Health Equity</h4>
                    <p className="mb-2">This collaborative project introduced modifications to standard research appraisal tools to address scientific racism in medical literature.</p>
                    <p className="mb-2">Key innovations:</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>Modified the Critical Appraisal Skills Programme (CASP) checklist to incorporate a health equity lens</li>
                      <li>Added questions like "Is the use of 'race' meant to serve as a measure of socioeconomic status?" and "Can conclusions about 'race' be better explained by environmental influences?"</li>
                      <li>Designed to empower medical students to identify and evaluate scientific racism in pre-clinical curriculum</li>
                      <li>Aimed at reducing healthcare disparities by addressing biases in medical education content</li>
                    </ul>
                    <p>Presented at the 2023 Health Equity Research Summit at Baylor College of Medicine.</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span>, McCleary-Gaddy A. Tackling Scientific Racism: Modifying the Critical Appraisal Skills Programme (CASP) Checklist to Advance Health Equity. <em>Baylor College of Medicine. 2023 Health Equity Research Summit</em>; Houston, TX.</li>
              </Tooltip>
              
              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">Natural Language Processing as a Tool for Ethical Consensus Analysis in Organ Transplant Allocation</h4>
                    <p className="mb-2">This poster presentation demonstrated computational approaches to analyzing ethical frameworks in transplantation literature.</p>
                    <p className="mb-2">Technical methodology:</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>Text corpus compilation from medical, ethical, and legal transplant literature</li>
                      <li>Development of custom NLP algorithms for ethical argument extraction</li>
                      <li>Network analysis of argument patterns and citation relationships</li>
                      <li>Visualization of consensus evolution across medical specialties</li>
                    </ul>
                    <p>Presented at the 11th Annual Latino Medical Student Association Conference in Fort Worth, Texas</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span>. Natural Language Processing as a Tool for Ethical Consensus Analysis in Organ Transplant Allocation. <em>Latino Medical Student Association</em>. 11th Annual Conference; 2023; Fort Worth, TX.</li>
              </Tooltip>
              
              <Tooltip
                content={
                  <div>
                    <h4 className="font-medium mb-2">Impact of Hispanic Ethnicity on Colorectal Cancer Surveillance Outcomes and Management in an Institutional Longitudinal Cohort of Lynch Syndrome Patients</h4>
                    <p className="mb-2">This research investigated potential disparities in Lynch Syndrome management among Hispanic patients.</p>
                    <p className="mb-2">Key findings:</p>
                    <ul className="list-disc pl-4 mb-2">
                      <li>Analysis of surveillance outcomes across ethnic groups in a Lynch Syndrome cohort</li>
                      <li>Identification of differences in cancer detection timing and stage</li>
                      <li>Examination of cultural and socioeconomic factors affecting surveillance adherence</li>
                      <li>Recommendations for culturally-tailored genetic counseling approaches</li>
                    </ul>
                    <p>Presented at the MD Anderson Summer Experience research symposium in Houston, Texas</p>
                  </div>
                }
                position="bottom"
                width="max-w-md"
              >
                <li className="cursor-help"><span className="font-medium">Del Carmen GA</span>, et al. Impact of Hispanic Ethnicity on Colorectal Cancer Surveillance Outcomes and Management in an Institutional Longitudinal Cohort of Lynch Syndrome Patients. <em>MD Anderson Summer Experience</em>; 2021; Houston, TX.</li>
              </Tooltip>
            </ul>
          </div>

          {/* Removed 'Manuscripts in Preparation' title and moved content to 'Research in Progress' section */}
          {/* <div className="mb-8"> ... </div> */}
        </section>
);

export default PublicationsSection;
