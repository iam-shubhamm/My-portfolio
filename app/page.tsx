"use client";

import { motion } from "framer-motion";
import { BarChart3, BrainCircuit, Database, Sparkles } from "lucide-react";

const skills = [
  "Python",
  "SQL",
  "Power BI",
  "Excel",
  "Pandas",
  "NumPy",
  "Seaborn",
  "PySpark",
  "Scikit-learn",
  "Data Cleaning",
  "EDA",
  "ETL Pipelines",
];

const projects = [
  {
    title: "Heart Attack Prediction Using Machine Learning",
    desc: "Built a Decision Tree-based predictive model to identify high-risk patients using healthcare datasets, with preprocessing, feature selection, and evaluation.",
  },
  {
    title: "Sales Performance Analysis Using Python and Power BI",
    desc: "Analyzed sales data to uncover revenue trends and top-performing products, and built interactive Power BI dashboards for decision-making.",
  },
  {
    title: "Movie Recommendation System",
    desc: "Created a recommendation system using similarity algorithms to deliver more relevant movie suggestions from user behavior and rating patterns.",
  },
  {
    title: "Customer Churn Prediction",
    desc: "Developed a machine learning model to predict customer churn and identify key factors affecting retention through EDA and feature engineering.",
  },
];

const certifications = [
  "IAM (TCS)",
  "HackerRank Certification in Python",
  "UIT Python Summer Training Certificate",
  "SQL (Advanced) Certificate - HackerRank",
];

const achievements = [
  "4★ rating in C++ on HackerRank",
  "4★ rating in Python on HackerRank",
  "Solved 400+ programming problems on HackerRank, CodeChef, and LeetCode",
  "Completed multiple certifications in Python and SQL",
];

function Card({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm"
    >
      {children}
    </motion.div>
  );
}

function FadeSection({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#0f172a_0%,_#020617_45%,_#000000_100%)] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-semibold tracking-wide">
            Shubham Singh
          </a>
          <nav className="hidden gap-6 text-sm text-gray-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#education" className="hover:text-white">Education</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main id="home" className="mx-auto max-w-6xl px-6 pt-32">
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              animate={{ y: [0, -25, 0], x: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-24 left-24 h-64 w-64 rounded-full bg-fuchsia-500/15 blur-3xl"
            />
            <motion.div
              animate={{ y: [0, -18, 0], x: [0, 18, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-20 top-32 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
            />
            <motion.div
              animate={{ opacity: [0.15, 0.28, 0.15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute left-10 top-28 h-24 w-24 rounded-full border border-cyan-400/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-20 right-16 h-32 w-32 rounded-full border border-fuchsia-400/20"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4" />
            Open to Data Analyst Opportunities
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 1.5 }}
            className="mb-8 h-2 w-28 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 shadow-[0_0_30px_rgba(59,130,246,0.45)]"
          />

          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold tracking-tight text-white md:text-7xl"
          >
            Shubham Singh
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-5 max-w-2xl text-lg text-slate-200 md:text-2xl"
          >
            Data Analyst <span className="text-cyan-300">|</span> Python <span className="text-cyan-300">|</span> SQL <span className="text-cyan-300">|</span> Power BI
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-6 max-w-4xl text-base leading-8 text-slate-300 md:text-lg"
          >
            I turn raw data into clear insights through analytics, dashboards, and machine learning, with a focus on solving real-world business problems in a practical way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#projects" className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-lg font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:scale-105">
              View Projects
            </a>
            <a href="#contact" className="rounded-full border border-cyan-400/30 bg-white/5 px-8 py-4 text-lg font-medium text-white backdrop-blur-md transition hover:bg-white/10">
              Contact Me
            </a>
            <a href="#skills" className="rounded-full border border-fuchsia-400/30 bg-white/5 px-8 py-4 text-lg font-medium text-white backdrop-blur-md transition hover:bg-white/10">
              Skills
            </a>
            <a href="#about" className="rounded-full border border-blue-400/30 bg-white/5 px-8 py-4 text-lg font-medium text-white backdrop-blur-md transition hover:bg-white/10">
              About
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-14 grid w-full max-w-4xl gap-4 md:grid-cols-4"
          >
            <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/70 p-4 shadow-lg shadow-cyan-500/10 backdrop-blur-md">
              <Database className="mx-auto h-6 w-6 text-cyan-300" />
              <p className="mt-2 text-sm text-slate-300">SQL & Data Handling</p>
            </div>
            <div className="rounded-2xl border border-fuchsia-400/20 bg-slate-900/70 p-4 shadow-lg shadow-fuchsia-500/10 backdrop-blur-md">
              <BarChart3 className="mx-auto h-6 w-6 text-fuchsia-300" />
              <p className="mt-2 text-sm text-slate-300">Dashboards & BI</p>
            </div>
            <div className="rounded-2xl border border-blue-400/20 bg-slate-900/70 p-4 shadow-lg shadow-blue-500/10 backdrop-blur-md">
              <BrainCircuit className="mx-auto h-6 w-6 text-blue-300" />
              <p className="mt-2 text-sm text-slate-300">Machine Learning</p>
            </div>
            <div className="rounded-2xl border border-emerald-400/20 bg-slate-900/70 p-4 shadow-lg shadow-emerald-500/10 backdrop-blur-md">
              <Sparkles className="mx-auto h-6 w-6 text-emerald-300" />
              <p className="mt-2 text-sm text-slate-300">Continuous Learning</p>
            </div>
          </motion.div>
        </section>

        <FadeSection id="about" className="scroll-mt-28 py-16">
          <div className="grid gap-8 md:grid-cols-[1.4fr_0.9fr]">
            <Card>
              <h2 className="text-4xl font-semibold">About Me</h2>
              <p className="mt-5 text-gray-300 leading-8">
                I am a B.Tech graduate with a strong interest in Data Analytics and Data Engineering. I enjoy working with data, cleaning it, analyzing it, and turning it into meaningful insights that support better decisions.
              </p>
              <p className="mt-4 text-gray-300 leading-8">
                I have hands-on experience with Python, SQL, Power BI, Excel, Pandas, NumPy, Seaborn, and machine learning concepts. I like exploring patterns in data, building dashboards, and solving real-world business problems in a simple and practical way.
              </p>
              <p className="mt-4 text-gray-300 leading-8">
                Along with analytics, I am continuously improving my skills in ETL pipelines, PySpark, and modern data tools so I can grow into a strong data professional.
              </p>
            </Card>

            <Card>
              <h3 className="text-2xl font-semibold">Quick Info</h3>
              <div className="mt-5 space-y-4 text-gray-300">
                <p><span className="font-semibold text-white">Location:</span> Buxar, Bihar, India</p>
                <p><span className="font-semibold text-white">Email:</span> shubhamkanpura7@gmail.com</p>
                <p><span className="font-semibold text-white">LinkedIn:</span> <a href="https://www.linkedin.com/in/shubhamsingh7a" target="_blank" className="text-cyan-300 underline">View Profile</a></p>
                <p><span className="font-semibold text-white">Focus:</span> Data Analyst, BI, Python, SQL</p>
              </div>
            </Card>
          </div>
        </FadeSection>

        <FadeSection id="skills" className="scroll-mt-28 py-16">
          <h2 className="text-center text-4xl font-semibold">Technical Skills</h2>
          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
            {skills.map((skill) => (
              <Card key={skill}>
                <p className="text-center font-medium text-gray-200">{skill}</p>
              </Card>
            ))}
          </div>
        </FadeSection>

        <FadeSection id="projects" className="scroll-mt-28 py-16">
          <h2 className="text-center text-4xl font-semibold">Projects</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.title}>
                <div className="mb-4 flex h-40 items-end rounded-2xl border border-white/5 bg-[linear-gradient(135deg,#1e293b,#0f172a)] p-4">
                  <span className="text-sm uppercase tracking-[0.2em] text-gray-300">Project</span>
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 leading-7 text-gray-300">{project.desc}</p>
              </Card>
            ))}
          </div>
        </FadeSection>

        <FadeSection id="experience" className="scroll-mt-28 py-16">
          <h2 className="text-center text-4xl font-semibold">Experience</h2>
          <div className="mt-10">
            <Card>
              <h3 className="text-2xl font-semibold">Identity and Access Management (Virtual Experience) - Tata Consultancy Services (Forage)</h3>
              <ul className="mt-4 list-disc space-y-3 pl-6 text-gray-300 leading-7">
                <li>Applied IAM concepts including user lifecycle management and role-based access control (RBAC) to design secure access systems.</li>
                <li>Developed IAM solutions aligned with business requirements, improving access efficiency and strengthening security compliance.</li>
              </ul>
            </Card>
          </div>
        </FadeSection>

        <FadeSection className="py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div id="achievements" className="scroll-mt-28">
              <h2 className="text-center text-4xl font-semibold md:text-left">Achievements</h2>
              <div className="mt-8 grid gap-5">
                {achievements.map((item) => (
                  <Card key={item}>
                    <p className="text-gray-200">🏆 {item}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div id="certifications" className="scroll-mt-28">
              <h2 className="text-center text-4xl font-semibold md:text-left">Certifications</h2>
              <div className="mt-8 grid gap-5">
                {certifications.map((item) => (
                  <Card key={item}>
                    <p className="text-gray-200">📜 {item}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </FadeSection>

        <FadeSection id="education" className="scroll-mt-28 py-16">
          <h2 className="text-center text-4xl font-semibold">Education</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card>
              <h3 className="text-xl font-semibold">B.Tech in Computer Science and Engineering</h3>
              <p className="mt-3 text-gray-300">United Institute of Technology, Prayagraj</p>
              <p className="mt-2 text-sm text-gray-400">2021 - 2026</p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold">Intermediate of Science</h3>
              <p className="mt-3 text-gray-300">Maharshi Chayan College, Buxar</p>
              <p className="mt-2 text-sm text-gray-400">2021</p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold">Secondary School</h3>
              <p className="mt-3 text-gray-300">Bihar Public School, Buxar</p>
              <p className="mt-2 text-sm text-gray-400">2019</p>
            </Card>
          </div>
        </FadeSection>

        <FadeSection id="contact" className="scroll-mt-28 py-16 pb-24">
          <h2 className="text-center text-4xl font-semibold">Contact</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400">LinkedIn</p>
              <a href="https://www.linkedin.com/in/shubhamsingh7a" target="_blank" className="mt-3 inline-block text-lg text-cyan-300 underline">
                Open Profile
              </a>
            </Card>
            <Card>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Email</p>
              <p className="mt-3 break-all text-lg text-gray-100">shubhamkanpura7@gmail.com</p>
            </Card>
            <Card>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Location</p>
              <p className="mt-3 text-lg text-gray-100">Buxar, Bihar, India</p>
            </Card>
          </div>
        </FadeSection>
      </main>
    </div>
  );
}
