"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");

    const handleScroll = () => {
      revealItems.forEach((item) => {
        const top = item.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          item.classList.add("active");
        }
      });

      const sections = ["home", "about", "whatido", "skills", "projects", "contact"];

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop - 180;
          const height = section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    {
      title: "SQL",
      desc: "Writing SQL queries using SELECT, WHERE, GROUP BY, ORDER BY, JOIN, subqueries, and aggregate functions.",
    },
    {
      title: "Python",
      desc: "Using Python for data analysis, automation, logic building, and solving analytical problems.",
    },
    {
      title: "Advanced MS Excel",
      desc: "Working with formulas, pivot tables, VLOOKUP, dashboards, reports, and business data management.",
    },
    {
      title: "Power BI",
      desc: "Creating interactive dashboards, KPI reports, slicers, charts, and business-focused visual insights.",
    },
    {
      title: "Tableau",
      desc: "Building professional dashboards, visual reports, and presenting business insights using Tableau.",
    },
    {
      title: "Microsoft SQL Server",
      desc: "Managing databases, writing queries, filtering data, and performing sales analysis.",
    },
    {
      title: "Pandas",
      desc: "Using Pandas for data cleaning, transformation, filtering, and structured datasets.",
    },
    {
      title: "NumPy",
      desc: "Using NumPy for numerical operations, array handling, and data analysis workflows.",
    },
    {
      title: "Data Cleaning",
      desc: "Removing errors, duplicates, null values, and preparing raw datasets for analysis.",
    },
    {
      title: "EDA",
      desc: "Performing Exploratory Data Analysis to understand patterns, trends, and relationships.",
    },
    {
      title: "Data Storytelling",
      desc: "Presenting data insights clearly through visuals and reports.",
    },
    {
      title: "Dashboard Development",
      desc: "Designing clean, interactive, and professional dashboards.",
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
        <div className="brand">
          <div className="brand-icon">S</div>

          <h2 className="logo">
            Shubham<span>.</span>
          </h2>
        </div>

        <div className="nav-links">
          <a className={activeSection === "home" ? "active-link" : ""} href="#home">
            Home
          </a>

          <a className={activeSection === "about" ? "active-link" : ""} href="#about">
            About
          </a>

          <a className={activeSection === "whatido" ? "active-link" : ""} href="#whatido">
            What I Do
          </a>

          <a className={activeSection === "skills" ? "active-link" : ""} href="#skills">
            Skills
          </a>

          <a className={activeSection === "projects" ? "active-link" : ""} href="#projects">
            Projects
          </a>

          <a className={activeSection === "contact" ? "active-link" : ""} href="#contact">
            Contact
          </a>
        </div>

        <div className="nav-actions">
          <button onClick={() => setDark(!dark)} className="theme-btn">
            {dark ? "🌙" : "☀️"}
          </button>

          <a href="#contact" className="connect-btn">
            Let&apos;s Connect <span>→</span>
          </a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-text reveal">
          <p className="tag">Data Analyst</p>

          <h1>
            Hi, I&apos;m <span>Shubham Singh</span>
          </h1>

          <p>
            I am a Data Analyst focused on Power BI, SQL, MS SQL Server, Python,
            dashboard creation, data visualization, and business insights. I enjoy
            transforming raw data into clear reports and useful decision-making insights.
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
  <div className="hero-3d-ui">
    <div className="orbit orbit-one"></div>
    <div className="orbit orbit-two"></div>

    <div className="tool-card powerbi-card">
      <span>📊</span>
      <p>Power BI</p>
    </div>

    <div className="tool-card sql-card">
      <span>🛢️</span>
      <p>SQL</p>
    </div>

    <div className="tool-card python-card">
      <span>🐍</span>
      <p>Python</p>
    </div>

    <div className="dashboard-3d">
      <div className="dashboard-sidebar">
        <span>◔</span>
        <span>▦</span>
        <span>▥</span>
        <span>☆</span>
        <span>⚙</span>
      </div>

      <div className="dashboard-main">
        <h4>Analytics Overview</h4>

        <div className="dashboard-grid">
          <div className="dash-box">
            <p>Total Revenue</p>
            <h3>₹8.42L</h3>
            <small>▲ 23.8%</small>
            <div className="mini-line"></div>
          </div>

          <div className="dash-box">
            <p>Total Orders</p>
            <h3>1,248</h3>
            <small>▲ 18.7%</small>
            <div className="mini-line purple"></div>
          </div>

          <div className="dash-box">
            <p>Profit</p>
            <h3>₹2.31L</h3>
            <small>▲ 21.4%</small>
            <div className="mini-line cyan"></div>
          </div>

          <div className="dash-box donut-box">
            <p>Category Share</p>
            <div className="donut">63%</div>
          </div>
        </div>
      </div>
    </div>

    <div className="bars-3d">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div className="base-platform"></div>
  </div>
</div>
      </section>

      <section id="about" className="section">
        <div className="title reveal">
          <h2>About Me</h2>
        </div>

        <div className="about-large reveal">
          <div className="about-card">
            <h3>Who I Am</h3>
            <p>
              I am a B.Tech Computer Science graduate with a strong interest in
              Data Analytics. I work with data, understand patterns, create dashboards,
              and present insights in a simple and professional way.
            </p>
          </div>

          <div className="about-card">
            <h3>My Focus</h3>
            <p>
              I focus on Power BI, SQL, MS SQL Server, and Python. I use these tools
              to clean, analyze, visualize, and explain data.
            </p>
          </div>

          <div className="about-card">
            <h3>My Goal</h3>
            <p>
              I want to build my career as a Data Analyst and use my analytical skills
              to solve real business problems.
            </p>
          </div>
        </div>
      </section>

      <section id="whatido" className="section">
        <div className="title reveal">
          <h2>How I Work With Data</h2>
        </div>

        <div className="process-grid">
          <div className="process-card reveal">
            <span>01</span>
            <h3>Understand Data</h3>
            <p>I understand the dataset, columns, business problem, and required output.</p>
          </div>

          <div className="process-card reveal">
            <span>02</span>
            <h3>Analyze Data</h3>
            <p>I use SQL, Power BI, and Python to identify patterns and trends.</p>
          </div>

          <div className="process-card reveal">
            <span>03</span>
            <h3>Create Dashboard</h3>
            <p>I design dashboards with KPIs, charts, filters, and clean visuals.</p>
          </div>

          <div className="process-card reveal">
            <span>04</span>
            <h3>Share Insights</h3>
            <p>I present findings in a simple way for better business decisions.</p>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="title reveal">
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
          <h2>Tools I Use</h2>
        </div>

        <div className="tools-row reveal">
          <span>📊 Advanced MS Excel</span>
          <span>📈 Power BI</span>
          <span>📉 Tableau</span>
          <span>🗄️ MS SQL Server</span>
          <span>🛢️ MySQL</span>
          <span>💾 SQL</span>
          <span>🐍 Python</span>
          <span>💻 PyCharm</span>
          <span>📓 Jupyter Notebook</span>
          <span>⚡ VS Code</span>
          <span>🔗 GitHub</span>
          <span>🚀 Streamlit</span>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="title reveal">
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
          <h2>Highlights</h2>
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
          <h2>Let&apos;s Connect</h2>
        </div>

        <div className="contact-wrapper reveal">
          <div className="contact-text">
            <h3>Want to connect with me?</h3>
            <p>
              You can contact me through Gmail, GitHub, or LinkedIn.
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
