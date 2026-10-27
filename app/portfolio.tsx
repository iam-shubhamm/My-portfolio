"use client";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
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
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  href: string;
  className: string;
  icon: typeof BarChart3;
  artLabel: string;
  inProgress?: boolean;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Retail sales & revenue analysis",
    category: "TABLEAU · BUSINESS INTELLIGENCE",
    description:
      "Explored online retail revenue, customer performance, and country-level sales with interactive charts and maps.",
    href: "https://github.com/iam-shubhamm/Tata-Retail-Sales---Revenue-Analysis",
    className: "retail-art",
    icon: BarChart3,
    artLabel: "Abstract bar chart illustration",
  },
  {
    number: "02",
    title: "Pizza sales dashboard",
    category: "SQL SERVER · POWER BI",
    description:
      "Analyzed revenue, order volume, average order value, product performance, and sales trends.",
    href: "https://github.com/iam-shubhamm/Pizza-Sales-Analysis-Dashboard-using-MS-SQL-Server-and-Power-BI",
    className: "pizza-art",
    icon: Database,
    artLabel: "Abstract circular pizza sales chart",
  },
  {
    number: "03",
    title: "Customer churn analysis",
    category: "POWER BI · CUSTOMER INSIGHTS",
    description:
      "Explored customer churn behavior and retention patterns through an interactive dashboard.",
    href: "https://github.com/iam-shubhamm/Customer-Churn-Prediction",
    className: "churn-art",
    icon: BrainCircuit,
    artLabel: "Abstract customer data illustration",
  },
  {
    number: "04",
    title: "Movie recommendation system",
    category: "PYTHON · STREAMLIT",
    description:
      "Built a movie recommendation experience that suggests films using similarity-based logic.",
    href: "https://github.com/iam-shubhamm/Movie-Recommendation-System",
    className: "movie-art",
    icon: Code2,
    artLabel: "Abstract film recommendation illustration",
  },
  {
    number: "05",
    title: "HR analysis dashboard",
    category: "DATA ANALYTICS · IN PROGRESS",
    description:
      "A new HR analytics repository is in progress. Follow the project on GitHub as I publish the analysis and dashboard.",
    href: "https://github.com/iam-shubhamm/HR_Aalysis_Dashboard",
    className: "hr-art",
    icon: Network,
    artLabel: "Abstract workforce analytics illustration",
    inProgress: true,
  },
  {
    number: "06",
    title: "Shopping behavior analysis",
    category: "DATA SCIENCE · IN PROGRESS",
    description:
      "A shopping behavior analysis project is in progress. Visit the repository for updates as the work develops.",
    href: "https://github.com/iam-shubhamm/Online_Customer_Shopping_Behavior_Analysis",
    className: "shopping-art",
    icon: BarChart3,
    artLabel: "Abstract shopping data illustration",
    inProgress: true,
  },
  {
    number: "07",
    title: "Heart-attack prediction",
    category: "MACHINE LEARNING · IN PROGRESS",
    description:
      "An early machine-learning project repository. The public repository is currently being developed; no model results are claimed.",
    href: "https://github.com/iam-shubhamm/Heart-Attack-Prediction-Using-Machine-Learning-Models",
    className: "health-art",
    icon: BrainCircuit,
    artLabel: "Abstract machine-learning illustration",
    inProgress: true,
  },
];

const tracks = [
  {
    number: "01",
    label: "DATA ANALYTICS",
    title: "Turn data into direction.",
    description:
      "Query, clean, and explore data, then communicate useful findings with clear dashboards and reporting.",
    skills: ["SQL", "SQL Server", "Power BI", "Tableau", "Excel", "Data cleaning", "EDA"],
    icon: BarChart3,
    color: "mint",
  },
  {
    number: "02",
    label: "AI & MACHINE LEARNING",
    title: "Explore intelligent systems.",
    description:
      "Build a foundation in AI/ML through Python projects, recommendation logic, and hands-on learning.",
    skills: ["Python", "NumPy", "Pandas", "Recommendation systems", "Machine-learning fundamentals"],
    icon: BrainCircuit,
    color: "violet",
  },
  {
    number: "03",
    label: "DATA SCIENCE",
    title: "Ask better questions of data.",
    description:
      "Use analytical thinking, data preparation, and exploratory methods to understand patterns and frame useful questions.",
    skills: ["Python", "Pandas", "NumPy", "Exploratory analysis", "Data storytelling"],
    icon: Database,
    color: "blue",
  },
  {
    number: "04",
    label: "FULL-STACK DEVELOPMENT",
    title: "Take ideas across the stack.",
    description:
      "Keep growing as a full-stack developer by building responsive experiences and server-backed features.",
    skills: ["React", "Next.js", "TypeScript", "CSS", "API routes", "GitHub"],
    icon: Code2,
    color: "orange",
  },
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

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  const reduceMotion = useReducedMotion();
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    setDark(savedTheme === "dark");
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
          <span>shubham<span className="wordmark-period">.</span></span>
        </a>
        <nav className={`desktop-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
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
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            title={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {dark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
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
          <motion.div
            className="hero-copy"
            initial={motionOff ? false : "hidden"}
            animate="visible"
            variants={reveal}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</p>
            <h1>
              Shubham<br />
              <span>Singh.</span>
            </h1>
            <p className="hero-lede">
              I&apos;m a <strong>Data Analyst and aspiring Data Scientist</strong>, building
              toward AI/ML engineering and full-stack development. I turn curious questions
              into thoughtful, useful digital experiences.
            </p>
            <div className="hero-tags" aria-label="Areas of interest">
              <span>AI / ML ENGINEERING</span><i /><span>FULL-STACK DEVELOPER</span><i />
              <span>DATA ANALYST</span><i /><span>DATA SCIENCE</span>
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a className="text-link" href="#about">
                A little about me <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-proof">
              <div><strong>04</strong><small>COMPLETED PROJECTS</small></div>
              <div><strong>04</strong><small>SKILL TRACKS</small></div>
              <div><strong>01</strong><small>CURIOUS MIND</small></div>
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

        <section className="manifesto" aria-label="A note on how I work">
          <div className="section-wrap manifesto-inner">
            <span className="manifesto-mark"><Sparkles size={18} aria-hidden="true" /></span>
            <p>Stay curious. Build with purpose. Turn every new question into a chance to learn.</p>
            <span className="manifesto-caption">THE WAY I MOVE FORWARD</span>
          </div>
        </section>

        <div className="ticker" aria-label="Areas I work across">
          <div className="ticker-track" aria-hidden="true">
            {Array.from({ length: 2 }, (_, index) => (
              <span className="ticker-set" key={index}>
                <span>DATA ANALYTICS</span><i>✳</i><span>AI &amp; MACHINE LEARNING</span><i>✳</i>
                <span>FULL-STACK DEVELOPMENT</span><i>✳</i><span>BUSINESS INTELLIGENCE</span><i>✳</i>
              </span>
            ))}
          </div>
        </div>

        <section className="content-section section-wrap about-section" id="about">
          <SectionHeader number="01" kicker="A LITTLE ABOUT ME" title="Curious by nature. Builder by instinct." />
          <div className="about-layout">
            <p className="about-lede">
              I like connecting the dots between <span>data, technology,</span> and the people
              they can help.
            </p>
            <div className="about-detail">
              <p>
                My work so far spans data preparation, SQL analysis, Python projects, and
                dashboards that make findings easier to act on. Now I&apos;m growing my
                full-stack and AI/ML skills by building practical things — including this
                portfolio and its AI-powered guide.
              </p>
              <a href="#experience" className="inline-arrow">
                My experience <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="content-section focus-section" id="skills">
          <div className="section-wrap">
            <SectionHeader number="02" kicker="MY SKILLS" title="A growing toolkit, grouped by what it helps me do." />
            <div className="focus-grid">
              {tracks.map((track, index) => {
                const Icon = track.icon;
                return (
                  <motion.article
                    className={`focus-card focus-${track.color}`}
                    key={track.number}
                    initial={motionOff ? false : "hidden"}
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.18 }}
                    variants={reveal}
                    transition={{ duration: 0.55, delay: index * 0.1 }}
                    whileHover={motionOff ? undefined : { y: -7, rotateX: 2 }}
                  >
                    <div className="focus-card-top">
                      <span className="focus-number">{track.number}</span>
                      <span className="focus-icon"><Icon size={21} aria-hidden="true" /></span>
                    </div>
                    <p className="focus-label">{track.label}</p>
                    <h3>{track.title}</h3>
                    <p className="focus-description">{track.description}</p>
                    <div className="skill-tags">
                      {track.skills.map((skill) => <span key={skill}>{skill}</span>)}
                    </div>
                  </motion.article>
                );
              })}
            </div>
            <p className="toolkit-note">
              Practical skills, project tools, and areas I&apos;m actively developing — experience varies by technology.
            </p>
          </div>
        </section>

        <section className="content-section section-wrap work-section" id="work">
          <SectionHeader number="03" kicker="SELECTED PROJECTS" title="Projects, experiments, and what I&apos;m building next." />
          <div className="projects-grid">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card"
                  key={project.number}
                  initial={motionOff ? false : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.16 }}
                  variants={reveal}
                  transition={{ duration: 0.55, delay: (index % 2) * 0.1 }}
                  whileHover={motionOff ? undefined : { y: -6, rotateX: 2 }}
                  aria-label={`Open ${project.title} on GitHub`}
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
                  </div>
                </motion.a>
              );
            })}
          </div>
          <a className="all-work-link" href="https://github.com/iam-shubhamm" target="_blank" rel="noopener noreferrer">
            Explore all my repositories <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </section>

        <section className="content-section experience-section" id="experience">
          <div className="section-wrap">
            <SectionHeader number="04" kicker="EXPERIENCE" title="Learning by doing." />
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

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-layout">
            <div className="contact-copy">
              <p className="eyebrow"><span className="status-dot" /> LET&apos;S BUILD SOMETHING GOOD</p>
              <h2>Have an idea?<br /><span>Let&apos;s talk.</span></h2>
              <a className="button button-light" href="mailto:shubhamkanpura7@gmail.com">
                Say hello <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="contact-links">
              <a href="mailto:shubhamkanpura7@gmail.com">
                <span><Mail size={18} aria-hidden="true" /></span>
                <div><small>EMAIL</small><strong>shubhamkanpura7@gmail.com</strong></div>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a href="https://github.com/iam-shubhamm" target="_blank" rel="noopener noreferrer">
                <span><Code2 size={18} aria-hidden="true" /></span>
                <div><small>GITHUB</small><strong>iam-shubhamm</strong></div>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/shubhamsingh7a" target="_blank" rel="noopener noreferrer">
                <span><Network size={18} aria-hidden="true" /></span>
                <div><small>LINKEDIN</small><strong>Shubham Singh</strong></div>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home">
          <span className="wordmark-mark">S</span>
          <span>shubham<span className="wordmark-period">.</span></span>
        </a>
        <p>Data · AI / ML · Full-stack</p>
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
