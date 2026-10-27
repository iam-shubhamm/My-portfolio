# Shubham Singh | Data, AI & Full-Stack Portfolio

A personal portfolio showcasing my work and learning path across data analytics, AI/machine learning, and full-stack development.

## Deploy to Vercel

Import this repository into [Vercel](https://vercel.com/new) and deploy it as a Next.js project. Vercel will build the app and its `/api/chat` server route automatically. The site no longer uses a static export or GitHub Pages deployment.

To enable the portfolio assistant, add these environment variables in **Vercel → Project Settings → Environment Variables**, then redeploy:

| Variable | Required | Default | Description |
| --- | --- | --- | --- |
| `AI_API_KEY` | Yes | — | Secret API key for an OpenAI-compatible chat-completions provider. Store it only in Vercel or a local `.env.local` file; never expose it with a `NEXT_PUBLIC_` prefix. |
| `AI_BASE_URL` | No | `https://api.openai.com/v1` | Provider API base URL. |
| `AI_MODEL` | No | `gpt-4o-mini` | Chat model name supported by your provider. |

For local development, copy `.env.example` to `.env.local` and add your provider key. The chat is server-side; this app does not save conversations, but messages are sent to your configured AI provider and are subject to that provider's data policies. Set an appropriate API spending limit with your provider. Without `AI_API_KEY`, the assistant shows a setup message instead of silently pretending to be live.

## About

I am a Computer Science graduate building practical data analysis and visualization projects while growing across AI/ML and full-stack development.

## Featured Projects

- **[Tata Retail Sales and Revenue Analysis](https://github.com/iam-shubhamm/Tata-Retail-Sales---Revenue-Analysis)** — Tableau analysis of online retail revenue trends, customer performance, and country-wise sales, with interactive charts and geographic maps.
- **[Pizza Sales Analysis Dashboard](https://github.com/iam-shubhamm/Pizza-Sales-Analysis-Dashboard-using-MS-SQL-Server-and-Power-BI)** — Sales analysis using Microsoft SQL Server and Power BI.
- **[Customer Churn Prediction](https://github.com/iam-shubhamm/Customer-Churn-Prediction)** — Dashboard project exploring customer churn behavior and retention patterns.
- **[Movie Recommendation System](https://github.com/iam-shubhamm/Movie-Recommendation-System)** — Python and Streamlit movie recommendation project.

## Experience

- **Data Analyst Intern, Last Minutes Deal** — September 2026–Present.
- **Data Visualisation: Empowering Business with Effective Insights, Tata Consultancy Services (Forage)** — Virtual experience, August 2026. Created Tableau visualizations to analyze revenue, quantity, and profit trends and presented data-driven findings.

## Skills and Tools

SQL · Microsoft SQL Server · Python · Pandas · NumPy · Power BI · Tableau · Excel · Data cleaning · Exploratory data analysis · Dashboard development · Data storytelling

## Run Locally

You will need Node.js and npm installed.

```bash
git clone https://github.com/iam-shubhamm/My-portfolio.git
cd My-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. To use the assistant locally, set `AI_API_KEY` in `.env.local`.

To create and run a production build:

```bash
npm run build
npm run start
```

## Built With

- Next.js
- React
- TypeScript
- CSS

## Contact

- **GitHub:** [github.com/iam-shubhamm](https://github.com/iam-shubhamm)
- **LinkedIn:** [linkedin.com/in/shubhamsingh7a](https://www.linkedin.com/in/shubhamsingh7a)
- **Email:** [shubhamkanpura7@gmail.com](mailto:shubhamkanpura7@gmail.com)
