// All copy on the site lives here. Components only render what they find.

export const profile = {
  name: "Mehdi Abidi",
  fullName: "Syed Muhammad Mehdi Abidi",
  role: "AI Engineer Lead",
  tagline: "Agentic AI · LLM security · Applied ML",
  location: "Karachi, Pakistan",
  intro:
    "AI Engineer Lead building agentic systems for enterprise workflows: retrieval that respects tenants, memory that follows the user, routing that picks the right model, and guardrails designed in from the start.",
  headline: ["Everything I build is", "connected"],
  photo: "/mehdi-studio.jpg",
  cv: "/Mehdi_Abidi_CV.pdf",
  email: "mehdiali78666@gmail.com",
  linkedin: "https://linkedin.com/in/mehdiabidii",
  github: "https://github.com/Mehdi-Abidi",
  facts: [
    ["Based in", "Karachi, Pakistan"],
    ["Education", "BS Computer Science, gold medalist"],
    ["Focus", "Agentic AI, RAG, agent memory, LLM security"],
    ["Leadership", "President, IEEE student branch"],
  ],
};

export type Project = {
  slug: string;
  name: string;
  short: string;
  long: string;
  tags: string[];
  github?: string;
  live?: string;
  // extra labelled repo links, for projects split across several repos
  links?: { label: string; href: string }[];
  // the parts the system is made of, shown as a small list under the description
  parts?: { name: string; text: string }[];
  // screenshots shown as a gallery in the case file; w and h are the image's
  // pixel size so the frame matches its shape exactly
  shots?: { src: string; caption: string; w: number; h: number }[];
  // graph node position on the hero stage, in px; omit to keep a project out of the graph
  x?: number;
  y?: number;
};

export const projects: Project[] = [
  {
    slug: "securesphere",
    name: "SecureSphere-LLM",
    short: "Security middleware between developer tools and any LLM: prompt injection and jailbreak detection, PII redaction, policy guardrails, audit log.",
    long: "An LLMSecOps platform that sits between VS Code and the AI coding assistants developers use every day. Every request to Copilot, Gemini, Cloud Code or Claude is intercepted, tied to the developer who sent it, screened by NeMo Guardrails, and logged before it reaches a model. Admins decide per team which protections apply and watch the traffic live from a dashboard. Built as a final year project across three services.",
    tags: ["Node.js", "NeMo Guardrails", "Presidio", "FastAPI", "React", "LLMSecOps"],
    parts: [
      {
        name: "Interception proxy",
        text: "A Node.js man in the middle proxy that decrypts editor traffic, normalises prompts and attachments from four assistant protocols into one contract, resolves the developer and team from a shared identity store, and rolls guardrails out per provider and per model behind release gates.",
      },
      {
        name: "Guardrails service",
        text: "A FastAPI server on NVIDIA NeMo Guardrails with Colang rails for prompt injection, jailbreaks, secrets such as cloud keys and tokens, dangerous commands, topic control and output checks, with Presidio masking personal data and a pytest suite covering each attack class.",
      },
      {
        name: "Admin dashboard",
        text: "A React control plane with JWT and OAuth sign in, live request telemetry, an audit log viewer, a policy workbench for switching protections per team, and identity aware group management.",
      },
    ],
    shots: [
      { src: "/projects/securesphere/dashboard.jpg", caption: "Live telemetry: allowed, blocked and sanitized traffic with recent threats", w: 1600, h: 1000 },
      { src: "/projects/securesphere/logs.jpg", caption: "Audit log of every request with source, developer, team and decision", w: 1600, h: 1000 },
      { src: "/projects/securesphere/policies.jpg", caption: "Policy workbench: protections switched on per team", w: 1600, h: 1000 },
      { src: "/projects/securesphere/groups.jpg", caption: "Identity aware groups mapping developers to policies", w: 1600, h: 1000 },
    ],
    x: 560,
    y: 60,
  },
  {
    slug: "pathochat",
    name: "PathoChat 2.0",
    short: "Medical chatbot on LangChain, FAISS and Mistral-7B, extended into an agentic system with n8n workflows and Pinecone.",
    long: "A pathology assistant that answers questions only from the textbooks it was given, and says so when it does not know. It started as a retrieval pipeline in Python and was rebuilt as an AI agent in n8n that keeps the conversation in memory and decides for itself when to search the medical literature.",
    tags: ["LangChain", "Mistral-7B", "FAISS", "Streamlit", "n8n", "Pinecone", "OpenAI"],
    github: "https://github.com/Mehdi-Abidi/Pathochat",
    parts: [
      {
        name: "Version 1: retrieval pipeline",
        text: "Pathology textbooks such as Pathoma and Robbins and Cotran chunked, embedded with all-MiniLM-L6-v2 and indexed in FAISS. A LangChain RetrievalQA chain pulls the top four passages and Mistral-7B-Instruct answers from that context alone, with a prompt that forbids outside knowledge and returns \"I don't know\" when the books are silent. Every answer ships with its source passages, served from a Streamlit app packaged with Docker.",
      },
      {
        name: "Version 2: agentic workflow in n8n",
        text: "The fixed chain became an n8n AI Agent triggered by chat messages. The agent runs on an OpenAI chat model, keeps a conversation memory so follow up questions make sense, and calls a Pinecone vector store as a tool with OpenAI embeddings, so it retrieves only when a question needs the literature. The workflow is visual, so new tools and data sources plug in without rewriting code.",
      },
    ],
    shots: [
      { src: "/projects/pathochat/streamlit-home.jpg", caption: "Version 1: PathoCare AI running on Mistral-7B over the indexed literature", w: 1600, h: 725 },
      { src: "/projects/pathochat/streamlit-chat.jpg", caption: "Version 1: an answer drawn from the textbooks, with sources one click away", w: 1600, h: 731 },
      { src: "/projects/pathochat/n8n-workflow.jpg", caption: "Version 2: the n8n agent with chat model, memory and a Pinecone retrieval tool", w: 1600, h: 593 },
      { src: "/projects/pathochat/n8n-chat.jpg", caption: "Version 2: the agent answering in n8n chat with its run trace alongside", w: 1600, h: 783 },
    ],
    x: 620,
    y: 440,
  },
  {
    slug: "fingerprint",
    name: "Fingerprint Matcher",
    short: "Computer vision fingerprint recognition: deep learning segmentation, SIFT features and a Kotlin app that matches a thumb from a phone photo.",
    long: "A biometric system that identifies a person from an ordinary phone photo of their thumb, no scanner needed. Built for a Deep Learning for Perception course, it pairs a deep learning segmentation model that isolates the finger with classical computer vision that reads the ridge pattern, so matching stays fast, explainable and robust to the angle and distance of each capture.",
    tags: ["Computer Vision", "Deep Learning", "U²-Net", "OpenCV", "SIFT", "Flask", "PostgreSQL", "Kotlin"],
    links: [
      { label: "Backend", href: "https://github.com/Mehdi-Abidi/Fingerprint-Matcher" },
      { label: "Android app", href: "https://github.com/Mehdi-Abidi/thumb-recognizer" },
    ],
    parts: [
      {
        name: "Perception pipeline",
        text: "Each photo goes through U²-Net, a deep segmentation network run through rembg on ONNX Runtime, to cut the finger out of the background. CLAHE then lifts local contrast so faint ridges stand out, and OpenCV SIFT extracts scale and rotation invariant keypoints along the ridges and minutiae.",
      },
      {
        name: "Matching service",
        text: "A Flask API enrols a person by storing their SIFT descriptors in PostgreSQL through SQLAlchemy, and identifies a new capture with brute force kNN matching and Lowe's ratio test, ranking every enrolled print by its count of reliable matches.",
      },
      {
        name: "Android app",
        text: "Kotlin and Jetpack Compose with CameraX: capture the thumb, review, crop to the print, then either enrol it under a name or send it to the API and see the ranked matches. Built as a team of three.",
      },
    ],
    shots: [
      { src: "/projects/fingerprint/pipeline.jpg", caption: "The pipeline stages, shown on a sample print generated in code", w: 1600, h: 808 },
      { src: "/projects/fingerprint/matching.jpg", caption: "Real SIFT ratio test matching: the right finger ranks first by a wide margin", w: 1600, h: 755 },
      { src: "/projects/fingerprint/app.jpg", caption: "Mockup of the Android flow: capture, review, crop, then match or enrol", w: 1600, h: 953 },
    ],
    x: 620,
    y: 260,
  },
  {
    slug: "aqi",
    name: "AQI Predictor",
    short: "Air quality forecasting with real-time weather pipelines, a feature store and automated retraining through CI/CD.",
    long: "Forecasts Karachi's air quality three days ahead and raises an alert when it turns hazardous. It runs as a small MLOps system: fresh pollution data lands every hour, a new model is trained every day, and the app always serves the latest registered model without anyone touching it.",
    tags: ["scikit-learn", "Random Forest", "Hopsworks", "GitHub Actions", "SHAP", "LIME", "Streamlit"],
    github: "https://github.com/Mehdi-Abidi/Weather_AQI_Predictor",
    parts: [
      {
        name: "Feature pipeline",
        text: "An hourly GitHub Actions job pulls a year of air pollution history for Karachi from OpenWeather, cleans it with median fills, log transforms and z-score outlier removal, builds time, rolling, change, lag and ratio features, and writes them to a Hopsworks feature store with AQI 72 hours ahead as the target.",
      },
      {
        name: "Training and serving",
        text: "A daily job trains Logistic Regression, a Ridge Classifier swept across regularisation strengths, and a Random Forest, then registers the model in Hopsworks. The Streamlit app pulls it from the registry, shows live weather, a three day forecast and trend chart, and flags hazardous days. SHAP and LIME explain individual predictions.",
      },
    ],
    shots: [
      { src: "/projects/aqi/dashboard.jpg", caption: "The Streamlit dashboard, recreated from the app code with sample values", w: 1600, h: 1129 },
      { src: "/projects/aqi/pipeline.jpg", caption: "Hourly feature pipeline and daily training on GitHub Actions and Hopsworks", w: 1600, h: 600 },
      { src: "/projects/aqi/analysis.jpg", caption: "Real charts from the notebook: feature correlations and Random Forest importance", w: 1600, h: 937 },
    ],
    x: 920,
    y: 470,
  },
  {
    slug: "tax",
    name: "Tax assistant bots",
    short: "RAG based tax consultant assistants with LangChain and Pinecone over structured business directory data.",
    long: "Generative AI assistants for tax questions, built on RAG with LangChain and Pinecone and backed by automated data pipelines covering thousands of business directories. Two iterations: a US tax assistant and a general tax bot.",
    tags: ["LangChain", "Pinecone", "RAG", "Python"],
    github: "https://github.com/Mehdi-Abidi/UsTaxPatriot",
    x: 920,
    y: 210,
  },
];

export const experience = [
  {
    period: "Jun 2026 to now",
    role: "AI Engineer Lead",
    where: "Enterprise agentic workflow platform",
    text: "Lead trustworthy AI engineering for a platform where agents compose and run multi step business workflows. Architected the multi tenant RAG module and long term agent memory, implemented complexity based LLM routing, hardened public endpoints and webhooks, and act as the security reviewer for backend and frontend changes.",
  },
  {
    period: "Jan 2026 to Jun 2026",
    role: "AI Software Engineer",
    where: "LLM applications and cloud automation",
    text: "Built scalable LLM applications and LangChain agents with modular Python architectures, and AI driven workflows on Microsoft Fabric, Azure AI Foundry and Azure Pipelines.",
  },
  {
    period: "Jan 2025 to Jan 2026",
    role: "Associate Developer",
    where: "Generative AI applications",
    text: "Built generative AI products including a RAG based tax consultant bot with LangChain and Pinecone, and automated structured data pipelines across thousands of business directories.",
  },
  {
    period: "Sep 2024 to Dec 2024",
    role: "Data Science Intern",
    where: "Forecasting and real time pipelines",
    text: "Developed an air quality prediction system with real time OpenWeather and Hopsworks pipelines, and automated CI/CD with GitHub Actions.",
  },
];

// shown in the scrolling ribbon under the hero
export const stack = [
  "Python",
  "FastAPI",
  "Next.js",
  "React",
  "TypeScript",
  "PyTorch",
  "LangChain",
  "LangGraph",
  "Temporal",
  "pgvector",
  "PostgreSQL",
  "Azure",
  "Docker",
  "NeMo Guardrails",
  "Presidio",
  "GitHub Actions",
];

export const skills = [
  { group: "Agentic AI", items: ["LangChain", "LangGraph", "RAG", "Temporal", "n8n", "LLM routing", "Agent memory"] },
  { group: "LLM security", items: ["NeMo Guardrails", "Presidio", "Prompt injection defense", "PII redaction", "Audit logging"] },
  { group: "Backend", items: ["Python", "FastAPI", "Django", "Flask", "PostgreSQL", "pgvector", "MongoDB"] },
  { group: "ML", items: ["PyTorch", "TensorFlow", "scikit-learn", "SHAP", "LIME"] },
  { group: "Cloud and DevOps", items: ["Azure", "Docker", "GitHub Actions", "Jenkins", "CI/CD"] },
];

export const education = {
  degree: "BS Computer Science",
  school: "FAST NUCES, Karachi",
  period: "2022 to 2026",
  honors: ["Four time gold medalist", "Rector's honor list, four times", "Dean's honor list, three times"],
};

export const certifications = [
  "Convolutional Neural Networks, DeepLearning.AI",
  "Copilot Studio Agent Academy, Global AI Community",
  "Microsoft Applied Skills, Microsoft Learn",
  "Developing LLM Applications with LangChain, DataCamp",
  "Large Language Models Concepts, DataCamp",
  "Generative AI Concepts, DataCamp",
];
