export const futureProjectsData = [
  {
    title: 'A Property-Based Framework for Evaluating the Onset of Moral Status',
    summary:
      'Developing a philosophical framework that assesses when moral status emerges using property-based criteria instead of categorical thresholds.',
    description:
      'Extends contemporary bioethical discourse by formalizing a property-based approach to moral status, scrutinizing classical conceptions such as the Conception view and mapping implications for policy.',
    components: [
      'Defines necessary and sufficient conditions that any proposed property must meet to confer moral status.',
      'Applies the framework to fertilization, brain development, and other milestone events in clinical ethics debates.',
      'Explores downstream implications for abortion, organ allocation, and end-of-life decision-making.',
      'Situates the proposal within broader moral philosophy and bioethics literature to anticipate critiques.',
    ],
    status: 'Manuscript submitted to Bioethics (October 2025).',
  },
  {
    title: 'Bridging the Communication Gap: Evaluating Google Translate and GPT-4o in Neurology',
    summary:
      'Head-to-head comparison of automated translation tools for English-to-Spanish neurologic assessments among patients with limited English proficiency.',
    description:
      'Assesses the safety and clinical fidelity of AI-driven translation by benchmarking Google Translate and GPT-4o outputs against certified medical interpreters for common neurology encounters.',
    components: [
      'Curated corpus of 120+ neurological phrases spanning examination instructions, counseling, and informed consent.',
      'Dual-review by bilingual neurologists evaluating accuracy, register (usted vs. tú), and clinical risk.',
      'Error taxonomy mapping mistranslations to potential patient safety hazards.',
      'Recommendations for institutional deployment of translation support in neurology clinics.',
    ],
    status: 'Submitted to Patient Education and Counseling (February 2025) and currently under review.',
  },
  {
    title: 'A Review of the Immunological Landscape for Pre-Cancerous Colorectal Lesions',
    summary:
      'Comprehensive scoping review of immunological mechanisms driving progression from precursor lesions to colorectal malignancy.',
    description:
      'Synthesizes multi-omic and translational research to map the immune microenvironment of pre-cancerous colorectal lesions, highlighting opportunities for chemoprevention and targeted surveillance.',
    components: [
      'Systematic extraction of immunologic markers implicated in Lynch Syndrome and sporadic colorectal neoplasia.',
      'Comparison of innate and adaptive immune responses across lesion types and disease stages.',
      'Identification of therapeutic targets and gaps ripe for translational investigation.',
      'Roadmap for integrating immunoprofiling into longitudinal surveillance protocols.',
    ],
    status: 'Literature synthesis in progress; manuscript drafting underway.',
  },
  {
    title: 'Pre-Operative Concerns and Post-Operative Satisfaction: Bariatric Surgery vs. Medication for Weight Loss on Reddit',
    summary:
      'Natural language processing analysis of online communities discussing bariatric surgery compared with pharmacologic weight-loss interventions.',
    description:
      'Leverages Reddit discourse to understand patient expectations and satisfaction across surgical and medical weight-loss pathways, informing patient education and shared decision-making.',
    components: [
      'Dataset construction from subreddit communities focused on bariatric surgery and GLP-1 medications.',
      'Sentiment, subjectivity, and topic modeling to differentiate pre-operative concerns and post-intervention reflections.',
      'Comparative analysis of perceived risks, support structures, and satisfaction trajectories.',
      'Alignment of qualitative insights with emerging clinical trial data to contextualize patient narratives.',
    ],
    status: 'Manuscript in progress; abstract under review for SAGES 2026.',
  },
  {
    title: 'Benchmarking Robust Computer Vision Models for Radiological Interpretation',
    summary:
      'Evaluating GPT-4o Vision and comparator models on chest X-ray interpretation using zero-shot, one-shot, and few-shot paradigms.',
    description:
      'Benchmarks multimodal large language models against established radiology datasets to characterize diagnostic accuracy, calibration, and failure modes in thoracic imaging.',
    components: [
      'VinDr-CXR dataset curation with balanced representation of common thoracic pathologies.',
      'Prompt engineering experiments testing varying context windows and clinical histories.',
      'Performance comparison across zero/one/few-shot configurations with detailed error analysis.',
      'Framework for future deployment guidelines in surgical and critical care settings.',
    ],
    status: 'Accepted for oral presentation at the 23rd Annual Academic Surgical Congress (2026).',
  },
  {
    title: 'Assessing Implicit Bias in the Clinical Decision-Making of Large Language Models',
    summary:
      'Interrogating GPT-4o clinical recommendations across diverse patient demographics to surface implicit bias.',
    description:
      'Constructs structured clinical vignettes with demographic variations to evaluate how stochasticity and prompt design influence AI-generated care plans.',
    components: [
      'Creation of baseline, bias-testing, and benign vignettes across high-yield surgical scenarios.',
      'Comparison of deterministic and higher-temperature outputs to assess variability and bias expression.',
      'Qualitative review of safety-critical deviations and recommendations for guardrail development.',
      'Planned comparison against resident and attending surgeon responses for contextual benchmarking.',
    ],
    status: 'Accepted for oral presentation at the 23rd Annual Academic Surgical Congress (2026).',
  },
  {
    title: 'Multimodal Agentic Retrieval for Clinical Utility and Synthesis (MARCUS)',
    summary:
      'Designing a retrieval-augmented generation system to centralize residency information and streamline onboarding.',
    description:
      'Combines structured program data, institutional policies, and resident-generated knowledge into a multimodal assistant that reduces onboarding friction and preserves institutional memory.',
    components: [
      'Hybrid knowledge graph linking documents, videos, and workflows relevant to surgical residency training.',
      'Agentic orchestration pipeline coordinating retrieval, synthesis, and recommendation modules.',
      'Evaluation rubric measuring accuracy, timeliness, and perceived utility among resident beta testers.',
      'Deployment roadmap aligned with institutional governance and data privacy requirements.',
    ],
    status: 'Manuscript in development; abstract pending submission to SAGES Emerging Technology 2026.',
  },
];

export type FutureProject = (typeof futureProjectsData)[number];
