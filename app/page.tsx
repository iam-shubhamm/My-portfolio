"use client";

import { useState } from "react";

const projects = [
  {
    title: "Customer Churn Prediction",
    icon: "📊",
    desc: "Power BI dashboard analyzing telecom customer churn patterns, KPIs, tenure, contract type, and customer behavior.",
    link: "https://github.com/iam-shubhamm/Customer-Churn-Prediction",
  },
  {
    title: "Pizza Sales Data Analysis",
    icon: "🍕",
    desc: "SQL Server and Power BI project analyzing sales, revenue trends, orders, and best-selling pizza products.",
    link: "https://github.com/iam-shubhamm/Pizza-Sales-Analysis-Dashboard-using-MS-SQL-Server-and-Power-BI",
  },
  {
    title: "Movie Recommendation System",
    icon: "🎬",
    desc: "Machine learning movie recommender using Python, Pandas, Scikit-learn, cosine similarity, and Streamlit.",
    link: "https://github.com/iam-shubhamm/Movie-Recommendation-System",
  },
];

const skills = [
  "SQL",
  "Python",
  "Power BI",
  "Excel",
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
  const [light, setLight] = useState(true);

  return (
    <main className={light ? "site light" : "site dark"}>
      <button className="theme-btn" onClick={() => setLight(!light)}>
        {light ? "🌙 Dark" : "☀️ Light"}
      </button>

      <div className="scene-bg">
        <span className="orb orb1"></span>
        <span className="orb orb2"></span>
        <span className="orb orb3"></span>
        <span className="shape s1"></span>
        <span className="shape s2"></span>
        <span className="shape s3"></span>
        <span className="shape s4"></span>
      </div>

      <nav className="nav glass-nav">
        <h2>
          Shubham<span>.</span>
        </h2>

        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="badge">🚀 3D Data Analyst Portfolio</p>

          <h1>
            Turning Data Into
            <span>Business Insights</span>
          </h1>

          <p>
            Hi, I’m Shubham Singh — a Data Analyst skilled in SQL, Python,
            Power BI, Excel, dashboards, KPI analysis, and data storytelling.
          </p>

          <div className="buttons">
            <a href="#projects">View Projects</a>
            <a href="https://github.com/iam-shubhamm" target="_blank">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/shubhamsingh7a" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="profile-3d">
          <div className="cube-wrap">
            <div className="cube">
              <div className="face front">SS</div>
              <div className="face back">SQL</div>
              <div className="face right">BI</div>
              <div className="face left">PY</div>
              <div className="face top">DA</div>
              <div className="face bottom">KPI</div>
            </div>
          </div>

          <h2>Shubham Singh</h2>
          <p>Data Analyst | Python | SQL | Power BI</p>

          <div className="mini-skills">
            <span>Power BI</span>
            <span>SQL</span>
            <span>Python</span>
            <span>Excel</span>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <p className="sub">ABOUT ME</p>
        <h2>Data Analyst Who Builds Insightful Dashboards</h2>

        <div className="grid two">
          <div className="card-3d">
            <h3>👋 Who I Am</h3>
            <p>
              I work with real-world data and convert raw information into
              useful business insights using SQL, Python, Excel, Power BI, and
              Tableau.
            </p>
          </div>

          <div className="card-3d">
            <h3>🎯 What I Do</h3>
            <p>
              I create dashboards, analyze KPIs, clean datasets, perform EDA,
              and present insights in a simple professional way.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="sub">WHY CHOOSE ME</p>
        <h2>My Work Focuses On Business Value</h2>

        <div className="grid three">
          <div className="card-3d">
            <h3>📈 Insights</h3>
            <p>Finding patterns, trends, and useful business information.</p>
          </div>

          <div className="card-3d">
            <h3>📊 Dashboards</h3>
            <p>Creating clean and interactive dashboards for decisions.</p>
          </div>

          <div className="card-3d">
            <h3>⚡ Reports</h3>
            <p>Making data easy to understand for recruiters and teams.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <p className="sub">FEATURED PROJECTS</p>
        <h2>3D Project Showcase</h2>

        <div className="grid three">
          {projects.map((project) => (
            <div className="project-3d" key={project.title}>
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <a href={project.link} target="_blank">
                View GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <p className="sub">MY TOOLKIT</p>
        <h2>Skills & Technologies</h2>

        <div className="skills">
          {skills.map((skill) => (
            <div className="skill-3d" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="sub">MY PROCESS</p>
        <h2>How I Work With Data</h2>

        <div className="grid four">
          <div className="card-3d">
            <b>01</b>
            <h3>Understand</h3>
            <p>Understand business problem and important KPIs.</p>
          </div>

          <div className="card-3d">
            <b>02</b>
            <h3>Clean</h3>
            <p>Clean, filter, and prepare data for analysis.</p>
          </div>

          <div className="card-3d">
            <b>03</b>
            <h3>Analyze</h3>
            <p>Find patterns, trends, outliers, and insights.</p>
          </div>

          <div className="card-3d">
            <b>04</b>
            <h3>Visualize</h3>
            <p>Create dashboards and business storytelling.</p>
          </div>
        </div>
      </section>

      <section className="section dashboard-section">
        <p className="sub">DATA VISUAL STYLE</p>
        <h2>Interactive Analytics Feel</h2>

        <div className="grid three">
          <div className="dashboard-card">
            <h3>Revenue Analysis</h3>
            <div className="bar"><span className="bar1"></span></div>
            <div className="bar"><span className="bar2"></span></div>
            <div className="bar"><span className="bar3"></span></div>
          </div>

          <div className="dashboard-card">
            <h3>Customer Insights</h3>
            <div className="donut">78%</div>
          </div>

          <div className="dashboard-card">
            <h3>Sales Trend</h3>
            <p className="trend">▁▂▃▅▆▇█</p>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="sub">CERTIFICATIONS</p>
        <h2>Achievements</h2>

        <div className="grid three">
          <div className="card-3d">🏆 Tutedude Data Analytics Certificate</div>
          <div className="card-3d">🏆 SQL Advanced - HackerRank</div>
          <div className="card-3d">🏆 10+ End-to-End Data Projects</div>
        </div>
      </section>

      <section className="section">
        <p className="sub">EDUCATION</p>
        <h2>Academic Background</h2>

        <div className="education">
          <div className="edu-card">
            <h3>B.Tech</h3>
            <p>United Institute of Technology, Prayagraj | 2021 - 2025</p>
          </div>

          <div className="edu-card">
            <h3>Intermediate</h3>
            <p>Maharshi Chayan College, Buxar | 2021</p>
          </div>

          <div className="edu-card">
            <h3>Secondary School</h3>
            <p>Bihar Public School, Buxar | 2019</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="sub">CONTACT ME</p>
        <h2>Let’s Connect</h2>

        <p className="contact-text">
          I am open to Data Analyst opportunities, internships, projects, and
          collaborations.
        </p>

        <div className="grid three">
          <a href="mailto:shubhamkanpura7@gmail.com" className="card-3d">
            📧 Email
            <p>shubhamkanpura7@gmail.com</p>
          </a>

          <a href="tel:+919931392284" className="card-3d">
            📞 Phone
            <p>+91-9931392284</p>
          </a>

          <a
            href="https://www.linkedin.com/in/shubhamsingh7a"
            target="_blank"
            className="card-3d"
          >
            💼 LinkedIn
            <p>View Profile</p>
          </a>
        </div>
      </section>

      <footer>© 2026 Shubham Singh — 3D Data Analyst Portfolio</footer>
    </main>
  );
}
