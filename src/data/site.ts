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
  photo: "/mehdi.jpg",
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
  // graph node position on the 1200 x 760 hero stage, in px
  x: number;
  y: number;
};

export const projects: Project[] = [
  {
    slug: "securesphere",
    name: "SecureSphere-LLM",
    short: "Security middleware between developer tools and any LLM: prompt injection and jailbreak detection, PII redaction, policy guardrails, audit log.",
    long: "A Node.js proxy that runs as a background system service and intercepts prompts sent from VS Code to any LLM behind GitHub Copilot. Layered guardrails combine regex and heuristic detection for prompt injection and jailbreaks, Microsoft Presidio for PII leakage, and NVIDIA NeMo Guardrails for policy control, with audit logging and rule based enforcement so every request is traceable. A practical LLMSecOps approach for enterprise environments, built as a final year project.",
    tags: ["Node.js", "NeMo Guardrails", "Presidio", "LLMSecOps"],
    x: 520,
    y: 120,
  },
  {
    slug: "rag",
    name: "Multi-tenant RAG",
    short: "Document and URL ingestion, embeddings, pgvector retrieval and row-level security so every tenant sees only its own knowledge.",
    long: "A knowledge source module for an enterprise agentic platform. PDF, DOCX and URL ingestion, OpenAI embeddings, pgvector HNSW semantic retrieval, and PostgreSQL row level security for tenant isolation. Web ingestion is hardened against SSRF with DNS pinned fetching, private address blocking and per redirect revalidation. Delivered across incremental releases with an automated test suite.",
    tags: ["FastAPI", "pgvector", "PostgreSQL RLS", "Azure"],
    x: 860,
    y: 250,
  },
  {
    slug: "memory",
    name: "Agent memory and routing",
    short: "Long-term memory for AI agents with cloud snapshots, plus complexity-based routing across four model providers.",
    long: "Cross session memory for AI agents backed by Azure Blob snapshots with debounced refresh, so agents carry personal context between conversations. Alongside it, complexity based model routing across OpenAI, Anthropic, Moonshot and Gemini sends low complexity tasks to models far cheaper per token while keeping output quality.",
    tags: ["Temporal", "Azure Blob", "LLM routing"],
    x: 900,
    y: 460,
  },
  {
    slug: "pathochat",
    name: "PathoChat 2.0",
    short: "Medical chatbot on LangChain, FAISS and Mistral-7B, extended into an agentic system with n8n workflows and Pinecone.",
    long: "A Streamlit chatbot for evidence based medical questions, pre loaded with pathology literature and indexed with FAISS so answers cite what they were drawn from. Version 2.0 turned it into an agentic system with n8n workflows and Pinecone for scalable vector search.",
    tags: ["LangChain", "Mistral-7B", "FAISS", "Pinecone", "n8n"],
    github: "https://github.com/Mehdi-Abidi/Pathochat",
    x: 560,
    y: 560,
  },
  {
    slug: "fingerprint",
    name: "Fingerprint Matcher",
    short: "Full-stack biometric recognition with SIFT, PostgreSQL and a Kotlin mobile app for real-time matching.",
    long: "Fingerprint detection and recognition built for a deep learning for perception course: SIFT feature matching, a PostgreSQL store for templates, and a Kotlin mobile app for capture and real time matching.",
    tags: ["SIFT", "PostgreSQL", "Kotlin", "OpenCV"],
    github: "https://github.com/Mehdi-Abidi/Fingerprint-Matcher",
    x: 880,
    y: 650,
  },
  {
    slug: "aqi",
    name: "AQI Predictor",
    short: "Air quality forecasting with real-time weather pipelines, a feature store and automated retraining through CI/CD.",
    long: "Predicts Karachi air quality for the next three days from OpenWeather data. Random Forest, Ridge and Logistic Regression models, a Hopsworks feature store, and GitHub Actions pipelines that retrain and redeploy automatically, with SHAP and LIME for explainability and a Streamlit front end.",
    tags: ["scikit-learn", "Hopsworks", "GitHub Actions", "Streamlit"],
    github: "https://github.com/Mehdi-Abidi/Weather_AQI_Predictor",
    live: "https://weatheraqipredictor-gkehryzvj7munc4rwqsumy.streamlit.app/",
    x: 220,
    y: 600,
  },
  {
    slug: "tax",
    name: "Tax assistant bots",
    short: "RAG based tax consultant assistants with LangChain and Pinecone over structured business directory data.",
    long: "Generative AI assistants for tax questions, built on RAG with LangChain and Pinecone and backed by automated data pipelines covering thousands of business directories. Two iterations: a US tax assistant and a general tax bot.",
    tags: ["LangChain", "Pinecone", "RAG", "Python"],
    github: "https://github.com/Mehdi-Abidi/UsTaxPatriot",
    x: 900,
    y: 60,
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
