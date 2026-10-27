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
    artLabel: "Abstract film recommendation illustration",
    technologies: ["Python", "Streamlit", "Similarity logic"],
  },
  {
    number: "04",
    title: "Heart-attack prediction",
    category: "MACHINE LEARNING · IN PROGRESS",
    categoryId: "ai-ml",
    description:
      "An early machine-learning project repository. The public repository is currently being developed; no model results are claimed.",
    href: "https://github.com/iam-shubhamm/Heart-Attack-Prediction-Using-Machine-Learning-Models",
    className: "health-art",
    icon: BrainCircuit,
    artLabel: "Abstract machine-learning illustration",
    technologies: ["Machine learning", "Python"],
    inProgress: true,
  },
];

const tracks = [
  {
    number: "01",
    id: "analytics",
    label: "DATA ANALYTICS",
    title: "Data Analytics Engineer",
    description:
      "Analyze, prepare, and communicate data through SQL queries, business intelligence, and dashboards.",
    skills: ["SQL", "SQL Server", "Power BI", "Tableau", "Excel", "Data cleaning", "EDA"],
    skillGroups: [
      { label: "Query & prepare", skills: ["SQL", "SQL Server", "Data cleaning"] },
      { label: "Analyze & communicate", skills: ["Power BI", "Tableau", "Excel", "EDA"] },
    ],
    icon: BarChart3,
    color: "mint",
  },
  {
    number: "02",
    id: "ai-ml",
    label: "AI & MACHINE LEARNING",
    title: "AI & Machine Learning",
    description:
      "Explore practical intelligent systems with Python projects and a growing foundation in machine learning.",
    skills: ["Python", "NumPy", "Pandas", "Recommendation systems", "Machine-learning fundamentals"],
    skillGroups: [
      { label: "Libraries", skills: ["Python", "NumPy", "Pandas"] },
      { label: "Concepts", skills: ["Recommendation systems", "Machine-learning fundamentals"] },
    ],
    icon: BrainCircuit,
    color: "violet",
  },
  {
    number: "03",
    id: "data-science",
    label: "DATA SCIENCE",
    title: "Data Science",
    description:
      "Use exploratory analysis and thoughtful data preparation to understand patterns and ask better questions.",
    skills: ["Python", "Pandas", "NumPy", "Exploratory analysis", "Data storytelling"],
    skillGroups: [
      { label: "Explore & prepare", skills: ["Python", "Pandas", "NumPy", "Exploratory analysis"] },
      { label: "Communicate", skills: ["Data storytelling"] },
    ],
    icon: Database,
    color: "blue",
  },
  {
    number: "04",
    id: "full-stack",
    label: "FULL-STACK DEVELOPMENT",
    title: "Full Stack Development",
    description:
      "Build responsive web experiences and server-backed features with modern JavaScript frameworks.",
    skills: ["React", "Next.js", "TypeScript", "CSS", "API routes", "Git", "GitHub", "Streamlit"],
    skillGroups: [
      { label: "Frontend", skills: ["React", "Next.js", "TypeScript", "CSS"] },
      { label: "Backend & workflow", skills: ["API routes", "Git", "GitHub", "Streamlit"] },
    ],
    icon: Code2,
    color: "orange",
  },
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
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [skillFilter, setSkillFilter] = useState("all");
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
    setDark(savedTheme === null ? true : savedTheme === "dark");
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
            <div className="tech-orbit" aria-label="Tools and technologies orbiting the data sphere">
              <span>SQL</span><span>Python</span><span>Power BI</span><span>Tableau</span>
              <span>React</span><span>Next.js</span><span>TypeScript</span><span>ML</span>
            </div>
            <div className="visual-caption"><span /> DATA IN MOTION <span>·</span> IDEAS IN PROGRESS</div>
          </motion.div>
        </section>

        <section className="content-section experience-section" id="experience">
          <div className="section-wrap">
            <SectionHeader number="02" kicker="EXPERIENCE" title="Experience so far." />
            <div className="experience-list">
              {experiences.map((experience, index) => (
                <motion.article
                  className="experience-row"
                  key={experience.role}
                  initial={motionOff ? false : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={reveal}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
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
            <SectionHeader number="03" kicker="SKILLS & INTERESTS" title="A practical toolkit, still growing." />
            <div className="skill-filters" role="group" aria-label="Filter skill categories">
              <button
                type="button"
                className={skillFilter === "all" ? "is-selected" : ""}
                aria-pressed={skillFilter === "all"}
                onClick={() => setSkillFilter("all")}
              >
                All skills
              </button>
              {tracks.map((track) => (
                <button
                  type="button"
                  className={skillFilter === track.id ? "is-selected" : ""}
                  aria-pressed={skillFilter === track.id}
                  key={track.id}
                  onClick={() => setSkillFilter(track.id)}
                >
                  {track.label}
                </button>
              ))}
            </div>
            <motion.div className="focus-grid" layout>
              {tracks.filter((track) => skillFilter === "all" || track.id === skillFilter).map((track, index) => {
                const Icon = track.icon;
                return (
                  <motion.article
                    className={`focus-card focus-${track.color}`}
                    key={track.id}
                    layout
                    initial={motionOff ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: motionOff ? 0 : 0.38, delay: motionOff ? 0 : index * 0.06 }}
                    whileHover={motionOff ? undefined : { y: -7, rotateX: 2 }}
                  >
                    <div className="focus-card-top">
                      <span className="focus-number">{track.number}</span>
                      <span className="focus-icon"><Icon size={21} aria-hidden="true" /></span>
                    </div>
                    <p className="focus-label">{track.label}</p>
                    <h3>{track.title}</h3>
                    <p className="focus-description">{track.description}</p>
                    {track.skillGroups.map((group) => (
                      <div className="skill-group" key={group.label}>
                        <span className="skill-group-label">{group.label}</span>
                        <div className="skill-tags">
                          {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                        </div>
                      </div>
                    ))}
                  </motion.article>
                );
              })}
            </motion.div>
            <p className="toolkit-note">
              Practical skills, project tools, and areas I&apos;m actively developing — experience varies by technology.
            </p>
            <div className="skill-interests">
              <span className="interest-label">ALWAYS CURIOUS ABOUT</span>
              <div className="interest-list">
                {["Data storytelling", "Practical AI", "Customer insights", "Interactive dashboards", "Useful digital tools"].map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={motionOff ? false : { opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.3, delay: index * 0.07 }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="content-section section-wrap work-section" id="work">
          <SectionHeader number="04" kicker="SELECTED PROJECTS" title="Projects, experiments, and what I&apos;m building next." />
          <div className="project-filters" role="group" aria-label="Filter project categories">
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
                  initial={motionOff ? false : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.16 }}
                  variants={reveal}
                  transition={{ duration: 0.55, delay: (index % 2) * 0.1 }}
                  whileHover={motionOff ? undefined : { y: -6, rotateX: 2 }}
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
          <a className="all-work-link" href="https://github.com/iam-shubhamm" target="_blank" rel="noopener noreferrer">
            Explore all my repositories <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </section>

        <section className="content-section certification-section" id="certifications">
          <div className="section-wrap">
            <SectionHeader number="05" kicker="CERTIFICATIONS" title="Learning, with proof when it’s ready." />
            {certifications.length > 0 ? (
              <div className="certification-grid">
                {certifications.map((certification) => (
                  <article className="certification-card" key={`${certification.organization}-${certification.title}`}>
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
              <div className="certification-empty">
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
              <SectionHeader number="06" kicker="CONTACT" title="Have an idea? Let’s talk." />
              <p className="contact-intro">Tell me what you&apos;re working on or what you&apos;d like to discuss.</p>
              <a className="button button-light" href="mailto:shubhamkanpura7@gmail.com">
                Say hello <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <div className="contact-socials">
                {socialLinks.slice(0, 2).map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                    <Icon size={16} aria-hidden="true" /> {label}
                  </a>
                ))}
              </div>
            </div>
            <form className="contact-form" onSubmit={sendContactMessage}>
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
