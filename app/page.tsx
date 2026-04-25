@import "tailwindcss";

* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.site {
  min-height: 100vh;
  transition: 0.4s;
}

.dark {
  background: linear-gradient(
    -45deg,
    #020617,
    #0f172a,
    #1e1b4b,
    #312e81,
    #0f172a
  );
  background-size: 400% 400%;
  animation: gradientMove 12s ease infinite;
  color: white;
}

.light {
  background: linear-gradient(
    -45deg,
    #fdf2f8,
    #eff6ff,
    #ecfeff,
    #fae8ff,
    #ffffff
  );
  background-size: 400% 400%;
  animation: gradientMove 12s ease infinite;
  color: #0f172a;
}

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

a {
  color: inherit;
  text-decoration: none;
}

.theme-toggle {
  position: fixed;
  top: 22px;
  right: 22px;
  z-index: 100;
  border: none;
  border-radius: 999px;
  padding: 14px 20px;
  color: white;
  font-weight: 900;
  cursor: pointer;
  background: linear-gradient(90deg, #06b6d4, #a855f7, #ec4899);
  box-shadow: 0 20px 50px rgba(236, 72, 153, 0.35);
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(22px);
  background: rgba(5, 8, 22, 0.55);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.light .navbar {
  background: rgba(255, 255, 255, 0.65);
}

.nav-inner {
  max-width: 1180px;
  margin: auto;
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 26px;
  font-weight: 950;
}

.logo span {
  color: #22d3ee;
}

.nav-links {
  display: flex;
  gap: 28px;
  font-weight: 700;
  padding-right: 150px;
}

.nav-links a:hover {
  color: #22d3ee;
}

.hero {
  max-width: 1180px;
  margin: auto;
  min-height: 88vh;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 55px;
  padding: 70px 24px;
}

.small-badge {
  display: inline-block;
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(34, 211, 238, 0.12);
  border: 1px solid rgba(34, 211, 238, 0.35);
  color: #67e8f9;
  font-weight: 800;
}

.hero h1 {
  font-size: clamp(48px, 8vw, 86px);
  line-height: 1;
  margin: 20px 0;
  font-weight: 950;
}

.hero h1 span {
  display: block;
  background: linear-gradient(90deg, #22d3ee, #a855f7, #ec4899, #facc15);
  -webkit-background-clip: text;
  color: transparent;
}

.hero-text {
  font-size: 19px;
  line-height: 1.8;
  color: #cbd5e1;
  max-width: 650px;
}

.light .hero-text,
.light .glass-box p,
.light .project-desc,
.light .process-card p,
.light .contact-text,
.light .visual-card p,
.light .education-card p {
  color: #334155;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 34px;
}

.primary-btn,
.secondary-btn,
.project-btn {
  display: inline-block;
  border-radius: 18px;
  padding: 15px 25px;
  font-weight: 950;
  transition: 0.3s;
}

.primary-btn {
  color: #020617;
  background: linear-gradient(90deg, #22d3ee, #facc15);
  box-shadow: 0 18px 45px rgba(34, 211, 238, 0.25);
}

.secondary-btn {
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.09);
}

.primary-btn:hover,
.secondary-btn:hover,
.project-btn:hover {
  transform: translateY(-5px) scale(1.04);
}

.hero-card {
  padding: 35px;
  border-radius: 42px;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(22px);
  box-shadow: 0 35px 90px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;
}

.hero-card::before {
  content: "";
  position: absolute;
  inset: -3px;
  background: linear-gradient(120deg, #22d3ee, #a855f7, #ec4899, #facc15);
  z-index: -1;
  filter: blur(25px);
  opacity: 0.5;
}

.profile-ring {
  width: 190px;
  height: 190px;
  margin: auto;
  padding: 7px;
  border-radius: 50%;
  background: linear-gradient(120deg, #22d3ee, #a855f7, #ec4899, #facc15);
}

.profile {
  height: 100%;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #050816;
  color: white;
  font-size: 60px;
  font-weight: 950;
}

.mini-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 25px;
}

.mini-tags span,
.tech-list span {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 13px;
  font-weight: 700;
}

.section {
  max-width: 1180px;
  margin: auto;
  padding: 85px 24px;
}

.section-subtitle {
  text-align: center;
  color: #22d3ee;
  font-weight: 950;
  letter-spacing: 4px;
}

.section-title {
  text-align: center;
  font-size: clamp(34px, 5vw, 54px);
  margin: 12px 0 45px;
  font-weight: 950;
}

.about-grid,
.why-grid,
.projects-grid,
.cert-grid,
.contact-grid,
.visual-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.about-grid {
  grid-template-columns: repeat(2, 1fr);
}

.glass-box,
.project-card,
.skill-card,
.process-card,
.cert-card,
.contact-grid a,
.visual-card,
.education-card {
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.09);
  border: 1px solid rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(20px);
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.22);
  transition: 0.3s;
}

.light .glass-box,
.light .project-card,
.light .skill-card,
.light .process-card,
.light .cert-card,
.light .contact-grid a,
.light .hero-card,
.light .visual-card,
.light .education-card {
  background: rgba(255, 255, 255, 0.78);
  border-color: rgba(15, 23, 42, 0.1);
}

.glass-box {
  padding: 32px;
}

.glass-box:hover,
.project-card:hover,
.skill-card:hover,
.process-card:hover,
.cert-card:hover,
.contact-grid a:hover,
.visual-card:hover,
.education-card:hover {
  transform: translateY(-10px);
  border-color: rgba(34, 211, 238, 0.7);
}

.glass-box h3 {
  font-size: 25px;
}

.glass-box p {
  color: #cbd5e1;
  line-height: 1.7;
}

.project-card {
  padding: 28px;
  position: relative;
  overflow: hidden;
}

.project-card:nth-child(1) {
  background: linear-gradient(145deg, rgba(236, 72, 153, 0.22), rgba(255, 255, 255, 0.08));
}

.project-card:nth-child(2) {
  background: linear-gradient(145deg, rgba(250, 204, 21, 0.22), rgba(255, 255, 255, 0.08));
}

.project-card:nth-child(3) {
  background: linear-gradient(145deg, rgba(34, 211, 238, 0.22), rgba(255, 255, 255, 0.08));
}

.project-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.project-icon {
  font-size: 48px;
}

.project-top p {
  color: #22d3ee;
  font-weight: 850;
}

.project-card h3 {
  font-size: 28px;
  margin-top: 25px;
}

.project-desc {
  color: #cbd5e1;
  line-height: 1.75;
}

.tech-list {
  display: flex;
  gap: 9px;
  flex-wrap: wrap;
  margin: 22px 0;
}

.project-btn {
  background: linear-gradient(90deg, #22d3ee, #a855f7, #ec4899);
  color: white;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.skill-card {
  padding: 25px;
}

.skill-card span {
  color: #facc15;
  font-weight: 950;
}

.skill-card h3 {
  font-size: 21px;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

.process-card {
  padding: 28px;
}

.process-card b {
  font-size: 34px;
  color: #ec4899;
}

.process-card h3 {
  font-size: 23px;
}

.process-card p {
  color: #cbd5e1;
  line-height: 1.6;
}

.visual-card {
  padding: 30px;
  min-height: 260px;
}

.visual-card h3 {
  font-size: 25px;
}

.visual-one {
  background: linear-gradient(145deg, rgba(34, 197, 94, 0.25), rgba(255, 255, 255, 0.08));
}

.visual-two {
  background: linear-gradient(145deg, rgba(236, 72, 153, 0.25), rgba(255, 255, 255, 0.08));
}

.visual-three {
  background: linear-gradient(145deg, rgba(34, 211, 238, 0.25), rgba(255, 255, 255, 0.08));
}

.bar {
  height: 16px;
  margin-top: 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
  overflow: hidden;
}

.bar span {
  display: block;
  height: 100%;
  border-radius: 999px;
}

.bar-one {
  width: 86%;
  background: #22d3ee;
}

.bar-two {
  width: 68%;
  background: #ec4899;
}

.bar-three {
  width: 78%;
  background: #facc15;
}

.circle-chart {
  width: 130px;
  height: 130px;
  margin: 25px auto;
  display: grid;
  place-items: center;
  border-radius: 50%;
  font-size: 34px;
  font-weight: 950;
  background: conic-gradient(#22d3ee 78%, rgba(255, 255, 255, 0.18) 0);
}

.trend-line {
  margin-top: 35px;
  font-size: 58px;
  font-weight: 950;
  color: #22d3ee;
  letter-spacing: 4px;
}

.cert-card,
.contact-grid a {
  padding: 28px;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
}

.education-list {
  display: grid;
  gap: 22px;
  max-width: 900px;
  margin: auto;
}

.education-card {
  padding: 30px;
  border-left: 6px solid #22d3ee;
}

.education-card h3 {
  font-size: 25px;
  margin: 0 0 10px;
}

.education-card p {
  color: #cbd5e1;
  margin: 0;
}

.contact-section {
  padding-bottom: 120px;
}

.contact-text {
  max-width: 760px;
  margin: -20px auto 40px;
  text-align: center;
  color: #cbd5e1;
  font-size: 18px;
  line-height: 1.8;
}

.contact-grid a span {
  display: block;
  margin-top: 10px;
  font-size: 24px;
}

.contact-grid a p {
  font-size: 15px;
  color: #cbd5e1;
  word-break: break-word;
}

footer {
  text-align: center;
  padding: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: #94a3b8;
}

@media (max-width: 900px) {
  .hero,
  .about-grid,
  .why-grid,
  .projects-grid,
  .cert-grid,
  .contact-grid,
  .process-grid,
  .visual-grid {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .nav-links {
    display: none;
  }

  .hero {
    padding-top: 40px;
  }
}

@media (max-width: 520px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    font-size: 44px;
  }

  .theme-toggle {
    right: 14px;
    top: 14px;
    padding: 12px 14px;
  }
}
