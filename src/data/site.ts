// All copy on the site lives here. Components only render what they find.

// Prefix for files in /public. Empty locally and on Vercel; set to /My_Portfolio
// when the site is built for GitHub Pages, which serves it from that sub path.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (p: string) => `${BASE}${p}`;

export const profile = {
  name: "Mehdi Abidi",
  fullName: "Syed Muhammad Mehdi Abidi",
  role: "AI Engineer Lead",
  tagline: "Agentic AI · LLM security · Applied ML",
  location: "Karachi, Pakistan",
  intro:
    "AI Engineer Lead building agentic systems for enterprise workflows: retrieval that respects tenants, memory that follows the user, routing that picks the right model, and guardrails designed in from the start.",
  headline: ["Everything I build is", "connected"],
  photo: asset("/mehdi-studio.jpg"),
  cv: asset("/Mehdi_Abidi_CV.pdf"),
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
  // start the description beside the screenshots instead of beside the title
  textBesideShots?: boolean;
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
      { src: asset("/projects/securesphere/dashboard.jpg"), caption: "Live telemetry: allowed, blocked and sanitized traffic with recent threats", w: 1600, h: 1000 },
      { src: asset("/projects/securesphere/logs.jpg"), caption: "Audit log of every request with source, developer, team and decision", w: 1600, h: 1000 },
      { src: asset("/projects/securesphere/policies.jpg"), caption: "Policy workbench: protections switched on per team", w: 1600, h: 1000 },
      { src: asset("/projects/securesphere/groups.jpg"), caption: "Identity aware groups mapping developers to policies", w: 1600, h: 1000 },
    ],
    x: 560,
    y: 70,
  },
  {
    slug: "jobrec",
    name: "Hybrid Job Recommender",
    short: "Multi-stage job matching: two-tower retrieval, LambdaMART ranking and LLM re-ranking that explains every pick.",
    long: "A job recommendation engine built the way large platforms build theirs: retrieve hundreds of candidates fast, rank them precisely, then let an LLM reorder the shortlist and explain each match in plain language. It handles brand new users from their resume alone, reasons over related skills, predicts salary and shows the skill gap for every role. Built as a team project, with a Next.js front end called NexusHire.",
    tags: ["Recommender Systems", "PyTorch", "FAISS", "XGBoost", "LLM Re-ranking", "FastAPI", "Next.js"],
    github: "https://github.com/Mehdi-Abidi/Hybrid_Job_Recommendation_System",
    parts: [
      {
        name: "Retrieval",
        text: "A Two-Tower neural network in PyTorch embeds seekers and jobs into one space, and a FAISS index returns the nearest few hundred jobs. Content based, collaborative and popularity models cover users and jobs with little or no history.",
      },
      {
        name: "Ranking and re-ranking",
        text: "LambdaMART on XGBoost reorders the candidates using engineered features such as skill overlap, seniority and salary fit. Llama 3.1 on Groq then reorders the top twenty with MMR for diversity and writes the reason behind each match, falling back cleanly when the LLM is unavailable.",
      },
      {
        name: "Career intelligence and evaluation",
        text: "Resume entity extraction, a skill ontology that treats Django and Flask as close, salary prediction, career path and skill gap analysis, plus deep models explored such as BERT4Rec, LightGCN and Mult-VAE. Everything is measured offline with precision, recall, NDCG and MAP at K, served through FastAPI and covered by 78 tests.",
      },
    ],
    shots: [
      { src: asset("/projects/jobrec/nexushire-feed.jpg"), caption: "NexusHire, the project's front end, rendering a ranked feed (sample data)", w: 1920, h: 1350 },
      { src: asset("/projects/jobrec/nexushire-detail.jpg"), caption: "Selecting a match shows the skill journey and why the role fits (sample data)", w: 1920, h: 840 },
      { src: asset("/projects/jobrec/pipeline.jpg"), caption: "The three stage pipeline: retrieval, ranking and LLM re-ranking", w: 1600, h: 637 },
    ],
    x: 920,
    y: 70,
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
      { src: asset("/projects/pathochat/streamlit-home.jpg"), caption: "Version 1: PathoCare AI running on Mistral-7B over the indexed literature", w: 1600, h: 725 },
      { src: asset("/projects/pathochat/streamlit-chat.jpg"), caption: "Version 1: an answer drawn from the textbooks, with sources one click away", w: 1600, h: 731 },
      { src: asset("/projects/pathochat/n8n-workflow.jpg"), caption: "Version 2: the n8n agent with chat model, memory and a Pinecone retrieval tool", w: 1600, h: 593 },
      { src: asset("/projects/pathochat/n8n-chat.jpg"), caption: "Version 2: the agent answering in n8n chat with its run trace alongside", w: 1600, h: 783 },
    ],
    x: 620,
    y: 465,
  },
  {
    slug: "fingerprint",
    name: "Fingerprint Matcher",
    short: "Identifies a thumb from a phone photo with deep learning segmentation, SIFT matching and a Kotlin app.",
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
      { src: asset("/projects/fingerprint/pipeline.jpg"), caption: "The pipeline stages, shown on a sample print generated in code", w: 1600, h: 808 },
      { src: asset("/projects/fingerprint/matching.jpg"), caption: "Real SIFT ratio test matching: the right finger ranks first by a wide margin", w: 1600, h: 755 },
      { src: asset("/projects/fingerprint/app.jpg"), caption: "Mockup of the Android flow: capture, review, crop, then match or enrol", w: 1600, h: 953 },
    ],
    x: 620,
    y: 270,
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
      { src: asset("/projects/aqi/dashboard.jpg"), caption: "The Streamlit dashboard, recreated from the app code with sample values", w: 1600, h: 1129 },
      { src: asset("/projects/aqi/pipeline.jpg"), caption: "Hourly feature pipeline and daily training on GitHub Actions and Hopsworks", w: 1600, h: 600 },
      { src: asset("/projects/aqi/analysis.jpg"), caption: "Real charts from the notebook: feature correlations and Random Forest importance", w: 1600, h: 937 },
    ],
    textBesideShots: true,
    x: 920,
    y: 490,
  },
  {
    slug: "tax",
    name: "Tax consultant bots",
    short: "BotTax and US TaxPatriot: voice enabled GPT-4 tax assistants that answer from real tax documents and cite their sources.",
    long: "Two AI tax consultants that answer questions by text or voice, grounded in real tax documents rather than the model's memory. BotTax answers general federal income tax questions; US TaxPatriot specialises in IRS rules for individuals and businesses. Both show the documents and pages behind every answer.",
    tags: ["RAG", "GPT-4", "LangChain", "Pinecone", "OpenAI Embeddings", "Speech Recognition", "Streamlit"],
    links: [
      { label: "BotTax", href: "https://github.com/Mehdi-Abidi/Bottax" },
      { label: "US TaxPatriot", href: "https://github.com/Mehdi-Abidi/UsTaxPatriot" },
    ],
    parts: [
      {
        name: "Retrieval pipeline",
        text: "Questions are embedded with OpenAI text-embedding-3-large and matched against each bot's own Pinecone index of chunked tax documents. A LangChain RetrievalQA chain hands the closest passages to GPT-4 with a prompt that asks for the direct answer, its tax implications, practical steps and the right disclaimers.",
      },
      {
        name: "Voice and interface",
        text: "Questions can be recorded in the browser and transcribed with Google speech recognition, with an offline Sphinx fallback. Answers render as chat, with sources listed by document and page. BotTax ships dark and light themes.",
      },
      {
        name: "From local to cloud",
        text: "BotTax began fully local, on FAISS with MiniLM sentence embeddings, then moved to Pinecone and OpenAI embeddings to scale. US TaxPatriot reused that pipeline with an IRS focused knowledge base.",
      },
    ],
    shots: [
      { src: asset("/projects/tax/bottax-dark.jpg"), caption: "BotTax, live, in its dark theme with voice and text input", w: 1600, h: 1316 },
      { src: asset("/projects/tax/bottax-light.jpg"), caption: "BotTax in its light theme", w: 1600, h: 1316 },
      { src: asset("/projects/tax/ustaxpatriot.jpg"), caption: "US TaxPatriot, live, the IRS focused assistant", w: 1600, h: 1188 },
      { src: asset("/projects/tax/pipeline.jpg"), caption: "How both bots answer: one retrieval pipeline over two knowledge bases", w: 1600, h: 618 },
    ],
    x: 920,
    y: 280,
  },
];

export const experience = [
  {
    period: "Jun 2026 to now",
    role: "AI Engineer Lead",
    company: "Agento",
    logo: asset("/logos/agento.png"),
    site: "https://www.agento.au",
    where: "Enterprise agentic workflow platform",
    text: "Lead trustworthy AI engineering for a platform where agents compose and run multi step business workflows. Architected the multi tenant RAG module and long term agent memory, implemented complexity based LLM routing, hardened public endpoints and webhooks, and act as the security reviewer for backend and frontend changes.",
    highlights: [
      "Architected a multi tenant RAG module shipped across 7 releases with 29 automated tests, using pgvector HNSW retrieval and row level security to isolate every tenant.",
      "Built complexity based LLM routing across OpenAI, Anthropic, Moonshot and Gemini, sending simple tasks to models up to 30x cheaper per token without losing quality.",
      "Hardened 6 public endpoints with spoof resistant per IP rate limiting and Turnstile CAPTCHA, and secured webhook ingress with constant time HMAC verification.",
      "Engineered long term agent memory on Azure Blob snapshots, and cut telemetry noise with failure only exception capture and breadcrumb tracing in Application Insights.",
    ],
  },
  {
    period: "Jan 2026 to Jun 2026",
    role: "AI Software Engineer",
    company: "Imperium Dynamics",
    logo: asset("/logos/imperium.png"),
    site: "https://imperiumdynamics.com",
    where: "LLM applications and cloud automation",
    text: "Built scalable LLM applications and LangChain agents with modular Python architectures, and AI driven workflows on Microsoft Fabric, Azure AI Foundry and Azure Pipelines.",
    highlights: [
      "Built LLM applications and LangChain agents on modular Python architectures designed to scale across client projects.",
      "Developed AI driven workflows and cloud automation across 3 Microsoft platforms: Fabric, Azure AI Foundry and Azure Pipelines.",
      "Implemented secure backend authentication for AI services deployed on Azure.",
      "Standardised development with Git and PDM managed environments for reproducible builds and deployments.",
    ],
  },
  {
    period: "Jan 2025 to Jan 2026",
    role: "Gen AI Associate Engineer",
    company: "Analytic Insider",
    logo: asset("/logos/analyticinsider.png"),
    logoFill: true,
    site: "https://analyticinsider.com",
    where: "Generative AI applications",
    text: "Built generative AI products including a RAG based tax consultant bot with LangChain and Pinecone, and automated structured data pipelines across thousands of business directories.",
    highlights: [
      "Built a RAG tax consultant bot on LangChain and Pinecone that improved query retrieval efficiency by 12%.",
      "Automated structured data pipelines covering 3,000+ business directories to feed LLM applications at scale.",
      "Shipped 2 GPT-4 tax assistants, BotTax and US TaxPatriot, with voice input and source citations down to the page.",
      "Migrated retrieval from local FAISS to Pinecone with 3072 dimension OpenAI embeddings so the bots could scale.",
    ],
  },
  {
    period: "Sep 2024 to Dec 2024",
    role: "Data Science Intern",
    company: "10Pearls",
    logo: asset("/logos/10pearls.png"),
    site: "https://10pearls.com",
    where: "Forecasting and real time pipelines",
    text: "Developed an air quality prediction system with real time OpenWeather and Hopsworks pipelines, and automated CI/CD with GitHub Actions.",
    highlights: [
      "Built an AQI forecaster with Random Forest, Ridge and Logistic Regression that reached 87% accuracy.",
      "Forecast air quality 72 hours ahead from a year of hourly OpenWeather pollution data.",
      "Automated CI/CD with GitHub Actions, cutting deployment time by 30%, with hourly feature runs and daily retraining.",
      "Explained predictions with SHAP and LIME, and served the forecast through a Streamlit dashboard with hazard alerts.",
    ],
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
  { group: "Agentic AI", note: "Agents, retrieval and orchestration", items: ["LangChain", "LangGraph", "RAG", "Temporal", "n8n", "LLM routing", "Agent memory", "OpenAI API", "Anthropic Claude", "Hugging Face"] },
  { group: "LLM security", note: "Guardrails and safe AI in production", items: ["NeMo Guardrails", "Presidio", "Prompt injection defense", "PII redaction", "Topical safety", "Input and output filtering", "Audit logging"] },
  { group: "Machine learning", note: "Modelling, evaluation and explainability", items: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "XGBoost", "SHAP", "LIME"] },
  { group: "Backend and data", note: "APIs, databases and vector search", items: ["Python", "SQL", "FastAPI", "Django", "Flask", "PostgreSQL", "pgvector", "Row level security", "MongoDB", "Pinecone", "FAISS"] },
  { group: "Cloud and DevOps", note: "Shipping and running it", items: ["Azure Blob Storage", "Application Insights", "Azure AI Foundry", "Microsoft Fabric", "Docker", "GitHub Actions", "Jenkins", "CI/CD", "Git"] },
  { group: "Frontend and visualisation", note: "Interfaces and dashboards", items: ["Next.js", "React", "TypeScript", "Streamlit", "Matplotlib", "Plotly", "Seaborn"] },
];

export const education = {
  degree: "BS Computer Science",
  school: "FAST NUCES, Karachi",
  period: "2022 to 2026",
  cgpa: "3.85 / 4.0",
  honors: ["Four time gold medalist", "Rector's honor list, four times", "Dean's honor list, three times"],
  coursework: ["Deep Learning", "Artificial Intelligence", "Recommender Systems", "Generative AI", "Probability and Statistics"],
};

export const certifications = [
  "Convolutional Neural Networks, DeepLearning.AI",
  "Copilot Studio Agent Academy, Global AI Community",
  "Microsoft Applied Skills, Microsoft Learn",
  "Developing LLM Applications with LangChain, DataCamp",
  "Large Language Models Concepts, DataCamp",
  "Generative AI Concepts, DataCamp",
];

export const leadership = [
  { role: "President", org: "IEEE FAST NUCES Student Branch", period: "2025 to now" },
  { role: "Co-Head, Data Science and ML", org: "GDSC and FDSS", period: "2024 to 2025", text: "Led 10+ workshops, hackathons and seminars engaging 500+ students." },
];
