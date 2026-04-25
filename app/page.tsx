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

  return (
    <main className={dark ? "dark" : ""}>
      <div className="bg-animation">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className="navbar">
        <h2 className="logo">Shubham<span>.</span></h2>

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
          <p className="tag">Data Analyst & Developer</p>
          <h1>
            Hi, I&apos;m <span>Shubham Singh</span>
          </h1>
          <p>
            I build data-driven projects using Power BI, Python, SQL, Machine
            Learning, and modern web technologies.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
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
            />
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="title reveal">
          <p>About Me</p>
          <h2>Who I Am</h2>
        </div>

        <div className="about-box reveal">
          <p>
            I am a B.Tech Computer Science graduate interested in Data Analytics,
            Machine Learning, and Front-End Development. I enjoy creating
            dashboards, analyzing data, and building projects that solve real
            problems.
          </p>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="title reveal">
          <p>Skills</p>
          <h2>My Technical Skills</h2>
        </div>

        <div className="grid">
          {["Power BI", "Python", "SQL", "Machine Learning", "HTML", "CSS", "JavaScript", "Next.js"].map((skill) => (
            <div className="card reveal" key={skill}>
              <h3>{skill}</h3>
              <p>Practical project-based knowledge and hands-on experience.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="title reveal">
          <p>Projects</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="grid projects">
          <div className="card reveal">
            <h3>Heart Attack Prediction</h3>
            <p>
              Machine learning project using Decision Tree models to predict
              heart attack risk.
            </p>
          </div>

          <div className="card reveal">
            <h3>Customer Churn Dashboard</h3>
            <p>
              Power BI dashboard to analyze customer churn and business insights.
            </p>
          </div>

          <div className="card reveal">
            <h3>Movie Recommendation System</h3>
            <p>
              Streamlit-based movie recommendation app using similarity logic.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="title reveal">
          <p>Contact</p>
          <h2>Let&apos;s Connect</h2>
        </div>

        <div className="contact-box reveal">
          <p>Email: your.email@example.com</p>
          <p>GitHub: github.com/yourusername</p>
          <p>LinkedIn: linkedin.com/in/yourprofile</p>
        </div>
      </section>
    </main>
  );
}
