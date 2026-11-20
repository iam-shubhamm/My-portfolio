// @ts-nocheck -- imported portfolio code, written for looser TS settings
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    return window.localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const instance = new Lenis({
      duration: 1.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 1.2,
      infinite: false,
    });
    lenis = instance;

    // The intro/loading screen is gone, so smooth scrolling starts immediately.
    instance.start();

    // Handle smooth scroll animation frame
    let disposed = false;
    let rafId = 0;
    function raf(time: number) {
      if (disposed) return;
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Handle navigation links
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".header ul a"));
    const clickHandlers = links.map((element) => {
      const handler = (event: MouseEvent) => {
        if (window.innerWidth > 1024) {
          event.preventDefault();
          const section = element.getAttribute("data-href");
          const target = section ? document.querySelector(section) as HTMLElement | null : null;
          if (target) {
            instance.scrollTo(target, { offset: 0, duration: 1.5 });
          }
        }
      };
      element.addEventListener("click", handler);
      return handler;
    });

    // Handle resize
    const onResize = () => instance.resize();
    window.addEventListener("resize", onResize);

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      links.forEach((element, index) => element.removeEventListener("click", clickHandlers[index]));
      instance.destroy();
      if (lenis === instance) lenis = null;
    };
  }, []);
  const toggleTheme = () => {
    setTheme((current) => current === "light" ? "dark" : "light");
  };

  return (
    <>
      <header className="header">
        <a href="/#" className="navbar-title" data-cursor="disable" aria-label="Shubham Singh">
          <span className="navbar-monogram">S</span><span>SHUBHAM<span className="brand-period">.</span></span>
        </a>
        <nav aria-label="Main navigation">
          <ul>
            <li><a data-href="#experience" href="#experience"><HoverLinks text="Experience" /></a></li>
            <li><a data-href="#what-i-do" href="#what-i-do"><HoverLinks text="Skills" /></a></li>
            <li><a data-href="#work" href="#work"><HoverLinks text="Projects" /></a></li>
            <li><a data-href="#certifications" href="#certifications"><HoverLinks text="Certifications" /></a></li>
            <li><a data-href="#contact" href="#contact"><HoverLinks text="Contact" /></a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            aria-pressed={theme === "dark"}
            onClick={toggleTheme}
          >
            <span className="theme-icon" aria-hidden="true">{theme === "light" ? "☾" : "☼"}</span>
            <span>{theme === "light" ? "Dark" : "Light"}</span>
          </button>
          <a className="connect-button" href="#contact">Let’s connect <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
