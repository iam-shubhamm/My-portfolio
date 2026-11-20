// @ts-nocheck -- imported portfolio code, written for looser TS settings
import { useEffect, useRef, useState } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { config } from "../config";

const dataAnalytics = {
  title: "DATA ANALYTICS",
  description: "Clear insights from complex data",
  details:
    "Cleaning, exploring, and interpreting data to uncover trends, build useful reports, and support informed decisions.",
  tools: ["Python", "Pandas", "NumPy", "MySQL", "Data Cleaning", "Visualization"],
};

const dataScience = {
  title: "DATA SCIENCE",
  description: "Data-driven models for real problems",
  details:
    "Preparing datasets, finding meaningful patterns, and building predictive machine-learning models with measurable results.",
  tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch"],
};

const skillColumns = [
  [dataAnalytics, dataScience],
  [config.skills.develop, config.skills.design],
];

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      setSectionVisible(entry.isIntersecting);
    }, { threshold: 0.05 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!ScrollTrigger.isTouch) return;
    const handlers = new Map<HTMLDivElement, () => void>();
    containerRef.current.forEach((container) => {
      if (!container) return;
      container.classList.remove("what-noTouch");
      const handler = () => handleClick(container);
      handlers.set(container, handler);
      container.addEventListener("click", handler);
    });
    return () => {
      handlers.forEach((handler, container) => container.removeEventListener("click", handler));
    };
  }, []);

  let cardIndex = 0;
  return (
    <div ref={sectionRef} className={`whatIDO${sectionVisible ? " what-visible" : ""}`} id="what-i-do">
      <h2 className="what-title">WHAT I <span>DO</span></h2>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2" aria-hidden="true">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>
          {skillColumns.map((column, columnIndex) => (
            <div className="what-column" key={columnIndex}>
              {column.map((skill) => {
                const index = cardIndex++;
                return (
                  <div className="what-content what-noTouch" ref={(el) => { containerRef.current[index] = el; }} key={skill.title}>
                    <div className="what-border1" aria-hidden="true">
                      <svg height="100%">
                        <line x1="0" y1={index % 2 === 0 ? "0" : "100%"} x2="100%" y2={index % 2 === 0 ? "0" : "100%"} stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                      </svg>
                    </div>
                    <div className="what-corner" aria-hidden="true" />
                    <div className="what-content-in">
                      <h3>{skill.title}</h3>
                      <h4>{skill.description}</h4>
                      <p>{skill.details}</p>
                      <h5>Skillset &amp; tools</h5>
                      <div className="what-content-flex">
                        {skill.tools.map((tool) => <div key={tool} className="what-tags">{tool}</div>)}
                      </div>
                      <div className="what-arrow" aria-hidden="true" />
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  const parent = container.parentElement;
  if (!parent) return;
  const activate = !container.classList.contains("what-content-active");
  Array.from(parent.children).forEach((sibling) => {
    const selected = sibling === container;
    sibling.classList.toggle("what-content-active", selected && activate);
    sibling.classList.toggle("what-sibling", !selected && activate);
  });
}
