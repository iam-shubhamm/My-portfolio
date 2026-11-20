import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { config } from "../config";
import { Link } from "../RouterLink";
import { Button } from "@/components/ui/button";
import { projectGroups, type ProjectGroup } from "../projectGroups";
import { activeWorkGroup, groupScrollOffset } from "../workScroll";
import { lenis } from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const root = useRef<HTMLDivElement>(null);
  const scroll = useRef<ScrollTrigger | null>(null);
  const [active, setActive] = useState<ProjectGroup>("fullstack");
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const frame = element.querySelector<HTMLElement>(".work-scroll-frame");
      const stage = element.querySelector<HTMLElement>(".work-horizontal-stage");
      const track = element.querySelector<HTMLElement>(".work-horizontal-track");
      if (!frame || !stage || !track) return;
      const distance = () => Math.max(0, track.scrollWidth - stage.clientWidth);
      const tween = gsap.to(track, {
        x: () => -distance(), ease: "none",
        scrollTrigger: {
          trigger: frame, start: () => `top ${window.innerWidth <= 768 ? 60 : 68}px`,
          end: () => `+=${distance()}`, scrub: 0.5, pin: true,
          invalidateOnRefresh: true, anticipatePin: 1, id: "work",
          onUpdate: (self) => {
            const groups = projectGroups.map((group) => ({ id: group.id, offset: element.querySelector<HTMLElement>(`#work-${group.id}`)?.offsetLeft ?? 0 }));
            setActive(activeWorkGroup(groups, self.progress * distance() + stage.clientWidth * 0.35));
          },
        },
      });
      scroll.current = tween.scrollTrigger ?? null;
      return () => { scroll.current = null; };
    });
    const updateActive = () => {
      if (scroll.current) return;
      let current: ProjectGroup = "fullstack";
      for (const group of projectGroups) {
        const section = element.querySelector(`#work-${group.id}`);
        if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.45) current = group.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", updateActive, { passive: true });
    const refresh = () => ScrollTrigger.refresh();
    const timer = window.setTimeout(refresh, 600);
    updateActive();
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", updateActive);
      media.revert();
    };
  }, []);

  const goToGroup = (id: ProjectGroup) => {
    const section = root.current?.querySelector<HTMLElement>(`#work-${id}`);
    if (!section) return;
    const trigger = scroll.current;
    const top = trigger ? trigger.start + groupScrollOffset(section.offsetLeft, trigger.end - trigger.start) : window.scrollY + section.getBoundingClientRect().top - 170;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (lenis) {
      lenis.resize();
      lenis.scrollTo(top, { duration: 1.2, immediate: reducedMotion, force: true });
    } else {
      window.scrollTo({ top, behavior: reducedMotion ? "instant" : "smooth" });
    }
  };
  return (
    <div className="work-section" id="work" ref={root}>
      <div className="work-container section-container">
        <div className="work-scroll-frame">
        <div className="work-heading">
          <h2>My <span>Work</span></h2>
          <nav className="work-category-nav" aria-label="Project categories">
            {projectGroups.map((group) => <Button key={group.id} variant="ghost" className="work-category-button" aria-current={active === group.id ? "true" : undefined} onClick={() => goToGroup(group.id)} data-cursor="disable">{group.label}</Button>)}
          </nav>
        </div>
        <div className="work-horizontal-stage">
          <div className="work-horizontal-track">
        {projectGroups.map((group) => (
          <section key={group.id} id={`work-${group.id}`} className="work-group" aria-label={`${group.label} projects`}>
            <h3 className="work-group-label">{group.label}</h3>
              <div className="work-project-track">
                {config.projects.filter((project) => project.group === group.id).map((project) => (
                  <article className="work-project" key={project.id}>
                    <WorkImage image={project.image} alt={project.title} link={project.link} />
                    <div className="work-project-info">
                      <span className="work-project-number">{String(project.id).padStart(2, "0")}</span>
                      <p className="work-project-category">{project.category}</p>
                      <h4>{project.title}</h4>
                      <p className="work-project-description">{project.description}</p>
                      <p className="work-project-tools">{project.technologies}</p>
                    </div>
                  </article>
                ))}
              </div>
          </section>
        ))}
          </div>
        </div>
        </div>
        <Button asChild variant="outline" className="work-all-link"><Link to="/myworks" data-cursor="disable">See All Works →</Link></Button>
      </div>
    </div>
  );
};

export default Work;
