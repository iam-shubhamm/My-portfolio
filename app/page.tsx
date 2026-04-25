"use client";

import { useState } from "react";

const projects = [
  {
    title: "Customer Churn Prediction",
    category: "Power BI Dashboard",
    desc: "Analyzed telecom customer data to identify churn patterns based on tenure, contract type, monthly charges, and customer behavior.",
    tech: ["Power BI", "Dashboard", "KPI", "Churn Analysis"],
    link: "https://github.com/iam-shubhamm/Customer-Churn-Prediction",
    icon: "📊",
    gradient: "from-pink-500 via-rose-500 to-orange-400",
  },
  {
    title: "Pizza Sales Data Analysis",
    category: "SQL + Power BI",
    desc: "Analyzed 48,000+ pizza sales records using MS SQL Server and Power BI to find revenue trends, best-selling products, and business insights.",
    tech: ["MS SQL Server", "Power BI", "Sales Analysis", "KPI"],
    link: "https://github.com/iam-shubhamm/Pizza-Sales-Analysis-Dashboard-using-MS-SQL-Server-and-Power-BI",
    icon: "🍕",
    gradient: "from-yellow-400 via-orange-500 to-red-500",
  },
  {
    title: "Movie Recommendation System",
    category: "Python ML Project",
    desc: "Built a content-based movie recommendation system using Python, Pandas, Scikit-learn, cosine similarity, and Streamlit.",
    tech: ["Python", "ML", "Streamlit", "Scikit-learn"],
    link: "https://github.com/iam-shubhamm/Movie-Recommendation-System",
    icon: "🎬",
    gradient: "from-cyan-400 via-blue-500 to-purple-600",
  },
];

const skills = [
  "SQL",
  "Python",
  "Power BI",
  "Advanced Excel",
  "Tableau",
  "Pandas",
  "NumPy",
  "Data Cleaning",
  "EDA",
  "Dashboard Development",
  "KPI Analysis",
  "Data Storytelling",
];

export default function Home() {
  const [lightMode, setLightMode] = useState(false);

  return (
    <main className={lightMode ? "light-theme" : "dark-theme"}>
      {/* Toggle Button */}
      <button
        onClick={() => setLightMode(!lightMode)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 px-5 py-4 font-bold text-white shadow-2xl transition hover:scale-110"
      >
        {lightMode ? "🌙 Dark" : "☀️ Light"}
      </button>

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-pink-500 blur-[140px] opacity-40" />
        <div className="absolute right-[-120px] top-[150px] h-[420px] w-[420px] rounded-full bg-cyan-500 blur-[140px] opacity-40" />
        <div className="absolute bottom-[-120px] left-[35%] h-[420px] w-[420px] rounded-full bg-purple-600 blur-[140px] opacity-40" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-black">
            Shubham<span className="text-cyan-400">.</span>
          </h1>

          <div className="hidden gap-7 md:flex">
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#certifications" className="hover:text-cyan-400">Certificates</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <div className="mb-6 inline-block rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-cyan-300">
            🚀 Data Analyst Portfolio
          </div>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent">
              Shubham Singh
            </span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-purple-200">
            Data Analyst | Python | SQL | Power BI
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I create interactive dashboards, analyze KPIs, clean real-world datasets,
            and convert raw data into meaningful business insights.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="premium-btn">View Projects</a>
            <a href="https://github.com/iam-shubhamm?tab=repositories" target="_blank" className="outline-btn">GitHub</a>
            <a href="https://www.linkedin.com/in/shubhamsingh7a" target="_blank" className="outline-btn">LinkedIn</a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[45px] bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-300 blur-2xl opacity-60" />
          <div className="relative rounded-[45px] border border-white/20 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-xl">
            <div className="mx-auto mb-6 flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-6xl font-black text-white">
              SS
            </div>

            <h2 className="text-3xl font-black">Shubham Singh</h2>
            <p className="mt-2 text-slate-300">Data Analyst</p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <Stat number="10+" text="Projects" />
              <Stat number="48K+" text="Records" />
              <Stat number="4K+" text="Customers" />
              <Stat number="11+" text="Assignments" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle title="About Me" subtitle="Turning Data Into Decisions" />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="glass-card">
            <h3 className="mb-4 text-3xl font-black text-cyan-300">Who I Am</h3>
            <p className="leading-8 text-slate-300">
              I am a Data Analyst skilled in SQL, Python, Excel, Power BI, and Tableau.
              I enjoy building dashboards, designing KPIs, cleaning datasets, and finding
              insights that support business decision-making.
            </p>
          </div>

          <div className="glass-card">
            <h3 className="mb-4 text-3xl font-black text-pink-300">What I Do</h3>
            <p className="leading-8 text-slate-300">
              I work on real-world datasets and create professional dashboards with clear
              visuals, business insights, and actionable recommendations for companies.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle title="What I Can Do" subtitle="My Data Analyst Services" />

        <div className="grid gap-6 md:grid-cols-3">
          <Service icon="📊" title="Dashboard Design" text="Power BI dashboards with KPIs, charts, filters, and business storytelling." />
          <Service icon="🧹" title="Data Cleaning" text="Clean messy data, remove duplicates, handle missing values, and prepare data for analysis." />
          <Service icon="📈" title="Business Insights" text="Analyze trends, customer behavior, sales performance, and important business metrics." />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle title="Skills" subtitle="Tools & Technologies" />

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div key={skill} className="skill-card">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-pink-500 text-xl font-black">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold">{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle title="Featured Projects" subtitle="Click Project Button To Open GitHub" />

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <div className={`h-4 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-8">
                <div className={`mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r ${project.gradient} text-4xl shadow-xl`}>
                  {project.icon}
                </div>

                <p className="mb-2 text-sm font-bold uppercase tracking-widest text-cyan-300">
                  {project.category}
                </p>

                <h3 className="text-2xl font-black">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>

                <a href={project.link} target="_blank" className={`mt-7 inline-block rounded-2xl bg-gradient-to-r ${project.gradient} px-6 py-3 font-black text-white shadow-xl transition hover:scale-105`}>
                  View GitHub Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Dashboard Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle title="Dashboard Style" subtitle="Colorful Data Visualization Feel" />

        <div className="grid gap-8 md:grid-cols-3">
          <VisualCard title="Revenue Analysis" emoji="💰" color="from-green-400 to-emerald-600" />
          <VisualCard title="Customer Insights" emoji="👥" color="from-pink-400 to-rose-600" />
          <VisualCard title="Sales Trends" emoji="📈" color="from-cyan-400 to-blue-600" />
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle title="Certifications" subtitle="Learning & Achievements" />

        <div className="grid gap-6 md:grid-cols-3">
          <Certificate title="Tutedude Data Analytics" text="Excel, SQL, Python, data cleaning and visualization." />
          <Certificate title="SQL Advanced - HackerRank" text="Solved SQL problems and passed all test cases." />
          <Certificate title="10+ Data Projects" text="Completed end-to-end real-world data analysis projects." />
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <SectionTitle title="Education" subtitle="Academic Background" />

        <div className="space-y-6">
          <Timeline title="Bachelor of Technology" text="United Institute of Technology, Prayagraj | 2021 - 2025" color="cyan" />
          <Timeline title="Intermediate of Science" text="Maharshi Chayan College, Buxar | 2021" color="pink" />
          <Timeline title="Secondary School" text="Bihar Public School, Buxar | 2019" color="yellow" />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle title="Contact Me" subtitle="Let’s Connect" />

        <div className="grid gap-6 md:grid-cols-3">
          <Contact title="Email" value="shubhamkanpura7@gmail.com" link="mailto:shubhamkanpura7@gmail.com" color="cyan" />
          <Contact title="Phone" value="+91-9931392284" link="tel:+919931392284" color="pink" />
          <Contact title="LinkedIn" value="View Profile" link="https://www.linkedin.com/in/shubhamsingh7a" color="yellow" />
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-slate-400">
        © 2026 Shubham Singh. Built with Next.js.
      </footer>
    </main>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-12 text-center">
      <p className="mb-3 font-bold uppercase tracking-[4px] text-cyan-300">{subtitle}</p>
      <h2 className="text-4xl font-black md:text-5xl">{title}</h2>
    </div>
  );
}

function Stat({ number, text }: { number: string; text: string }) {
  return (
    <div className="rounded-3xl bg-white/10 p-5">
      <h3 className="text-3xl font-black text-cyan-300">{number}</h3>
      <p className="text-sm text-slate-300">{text}</p>
    </div>
  );
}

function Service({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="glass-card text-center">
      <div className="mb-5 text-5xl">{icon}</div>
      <h3 className="mb-3 text-2xl font-black">{title}</h3>
      <p className="text-slate-300">{text}</p>
    </div>
  );
}

function VisualCard({ title, emoji, color }: { title: string; emoji: string; color: string }) {
  return (
    <div className="glass-card">
      <div className={`mb-6 flex h-48 items-center justify-center rounded-3xl bg-gradient-to-r ${color} text-7xl shadow-xl`}>
        {emoji}
      </div>
      <h3 className="text-2xl font-black">{title}</h3>
      <div className="mt-5 space-y-3">
        <div className="h-3 w-full rounded-full bg-white/20">
          <div className="h-3 w-[80%] rounded-full bg-cyan-400" />
        </div>
        <div className="h-3 w-full rounded-full bg-white/20">
          <div className="h-3 w-[65%] rounded-full bg-pink-400" />
        </div>
        <div className="h-3 w-full rounded-full bg-white/20">
          <div className="h-3 w-[90%] rounded-full bg-yellow-300" />
        </div>
      </div>
    </div>
  );
}

function Certificate({ title, text }: { title: string; text: string }) {
  return (
    <div className="glass-card">
      <div className="mb-5 text-5xl">🏆</div>
      <h3 className="mb-3 text-2xl font-black text-yellow-300">{title}</h3>
      <p className="text-slate-300">{text}</p>
    </div>
  );
}

function Timeline({ title, text, color }: { title: string; text: string; color: string }) {
  return (
    <div className={`rounded-3xl border border-${color}-400/30 bg-white/10 p-7 backdrop-blur-xl`}>
      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-2 text-slate-300">{text}</p>
    </div>
  );
}

function Contact({ title, value, link, color }: { title: string; value: string; link: string; color: string }) {
  return (
    <a href={link} target="_blank" className={`rounded-3xl border border-${color}-400/30 bg-white/10 p-8 text-center backdrop-blur-xl transition hover:-translate-y-2`}>
      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-3 text-slate-300">{value}</p>
    </a>
  );
}
