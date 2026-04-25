const projects = [
  {
    title: "Customer Churn Prediction",
    desc: "Power BI dashboard to analyze telecom customer churn patterns, customer behavior, contract type, tenure, and monthly charges.",
    tech: "Power BI • KPI • Dashboard",
    link: "https://github.com/iam-shubhamm/Customer-Churn-Prediction",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Pizza Sales Data Analysis",
    desc: "Analyzed 48,000+ pizza sales records using MS SQL Server and Power BI to find revenue trends and best-selling products.",
    tech: "SQL Server • Power BI • Sales Analysis",
    link: "https://github.com/iam-shubhamm/Pizza-Sales-Analysis-Dashboard-using-MS-SQL-Server-and-Power-BI",
    color: "from-orange-400 to-yellow-400",
  },
  {
    title: "Movie Recommendation System",
    desc: "Built a content-based movie recommendation system using Python, Pandas, Scikit-learn and Streamlit.",
    tech: "Python • ML • Streamlit",
    link: "https://github.com/iam-shubhamm/Movie-Recommendation-System",
    color: "from-cyan-400 to-blue-500",
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
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b1a] text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-pink-500 blur-[120px]" />
        <div className="absolute right-[-10%] top-[10%] h-96 w-96 rounded-full bg-cyan-500 blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[35%] h-96 w-96 rounded-full bg-purple-600 blur-[140px]" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#070b1a]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-black">
            Shubham<span className="text-cyan-400">.</span>
          </h1>

          <div className="hidden gap-8 md:flex">
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <div className="mb-6 inline-block rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-cyan-300">
            Data Analyst Portfolio
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
            I create dashboards, analyze KPIs, clean real-world datasets, and
            convert raw data into meaningful business insights.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 font-bold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="https://github.com/iam-shubhamm?tab=repositories"
              target="_blank"
              className="rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-bold transition hover:scale-105 hover:bg-white/20"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shubhamsingh7a"
              target="_blank"
              className="rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-bold transition hover:scale-105 hover:bg-white/20"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-300 blur-2xl opacity-60" />
          <div className="relative rounded-[40px] border border-white/20 bg-white/10 p-10 text-center shadow-2xl backdrop-blur-xl">
            <div className="mx-auto mb-6 flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-6xl font-black text-white shadow-xl">
              SS
            </div>
            <h2 className="text-3xl font-black">Shubham Singh</h2>
            <p className="mt-3 text-slate-300">Data Analyst</p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <h3 className="text-3xl font-black text-cyan-300">10+</h3>
                <p className="text-sm text-slate-300">Projects</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <h3 className="text-3xl font-black text-pink-300">48K+</h3>
                <p className="text-sm text-slate-300">Records</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 text-center text-5xl font-black">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <div className="rounded-[35px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl md:p-12">
          <p className="text-lg leading-9 text-slate-300">
            I am a Data Analyst with hands-on experience in SQL, Python, Excel,
            Power BI, and Tableau. I enjoy working with real-world datasets,
            creating dashboards, designing KPIs, and finding useful insights
            that help businesses make better decisions.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-20">
        <h2 className="mb-12 text-center text-5xl font-black">
          My <span className="text-pink-400">Skills</span>
        </h2>

        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="rounded-3xl border border-white/10 bg-white/10 p-6 text-center shadow-xl backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-pink-500 text-2xl font-black">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold">{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-12 text-center text-5xl font-black">
          Featured <span className="text-yellow-300">Projects</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-[35px] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl transition hover:-translate-y-3"
            >
              <div className={`h-3 bg-gradient-to-r ${project.color}`} />

              <div className="p-8">
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${project.color} text-3xl font-black shadow-lg`}
                >
                  ✦
                </div>

                <h3 className="text-2xl font-black">{project.title}</h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {project.desc}
                </p>

                <p className="mt-5 font-bold text-purple-300">
                  {project.tech}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  className={`mt-7 inline-block rounded-2xl bg-gradient-to-r ${project.color} px-6 py-3 font-black text-white shadow-lg transition group-hover:scale-105`}
                >
                  View GitHub Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 py-20">
        <h2 className="mb-12 text-center text-5xl font-black">
          Experience & <span className="text-cyan-400">Education</span>
        </h2>

        <div className="mx-auto max-w-5xl space-y-6">
          <div className="rounded-[30px] border border-cyan-400/30 bg-cyan-400/10 p-8">
            <h3 className="text-2xl font-black text-cyan-300">
              Identity and Access Management Virtual Experience
            </h3>
            <p className="mt-2 text-purple-200">Tata Consultancy Services - Forage</p>
            <p className="mt-4 text-slate-300">
              Completed a virtual consulting experience with TCS, applying IAM
              concepts to design secure access systems and improve operational efficiency.
            </p>
          </div>

          <div className="rounded-[30px] border border-pink-400/30 bg-pink-400/10 p-8">
            <h3 className="text-2xl font-black text-pink-300">
              Bachelor of Technology
            </h3>
            <p className="mt-2 text-purple-200">
              United Institute of Technology, Prayagraj | 2021 - 2025
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-12 text-center text-5xl font-black">
          Contact <span className="text-pink-400">Me</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="mailto:shubhamkanpura7@gmail.com"
            className="rounded-[30px] border border-white/10 bg-white/10 p-8 text-center transition hover:-translate-y-2 hover:border-cyan-400"
          >
            <h3 className="text-2xl font-black text-cyan-300">Email</h3>
            <p className="mt-3 text-slate-300">shubhamkanpura7@gmail.com</p>
          </a>

          <a
            href="tel:+919931392284"
            className="rounded-[30px] border border-white/10 bg-white/10 p-8 text-center transition hover:-translate-y-2 hover:border-pink-400"
          >
            <h3 className="text-2xl font-black text-pink-300">Phone</h3>
            <p className="mt-3 text-slate-300">+91-9931392284</p>
          </a>

          <a
            href="https://www.linkedin.com/in/shubhamsingh7a"
            target="_blank"
            className="rounded-[30px] border border-white/10 bg-white/10 p-8 text-center transition hover:-translate-y-2 hover:border-yellow-300"
          >
            <h3 className="text-2xl font-black text-yellow-300">LinkedIn</h3>
            <p className="mt-3 text-slate-300">View Profile</p>
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-slate-400">
        © 2026 Shubham Singh. Built with Next.js.
      </footer>
    </main>
  );
}
