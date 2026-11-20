import { useEffect, useRef, useState } from "react";
import "./styles/About.css";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { config } from "../config";

const About = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [visitorCountFailed, setVisitorCountFailed] = useState(false);
  const visitorRequestStarted = useRef(false);

  useEffect(() => {
    if (visitorRequestStarted.current) return;
    visitorRequestStarted.current = true;

    void fetch("/api/visitors", { method: "POST" })
      .then(async (response) => {
        if (!response.ok) throw new Error(`Visitor counter request failed with status ${response.status}`);
        const result = await response.json() as { count?: unknown };
        if (typeof result.count !== "number" || !Number.isSafeInteger(result.count) || result.count < 1) {
          throw new Error("Visitor counter returned an invalid count");
        }
        setVisitorCount(result.count);
      })
      .catch((error: unknown) => {
        console.error("Unable to update the visitor counter:", error);
        setVisitorCountFailed(true);
      });
  }, []);

  return (
    <section className="about-section" id="about" aria-label="Introduction">
      <div className="about-ticker" aria-hidden="true">
        <div className="about-ticker-track">
          {[0, 1].map((copy) => (
            <span className="about-ticker-group" key={copy}>
              <span>DATA ANALYTICS</span><b>✧</b><span>AI/ML ENGINEER</span><b>✧</b>
              <span>FULL STACK</span><b>✧</b><span>FRONTEND DEVELOPER</span><b>✧</b>
              <span>BACKEND DEVELOPER</span><b>✧</b>
            </span>
          ))}
        </div>
      </div>
      <div className="about-layout">
        <div className="about-me">
          <div className="about-eyebrow"><span /> COMPUTER SCIENCE GRADUATE · OPEN TO OPPORTUNITIES</div>
          <h1><span>SHUBHAM</span><strong>SINGH</strong></h1>
          <p className="about-summary">
            I turn data into clear insights and build practical AI, machine-learning, and full-stack solutions through hands-on projects that solve real-world problems.
          </p>
          <div className="about-roles" aria-label="Areas of work">
            <span>📊&nbsp; Data Analytics <b>↗</b></span>
            <span>🤖&nbsp; AI Engineer <b>↗</b></span>
            <span>🧠&nbsp; Machine Learning Engineer <b>↗</b></span>
            <span>💻&nbsp; Full Stack Engineer <b>↗</b></span>
          </div>
          <div className="about-actions">
            <a className="about-action-primary" href="#work">View my projects <b>→</b></a>
            <a className="about-action-secondary" href="#contact">Contact me <b>↗</b></a>
          </div>
          <div className="about-socials" aria-label="Social links">
            <a className="social-github" href="https://github.com/iam-shubhamm" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
            <a className="social-linkedin" href="https://www.linkedin.com/in/shubhamsingh7a" target="_blank" rel="noreferrer"><FaLinkedinIn /> LinkedIn</a>
            <a className="social-email" href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(config.contact.email)}&authuser=${encodeURIComponent(config.contact.email)}`} target="_blank" rel="noopener noreferrer">
              <FaEnvelope /> Email
            </a>
            <a className="social-instagram" href={config.contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram /> Instagram
            </a>
          </div>
          <div className="about-stats">
            <div><strong>20+</strong><span>PROJECTS COMPLETED</span></div>
            <div><strong>04</strong><span>SKILL AREAS</span></div>
            <div><strong>01</strong><span>AI/ML ENGINEERING</span></div>
            <div>
              <strong aria-live="polite" aria-label={visitorCountFailed ? "Visitor count unavailable" : undefined}>
                {visitorCount === null ? (visitorCountFailed ? "—" : "…") : visitorCount.toLocaleString()}
              </strong>
              <span>{visitorCountFailed ? "VISITS UNAVAILABLE" : "VISITS"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
