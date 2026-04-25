const projects = [
  {
    title: "Customer Churn Prediction",
    desc: "Analyzed telecom customer churn using Power BI dashboards and KPI analysis.",
    link: "https://github.com/iam-shubhamm/Customer-Churn-Prediction",
  },
  {
    title: "Pizza Sales Data Analysis",
    desc: "Analyzed 48K+ sales records using SQL Server & Power BI for business insights.",
    link: "https://github.com/iam-shubhamm/Pizza-Sales-Analysis-Dashboard-using-MS-SQL-Server-and-Power-BI",
  },
  {
    title: "Movie Recommendation System",
    desc: "Built ML-based recommendation system using Python & Streamlit.",
    link: "https://github.com/iam-shubhamm/Movie-Recommendation-System",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-white bg-[#070b1a] overflow-hidden">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-purple-500 blur-[150px] opacity-30 top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-cyan-500 blur-[140px] opacity-30 bottom-[-100px] right-[-100px]" />
      </div>

      {/* Hero */}
      <section className="text-center px-6 py-24">
        <h1 className="text-6xl font-bold">
          Shubham <span className="text-cyan-400">Singh</span>
        </h1>

        <p className="text-2xl mt-4 text-slate-300">
          Data Analyst | Python | SQL | Power BI
        </p>

        <p className="max-w-2xl mx-auto mt-6 text-slate-400">
          I create dashboards, analyze KPIs, and transform raw data into
          meaningful business insights.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://github.com/iam-shubhamm"
            target="_blank"
            className="px-6 py-3 bg-cyan-400 text-black rounded-xl font-semibold hover:scale-105 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shubhamsingh7a"
            target="_blank"
            className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-xl">
          <h2 className="text-4xl font-bold mb-4 text-center">
            About Me
          </h2>

          <p className="text-slate-300 text-lg leading-8 text-center">
            I am a Data Analyst skilled in SQL, Python, Excel, Power BI, and Tableau.
            I specialize in data cleaning, dashboard development, and KPI analysis
            to support business decision-making.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {["SQL", "Python", "Power BI", "Excel", "Tableau", "Pandas", "NumPy", "EDA"].map(
            (skill) => (
              <div
                key={skill}
                className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition"
              >
                <h3 className="text-xl font-semibold text-cyan-400">{skill}</h3>
              </div>
            )
          )}
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:scale-105 transition shadow-xl"
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                {p.title}
              </h3>

              <p className="text-slate-300 mt-4">{p.desc}</p>

              <a
                href={p.link}
                target="_blank"
                className="inline-block mt-6 px-5 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl font-semibold"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:shubhamkanpura7@gmail.com"
            className="bg-white/10 p-6 rounded-2xl border border-white/10 hover:scale-105 transition"
          >
            Email
          </a>

          <a
            href="tel:+919931392284"
            className="bg-white/10 p-6 rounded-2xl border border-white/10 hover:scale-105 transition"
          >
            Phone
          </a>

          <a
            href="https://www.linkedin.com/in/shubhamsingh7a"
            target="_blank"
            className="bg-white/10 p-6 rounded-2xl border border-white/10 hover:scale-105 transition"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="text-center py-6 text-slate-400">
        © 2026 Shubham Singh
      </footer>
    </main>
  );
}
