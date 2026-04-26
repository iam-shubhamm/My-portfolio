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
    {
      title: "Power BI",
      desc: "Creating interactive dashboards, reports, KPIs, slicers, charts, and business-focused visual insights.",
    },
    {
      title: "MS SQL Server",
      desc: "Writing SQL queries, extracting data, filtering records, grouping data, and performing sales analysis.",
    },
    {
      title: "SQL",
      desc: "Using SELECT, WHERE, GROUP BY, ORDER BY, joins, aggregate functions, and data analysis queries.",
    },
    {
      title: "Python",
      desc: "Using Python for data handling, project logic, and analytical problem-solving.",
    },
    {
      title: "Data Analysis",
      desc: "Finding useful patterns, trends, and insights from raw data to support decision-making.",
    },
    {
      title: "Dashboard Creation",
      desc: "Designing clean dashboards that make complex data easy to understand.",
    },
    {
      title: "Data Visualization",
      desc: "Creating charts and visuals to explain business performance clearly.",
    },
    {
      title: "Business Insights",
      desc: "Converting data into meaningful insights for business growth and improvement.",
    },
  ];

  const projects = [
    {
      title: "Pizza Sales Analysis Dashboard",
      link: "https://github.com/iam-shubhamm/Pizza-Sales-Analysis-Dashboard-using-MS-SQL-Server-and-Power-BI",
      tools: "MS SQL Server, Power BI",
      points: [
        "Analyzed pizza sales data using MS SQL Server and Power BI.",
        "Tracked revenue, total orders, average order value, and sales performance.",
        "Created visuals for best-selling pizzas, sales trends, and category performance.",
        "Focused on business insights that can help improve sales decisions.",
      ],
    },
    {
      title: "Customer Churn Prediction",
      link: "https://github.com/iam-shubhamm/Customer-Churn-Prediction",
      tools: "Power BI",
      points: [
        "Created a Power BI dashboard to analyze customer churn behavior.",
        "Identified churn patterns using interactive charts and filters.",
        "Presented customer retention insights in a clean dashboard format.",
        "Focused on helping businesses understand why customers may leave.",
      ],
    },
    {
      title: "Movie Recommendation System",
      link: "https://github.com/iam-shubhamm/Movie-Recommendation-System",
      tools: "Python, Streamlit",
      points: [
        "Built a movie recommendation system using Python.",
        "Used similarity logic to suggest related movies.",
        "Created an interactive user interface using Streamlit.",
        "Designed the project to show practical Python and project-building skills.",
      ],
    },
  ];

  const highlights = [
    "B.Tech Computer Science graduate",
    "Data Analyst portfolio focused on Power BI, SQL, and Python",
    "Created business dashboards using Power BI",
    "Worked on SQL-based sales analysis project",
    "Built practical projects for GitHub portfolio",
    "Interested in data analysis, reporting, and business insights",
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
          <a href="#whatido">What I Do</a>
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
          <p className="tag">Data Analyst Portfolio</p>

          <h1>
            Hi, I&apos;m <span>Shubham Singh</span>
          </h1>

          <p>
            I am a Data Analyst focused on Power BI, SQL, MS SQL Server, Python,
            dashboard creation, data visualization, and business insights. I
            enjoy transforming raw data into clear reports and useful
            decision-making insights.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn primary">
              View My Projects
            </a>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual reveal">
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

        <div className="about-large reveal">
          <div className="about-card">
            <h3>Who I Am</h3>
            <p>
              I am a B.Tech Computer Science graduate with a strong interest in
              Data Analytics. My main focus is to work with data, understand the
              hidden patterns, create meaningful dashboards, and present insights
              in a simple and professional way.
            </p>
          </div>

          <div className="about-card">
            <h3>My Focus</h3>
            <p>
              I focus on tools like Power BI, SQL, MS SQL Server, and Python. I
              use these tools to clean, analyze, visualize, and explain data.
              My goal is to make data easy to understand for business users.
            </p>
          </div>

          <div className="about-card">
            <h3>My Goal</h3>
            <p>
              I want to build my career as a Data Analyst where I can use my
              analytical skills to solve real business problems and support
              better decision-making through dashboards and reports.
            </p>
          </div>
        </div>
      </section>

      <section id="whatido" className="section">
        <div className="title reveal">
          <p>What I Do</p>
          <h2>How I Work With Data</h2>
        </div>

        <div className="process-grid">
          <div className="process-card reveal">
            <span>01</span>
            <h3>Understand Data</h3>
            <p>
              I first understand the dataset, columns, business problem, and
              required output before creating analysis.
            </p>
          </div>

          <div className="process-card reveal">
            <span>02</span>
            <h3>Analyze Data</h3>
            <p>
              I use SQL, Power BI, and Python to identify patterns, trends,
              totals, categories, and important metrics.
            </p>
          </div>

          <div className="process-card reveal">
            <span>03</span>
            <h3>Create Dashboard</h3>
            <p>
              I design clean dashboards with KPIs, charts, filters, and visuals
              that explain the data clearly.
            </p>
          </div>

          <div className="process-card reveal">
            <span>04</span>
            <h3>Share Insights</h3>
            <p>
              I present important findings in a simple way so that business
              users can understand and take decisions.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="title reveal">
          <p>Skills</p>
          <h2>Data Analytics Skills</h2>
        </div>

        <div className="grid">
          {skills.map((skill) => (
            <div className="card reveal" key={skill.title}>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="title reveal">
          <p>Tools</p>
          <h2>Tools I Use</h2>
        </div>

        <div className="tools-row reveal">
          <span>Power BI</span>
          <span>MS SQL Server</span>
          <span>SQL</span>
          <span>Python</span>
          <span>Streamlit</span>
          <span>GitHub</span>
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

                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="project-arrow">↗</div>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="title reveal">
          <p>Highlights</p>
          <h2>Profile Highlights</h2>
        </div>

        <div className="highlight-grid">
          {highlights.map((item) => (
            <div className="highlight-card reveal" key={item}>
              <span>✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="title reveal">
          <p>Contact</p>
          <h2>Let&apos;s Connect</h2>
        </div>

        <div className="contact-wrapper reveal">
          <div className="contact-text">
            <h3>Want to connect with me?</h3>
            <p>
              You can contact me through Gmail, GitHub, or LinkedIn. Click on
              the Gmail card and it will directly open Gmail compose with my
              email filled.
            </p>
          </div>

          <div className="contact-container">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shubhamkanpura7@gmail.com&su=Portfolio%20Contact&body=Hi%20Shubham,%0A%0AI%20visited%20your%20portfolio%20and%20want%20to%20connect%20with%20you.%0A%0A"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span>📧</span>
              <div>
                <h3>Email</h3>
                <p>Open Gmail compose</p>
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
        </div>
      </section>
    </main>
  );
}
