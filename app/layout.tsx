"use client";

import { useState } from "react";

const projects = [
  {
    title: "Customer Churn Prediction",
    tag: "Power BI Dashboard",
    icon: "📊",
    desc: "Analyzed telecom customer churn patterns using Power BI, KPIs, contract type, tenure and monthly charges.",
    tech: ["Power BI", "Dashboard", "KPI", "Churn"],
    link: "https://github.com/iam-shubhamm/Customer-Churn-Prediction",
  },
  {
    title: "Pizza Sales Data Analysis",
    tag: "SQL + Power BI",
    icon: "🍕",
    desc: "Analyzed pizza sales records using MS SQL Server and Power BI to find revenue trends, best-selling products and business insights.",
    tech: ["SQL Server", "Power BI", "Sales", "KPI"],
    link: "https://github.com/iam-shubhamm/Pizza-Sales-Analysis-Dashboard-using-MS-SQL-Server-and-Power-BI",
  },
  {
    title: "Movie Recommendation System",
    tag: "Python ML App",
    icon: "🎬",
    desc: "Built a content-based recommendation system using Python, Pandas, Scikit-learn and Streamlit.",
    tech: ["Python", "ML", "Streamlit", "Pandas"],
    link: "https://github.com/iam-shubhamm/Movie-Recommendation-System",
  },
];

const skills = [
  "SQL",
  "Python",
  "Power BI",
  "Advanced Excel",
  "Tableau",
  "Pandas",
  "NumPy",
  "Data Cleaning",
  "EDA",
  "KPI Analysis",
  "Dashboard Design",
  "Data Storytelling",
];

export default function Home() {
  const [light, setLight] = useState(false);

  return (
    <main className={light ? "site light" : "site dark"}>
      <button className="theme-toggle" onClick={() => setLight(!light)}>
        {light ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

      <nav className="navbar">
        <div className="nav-inner">
          <h2 className="logo">
            Shubham<span>.</span>
          </h2>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <p className="small-badge">Data Analyst Portfolio</p>

          <h1>
            I Turn Raw Data Into
            <span>Business Insights</span>
          </h1>

          <p className="hero-text">
            Hi, I’m Shubham Singh — a Data Analyst skilled in SQL, Python,
            Power BI, Excel and dashboards that help businesses make better
            decisions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work
            </a>

            <a
              href="https://github.com/iam-shubhamm"
              target="_blank"
              className="secondary-btn"
            >
              GitHub Profile
            </a>

            <a
              href="https://www.linkedin.com/in/shubhamsingh7a"
              target="_blank"
              className="secondary-btn"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-ring">
            <div className="profile">SS</div>
          </div>

          <h2>Shubham Singh</h2>
          <p>Data Analyst | Python | SQL | Power BI</p>

          <div className="mini-tags">
            <span>Power BI</span>
            <span>SQL</span>
            <span>Python</span>
            <span>Excel</span>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <p className="section-subtitle">ABOUT ME</p>
        <h2 className="section-title">Turning Data Into Decisions</h2>

        <div className="about-grid">
          <div className="glass-box">
            <h3>👋 Who I Am</h3>
            <p>
              I am a Data Analyst with hands-on experience in SQL, Python,
              Excel, Power BI and Tableau. I enjoy working with real-world
              datasets and converting raw data into useful business insights.
            </p>
          </div>

          <div className="glass-box">
            <h3>🎯 What I Focus On</h3>
            <p>
              I focus on dashboard development, KPI analysis, data cleaning,
              exploratory data analysis and clear data storytelling for better
              decision-making.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="section-subtitle">WHY CHOOSE ME</p>
        <h2 className="section-title">I Build Dashboards That Tell Stories</h2>

        <div className="why-grid">
          <div className="glass-box">
            <h3>📈 Business Insights</h3>
            <p>
              I analyze customer behavior, sales trends, KPIs and business
              performance to find meaningful patterns.
            </p>
          </div>

          <div className="glass-box">
            <h3>🎯 Decision Focused</h3>
            <p>
              My dashboards are not only beautiful — they are designed to help
              users take action.
            </p>
          </div>

          <div className="glass-box">
            <h3>⚡ Clean Presentation</h3>
            <p>
              I design clean layouts, strong visuals, filters and professional
              reports for recruiters and business users.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-subtitle">FEATURED WORK</p>
        <h2 className="section-title">Projects That Prove My Skills</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-top">
                <span className="project-icon">{project.icon}</span>
                <p>{project.tag}</p>
              </div>

              <h3>{project.title}</h3>
              <p className="project-desc">{project.desc}</p>

              <div className="tech-list">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <a href={project.link} target="_blank" className="project-btn">
                View GitHub Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <p className="section-subtitle">MY TOOLKIT</p>
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="section-subtitle">MY PROCESS</p>
        <h2 className="section-title">How I Work With Data</h2>

        <div className="process-grid">
          <div className="process-card">
            <b>01</b>
            <h3>Understand Problem</h3>
            <p>
              First I understand the business question, objective and important
              KPIs.
            </p>
          </div>

          <div className="process-card">
            <b>02</b>
            <h3>Clean Data</h3>
            <p>
              I prepare data by cleaning, filtering, transforming and organizing
              it.
            </p>
          </div>

          <div className="process-card">
            <b>03</b>
            <h3>Analyze Trends</h3>
            <p>
              I find patterns, segments, outliers and insights from real
              datasets.
            </p>
          </div>

          <div className="process-card">
            <b>04</b>
            <h3>Build Dashboard</h3>
            <p>
              I create interactive dashboards with clean visual storytelling.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="section-subtitle">DASHBOARD STYLE</p>
        <h2 className="section-title">Colorful Data Visualization Feel</h2>

        <div className="visual-grid">
          <div className="visual-card visual-one">
            <h3>💰 Revenue Analysis</h3>
            <div className="bar"><span className="bar-one"></span></div>
            <div className="bar"><span className="bar-two"></span></div>
            <div className="bar"><span className="bar-three"></span></div>
          </div>

          <div className="visual-card visual-two">
            <h3>👥 Customer Insights</h3>
            <div className="circle-chart">78%</div>
            <p>Customer behavior and retention patterns</p>
          </div>

          <div className="visual-card visual-three">
            <h3>📈 Sales Trends</h3>
            <div className="trend-line">▁▂▃▅▆▇█</div>
            <p>Monthly and daily trend analysis</p>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="section-subtitle">ACHIEVEMENTS</p>
        <h2 className="section-title">Certifications & Highlights</h2>

        <div className="cert-grid">
          <div className="cert-card">🏆 Tutedude Data Analytics Certificate</div>
          <div className="cert-card">🏆 SQL Advanced - HackerRank</div>
          <div className="cert-card">🏆 10+ End-to-End Data Projects</div>
        </div>
      </section>

      <section className="section">
        <p className="section-subtitle">EDUCATION</p>
        <h2 className="section-title">Academic Background</h2>

        <div className="education-list">
          <div className="education-card">
            <h3>Bachelor of Technology</h3>
            <p>United Institute of Technology, Prayagraj | 2021 - 2025</p>
          </div>

          <div className="education-card">
            <h3>Intermediate of Science</h3>
            <p>Maharshi Chayan College, Buxar | 2021</p>
          </div>

          <div className="education-card">
            <h3>Secondary School</h3>
            <p>Bihar Public School, Buxar | 2019</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <p className="section-subtitle">CONTACT ME</p>
        <h2 className="section-title">Let’s Connect</h2>

        <p className="contact-text">
          I am open to Data Analyst opportunities, internships, projects and
          collaborations. You can contact me through email, phone or LinkedIn.
        </p>

        <div className="contact-grid">
          <a href="mailto:shubhamkanpura7@gmail.com">
            📧 <span>Email</span>
            <p>shubhamkanpura7@gmail.com</p>
          </a>

          <a href="tel:+919931392284">
            📞 <span>Phone</span>
            <p>+91-9931392284</p>
          </a>

          <a href="https://www.linkedin.com/in/shubhamsingh7a" target="_blank">
            💼 <span>LinkedIn</span>
            <p>View Profile</p>
          </a>
        </div>
      </section>

      <footer>© 2026 Shubham Singh — Data Analyst Portfolio</footer>
    </main>
  );
}
