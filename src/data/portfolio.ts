// ─────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE. Edit text, links and images below.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Waryam Mangi",
  firstName: "WARYAM",
  lastName: "MANGI",
  logo: "WM.",
  role: "AI Engineer & Data Analyst",
  tagline:
    "I design AI agents, RAG systems and data-driven solutions that turn raw information into real decisions.",
  email: "mangiwaryam14@gmail.com",
  year: 2026,
};

export const socials = {
  github: "https://github.com/WaryamMangi",
  linkedin: "https://www.linkedin.com/in/waryam-mangi-519141340",
  email: `mailto:${profile.email}`,
};

export const navLinks = [
  { label: "About", id: "about" },
  { label: "Work", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

/** Use **double asterisks** to bold key phrases. */
export const about = {
  label: "/ABOUT",
  heading: "Building AI that works in the real world.",
  paragraphs: [
    "I'm an **AI Engineer** and **Data Analyst** and a Computer Science student, focused on **agentic AI, multi-agent systems, RAG pipelines and machine learning**. I enjoy turning messy data into systems that make real decisions easier.",
    "I build **LangGraph multi-agent workflows**, **retrieval-augmented chatbots** with LangChain and vector databases, and **predictive models and analyses** in Python, from cleaning the data to shipping a working demo.",
    "I'm open to **internships, full-time roles, freelance projects and collaborations**. If you're working on something interesting, **let's connect**.",
  ],
  skills: [
    { group: "Programming", items: ["Python (Primary)", "SQL", "C++", "Java", "Git & GitHub"] },
    {
      group: "Agentic AI",
      items: ["AI Agents & Multi-Agent Frameworks", "LangGraph", "smolagents", "LangChain", "LlamaIndex"],
    },
    {
      group: "Generative AI & RAG",
      items: ["RAG", "FAISS", "ChromaDB", "LLMs (Groq, OpenAI, open-source)", "Prompt Engineering", "API Integration"],
    },
    {
      group: "Data & ML",
      items: ["Predictive Modeling", "Scikit-Learn", "XGBoost", "Pandas", "NumPy", "EDA", "Statistical Analysis"],
    },
    { group: "Deployment & Databases", items: ["Streamlit", "MySQL", "PostgreSQL"] },
  ],
  certifications: [
    { title: "Data Cleaning", issuer: "Kaggle" },
    { title: "Data Visualization", issuer: "Kaggle" },
    { title: "Intro to Machine Learning", issuer: "Kaggle" },
    { title: "Intermediate Machine Learning", issuer: "Kaggle" },
    { title: "Fundamentals of Agents", issuer: "Hugging Face" },
  ],
};

export type Category = "AI Engineering" | "Data Science" | "Data Analytics" | "Web Development";

export interface Project {
  id: string;
  title: string;
  category: Category;
  tags: string[];
  description: string;
  /** 1-4 screenshots. Leave empty to show "Add screenshot" placeholders.
   *  Put files in /public/projects/ and reference as "/projects/name.png". */
  images: string[];
  github: string;
  live?: string; // omit or "" to hide the Live Project button
}

export const work = {
  label: "/SELECTED WORK",
  heading: "Projects",
  filters: ["All", "AI Engineering", "Data Science", "Data Analytics", "Web Development"] as const,
};

export const projects: Project[] = [
  {
    id: "rag-chatbot",
    title: "Chatbot with RAG",
    category: "AI Engineering",
    tags: ["RAG", "LangChain", "Streamlit", "Hugging Face", "Groq"],
    description:
      "A local Retrieval-Augmented Generation chatbot built in Python with Streamlit and LangChain that answers questions from custom PDF documents securely and entirely in memory. It uses semantic text chunking and local Hugging Face embeddings (all-MiniLM-L12-v2), with the Groq API (openai/gpt-oss-20b) delivering fast, context-grounded answers.",
    images: ["/projects/rag-chatbot.webp"],
    github: "https://github.com/WaryamMangi/Chatbot-with-RAG",
  },
  {
    id: "multi-agent-email",
    title: "Autonomous Multi-Agent Email System",
    category: "AI Engineering",
    tags: ["LangGraph", "LangChain", "Groq", "Multi-Agent"],
    description:
      "A stateful multi-agent pipeline built with LangGraph and LangChain that automates inbox triage and response drafting. It uses deterministic routing, specialized LLM agents for security filtering and executive drafting, an inter-agent handover protocol, and file-system tools that format, timestamp and archive generated drafts locally.",
    images: ["/projects/multi-agent-email.webp"],
    github: "https://github.com/WaryamMangi/Multi-Agent-Email-System",
  },
  {
    id: "house-price",
    title: "House Price Prediction Model",
    category: "Data Science",
    tags: ["Python", "Scikit-learn", "Random Forest", "Pandas"],
    description:
      "A Random Forest Regressor predicting residential sale prices on the Ames, Iowa dataset for Kaggle's Housing Prices Competition, built on a 22-feature pipeline. Through validation and tuning I reduced MAE from 21,857 to 17,690 and reached a public leaderboard score of 17,859.",
    images: ["/projects/house-price.webp"],
    github: "https://github.com/WaryamMangi/House-Price-Prediction",
  },
  {
    id: "fifa-world-cup",
    title: "FIFA World Cup Analysis",
    category: "Data Analytics",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    description:
      "An analysis of historical FIFA World Cup match data uncovering trends in team performance, goal-scoring patterns and tournament outcomes, presented through clear visualizations and data-driven insights.",
    images: ["/projects/fifa-world-cup.webp"],
    github: "https://github.com/WaryamMangi/FIFA-World-Cup-EDA",
  },
  {
    id: "telecom-churn",
    title: "Telecom Customer Churn: Exploratory Data Analysis",
    category: "Data Analytics",
    tags: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA"],
    description:
      "An exploratory analysis of a telecom customer churn dataset that isolates the contract, billing and service factors driving customer attrition, backed by statistical analysis and visualizations, to support data-driven retention strategies.",
    images: ["/projects/telecom-churn.webp"],
    github: "https://github.com/WaryamMangi/CustomerChurnAnalysis_EDA",
  },
  {
    id: "webquiz-hub",
    title: "WebQuiz Hub",
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript"],
    description:
      "An interactive quiz website where you pick a topic, answer four questions and get instant feedback with an explanation for every answer.",
    images: ["/projects/webquiz-hub.webp"],
    github: "https://github.com/WaryamMangi/WebQuiz-Hub",
    live: "https://webquiz-hub.vercel.app/",
  },
];

export const experience = {
  label: "/EXPERIENCE",
  heading: "Where I've worked.",
  items: [
    {
      role: "Data Analytics Intern",
      company: "ORIC, MUET, Jamshoro, Pakistan",
      year: "2026",
      points: [
        "Cleaned, formatted and analyzed annual report data to support internal reporting.",
        "Built dashboards and generated analytical insights from the processed data for the team.",
      ],
    },
    {
      role: "Webmaster",
      company: "MUET ACM Women Chapter, Jamshoro, Pakistan",
      year: "2025 – 2026",
      points: [
        "Managed the entire social media presence and digital content for the chapter.",
        "Led social media operations and graphic design for chapter-wide events and initiatives.",
      ],
    },
    {
      role: "Technology & Product Remote Intern",
      company: "Technologia Solutions LLC, New York, USA (Remote)",
      year: "2025",
      points: [
        "Identified real-world problems and proposed technology-driven solutions using SaaS and MVP-based product development frameworks.",
        "Collaborated with a US-based team in a fully remote international environment, gaining cross-cultural product and technology experience.",
      ],
    },
  ],
};

export const contact = {
  label: "/CONTACT",
  headline: "Let's build something intelligent together.",
  body: "Whether it's an internship, a full-time role, a freelance project or a collaboration, I'd love to hear from you.",
};
