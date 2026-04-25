"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      items.forEach((item) => {
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
      desc: "Analyzed pizza sales data to track total revenue, total orders, best-selling pizzas, sales trends, and business performance using SQL queries and Power BI dashboard visuals.",
    },
    {
      title: "Customer Churn Prediction",
      link: "https://github.com/iam-shubhamm/Customer-Churn-Prediction",
      tools: "Power BI",
      desc: "Created a Power BI dashboard to understand customer churn patterns, identify important churn factors, and present clear business insights through interactive visuals.",
    },
    {
      title: "Movie Recommendation System",
      link: "https://github.com/iam-shubhamm/Movie-Recommendation-System",
      tools: "Python, Streamlit",
      desc: "Built a movie recommendation project that suggests movies based on similarity logic and provides a simple interactive interface using Streamlit.",
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
            creation, data visualization, and business insights. I enjoy
            analyzing data and presenting it in a clear and meaningful way.
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
          <div className="photo-card">
            <Image
              src="/myphoto.jpg"
              alt="Shubham Singh"
              width={320}
              height={320}
              className="profile-img"
              priority
            />
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
            Data Analytics. I work with tools like Power BI, SQL, MS SQL Server,
            and Python to analyze data, create dashboards, and generate useful
            business insights. My focus is to convert raw data into simple,
            clear, and decision-making reports.
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
          <a href="mailto:shubhamkanpura7@gmail.com" className="contact-item">
            <span>📧</span>
            <div>
              <h3>Email</h3>
              <p>shubhamkanpura7@gmail.com</p>
            </div>
          </a>

          <a
            href="https://github.com/iam-shubhamm"
            target="_blank"
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
