import shikshaVerse from "@/assets/shikshaverse-original.png";
import mitraWork from "@/assets/mitra-work-original.png";
import foodDelivery from "@/assets/food-delivery-thumbnail.png";
import customerChurn from "@/assets/customer-churn-cover.svg";
import tataRetail from "@/assets/tata-retail-cover.svg";
import pizzaSales from "@/assets/pizza-sales-cover.svg";
import movieRecommendation from "@/assets/movie-recommendation-cover.svg";
import heartPrediction from "@/assets/heart-prediction-cover.svg";

export const config = {
    developer: {
        name: "Redoyanul",
        fullName: "Redoyanul Haque",
        title: "AI & Full-Stack Developer",
        description: "AI & Full-Stack Developer building intelligent systems and modern web applications. Passionate about machine learning, deep learning, and creating next-gen autonomous agents."
    },
    social: {
        github: "red1-for-hek",
        email: "shubhamkanpura7@gmail.com",
        location: "Bangladesh"
    },
    about: {
        title: "About Me",
        description: "I am a self-taught AI & Full-Stack Developer from Bangladesh. I build intelligent systems, chatbots, and modern web applications. My expertise includes Machine Learning, Deep Learning, NLP, and Full-Stack Web Development with React, Node.js, and Python. Currently building next-gen AI Agents and JARVIS-like Personal Assistants. I have a competitive programming mindset and a deep passion for automation. Code is poetry, AI is the canvas."
    },
    experiences: [
        {
            position: "Technical Project Associate (Web Development & AI)",
            company: "Last Minutes Deal · Internship · Remote",
            period: "Sep 2026 - Present",
            location: "Remote",
            description: "Coordinated cross-functional web development and AI projects, managed task allocation and workflow, clarified technical requirements with developers, tracked progress and timelines, and contributed hands-on development when needed.",
            responsibilities: [],
            technologies: ["Microsoft Excel", "Python"]
        },
        {
            position: "Data Visualisation: Empowering Business with Effective Insights",
            company: "Tata Consultancy Services (Forage)",
            period: "Aug 2026",
            location: "Remote",
            description: "Created interactive Tableau visualizations to analyze revenue, quantity and profit trends, and presented data-driven insights to support planning, decision-making and growth.",
            responsibilities: [],
            technologies: ["Tableau"]
        }
    ],
    projects: [
        { id: 1, title: 'ShikshaVerse - Educational Learning Platform', group: "fullstack", category: 'Full Stack · EdTech', technologies: 'React, TypeScript, TanStack Start, Supabase, PostgreSQL', image: shikshaVerse, description: 'Learning platform for courses, lectures, notes, quizzes, and bilingual support, backed by Supabase and PostgreSQL.', link: 'https://shiksha-varsh.vercel.app/' },
        { id: 2, title: 'Mitra Work - CRM and Team Management System', group: "fullstack", category: 'Full Stack · CRM', technologies: 'HTML, CSS, JavaScript, Node.js, SQLite', image: mitraWork, description: 'Role-based team CRM for task assignment, file sharing, activity tracking, and progress management.', link: 'https://github.com/iam-shubhamm/Mitra-Work-Project-CRM' },
        { id: 3, title: 'Morsel- A Food Delivery Web Application', group: "fullstack", category: 'Full Stack · MERN', technologies: 'React.js, React Router, Vite, Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs', image: foodDelivery, description: 'Food-ordering app to browse menus, manage a cart, and place orders, built with React, Node.js, Express, and MongoDB.', link: 'https://food-delivery-app-dablu.vercel.app/' },
        { id: 4, title: 'Customer Churn Analysis', group: "data", category: 'Data Analytics · Power BI', technologies: 'Power BI, DAX, Data Modeling', image: customerChurn, description: 'Analyzed behavioral data of 4,000+ customers across tenure, contract type and billing to find churn segments, presented through 11+ visualizations.', link: 'https://github.com/iam-shubhamm' },
        { id: 5, title: 'Tata Retail Sales & Revenue Analysis', group: "data", category: 'Data Analytics · Tableau', technologies: 'Tableau, Data Visualization', image: tataRetail, description: 'Analyzed online retail sales to find revenue trends, top customers and country-wise patterns with line charts, bar charts and geographic maps.', link: 'https://github.com/iam-shubhamm/Tata-Retail-Sales-Revenue-Analysis' },
        { id: 6, title: 'Pizza Sales Data Analysis', group: "data", category: 'Data Analytics · SQL & Power BI', technologies: 'Microsoft SQL Server, Power BI', image: pizzaSales, description: 'Analyzed 48,000+ sales records: 20,343 orders, 47,220 pizzas, 779.01K revenue and 38.29 average order value, with daily and monthly trend analysis.', link: 'https://github.com/iam-shubhamm/Pizza-Sales-Data-Analysis' },
        { id: 7, title: 'Movie Recommendation System', group: "ai", category: 'AI / ML', technologies: 'Python, Pandas, Scikit-learn, Streamlit', image: movieRecommendation, description: 'Content-based movie recommender using cosine similarity on movie metadata, deployed as an interactive Streamlit app showing top matches.', link: 'https://github.com/iam-shubhamm/Movie-Recommendation' },
        { id: 8, title: 'Heart Attack Prediction', group: "ai", category: 'AI / ML · Final Year Project', technologies: 'Python, Pandas, Scikit-learn, Machine Learning', image: heartPrediction, description: '4th-year machine learning project that predicts heart attack risk from patient health data such as age, blood pressure and cholesterol, comparing several classification models.', link: 'https://github.com/iam-shubhamm' },
    ],
    contact: {
        email: "shubhamkanpura7@gmail.com",
        github: "https://github.com/red1-for-hek",
        linkedin: "https://www.linkedin.com/in/shubhamsingh7a",
        twitter: "https://x.com/red_1_ul",
        facebook: "https://www.facebook.com/redoyanulhaque.hacker.official",
        instagram: "https://www.instagram.com/lzy_shubh.am/"
    },
    skills: {
        develop: {
            title: "AI DEVELOPER",
            description: "Building intelligent systems & AI solutions",
            details: "Developing AI agents, chatbots, and machine learning models using Python, TensorFlow, and PyTorch. Specializing in LLMs, NLP, deep learning, and autonomous systems.",
            tools: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "LLMs", "NLP", "Deep Learning", "Chatbots", "AI Agents"]
        },
        design: {
            title: "FULL-STACK",
            description: "Modern web development & scalable applications",
            details: "Building responsive and performant web applications using React, Next.js, Node.js, and databases. Creating seamless user experiences with modern UI/UX principles.",
            tools: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "TailwindCSS", "REST APIs", "Docker", "Git"]
        }
    }
};


