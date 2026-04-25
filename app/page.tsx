<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Shubham Singh | Data Analyst Portfolio</title>

  <!-- Google Font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      scroll-behavior: smooth;
    }

    :root {
      --bg: #0f172a;
      --card: rgba(15, 23, 42, 0.78);
      --text: #e5e7eb;
      --muted: #94a3b8;
      --primary: #38bdf8;
      --secondary: #a78bfa;
      --accent: #22c55e;
      --white: #ffffff;
      --border: rgba(148, 163, 184, 0.25);
      --shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
    }

    body {
      font-family: 'Poppins', sans-serif;
      background: radial-gradient(circle at top left, #1e3a8a, transparent 35%),
                  radial-gradient(circle at top right, #581c87, transparent 35%),
                  var(--bg);
      color: var(--text);
      line-height: 1.7;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .container {
      width: min(1120px, 92%);
      margin: auto;
    }

    .section {
      padding: 90px 0;
    }

    .section-title {
      text-align: center;
      margin-bottom: 50px;
    }

    .section-title span {
      color: var(--primary);
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-size: 14px;
    }

    .section-title h2 {
      font-size: clamp(30px, 4vw, 44px);
      margin-top: 10px;
    }

    /* Navbar */
    header {
      position: sticky;
      top: 0;
      z-index: 1000;
      backdrop-filter: blur(16px);
      background: rgba(15, 23, 42, 0.82);
      border-bottom: 1px solid var(--border);
    }

    nav {
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      font-size: 24px;
      font-weight: 800;
      color: var(--white);
    }

    .logo span {
      color: var(--primary);
    }

    .nav-links {
      display: flex;
      gap: 28px;
      list-style: none;
      align-items: center;
    }

    .nav-links a {
      color: var(--muted);
      font-size: 15px;
      transition: 0.3s ease;
    }

    .nav-links a:hover {
      color: var(--primary);
    }

    .menu-btn {
      display: none;
      font-size: 26px;
      cursor: pointer;
    }

    /* Hero */
    .hero {
      min-height: calc(100vh - 72px);
      display: grid;
      place-items: center;
      padding: 70px 0;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 50px;
      align-items: center;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 16px;
      border: 1px solid var(--border);
      border-radius: 999px;
      color: var(--primary);
      background: rgba(56, 189, 248, 0.08);
      margin-bottom: 22px;
      font-size: 14px;
    }

    .hero h1 {
      font-size: clamp(42px, 7vw, 76px);
      line-height: 1.05;
      margin-bottom: 22px;
    }

    .hero h1 span {
      background: linear-gradient(90deg, var(--primary), var(--secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero p {
      color: var(--muted);
      max-width: 680px;
      font-size: 17px;
      margin-bottom: 32px;
    }

    .btn-group {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 13px 22px;
      border-radius: 14px;
      border: 1px solid var(--border);
      font-weight: 600;
      transition: 0.3s ease;
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      color: #020617;
      border: none;
    }

    .btn:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow);
    }

    .hero-card {
      position: relative;
      border: 1px solid var(--border);
      background: var(--card);
      border-radius: 30px;
      padding: 34px;
      box-shadow: var(--shadow);
      overflow: hidden;
    }

    .hero-card::before {
      content: "";
      position: absolute;
      inset: -80px;
      background: conic-gradient(from 180deg, transparent, rgba(56,189,248,0.3), transparent, rgba(167,139,250,0.3), transparent);
      animation: rotate 7s linear infinite;
      z-index: -1;
    }

    @keyframes rotate {
      to { transform: rotate(360deg); }
    }

    .profile-circle {
      width: 170px;
      height: 170px;
      border-radius: 50%;
      margin: 0 auto 24px;
      display: grid;
      place-items: center;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      color: #020617;
      font-size: 58px;
      font-weight: 800;
      box-shadow: 0 20px 50px rgba(56, 189, 248, 0.25);
    }

    .hero-card h3 {
      text-align: center;
      font-size: 26px;
      margin-bottom: 6px;
    }

    .hero-card p {
      text-align: center;
      margin-bottom: 22px;
    }

    .socials {
      display: flex;
      justify-content: center;
      gap: 14px;
    }

    .socials a {
      width: 44px;
      height: 44px;
      display: grid;
      place-items: center;
      border-radius: 12px;
      background: rgba(255,255,255,0.06);
      border: 1px solid var(--border);
      transition: 0.3s ease;
    }

    .socials a:hover {
      background: var(--primary);
      color: #020617;
      transform: translateY(-4px);
    }

    /* Cards */
    .glass-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 24px;
      padding: 28px;
      box-shadow: var(--shadow);
      transition: 0.3s ease;
    }

    .glass-card:hover {
      transform: translateY(-8px);
      border-color: rgba(56, 189, 248, 0.45);
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 18px;
    }

    .stat h3 {
      font-size: 34px;
      color: var(--primary);
    }

    .stat p {
      color: var(--muted);
    }

    /* Skills */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
    }

    .skill {
      text-align: center;
      padding: 24px 16px;
    }

    .skill i {
      font-size: 34px;
      color: var(--primary);
      margin-bottom: 14px;
    }

    .skill h3 {
      font-size: 18px;
      margin-bottom: 8px;
    }

    .skill p {
      color: var(--muted);
      font-size: 14px;
    }

    /* Projects */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .project-card {
      position: relative;
      overflow: hidden;
    }

    .project-icon {
      width: 58px;
      height: 58px;
      border-radius: 18px;
      display: grid;
      place-items: center;
      background: rgba(56, 189, 248, 0.12);
      color: var(--primary);
      font-size: 26px;
      margin-bottom: 20px;
    }

    .project-card h3 {
      font-size: 22px;
      margin-bottom: 12px;
    }

    .project-card p {
      color: var(--muted);
      font-size: 15px;
      margin-bottom: 18px;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 24px;
    }

    .tags span {
      padding: 6px 10px;
      border-radius: 999px;
      background: rgba(167, 139, 250, 0.12);
      color: #ddd6fe;
      font-size: 12px;
      border: 1px solid rgba(167, 139, 250, 0.2);
    }

    .project-links {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .small-btn {
      padding: 10px 14px;
      border-radius: 12px;
      border: 1px solid var(--border);
      font-size: 14px;
      font-weight: 600;
      transition: 0.3s ease;
    }

    .small-btn:hover {
      background: var(--primary);
      color: #020617;
      transform: translateY(-3px);
    }

    /* Timeline */
    .timeline {
      display: grid;
      gap: 22px;
      max-width: 850px;
      margin: auto;
    }

    .timeline-item {
      position: relative;
      padding-left: 28px;
      border-left: 2px solid rgba(56, 189, 248, 0.35);
    }

    .timeline-item::before {
      content: "";
      position: absolute;
      left: -8px;
      top: 8px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--primary);
    }

    .timeline-item h3 {
      font-size: 20px;
    }

    .timeline-item span {
      color: var(--primary);
      font-size: 14px;
      font-weight: 600;
    }

    .timeline-item p {
      color: var(--muted);
      margin-top: 8px;
    }

    /* Contact */
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    .contact-card {
      text-align: center;
    }

    .contact-card i {
      font-size: 30px;
      color: var(--primary);
      margin-bottom: 14px;
    }

    .contact-card p {
      color: var(--muted);
      word-break: break-word;
    }

    footer {
      padding: 28px 0;
      text-align: center;
      border-top: 1px solid var(--border);
      color: var(--muted);
    }

    .top-btn {
      position: fixed;
      right: 22px;
      bottom: 22px;
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background: var(--primary);
      color: #020617;
      display: grid;
      place-items: center;
      font-weight: 800;
      box-shadow: var(--shadow);
      z-index: 999;
    }

    @media (max-width: 900px) {
      .menu-btn {
        display: block;
      }

      .nav-links {
        position: absolute;
        top: 72px;
        right: 0;
        width: 100%;
        padding: 22px;
        flex-direction: column;
        background: rgba(15, 23, 42, 0.98);
        border-bottom: 1px solid var(--border);
        display: none;
      }

      .nav-links.active {
        display: flex;
      }

      .hero-grid,
      .about-grid,
      .projects-grid,
      .contact-grid {
        grid-template-columns: 1fr;
      }

      .skills-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 520px) {
      .skills-grid,
      .stats {
        grid-template-columns: 1fr;
      }

      .hero h1 {
        font-size: 40px;
      }

      .section {
        padding: 70px 0;
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="container">
      <nav>
        <a href="#home" class="logo">Shubham<span>.</span></a>
        <ul class="nav-links" id="navLinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="menu-btn" onclick="toggleMenu()">
          <i class="fa-solid fa-bars"></i>
        </div>
      </nav>
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="container hero-grid">
        <div>
          <div class="badge"><i class="fa-solid fa-chart-line"></i> Data Analyst Portfolio</div>
          <h1>Hi, I'm <span>Shubham Singh</span></h1>
          <p>
            Data Analyst skilled in SQL, Python, Excel, Power BI and Tableau. I create dashboards,
            analyze KPIs, clean real-world datasets, and convert raw data into clear business insights.
          </p>
          <div class="btn-group">
            <a href="#projects" class="btn btn-primary"><i class="fa-solid fa-briefcase"></i> View Projects</a>
            <a href="https://github.com/iam-shubhamm?tab=repositories" target="_blank" class="btn"><i class="fa-brands fa-github"></i> GitHub</a>
            <a href="https://www.linkedin.com/in/shubhamsingh7a" target="_blank" class="btn"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
          </div>
        </div>

        <div class="hero-card">
          <div class="profile-circle">SS</div>
          <h3>Shubham Singh</h3>
          <p>Data Analyst | Python | SQL | Power BI</p>
          <div class="socials">
            <a href="mailto:shubhamkanpura7@gmail.com" title="Email"><i class="fa-solid fa-envelope"></i></a>
            <a href="tel:+919931392284" title="Phone"><i class="fa-solid fa-phone"></i></a>
            <a href="https://github.com/iam-shubhamm?tab=repositories" target="_blank" title="GitHub"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/shubhamsingh7a" target="_blank" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="section" id="about">
      <div class="container">
        <div class="section-title">
          <span>About Me</span>
          <h2>Turning Data Into Decisions</h2>
        </div>
        <div class="about-grid">
          <div class="glass-card">
            <h3>Who I Am</h3>
            <p>
              I am a Data Analyst with hands-on experience in SQL, Python, Excel, Power BI and Tableau.
              I enjoy working with datasets, building interactive dashboards, designing KPIs and finding
              useful patterns that help businesses make better decisions.
            </p>
            <br>
            <p>
              My work includes customer churn analysis, pizza sales analysis and a movie recommendation system.
              I focus on clean presentation, strong insights and real-world business value.
            </p>
          </div>
          <div class="stats">
            <div class="glass-card stat">
              <h3>10+</h3>
              <p>Data Analysis Projects</p>
            </div>
            <div class="glass-card stat">
              <h3>48K+</h3>
              <p>Pizza Sales Records Analyzed</p>
            </div>
            <div class="glass-card stat">
              <h3>4K+</h3>
              <p>Telecom Customers Analyzed</p>
            </div>
            <div class="glass-card stat">
              <h3>11</h3>
              <p>Real-world Assignments</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section class="section" id="skills">
      <div class="container">
        <div class="section-title">
          <span>Skills</span>
          <h2>Tools & Technologies</h2>
        </div>
        <div class="skills-grid">
          <div class="glass-card skill">
            <i class="fa-solid fa-database"></i>
            <h3>SQL</h3>
            <p>Queries, Joins, Aggregation, KPI Analysis</p>
          </div>
          <div class="glass-card skill">
            <i class="fa-brands fa-python"></i>
            <h3>Python</h3>
            <p>Pandas, NumPy, Data Cleaning, EDA</p>
          </div>
          <div class="glass-card skill">
            <i class="fa-solid fa-chart-pie"></i>
            <h3>Power BI</h3>
            <p>Dashboards, Visuals, Business Insights</p>
          </div>
          <div class="glass-card skill">
            <i class="fa-solid fa-file-excel"></i>
            <h3>Advanced Excel</h3>
            <p>Reports, Analysis, Pivot Tables</p>
          </div>
          <div class="glass-card skill">
            <i class="fa-solid fa-chart-simple"></i>
            <h3>Tableau</h3>
            <p>Interactive Data Visualization</p>
          </div>
          <div class="glass-card skill">
            <i class="fa-solid fa-broom"></i>
            <h3>Data Cleaning</h3>
            <p>Transforming raw data into useful data</p>
          </div>
          <div class="glass-card skill">
            <i class="fa-solid fa-lightbulb"></i>
            <h3>Data Storytelling</h3>
            <p>Clear insights for decision-making</p>
          </div>
          <div class="glass-card skill">
            <i class="fa-solid fa-robot"></i>
            <h3>Machine Learning</h3>
            <p>Decision Trees, Scikit-learn</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section class="section" id="projects">
      <div class="container">
        <div class="section-title">
          <span>Projects</span>
          <h2>Featured Work</h2>
        </div>

        <div class="projects-grid">
          <div class="glass-card project-card">
            <div class="project-icon"><i class="fa-solid fa-user-minus"></i></div>
            <h3>Customer Churn Prediction</h3>
            <p>
              Analyzed 4,043 telecom customers to identify churn patterns based on tenure, contract type and monthly charges.
              Built Power BI visuals to highlight churn-prone customer segments.
            </p>
            <div class="tags">
              <span>Power BI</span>
              <span>Dashboard</span>
              <span>KPI Analysis</span>
            </div>
            <div class="project-links">
              <a href="https://github.com/iam-shubhamm/Customer-Churn-Prediction" target="_blank" class="small-btn">
                <i class="fa-brands fa-github"></i> View Project
              </a>
            </div>
          </div>

          <div class="glass-card project-card">
            <div class="project-icon"><i class="fa-solid fa-pizza-slice"></i></div>
            <h3>Pizza Sales Data Analysis</h3>
            <p>
              Analyzed 48,000+ pizza sales records using Microsoft SQL Server and Power BI. Created KPIs like revenue,
              average order value, total orders and sales trends.
            </p>
            <div class="tags">
              <span>MS SQL Server</span>
              <span>Power BI</span>
              <span>Sales Analysis</span>
            </div>
            <div class="project-links">
              <a href="https://github.com/iam-shubhamm/Pizza-Sales-Analysis-Dashboard-using-MS-SQL-Server-and-Power-BI" target="_blank" class="small-btn">
                <i class="fa-brands fa-github"></i> View Project
              </a>
            </div>
          </div>

          <div class="glass-card project-card">
            <div class="project-icon"><i class="fa-solid fa-film"></i></div>
            <h3>Movie Recommendation System</h3>
            <p>
              Built a content-based movie recommendation system using Python, Pandas and Scikit-learn. Deployed an
              interactive Streamlit application for personalized movie suggestions.
            </p>
            <div class="tags">
              <span>Python</span>
              <span>Scikit-learn</span>
              <span>Streamlit</span>
            </div>
            <div class="project-links">
              <a href="https://github.com/iam-shubhamm/Movie-Recommendation-System" target="_blank" class="small-btn">
                <i class="fa-brands fa-github"></i> View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="section" id="experience">
      <div class="container">
        <div class="section-title">
          <span>Experience & Education</span>
          <h2>My Journey</h2>
        </div>
        <div class="timeline">
          <div class="glass-card timeline-item">
            <h3>Identity and Access Management Virtual Experience</h3>
            <span>Tata Consultancy Services - Forage</span>
            <p>
              Completed a virtual consulting experience with TCS, applying IAM concepts to design secure access systems,
              improve access efficiency and strengthen security compliance.
            </p>
          </div>

          <div class="glass-card timeline-item">
            <h3>Bachelor of Technology</h3>
            <span>United Institute of Technology, Prayagraj | 2021 - 2025</span>
            <p>
              Completed B.Tech from AKTU with a focus on technology, programming and data-driven projects.
            </p>
          </div>

          <div class="glass-card timeline-item">
            <h3>Certifications</h3>
            <span>Data Analytics & SQL</span>
            <p>
              Completed Tutedude Data Analytics training and earned SQL Advanced certification from HackerRank.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section" id="contact">
      <div class="container">
        <div class="section-title">
          <span>Contact</span>
          <h2>Let's Connect</h2>
        </div>
        <div class="contact-grid">
          <a class="glass-card contact-card" href="mailto:shubhamkanpura7@gmail.com">
            <i class="fa-solid fa-envelope"></i>
            <h3>Email</h3>
            <p>shubhamkanpura7@gmail.com</p>
          </a>
          <a class="glass-card contact-card" href="tel:+919931392284">
            <i class="fa-solid fa-phone"></i>
            <h3>Phone</h3>
            <p>+91-9931392284</p>
          </a>
          <a class="glass-card contact-card" href="https://www.linkedin.com/in/shubhamsingh7a" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/shubhamsingh7a</p>
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <p>© 2026 Shubham Singh. Built with HTML, CSS and JavaScript.</p>
    </div>
  </footer>

  <a href="#home" class="top-btn"><i class="fa-solid fa-arrow-up"></i></a>

  <script>
    function toggleMenu() {
      document.getElementById('navLinks').classList.toggle('active');
    }

    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
      });
    });
  </script>
</body>
</html>
