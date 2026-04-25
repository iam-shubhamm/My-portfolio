"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      revealItems.forEach((item) => {
        const top = item.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          item.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  const skills = [
    "Power BI",
    "MS SQL Server",
    "SQL",
    "Python",
    "Data Analysis",
    "Dashboard Creation",
    "Data Visualization",
    "Business Insights",
  ];

  const projects = [
    {
      title: "Pizza Sales Analysis Dashboard",
      link: "https://github.com/iam-shubhamm/Pizza-Sales-Analysis-Dashboard-using-MS-SQL-Server-and-Power-BI",
      tools: "MS SQL Server, Power BI",
      desc: "Analyzed pizza sales data to track revenue, orders, top-selling pizzas, trends, and business performance using SQL and Power BI.",
    },
    {
      title: "Customer Churn Prediction",
      link: "https://github.com/iam-shubhamm/Customer-Churn-Prediction",
      tools: "Power BI",
      desc: "Created a Power BI dashboard to understand customer churn patterns and present clear business insights.",
    },
    {
      title: "Movie Recommendation System",
      link: "https://github.com/iam-shubhamm/Movie-Recommendation-System",
      tools: "Python, Streamlit",
      desc: "Built a movie recommendation project that suggests movies based on similarity logic using Streamlit.",
    },
  ];

  return (
    <main className={dark ? "dark" : ""}>
      <div className="bg-animation">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className="navbar">
        <h2 className="logo">
          Shubham<span>.</span>
        </h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button onClick={() => setDark(!dark)} className="theme-btn">
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>

      <section id="home" className="hero">
        <div className="hero-text reveal">
          <p className="tag">Data Analyst</p>

          <h1>
            Hi, I&apos;m <span>Shubham Singh</span>
          </h1>

          <p>
            I am a Data Analyst skilled in Power BI, SQL, Python, dashboard
            creation, data visualization, and business insights.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-card reveal">
          <div className="data-visual-3d">
            <div className="cube">
              <div className="face front">Power BI</div>
              <div className="face back">SQL</div>
              <div className="face right">Python</div>
              <div className="face left">Data</div>
              <div className="face top">Charts</div>
              <div className="face bottom">Insights</div>
            </div>

            <div className="chart-bars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>Data • Dashboard • Insights</p>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="title reveal">
          <p>About Me</p>
          <h2>Data Analyst Profile</h2>
        </div>

        <div className="about-box reveal">
          <p>
            I am a B.Tech Computer Science graduate with a strong interest in
            Data Analytics. I work with Power BI, SQL, MS SQL Server, and Python
            to analyze data, create dashboards, and generate useful business
            insights.
          </p>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="title reveal">
          <p>Skills</p>
          <h2>Data Analytics Skills</h2>
        </div>

        <div className="grid">
          {skills.map((skill) => (
            <div className="card reveal" key={skill}>
              <h3>{skill}</h3>
              <p>Project-based practical knowledge used in data analysis.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="title reveal">
          <p>Projects</p>
          <h2>My Data Projects</h2>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card reveal"
              key={project.title}
            >
              <div className="project-number">0{index + 1}</div>

              <div>
                <h3>{project.title}</h3>
                <span>{project.tools}</span>
                <p>{project.desc}</p>
              </div>

              <div className="project-arrow">↗</div>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="title reveal">
          <p>Contact</p>
          <h2>Let&apos;s Connect</h2>
        </div>

        <div className="contact-container reveal">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shubhamkanpura7@gmail.com&su=Portfolio%20Contact&body=Hi%20Shubham,%0A%0AI%20visited%20your%20portfolio%20and%20want%20to%20connect%20with%20you.%0A%0A"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span>📧</span>
            <div>
              <h3>Email</h3>
              <p>Click to open Gmail compose</p>
            </div>
          </a>

          <a
            href="https://github.com/iam-shubhamm"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span>💻</span>
            <div>
              <h3>GitHub</h3>
              <p>github.com/iam-shubhamm</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/shubhamsingh7a"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span>🔗</span>
            <div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/shubhamsingh7a</p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
