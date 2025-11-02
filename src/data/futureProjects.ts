export const futureProjectsData =
[
    {
      title: "NLP Analysis of Online Bariatric & Weight Loss Communities (Reddit)",
      description: "Utilizing Natural Language Processing (NLP) and Machine Learning (ML) to analyze user-generated content on Reddit communities (e.g., r/bariatricsurgery, r/Ozempic) dedicated to Roux-en-Y gastric bypass, sleeve gastrectomy, and semaglutide.",
      components: [
        "Large-scale data extraction and preprocessing from relevant subreddits.",
        "Application of NLP for sentiment analysis, subjectivity scoring, and topic modeling (LDA).",
        "Comparative analysis of discussions surrounding surgical vs. pharmacological weight loss.",
        "Identification of frequently discussed adverse effects, patient concerns (pre/post-intervention), and themes of peer support.",
      ],
      status: "Initial analyses complete. Manuscript in final preparation stages.",
      // timeline: "Targeting journal submission Q1 2025." // Removed
    },
    {
      title: "Accuracy of AI Translation Tools in Spanish Neurology",
      description: "Comparative analysis evaluating the accuracy and clinical appropriateness of AI translation tools (Google Translate and GPT-4o) for common English-to-Spanish clinical questions used in neurologic assessments.",
      components: [
        "Evaluation of 120+ standard neurological phrases translated by Google Translate and GPT-4o.",
        "Assessment by bilingual neurologists for clinical accuracy and potential risk.",
        "Analysis of consistency, formality (usted vs. tú), and error patterns.",
        "Calculation of inter-rater reliability (PABAK scores).",
      ],
      status: "Manuscript submitted.", // Simplified status, removed journal name
      // timeline: "Awaiting reviewer feedback." // Removed
    },
    {
       title: "Property-Based Framework for Moral Status Onset",
       description: "Philosophical essay proposing a novel framework to assess claims about when moral status begins, critically evaluating the \"Conception view\" often used in abortion ethics debates.",
       components: [
         "Defines three necessary conditions (Antecedent, Shared, Necessity/Sufficiency) for a property P to establish moral onset.",
         "Analyzes candidates for P (e.g., genetic uniqueness, causal trajectory) under the Conception view.",
         "Argues fertilization fails to meet the criteria, challenging its designation as the definitive point of moral onset.",
         "Application to other bioethical dilemmas (e.g., brain death).",
       ],
       status: "Manuscript submitted.", // Simplified status, removed journal name
       // timeline: "Awaiting initial editorial decision/reviewer assignment." // Removed
     },
     {
       title: "Implicit Bias Assessment in Clinical LLMs",
       description: "Investigates whether a widely used LLM (GPT-4o) exhibits implicit biases when responding to clinical vignettes with varying patient characteristics (race, gender, socioeconomic status).",
       components: [
         "Development of structured clinical vignettes (Base, Bias, Benign variations) across different specialties.",
         "Analysis of LLM responses using API calls under different determinism settings (temperature 0.2 vs 0.8).",
         "Qualitative and quantitative assessment of response variations linked to demographic cues.",
         "Comparison with human clinician responses (planned).",
       ],
       status: "Vignette development complete. Initial LLM response data collected. Analysis ongoing.",
       // timeline: "Manuscript drafting planned Q2-Q3 2025." // Removed
     },
     {
       title: "Ethical Frameworks for Autonomous AI in Healthcare",
       description: "Ethical analysis exploring the challenges of integrating autonomous AI into healthcare, focusing on accountability, empathy, and patient-centered values.",
       components: [
         "Examination of AI alignment with core medical ethics principles (autonomy, beneficence, etc.).",
         "Analysis of the \"many hands\" problem and responsibility gaps for AI errors.",
         "Discussion of simulated vs. genuine AI empathy and its ethical implications.",
         "Development of policy/practice recommendations for responsible AI adoption.",
       ],
       status: "Literature review and conceptual framework development ongoing. Preparing commentary/perspective piece.",
       // timeline: "Targeting submission Q2 2025." // Removed
     },
     {
       title: "Benchmarking Computer Vision Models in Radiology (CXR)",
       description: "Evaluates the diagnostic performance of OpenAI's GPT-4 Vision (GPT-4oV) model on interpreting chest X-rays (CXRs) using the VinDr-CXR dataset.",
       components: [
         "Systematic testing using OpenAI's API under zero-shot, one-shot (with normal CXR comparison), and contextual learning (with clinical history) conditions.",
         "Calculation of key performance metrics (accuracy, recall, precision, F1, NPV).",
         "Analysis across different pathologies vs. radiologist consensus.",
         "Prompt engineering experiments to optimize performance.",
       ],
       status: "Data acquisition and preprocessing complete. API integration developed. Main experimental runs in progress.",
       // timeline: "Data analysis and manuscript drafting planned." // Simplified timeline
     }
  ];
export type FutureProject = typeof futureProjectsData[number];
