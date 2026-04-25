export default function Home() {
  return (
    <main style={{
      backgroundColor: "#0f172a",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      
      <h1 style={{ fontSize: "48px" }}>
        Shubham Singh
      </h1>

      <h2 style={{ color: "#38bdf8" }}>
        Data Analyst | Python | SQL | Power BI
      </h2>

      <p style={{ marginTop: "20px", maxWidth: "700px" }}>
        Data Analyst with hands-on experience in SQL, Python, Excel, and Power BI.
        Skilled in dashboard development, KPI analysis, and data storytelling
        to support data-driven decision-making.
      </p>

      <h2 style={{ marginTop: "40px" }}>Projects</h2>

      <ul>
        <li>
          <a
            href="https://github.com/iam-shubhamm/Customer-Churn-Prediction"
            target="_blank"
          >
            Customer Churn Prediction
          </a>
        </li>

        <li>
          <a
            href="https://github.com/iam-shubhamm/Pizza-Sales-Analysis-Dashboard-using-MS-SQL-Server-and-Power-BI"
            target="_blank"
          >
            Pizza Sales Data Analysis
          </a>
        </li>

        <li>
          <a
            href="https://github.com/iam-shubhamm/Movie-Recommendation-System"
            target="_blank"
          >
            Movie Recommendation System
          </a>
        </li>
      </ul>

      <h2 style={{ marginTop: "40px" }}>Connect With Me</h2>

      <p>
        <a
          href="https://github.com/iam-shubhamm"
          target="_blank"
        >
          GitHub Profile
        </a>
      </p>

      <p>
        <a
          href="https://www.linkedin.com/in/shubhamsingh7a"
          target="_blank"
        >
          LinkedIn Profile
        </a>
      </p>

    </main>
  );
}
