"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Camera,
  Code2,
  Database,
  Mail,
  Menu,
  Moon,
  Network,
  Sun,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { additionalProjects } from "./projects-data";

const navigation = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const roles = [
  { label: "Data Analytics Engineer", track: "analytics" },
  { label: "AI Engineer", track: "ai-ml" },
  { label: "Machine Learning Engineer", track: "ai-ml" },
  { label: "Full Stack Engineer", track: "full-stack" },
];

const orbitTechnologies = [
  { label: "Python", category: "ai" },
  { label: "SQL", category: "analytics" },
  { label: "React", category: "fullstack" },
  { label: "NumPy", category: "science" },
  { label: "Power BI", category: "analytics" },
  { label: "Scikit-learn", category: "ai" },
  { label: "PostgreSQL", category: "data" },
  { label: "TypeScript", category: "fullstack" },
  { label: "Tableau", category: "analytics" },
  { label: "SciPy", category: "science" },
  { label: "Next.js", category: "fullstack" },
  { label: "Generative AI", category: "ai" },
];

type Project = {
  number: string;
  title: string;
  category: string;
  categoryId: string;
  description: string;
  href: string;
  className: string;
  icon: typeof BarChart3;
  artLabel: string;
  technologies: string[];
  demoHref?: string;
  inProgress?: boolean;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Pizza sales dashboard",
    category: "SQL SERVER · POWER BI",
    categoryId: "analytics",
    description:
      "Analyzed revenue, order volume, average order value, product performance, and sales trends.",
    href: "https://github.com/iam-shubhamm/Pizza-Sales-Analysis-Dashboard-using-MS-SQL-Server-and-Power-BI",
    className: "pizza-art",
    icon: Database,
    artLabel: "Abstract circular pizza sales chart",
    technologies: ["SQL Server", "Power BI", "Data analysis"],
  },
  {
    number: "02",
    title: "Customer churn analysis",
    category: "POWER BI · CUSTOMER INSIGHTS",
    categoryId: "analytics",
    description:
      "Explored customer churn behavior and retention patterns through an interactive dashboard.",
    href: "https://github.com/iam-shubhamm/Customer-Churn-Prediction",
    className: "churn-art",
    icon: BrainCircuit,
    artLabel: "Abstract customer data illustration",
    technologies: ["Power BI", "Customer analytics", "Visualization"],
  },
  {
    number: "03",
    title: "Movie recommendation system",
    category: "PYTHON · STREAMLIT",
    categoryId: "ai-ml",
    description:
      "Built a movie recommendation experience that suggests films using similarity-based logic.",
    href: "https://github.com/iam-shubhamm/Movie-Recommendation-System",
    className: "movie-art",
    icon: Code2,
    artLabel: "Movie posters and personalized recommendations",
    technologies: ["Python", "Streamlit", "Similarity logic"],
  },
  {
    number: "04",
    title: "Heart-attack prediction",
    category: "MACHINE LEARNING · IN PROGRESS",
    categoryId: "ai-ml",
    description:
      "An in-progress machine-learning project exploring heart-attack prediction. It is not a validated diagnostic tool, and no model results are claimed.",
    href: "https://github.com/iam-shubhamm/Heart-Attack-Prediction-Using-Machine-Learning-Models",
    className: "health-art",
    icon: BrainCircuit,
    artLabel: "Heart and ECG illustration for a machine-learning project",
    technologies: ["Machine learning", "Python"],
    inProgress: true,
  },
];

const tracks = [
  {
    id: "analytics",
    label: "Data Analytics",
    color: "mint",
    skillGroups: [
      {
        label: "Analysis & preparation",
        skills: ["SQL", "Data Cleaning", "Data Transformation", "Exploratory Data Analysis", "Data Visualization", "Data Validation", "Statistical Analysis", "Trend Analysis", "Data Quality"],
      },
      {
        label: "Dashboards & reporting",
        skills: ["Dashboard Development", "KPI Reporting", "Business Intelligence", "Data Storytelling", "Reporting Automation", "Power BI", "Tableau", "DAX", "Power Query", "Advanced Excel"],
      },
      {
        label: "Databases & data platforms",
        skills: ["Microsoft SQL Server", "PostgreSQL", "MySQL", "Data Modeling", "Data Warehousing", "ETL/ELT", "Apache Spark", "Apache Airflow", "dbt", "Databricks", "BigQuery", "Snowflake", "Amazon Redshift", "Python", "Pandas", "NumPy"],
      },
    ],
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    color: "violet",
    skillGroups: [
      {
        label: "Foundations & modeling",
        skills: ["Python", "NumPy", "Pandas", "Scikit-learn", "Supervised Learning", "Unsupervised Learning", "Classification", "Regression", "Clustering", "Feature Engineering", "Feature Selection", "Model Training", "Model Evaluation", "Cross-Validation", "Hyperparameter Tuning", "Random Forest", "Decision Trees", "Gradient Boosting", "XGBoost", "LightGBM"],
      },
      {
        label: "Deep learning & applied AI",
        skills: ["TensorFlow", "PyTorch", "Keras", "Neural Networks", "Deep Learning", "Natural Language Processing", "Computer Vision", "OpenCV", "Transformers", "Hugging Face", "Generative AI", "Large Language Models", "Prompt Engineering", "Embeddings", "Vector Databases", "Retrieval-Augmented Generation", "LangChain", "LlamaIndex", "AI APIs", "Model Deployment", "MLflow", "Model Monitoring", "Explainable AI", "MLOps", "Recommendation Systems"],
      },
    ],
  },
  {
    id: "data-science",
    label: "Data Science",
    color: "blue",
    skillGroups: [
      {
        label: "Scientific analysis",
        skills: ["Python", "R", "NumPy", "Pandas", "SciPy", "Statsmodels", "Matplotlib", "Seaborn", "Jupyter Notebook", "Probability", "Descriptive Statistics", "Inferential Statistics", "Hypothesis Testing", "Statistical Inference", "Correlation Analysis"],
      },
      {
        label: "Modeling & interpretation",
        skills: ["Regression Analysis", "Predictive Modeling", "Feature Engineering", "Data Preprocessing", "Feature Selection", "Cross-Validation", "Model Evaluation", "Time-Series Analysis", "Forecasting", "Experimental Design", "A/B Testing", "Bayesian Statistics", "Dimensionality Reduction", "Principal Component Analysis", "Clustering", "Anomaly Detection", "Statistical Modeling", "Data Storytelling", "Model Interpretation", "Statistics", "Numerical Computing", "Scientific Computing", "Fortran", "C", "C++", "MATLAB", "Julia"],
      },
    ],
  },
  {
    id: "full-stack",
    label: "Full Stack Development",
    color: "orange",
    skillGroups: [
      {
        label: "Frontend",
        skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Responsive Design", "Tailwind CSS", "Bootstrap", "Accessibility", "UI/UX Fundamentals", "State Management", "Frontend Testing"],
      },
      {
        label: "Backend & databases",
        skills: ["Node.js", "Express.js", "Python", "FastAPI", "Flask", "REST APIs", "GraphQL", "Authentication", "Authorization", "Server-Side Development", "API Integration", "Error Handling", "PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis", "SQL Queries", "Database Design", "Data Modeling", "Database Optimization"],
      },
      {
        label: "Tools & deployment",
        skills: ["Git", "GitHub", "VS Code", "npm", "Postman", "Docker", "CI/CD", "Automated Testing", "AWS", "Microsoft Azure", "Vercel", "Environment Configuration", "Application Deployment", "Logging and Monitoring"],
      },
    ],
  },
];

const curiosityGroups = [
  { label: "AI & machine learning", color: "violet", items: ["Generative AI", "Large Language Models", "AI agents", "Retrieval-Augmented Generation", "Deep learning", "Natural language processing", "Computer vision", "MLOps", "Responsible AI"] },
  { label: "Analytics & business intelligence", color: "mint", items: ["Business intelligence", "Interactive dashboards", "KPI optimization", "Data storytelling", "Business reporting", "Analytics automation", "Decision support systems", "Data-driven strategy"] },
  { label: "Data science", color: "blue", items: ["Predictive modeling", "Statistical analysis", "Forecasting", "Experimentation", "Feature engineering", "Model interpretability", "Anomaly detection", "Advanced analytics"] },
  { label: "Full-stack development", color: "orange", items: ["Modern web applications", "Frontend engineering", "Backend architecture", "API development", "Database design", "Cloud deployment", "Application performance", "Web accessibility", "Developer tooling"] },
  { label: "Data engineering & scientific computing", color: "rose", items: ["Data pipelines", "ETL/ELT", "Data warehousing", "Distributed computing", "Apache Spark", "Workflow orchestration", "Numerical computing", "Scientific programming"] },
];

const portfolioStats = {
  completedProjects: "20+",
};

const certifications: { title: string; organization: string; issueDate: string; url: string }[] = [];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/iam-shubhamm", icon: Code2 },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shubhamsingh7a", icon: Network },
  { label: "Email", href: "mailto:shubhamkanpura7@gmail.com", icon: Mail },
];

const experiences = [
  {
    period: "SEP 2026 — PRESENT",
    role: "Data Analyst Intern",
    organization: "Last Minutes Deal",
    description: "Currently working as a Data Analyst Intern.",
  },
  {
    period: "AUG 2026",
    role: "Data Visualisation: Empowering Business with Effective Insights",
    organization: "Tata Consultancy Services · Forage",
    description:
      "Created Tableau visualizations to analyze revenue, quantity, and profit trends, then presented findings to support business planning.",
  },
];

const quickQuestions = [
  "Tell me about your projects",
  "What tools do you use?",
  "What experience do you have?",
];

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type ChatMode = "profile" | "ai";
type ContactFields = { name: string; email: string; subject: string; message: string; company: string };

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  const reduceMotion = useReducedMotion();
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [skillFilter, setSkillFilter] = useState("analytics");
  const [projectFilter, setProjectFilter] = useState("all");
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMode, setChatMode] = useState<ChatMode>("profile");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hey! I’m Shubham’s portfolio assistant, and I’m online. Ask me about his projects, skills, or experience.",
    },
  ]);
  const [question, setQuestion] = useState("");
  const [sending, setSending] = useState(false);
  const [chatError, setChatError] = useState("");
  const messageListRef = useRef<HTMLDivElement>(null);
  const [contact, setContact] = useState<ContactFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
  });
  const [contactSending, setContactSending] = useState(false);
  const [contactStatus, setContactStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    setDark(savedTheme === "dark");
  }, []);

  useEffect(() => {
    const observedSections = ["home", ...navigation.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio);
        if (visibleSections[0]) setActiveSection(visibleSections[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.1, 0.3, 0.6] },
    );
    observedSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = document.querySelector(".portfolio");
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!root || reduceMotion || !("IntersectionObserver" in window)) {
      root?.classList.remove("reveal-enabled");
      revealElements.forEach((element) => element.classList.remove("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-revealed", entry.isIntersecting);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    revealElements.forEach((element) => observer.observe(element));
    root.classList.add("reveal-enabled");

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-enabled");
    };
  }, [reduceMotion, skillFilter, projectFilter]);

  useEffect(() => {
    messageListRef.current?.scrollTo({
      top: messageListRef.current.scrollHeight,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [messages, sending, reduceMotion]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setChatOpen(false);
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function toggleTheme() {
    setDark((current) => {
      const next = !current;
      window.localStorage.setItem("portfolio-theme", next ? "dark" : "light");
      return next;
    });
  }

  async function sendContactMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (contactSending) return;

    setContactSending(true);
    setContactStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });
      const data: unknown = await response.json();
      if (!response.ok) {
        const message =
          typeof data === "object" && data !== null && "error" in data && typeof data.error === "string"
            ? data.error
            : "Your message could not be sent. Please try again or email Shubham directly.";
        throw new Error(message);
      }

      setContact({ name: "", email: "", subject: "", message: "", company: "" });
      setContactStatus({
        type: "success",
        message: "Your message was accepted for delivery. Thank you — Shubham will get back to you.",
      });
    } catch (error) {
      setContactStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : "Your message could not be sent. Please try again.",
      });
    } finally {
      setContactSending(false);
    }
  }

  async function sendQuestion(event?: FormEvent<HTMLFormElement>, text = question) {
    event?.preventDefault();
    const trimmed = text.trim();
    if (!trimmed || sending) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setQuestion("");
    setChatError("");
    setSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.slice(-8) }),
      });
      const data: unknown = await response.json();

      if (!response.ok) {
        const errorMessage =
          typeof data === "object" &&
          data !== null &&
          "error" in data &&
          typeof data.error === "string"
            ? data.error
            : "I couldn’t get an answer just now. Please try again.";
        throw new Error(errorMessage);
      }

      if (
        typeof data !== "object" ||
        data === null ||
        !("reply" in data) ||
        typeof data.reply !== "string"
      ) {
        throw new Error("The assistant returned an unexpected response. Please try again.");
      }

      const reply = data.reply;
      if (typeof reply !== "string") {
        throw new Error("The assistant returned an unexpected response. Please try again.");
      }
      setMessages((current) => [...current, { role: "assistant", content: reply }]);
      if (typeof data === "object" && data !== null && "mode" in data && data.mode === "profile") {
        setChatMode("profile");
      } else {
        setChatMode("ai");
      }
    } catch (error) {
      setChatError(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    } finally {
      setSending(false);
    }
  }

  const motionOff = reduceMotion ?? false;

  return (
    <main className={`portfolio${dark ? " is-dark" : ""}`}>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Shubham Singh, home">
          <span className="wordmark-mark">S</span>
          <span>SHUBHAM<span className="wordmark-period">.</span></span>
        </a>
        <nav className={`desktop-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              aria-current={activeSection === item.id ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
          <a className="mobile-nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
            Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
        <div className="topbar-actions">
          <button
            className="icon-button theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-pressed={dark}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
            <span className="theme-toggle-label">{dark ? "Light" : "Dark"}</span>
          </button>
          <a className="nav-cta" href="#contact">
            Let&apos;s connect <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button
            className="icon-button menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div id="main-content">
        <div className="role-marquee" aria-label="AI, data analytics, data science, and full-stack development">
          <span className="visually-hidden">AI and machine learning engineer, data analytics engineer, data scientist, full-stack developer.</span>
          <div className="role-marquee-track" aria-hidden="true">
            {[0, 1].map((copy) => (
              <div className="role-marquee-content" key={copy}>
                <span>AI &amp; ML ENGINEER</span><Sparkles />
                <span>DATA ANALYTICS</span><Sparkles />
                <span>DATA SCIENCE</span><Sparkles />
                <span>FULL-STACK DEVELOPER</span><Sparkles />
              </div>
            ))}
          </div>
        </div>
        <section className="hero section-wrap" id="home">
          <div className="hero-backdrop" aria-hidden="true">
            <span className="hero-scanline" />
            <span className="hero-backdrop-orbit backdrop-orbit-one" />
            <span className="hero-backdrop-orbit backdrop-orbit-two" />
            <span className="hero-backdrop-index">DATA / AI / 001</span>
          </div>
          <motion.div
            className="hero-copy"
            initial={motionOff ? false : "hidden"}
            animate="visible"
            variants={reveal}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="eyebrow"><span className="status-dot" /> COMPUTER SCIENCE GRADUATE · OPEN TO OPPORTUNITIES</p>
            <h1>
              SHUBHAM<br />
              <span>SINGH</span>
            </h1>
            <p className="hero-lede hero-introduction">
              I&apos;m Shubham Singh, a Computer Science graduate who enjoys using data and technology to solve useful problems.
              Explore my work across analytics, AI and machine learning, data science, and full-stack development.
            </p>
            <div className="role-badges" aria-label="Professional interests">
              {roles.map((role) => (
                <a
                  className="role-badge"
                  href="#skills"
                  key={role.label}
                  onClick={() => setSkillFilter(role.track)}
                >
                  {role.label}<ArrowUpRight size={13} aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View my projects <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a className="button button-contact" href="#contact">
                Contact me <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="social-links" aria-label="Connect with Shubham">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  className="social-link"
                  href={href}
                  key={label}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                >
                  <Icon size={17} aria-hidden="true" /><span>{label}</span>
                </a>
              ))}
              <span className="social-link social-link-disabled" title="Add your Instagram profile URL to enable this link">
                <Camera size={17} aria-hidden="true" /><span>Instagram</span><small>link needed</small>
              </span>
            </div>
            <div className="hero-proof" aria-label="Portfolio highlights">
              <div><strong>{portfolioStats.completedProjects}</strong><small>PROJECTS COMPLETED</small></div>
              <div><strong>04</strong><small>SKILL AREAS</small></div>
              <div><strong>01</strong><small>AI ASSISTANT</small></div>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            aria-label="Decorative three-dimensional data visualization"
            initial={motionOff ? false : { opacity: 0, scale: 0.86, rotateY: -14 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            whileHover={motionOff ? undefined : { rotateY: -8, rotateX: 5, scale: 1.025 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-orbit orbit-three" />
            <div className="visual-core">
              <div className="core-glow" />
              <div className="core-grid" />
              <span className="core-label">SHUBHAM SINGH · DATA / AI / CODE</span>
              <div className="core-bars" aria-hidden="true">
                <i /><i /><i /><i /><i /><i /><i />
              </div>
              <span className="core-number">01<span>—</span>∞</span>
            </div>
            <div className="float-chip chip-sql"><Database size={15} /> SQL</div>
            <div className="float-chip chip-python"><Code2 size={15} /> PYTHON</div>
            <div className="float-chip chip-ai"><Sparkles size={15} /> AI / ML</div>
            <div className="tech-orbit" aria-label="Representative technologies across AI, analytics, science, and software">
              {orbitTechnologies.map((technology, index) => {
                const angle = (360 / orbitTechnologies.length) * index;
                const radians = (angle * Math.PI) / 180;
                const left = (50 + Math.sin(radians) * 40).toFixed(3);
                const top = (50 - Math.cos(radians) * 40).toFixed(3);
                return (
                  <span
                    className={`orbit-tech orbit-tech-${technology.category}`}
                    key={technology.label}
                    style={{ left: `${left}%`, top: `${top}%` }}
                  >
                    {technology.label}
                  </span>
                );
              })}
            </div>
            <div className="visual-caption"><span /> DATA IN MOTION <span>·</span> IDEAS IN PROGRESS</div>
          </motion.div>
        </section>

        <section className="content-section experience-section" id="experience">
          <div className="section-wrap">
            <div data-reveal><SectionHeader number="02" kicker="EXPERIENCE" title="Experience so far." /></div>
            <div className="experience-list">
              {experiences.map((experience, index) => (
                <motion.article
                  className="experience-row"
                  key={experience.role}
                  data-reveal
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <span className="experience-period">{experience.period}</span>
                  <span className="experience-icon"><BriefcaseBusiness size={19} aria-hidden="true" /></span>
                  <div className="experience-copy">
                    <h3>{experience.role}</h3>
                    <p className="experience-org">{experience.organization}</p>
                    <p className="experience-description">{experience.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section focus-section" id="skills">
          <div className="section-wrap">
            <div data-reveal><SectionHeader number="03" kicker="SKILLS & INTERESTS" title="A practical toolkit, still growing." /></div>
            <div className="skill-filters" role="group" aria-label="Filter skill categories" data-reveal>
              {tracks.map((track) => (
                <button
                  type="button"
                  className={skillFilter === track.id ? "is-selected" : ""}
                  aria-pressed={skillFilter === track.id}
                  aria-controls="skills-catalog"
                  key={track.id}
                  onClick={() => setSkillFilter(track.id)}
                >
                  {track.label}
                </button>
              ))}
            </div>
            <div className="skills-catalog" id="skills-catalog" key={skillFilter} data-reveal>
              {tracks.filter((track) => track.id === skillFilter).map((track) => (
                <div className={`skills-category skills-${track.color}`} key={track.id}>
                  <h3>{track.label}</h3>
                  {track.skillGroups.map((group) => (
                    <div className="skill-group" key={group.label}>
                      <h4>{group.label}</h4>
                      <div className="skill-tags" role="list">
                        {group.skills.map((skill) => (
                          <span className="skill-chip" role="listitem" tabIndex={0} key={skill}>{skill}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p className="toolkit-note">
              This technology catalog includes skills, tools, and topics I&apos;m exploring; it is not a claim of proficiency in every item.
            </p>
            <div className="skill-interests">
              <span className="interest-label">ALWAYS CURIOUS ABOUT</span>
              <div className="curiosity-grid">
                {curiosityGroups.map((group, index) => (
                  <article className={`curiosity-card curiosity-${group.color}`} key={group.label} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
                    <h3>{group.label}</h3>
                    <div className="interest-list">
                      {group.items.map((interest) => <span key={interest}>{interest}</span>)}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="content-section section-wrap work-section" id="work">
          <div data-reveal><SectionHeader number="04" kicker="SELECTED PROJECTS" title="Projects, experiments, and what I&apos;m building next." /></div>
          <div className="project-filters" role="group" aria-label="Filter project categories" data-reveal>
            {[
              { id: "all", label: "All projects" },
              { id: "analytics", label: "Data analytics" },
              { id: "ai-ml", label: "AI & machine learning" },
            ].map((filter) => (
              <button
                type="button"
                className={projectFilter === filter.id ? "is-selected" : ""}
                aria-pressed={projectFilter === filter.id}
                key={filter.id}
                onClick={() => setProjectFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="projects-grid">
            {projects.filter((project) => projectFilter === "all" || project.categoryId === projectFilter).map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.article
                  className="project-card"
                  key={project.number}
                  whileHover={motionOff ? undefined : { y: -6, rotateX: 2 }}
                  data-reveal
                  style={{ transitionDelay: `${(index % 2) * 100}ms` }}
                >
                  <div className={`project-art ${project.className}`}>
                    <div className="art-window" aria-hidden="true">
                      <div className="art-window-top"><i /><i /><i /><span>INSIGHT / {project.number}</span></div>
                      <div className="art-window-content">
                        <div className="art-side"><i /><i /><i /><i /></div>
                        <div className="art-visual">
                          <span className="art-visual-label">{project.artLabel}</span>
                          <div className="art-graph"><i /><i /><i /><i /><i /><i /></div>
                        </div>
                      </div>
                    </div>
                    <ProjectSubject type={project.className} />
                    <span className="art-project-icon"><Icon size={19} aria-hidden="true" /></span>
                    <span className="art-index">{project.inProgress ? "WIP" : project.number}</span>
                  </div>
                  <div className="project-info">
                    <div className="project-meta"><span>{project.category}</span><ArrowUpRight size={17} aria-hidden="true" /></div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {project.inProgress && <span className="project-status">IN PROGRESS</span>}
                    <div className="project-technologies" aria-label="Technologies and topics">
                      {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                    </div>
                    <div className="project-actions">
                      <a href={project.href} target="_blank" rel="noopener noreferrer">
                        <Code2 size={15} aria-hidden="true" /> Source code <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                      {project.demoHref && (
                        <a href={project.demoHref} target="_blank" rel="noopener noreferrer">
                          Live demo <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
          <a className="all-work-link" href="/projects" aria-label={`More Projects, ${additionalProjects.length} additional public repository`}>
            More Projects <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </section>

        <section className="content-section certification-section" id="certifications">
          <div className="section-wrap">
            <div data-reveal><SectionHeader number="05" kicker="CERTIFICATIONS" title="Learning, with proof when it’s ready." /></div>
            {certifications.length > 0 ? (
              <div className="certification-grid">
                {certifications.map((certification) => (
                  <article className="certification-card" key={`${certification.organization}-${certification.title}`} data-reveal>
                    <span><Sparkles size={18} aria-hidden="true" /></span>
                    <div>
                      <h3>{certification.title}</h3>
                      <p>{certification.organization}{certification.issueDate ? ` · ${certification.issueDate}` : ""}</p>
                    </div>
                    {certification.url && (
                      <a href={certification.url} target="_blank" rel="noopener noreferrer">
                        View certificate <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              <div className="certification-empty" data-reveal>
                <Sparkles size={20} aria-hidden="true" />
                <div>
                  <h3>Certificate links coming soon</h3>
                  <p>No verified certificate URLs have been added yet. I&apos;ll share them here once available.</p>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-layout">
            <div className="contact-copy">
              <div data-reveal><SectionHeader number="06" kicker="CONTACT" title="Have an idea? Let’s talk." /></div>
              <p className="contact-intro" data-reveal>Tell me what you&apos;re working on or what you&apos;d like to discuss.</p>
              <a className="button button-light" href="mailto:shubhamkanpura7@gmail.com">
                Say hello <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <div className="contact-socials" data-reveal>
                {socialLinks.slice(0, 2).map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                    <Icon size={16} aria-hidden="true" /> {label}
                  </a>
                ))}
              </div>
            </div>
            <form className="contact-form" onSubmit={sendContactMessage} data-reveal>
              <div className="contact-form-row">
                <label>
                  Your name
                  <input
                    autoComplete="name"
                    maxLength={100}
                    name="name"
                    required
                    value={contact.name}
                    onChange={(event) => setContact({ ...contact, name: event.target.value })}
                  />
                </label>
                <label>
                  Email address
                  <input
                    autoComplete="email"
                    maxLength={254}
                    name="email"
                    type="email"
                    required
                    value={contact.email}
                    onChange={(event) => setContact({ ...contact, email: event.target.value })}
                  />
                </label>
              </div>
              <label>
                Subject
                <input
                  maxLength={150}
                  name="subject"
                  required
                  value={contact.subject}
                  onChange={(event) => setContact({ ...contact, subject: event.target.value })}
                />
              </label>
              <label>
                Message
                <textarea
                  maxLength={5000}
                  name="message"
                  required
                  rows={5}
                  value={contact.message}
                  onChange={(event) => setContact({ ...contact, message: event.target.value })}
                />
              </label>
              <label className="contact-honeypot" aria-hidden="true">
                Company
                <input
                  autoComplete="off"
                  name="company"
                  tabIndex={-1}
                  value={contact.company}
                  onChange={(event) => setContact({ ...contact, company: event.target.value })}
                />
              </label>
              <button className="button button-primary contact-submit" type="submit" disabled={contactSending}>
                {contactSending ? "Sending…" : "Send message"}
                <Send size={16} aria-hidden="true" />
              </button>
              {contactStatus && (
                <p className={`contact-status contact-status-${contactStatus.type}`} role="status" aria-live="polite">
                  {contactStatus.message}
                </p>
              )}
              <p className="contact-email-fallback">
                Prefer email? <a href="mailto:shubhamkanpura7@gmail.com">shubhamkanpura7@gmail.com</a>
              </p>
            </form>
          </div>
        </section>
      </div>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home">
          <span className="wordmark-mark">S</span>
          <span>Shubham Singh<span className="wordmark-period">.</span></span>
        </a>
        <p>Data analytics · AI / ML · Data science · Full-stack</p>
        <div className="footer-socials" aria-label="Social profiles">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} aria-label={label} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer">
              <Icon size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
        <a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={15} aria-hidden="true" /></a>
        <small>© {new Date().getFullYear()} Shubham Singh</small>
      </footer>

      <div className="chat-launcher-wrap">
        {chatOpen && (
          <section id="chat-panel" className="chat-panel" aria-label="Chat with Shubham's portfolio assistant">
            <header className="chat-header">
              <span className="chat-avatar"><Sparkles size={19} aria-hidden="true" /></span>
              <div>
                <strong>Ask about Shubham</strong>
                <small><i /> {chatMode === "ai" ? "GENERATIVE AI ONLINE" : "PROFILE ASSISTANT ONLINE"}</small>
              </div>
              <button className="chat-close" type="button" onClick={() => setChatOpen(false)} aria-label="Close chat">
                <X size={18} />
              </button>
            </header>
            <div className="chat-messages" ref={messageListRef} aria-live="polite">
              {messages.map((message, index) => (
                <div className={`chat-message ${message.role}`} key={`${message.role}-${index}`}>
                  {message.content}
                </div>
              ))}
              {sending && <div className="chat-message assistant typing-indicator" aria-label="Assistant is typing"><i /><i /><i /></div>}
            </div>
            {messages.length === 1 && (
              <div className="quick-questions" aria-label="Suggested questions">
                {quickQuestions.map((item) => (
                  <button type="button" key={item} disabled={sending} onClick={() => void sendQuestion(undefined, item)}>
                    {item} <ArrowRight size={13} aria-hidden="true" />
                  </button>
                ))}
              </div>
            )}
            {chatError && <p className="chat-error" role="alert">{chatError}</p>}
            <form className="chat-form" onSubmit={(event) => void sendQuestion(event)}>
              <label className="visually-hidden" htmlFor="chat-question">Ask a question about Shubham</label>
              <input
                id="chat-question"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder="Ask me anything..."
                maxLength={1000}
                disabled={sending}
              />
              <button type="submit" disabled={sending || !question.trim()} aria-label="Send message">
                <Send size={17} aria-hidden="true" />
              </button>
            </form>
            <p className="chat-footnote">
              {chatMode === "ai"
                ? "AI answers are grounded in the information on this portfolio."
                : "Profile answers are active. Add AI_API_KEY in Vercel for generative answers."}
            </p>
          </section>
        )}
        <button
          className={`chat-launcher${chatOpen ? " is-open" : ""}`}
          type="button"
          onClick={() => setChatOpen((open) => !open)}
          aria-label={chatOpen ? "Close portfolio assistant" : "Ask the portfolio assistant about Shubham"}
          aria-expanded={chatOpen}
          aria-controls="chat-panel"
        >
          {chatOpen ? <X size={22} /> : <><Sparkles size={20} /><span>Ask about me</span></>}
        </button>
      </div>
    </main>
  );
}

function SectionHeader({ number, kicker, title }: { number: string; kicker: string; title: string }) {
  return (
    <div className="section-heading">
      <div className="section-kicker"><span>{number}</span>{kicker}</div>
      <h2>{title}</h2>
    </div>
  );
}

function ProjectSubject({ type }: { type: string }) {
  if (type === "pizza-art") {
    return (
      <div className="project-subject pizza-subject" aria-hidden="true">
        <div className="pizza-disc"><i /><i /><i /><i /><i /><i /></div>
        <div className="subject-metric"><small>SALES MIX</small><span className="mini-bars"><i /><i /><i /><i /><i /></span></div>
      </div>
    );
  }
  if (type === "churn-art") {
    return (
      <div className="project-subject churn-subject" aria-hidden="true">
        <div className="customer-cluster"><i /><i /><i /><i /><i /></div>
        <div className="subject-metric"><small>RETENTION</small><span className="retention-line"><i /><i /><i /><i /></span></div>
      </div>
    );
  }
  if (type === "movie-art") {
    return (
      <div className="project-subject movie-subject" aria-hidden="true">
        <div className="movie-illustration">
          <span className="movie-caption">PICKED FOR YOU</span>
          <div className="movie-cards">
            <i><span>SCI-FI</span></i>
            <i><span>DRAMA</span></i>
            <i><span>ADVENTURE</span></i>
          </div>
          <span className="movie-match"><Sparkles size={12} /> MATCHED TO YOUR TASTE</span>
        </div>
      </div>
    );
  }
  return (
    <div className="project-subject health-subject" aria-hidden="true">
      <svg viewBox="0 0 240 120" role="presentation">
        <path className="heart-shape" d="M120 108 31 51C-15 17 33-20 73 7l47 40 47-40c40-27 88 10 42 44z" />
        <path className="heart-pulse" d="M4 62h48l13-19 18 39 17-29 12 10h31l13-16 16 30 14-15h40" />
      </svg>
      <span>MACHINE-LEARNING CONCEPT · IN PROGRESS</span>
    </div>
  );
}
