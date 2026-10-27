"use client";

import { ArrowLeft, ArrowUpRight, Code2, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useSyncExternalStore } from "react";
import Link from "next/link";
import { additionalProjects } from "../projects-data";

function subscribeToTheme(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener("portfolio-theme-change", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("portfolio-theme-change", onChange);
  };
}

function getStoredTheme() {
  return window.localStorage.getItem("portfolio-theme") !== "light";
}

export default function ProjectsPage() {
  const dark = useSyncExternalStore(subscribeToTheme, getStoredTheme, () => true);
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = pageRef.current;
    const cards = root?.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!root || !cards?.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.target.classList.toggle("is-revealed", entry.isIntersecting));
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    cards.forEach((card) => observer.observe(card));
    root.classList.add("reveal-enabled");
    return () => {
      observer.disconnect();
      root.classList.remove("reveal-enabled");
    };
  }, []);

  function toggleTheme() {
    window.localStorage.setItem("portfolio-theme", dark ? "light" : "dark");
    window.dispatchEvent(new Event("portfolio-theme-change"));
  }

  return (
    <main className={`portfolio projects-page${dark ? " is-dark" : ""}`} ref={pageRef}>
      <header className="topbar">
        <Link className="wordmark" href="/" aria-label="Shubham Singh portfolio home">
          <span className="wordmark-mark">S</span>
          <span>SHUBHAM<span className="wordmark-period">.</span></span>
        </Link>
        <Link className="nav-cta" href="/"><ArrowLeft size={16} aria-hidden="true" /> Back to portfolio</Link>
        <button
          className="icon-button theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          aria-pressed={dark}
        >
          {dark ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
          <span className="theme-toggle-label">{dark ? "Light" : "Dark"}</span>
        </button>
      </header>

      <section className="projects-page-intro section-wrap">
        <Link className="projects-back-link" href="/"><ArrowLeft size={15} aria-hidden="true" /> Portfolio home</Link>
        <p className="section-kicker"><span>01</span> MORE PROJECTS</p>
        <h1>More Projects<span>.</span></h1>
        <p className="projects-page-lede">
          A few more public repositories from my GitHub. I keep this list tied to repositories that actually exist, and will add more as they are ready to share.
        </p>
      </section>

      <section className="section-wrap projects-page-list" aria-label="Additional public repositories">
        {additionalProjects.length > 0 ? additionalProjects.map((project, index) => (
          <article className="additional-project-card" key={project.url} data-reveal style={{ transitionDelay: `${index * 80}ms` }}>
            <span className="additional-project-icon"><Code2 size={21} aria-hidden="true" /></span>
            <div className="additional-project-copy">
              <span className="additional-project-language">{project.language}</span>
              <h2>{project.name.replaceAll("_", " ")}</h2>
              <p>{project.description}</p>
            </div>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              View repository <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </article>
        )) : (
          <p className="projects-empty">More repositories will be added here when they are ready to share.</p>
        )}
        <p className="projects-list-note">
          These entries are repository links, not claims about project results or proficiency. See GitHub for the latest source and details.
        </p>
        <a className="all-work-link" href="https://github.com/iam-shubhamm" target="_blank" rel="noopener noreferrer">
          Browse GitHub <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </section>

      <footer className="site-footer section-wrap projects-page-footer">
        <Link className="wordmark" href="/"><span className="wordmark-mark">S</span><span>Shubham Singh<span className="wordmark-period">.</span></span></Link>
        <p>Data analytics · AI / ML · Data science · Full-stack</p>
        <Link className="back-top" href="/">BACK TO PORTFOLIO <ArrowUpRight size={15} aria-hidden="true" /></Link>
        <small>© {new Date().getFullYear()} Shubham Singh</small>
      </footer>
    </main>
  );
}
