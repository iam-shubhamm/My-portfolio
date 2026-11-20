import { Link } from "../RouterLink";
import { config } from "../config";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { projectGroups, type ProjectGroup } from "../projectGroups";
import "./MyWorks.css";

const MyWorks = () => {
  const [active, setActive] = useState<ProjectGroup>("fullstack");
  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          All <span>Works</span>
        </h1>
        <p>A collection of all my projects and creations</p>
        <nav className="myworks-categories work-category-nav" aria-label="Project categories">
          {projectGroups.map((group) => <Button key={group.id} variant="ghost" className="work-category-button" aria-current={active === group.id ? "true" : undefined} onClick={() => setActive(group.id)} data-cursor="disable">{group.label}</Button>)}
        </nav>
      </div>

      <div className="myworks-grid">
        {config.projects.filter((project) => project.group === active).map((project) => {
          const isInternalLink = Boolean(project.link?.startsWith("/"));
          const cardContent = (
            <>
              <div className="myworks-card-number">{String(project.id).padStart(2, "0")}</div>
              <div className="myworks-card-image">
                <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
              </div>
              <div className="myworks-card-info">
                <h3>{project.title}</h3>
                <p className="myworks-card-category">{project.category}</p>
                <p className="myworks-card-description">{project.description}</p>
                <p className="myworks-card-tech">{project.technologies}</p>
              </div>
            </>
          );

          if (isInternalLink) {
            return (
              <Link
                className="myworks-card"
                key={project.id}
                data-cursor="disable"
                to={project.link}
              >
                {cardContent}
              </Link>
            );
          }

          return (
            <a
              className="myworks-card"
              key={project.id}
              data-cursor="disable"
              href={project.link || undefined}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
            >
              {cardContent}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MyWorks;
