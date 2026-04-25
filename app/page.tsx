export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="px-6 py-20 text-center bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I&apos;m <span className="text-sky-400">Shubham Singh</span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
          Data Analyst | Python | SQL | Power BI
        </h2>

        <p className="max-w-3xl mx-auto text-slate-300 text-lg">
          Data Analyst with hands-on experience in SQL, Python, Excel, and Power BI.
          Skilled in dashboard development, KPI analysis, data storytelling, and
          converting raw data into meaningful business insights.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/iam-shubhamm?tab=repositories"
            target="_blank"
            className="bg-sky-400 text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-sky-300"
          >
            GitHub Profile
          </a>

          <a
            href="https://www.linkedin.com/in/shubhamsingh7a"
            target="_blank"
            className="border border-sky-400 px-6 py-3 rounded-xl font-semibold hover:bg-sky-400 hover:text-slate-950"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>

        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-xl">
          <p className="text-slate-300 text-lg leading-8">
            I am a Data Analyst passionate about solving business problems using data.
            I work with SQL, Python, Excel, Power BI, and Tableau to clean data,
            create dashboards, design KPIs, and generate actionable insights.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-16 bg-slate-900">
        <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {[
            "SQL",
            "Python",
            "Power BI",
            "Advanced Excel",
            "Tableau",
            "Pandas",
            "NumPy",
            "Data Cleaning",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center hover:border-sky-400 hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-semibold text-sky-400">{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <ProjectCard
            title="Customer Churn Prediction"
            desc="Analyzed telecom customer data to identify churn patterns based on tenure, contract type, and monthly charges using Power BI."
            tech="Power BI | Dashboard | KPI Analysis"
            link="https://github.com/iam-shubhamm/Customer-Churn-Prediction"
          />

          <ProjectCard
            title="Pizza Sales Data Analysis"
            desc="Analyzed 48,000+ pizza sales records using MS SQL Server and Power BI to find revenue trends, best-selling pizzas, and business insights."
            tech="MS SQL Server | Power BI | Sales Analysis"
            link="https://github.com/iam-shubhamm/Pizza-Sales-Analysis-Dashboard-using-MS-SQL-Server-and-Power-BI"
          />

          <ProjectCard
            title="Movie Recommendation System"
            desc="Built a content-based movie recommendation system using Python, Pandas, Scikit-learn, and Streamlit."
            tech="Python | Scikit-learn | Streamlit"
            link="https://github.com/iam-shubhamm/Movie-Recommendation-System"
          />
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 py-16 bg-slate-900">
        <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>

        <div className="max-w-4xl mx-auto bg-slate-800 border border-slate-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-sky-400">
            Identity and Access Management Virtual Experience
          </h3>
          <p className="text-slate-300 mt-2">Tata Consultancy Services - Forage</p>
          <p className="text-slate-300 mt-4 leading-7">
            Completed a virtual consulting experience with TCS, applying IAM concepts
            to design secure access systems and improve operational efficiency.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-16 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <a className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-sky-400" href="mailto:shubhamkanpura7@gmail.com">
            <h3 className="text-sky-400 font-bold">Email</h3>
            <p className="text-slate-300 mt-2">shubhamkanpura7@gmail.com</p>
          </a>

          <a className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-sky-400" href="tel:+919931392284">
            <h3 className="text-sky-400 font-bold">Phone</h3>
            <p className="text-slate-300 mt-2">+91-9931392284</p>
          </a>

          <a className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-sky-400" href="https://www.linkedin.com/in/shubhamsingh7a" target="_blank">
            <h3 className="text-sky-400 font-bold">LinkedIn</h3>
            <p className="text-slate-300 mt-2">View Profile</p>
          </a>
        </div>
      </section>

      <footer className="text-center py-6 border-t border-slate-800 text-slate-400">
        © 2026 Shubham Singh. All Rights Reserved.
      </footer>
    </main>
  );
}

function ProjectCard({
  title,
  desc,
  tech,
  link,
}: {
  title: string;
  desc: string;
  tech: string;
  link: string;
}) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-7 shadow-xl hover:border-sky-400 hover:-translate-y-2 transition">
      <h3 className="text-2xl font-bold text-sky-400 mb-4">{title}</h3>
      <p className="text-slate-300 leading-7 mb-4">{desc}</p>
      <p className="text-purple-300 font-semibold mb-6">{tech}</p>

      <a
        href={link}
        target="_blank"
        className="inline-block bg-sky-400 text-slate-950 px-5 py-3 rounded-xl font-semibold hover:bg-sky-300"
      >
        View Project
      </a>
    </div>
  );
}
