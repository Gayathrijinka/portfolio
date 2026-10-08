export const projects = [
  {
    id: "quantum-crop-prediction",
    title: "Quantum-Enhanced Crop Market Price Prediction",
    tagline: "Academic Capstone Spotlight Project",
    category: "AI / ML & Research",
    isFeatured: true,
    isCapstone: true,
    badgeText: "Capstone / Research Spotlight",
    date: "Academic Project",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Machine Learning",
      "Quantum Machine Learning",
    ],
    shortDescription:
      "A machine learning project focused on predicting agricultural crop market prices using historical onion market price data.",
    problem:
      "Agricultural commodity prices exhibit high volatility and complex seasonal price variations, making price forecasting difficult for agricultural market stakeholders.",
    solution:
      "Engineered a machine learning pipeline evaluated against ten years of historical crop market data, exploring modern machine learning and quantum-enhanced machine learning techniques for price estimation.",
    dataset: "Preprocessed onion market price dataset covering 2014–2024",
    githubUrl: "https://github.com/Gayathrijinka",
    liveDemoUrl: null, // Set to URL when live demo is hosted
    flowType: "steps",
    architectureSteps: [
      "Historical Market Dataset (2014–2024)",
      "Data Cleaning & Feature Engineering",
      "Classical Machine Learning Baseline",
      "Quantum Machine Learning Feature Formulation",
      "Predictive Market Price Analysis",
    ],
    modalDetails: {
      overview:
        "An in-depth academic capstone project investigating predictive machine learning approaches for agricultural commodity prices, centered on historical onion market records spanning 2014 to 2024.",
      problemStatement:
        "Market price variations for key agricultural produce are influenced by seasonality, regional supply trends, and non-linear economic factors. Traditional statistical forecasts often struggle with these dynamics, creating uncertainty across agricultural supply networks.",
      approach:
        "Systematic preprocessing of ten years of market price records, extraction of temporal trends, building machine learning models, and exploring quantum-inspired / quantum machine learning paradigms to study market price patterns.",
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Machine Learning",
        "Quantum Machine Learning",
      ],
      architecture: [
        "Ingestion: Preprocessed onion market price dataset covering 2014–2024",
        "Preprocessing: Missing value treatment, time-series alignment, and feature extraction",
        "Modeling: Scikit-learn regression models alongside quantum machine learning algorithms",
        "Evaluation: Comparative price error analysis across market price fluctuations",
      ],
      keyFeatures: [
        "Decade-long historical market price dataset (2014–2024)",
        "Structured exploratory data analysis and feature transformation",
        "Integration of quantum machine learning concepts with classical ML",
        "Commodity price pattern visualization and trend forecasting",
      ],
      challenges: [
        "Handling extreme market spikes and price fluctuations across 2014–2024",
        "Formulating feature representations suitable for quantum machine learning routines",
        "Balancing classical regression baselines with quantum circuit simulations",
      ],
      futureImprovements: [
        "Incorporate multi-region agricultural market feeds in real time",
        "Evaluate deeper quantum variational circuits with noisy-intermediate scale quantum (NISQ) frameworks",
        "Deploy an interactive web dashboard for real-time market queries",
      ],
    },
  },
  {
    id: "anemia-sense",
    title: "Anemia Sense",
    tagline: "Automated Clinical Screening Application",
    category: "AI / ML & Full Stack",
    isFeatured: true,
    isCapstone: false,
    badgeText: "Featured Project",
    date: "July 2025",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "Render",
    ],
    shortDescription:
      "An automated anemia detection application using machine learning. The system uses a Flask backend with a web-based frontend and was deployed on Render.",
    problem:
      "Early detection of anemia often suffers from delays in diagnostic workflows and lack of rapid preliminary screening mechanisms in low-resource environments.",
    solution:
      "Constructed an automated prediction pipeline combining machine learning classification models with a lightweight Flask web interface, allowing instant preliminary assessments from user health parameters.",
    dataset: "Clinical diagnostic parameters dataset",
    githubUrl: "https://github.com/Gayathrijinka",
    liveDemoUrl: "https://render.com", // Deployed on Render
    flowType: "pipeline",
    architectureSteps: [
      "User Parameter Input",
      "Flask REST API Backend",
      "Scikit-learn ML Classifier",
      "Risk Score Estimation",
      "Interactive Web Results on Render",
    ],
    modalDetails: {
      overview:
        "An automated machine learning web application built in July 2025 that predicts anemia risk from clinical diagnostic measurements, featuring a Flask REST backend and deployed on Render.",
      problemStatement:
        "Diagnostic delays can lead to unmanaged complications. Accessible, automated screening tools can assist in rapid early triage prior to extensive laboratory tests.",
      approach:
        "Preprocessed medical data using Pandas, trained supervised classification models via Scikit-learn, encapsulated model inference into a Flask service, and built an intuitive responsive frontend deployed to the cloud.",
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Flask",
        "HTML",
        "CSS",
        "JavaScript",
        "Render",
      ],
      architecture: [
        "Client: Responsive HTML/CSS/JavaScript web form for clinical parameters",
        "Backend: Flask server providing API endpoints for parameter validation and scoring",
        "Inference: Trained Scikit-learn model executing automated prediction",
        "Deployment: Continuous cloud deployment hosted on Render",
      ],
      keyFeatures: [
        "Automated anemia screening based on clinical parameters",
        "Lightweight, responsive user interface accessible across mobile and desktop",
        "Low-latency REST API prediction pipeline",
        "Production deployment on Render platform",
      ],
      challenges: [
        "Ensuring reliable input normalization across variable clinical parameter ranges",
        "Managing cloud hosting constraints and environment dependencies on Render",
        "Presenting screening output clearly and responsibly for non-specialist users",
      ],
      futureImprovements: [
        "Integration of multi-language guidance for rural clinic operators",
        "Batch screening capabilities for community healthcare volunteers",
        "Explainable AI visualizers to highlight contributing biomarker factors",
      ],
    },
  },
  {
    id: "speech-translator",
    title: "Telugu-to-English Speech Translator",
    tagline: "Real-Time Regional Voice Translation",
    category: "Speech AI & Web",
    isFeatured: false,
    isCapstone: false,
    badgeText: "Voice AI",
    date: "Machine Learning Project",
    technologies: [
      "Python",
      "Flask",
      "JavaScript",
      "Speech Recognition",
      "Translation",
    ],
    shortDescription:
      "A Flask-based application that captures Telugu speech, converts it into Telugu text and translates the text into English.",
    problem:
      "Linguistic barriers prevent regional Telugu speakers from effortlessly interacting with English-dominated digital platforms, documentation, and web services.",
    solution:
      "Developed a direct speech-to-speech/text pipeline that captures spoken Telugu audio, recognizes speech phonemes to generate Telugu text, and translates it into English.",
    dataset: "Telugu audio recordings & linguistic translation models",
    githubUrl: "https://github.com/Gayathrijinka",
    liveDemoUrl: null,
    flowType: "flowchart",
    architectureSteps: [
      "Telugu Speech",
      "Speech Recognition",
      "Telugu Text",
      "Translation",
      "English Text",
    ],
    modalDetails: {
      overview:
        "A full-stack speech processing application that bridges the linguistic gap for Telugu speakers by recording audio input, performing automatic speech recognition, and translating the recognized text into English.",
      problemStatement:
        "Digital content and administrative portals are frequently in English, creating a communication barrier for individuals whose primary language is Telugu.",
      approach:
        "Audio captured via client-side microphone APIs is processed through a Python/Flask service. The backend coordinates speech recognition for Telugu phonetics and passes the resulting text to translation engines to generate coherent English output.",
      technologies: [
        "Python",
        "Flask",
        "JavaScript",
        "Speech Recognition",
        "Translation",
      ],
      architecture: [
        "Audio Capture: Browser Web Audio API recording raw Telugu audio input",
        "Speech Recognition: Processing Telugu voice packets into localized Telugu text",
        "Translation Engine: Mapping Telugu semantic tokens to English syntax",
        "Response Delivery: Real-time dual display of transcribed Telugu and translated English",
      ],
      keyFeatures: [
        "Live Telugu audio recording and stream handling",
        "Automated Telugu speech-to-text conversion",
        "High-fidelity English translation",
        "Clean, minimal interface with side-by-side transcript review",
      ],
      challenges: [
        "Handling regional Telugu dialects and acoustic background noise",
        "Optimizing audio packet transmission from frontend to Flask backend",
        "Preserving context during colloquial sentence translation",
      ],
      futureImprovements: [
        "Add synthesized text-to-speech audio output in English",
        "Support bidirectional translation (English to Telugu)",
        "Optimize offline speech caching for low-bandwidth rural connectivity",
      ],
    },
  },
  {
    id: "semantic-search-system",
    title: "Semantic Search System",
    tagline: "Context-Aware Vector Retrieval Engine",
    category: "NLP & Fast APIs",
    isFeatured: true,
    isCapstone: false,
    badgeText: "Vector Search & AI",
    date: "NLP & Backend Project",
    technologies: [
      "Python",
      "FastAPI",
      "Embeddings",
      "Vector Database",
      "Scikit-learn",
      "Semantic Cache",
    ],
    shortDescription:
      "A semantic search system that retrieves relevant information based on the meaning of user queries rather than only keyword matching. The project uses embeddings, vector search, clustering and semantic caching.",
    problem:
      "Traditional keyword-matching engines miss relevant results when queries use synonyms, paraphrased intent, or conceptually related phrasing.",
    solution:
      "Architected a vector search engine using dense neural embeddings, vector similarity calculations, clustering, and an intelligent semantic cache to serve contextual matches at high speed.",
    dataset: "Document embeddings & vector corpus",
    githubUrl: "https://github.com/Gayathrijinka",
    liveDemoUrl: null,
    flowType: "flowchart",
    architectureSteps: [
      "User Query",
      "Embedding Model",
      "Vector Search",
      "Semantic Cache",
      "Relevant Results",
    ],
    modalDetails: {
      overview:
        "An advanced semantic search service built with FastAPI, embedding representations, and vector similarity retrieval that looks beyond literal word matches to retrieve content aligned with query meaning.",
      problemStatement:
        "Lexical search algorithms fail when users formulate queries with synonyms or conceptual terms not explicitly present in the source index.",
      approach:
        "User queries are converted into high-dimensional vector embeddings. The system checks a semantic cache for nearest-neighbor similarity; if not cached, it queries vector indices and applies clustering via Scikit-learn for thematic reranking.",
      technologies: [
        "Python",
        "FastAPI",
        "Embeddings",
        "Vector Database",
        "Scikit-learn",
        "Semantic Cache",
      ],
      architecture: [
        "Query Parsing: FastAPI asynchronously receives search request",
        "Vector Encoding: Deep embedding model transforms query text into dense vectors",
        "Semantic Cache: Checks similarity threshold to return cached semantic hits instantly",
        "Vector Retrieval & Clustering: Calculates cosine similarity across vector space and clusters results",
        "Result Delivery: Returns ranked contextual matches with relevance scores",
      ],
      keyFeatures: [
        "Semantic similarity understanding beyond exact keywords",
        "High-performance FastAPI asynchronous backend",
        "Semantic caching layer reducing redundant compute and latency",
        "Clustering and vector reranking powered by Scikit-learn",
      ],
      challenges: [
        "Tuning embedding similarity thresholds to prevent false positive cache hits",
        "Optimizing indexing performance as the vector collection expands",
        "Maintaining low response latency during simultaneous vector queries",
      ],
      futureImprovements: [
        "Implement hybrid search combining BM25 keyword scoring with dense vectors",
        "Integrate cross-encoder rerankers for top retrieval precision",
        "Provide interactive vector cluster visualization in a web frontend",
      ],
    },
  },
  {
    id: "empowerher",
    title: "EmpowerHer",
    tagline: "Multilingual Opportunity & Guidance Platform",
    category: "Social Impact & Web",
    isFeatured: false,
    isCapstone: false,
    badgeText: "Social Impact Platform",
    date: "Frontend & Web Project",
    technologies: ["HTML", "CSS", "JavaScript"],
    shortDescription:
      "A multilingual web platform designed to connect rural women with skill training, education guidance and local job opportunities.",
    problem:
      "Rural women often face structural barriers including digital illiteracy, regional language constraints, and limited awareness of nearby skill development programs and safe employment.",
    solution:
      "Developed an accessible, mobile-first web portal providing tailored education guidance, localized job postings, voice-assisted searching, and offline resilience.",
    dataset: "Curated skill programs, career paths & localized opportunities",
    githubUrl: "https://github.com/Gayathrijinka",
    liveDemoUrl: null,
    flowType: "features",
    architectureSteps: [
      "User Profile & Education Input",
      "Educational Guidance Engine",
      "Tailored Skill Suggestions",
      "Local Job Directory",
      "Voice Search & Safety Resources",
    ],
    modalDetails: {
      overview:
        "A social-impact web application created to empower rural women by providing intuitive access to skill development programs, educational roadmaps, and local economic opportunities.",
      problemStatement:
        "Navigating complex governmental and educational portals is challenging for rural users due to textual density, unfamiliar terminology, and absence of regional voice-based assistance.",
      approach:
        "Designed a clean, high-contrast, lightweight web application using HTML, CSS, and JavaScript, focused on accessibility, voice search integration, and low-bandwidth resilience.",
      technologies: ["HTML", "CSS", "JavaScript"],
      architecture: [
        "Client UI: Responsive and lightweight HTML5/CSS3 interface",
        "Guidance Module: Client-side conditional logic matching education levels to skill roadmaps",
        "Voice Navigation: Web Speech API integration enabling voice search queries",
        "Offline Capabilities: Caching static resources for intermittent connectivity",
      ],
      keyFeatures: [
        "Personalized User Profile tailored to individual backgrounds",
        "Education-level based guidance and learning pathways",
        "Curated skill development suggestions for vocational growth",
        "Local job opportunities directory with direct contact points",
        "Voice search support for low-literacy accessibility",
        "Safety-focused features and emergency guidance information",
        "Offline-friendly design for low-connectivity rural environments",
      ],
      challenges: [
        "Designing an interface accessible to first-time digital users",
        "Ensuring smooth voice search handling across diverse accents",
        "Minimizing page weight so it loads rapidly on 2G/3G mobile networks",
      ],
      futureImprovements: [
        "Integrate regional Indian languages and dialect audio prompts",
        "Connect with local community coordinators via WhatsApp/SMS notifications",
        "Add micro-mentorship matching with experienced women professionals",
      ],
    },
  },
];
