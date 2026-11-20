import { FormEvent, useEffect, useState } from "react";
import "./styles/AIAssist.css";

type ChatMessage = { from: "assistant" | "visitor"; text: string };

const projectAnswers: Array<[RegExp, string]> = [
  [/drishti|দৃষ্টি/, "Drishti is presented in the portfolio as a multilingual AI chatbot project. Its listed stack includes Python, PyTorch, Transformers, FastAPI, React, and MongoDB, with Bengali language support. Project page: huggingface.co/red1-for-hek/drishti-ilm-x1."],
  [/vote.?chain|blockchain|voting|election/, "VoteChain is a blockchain voting project focused on transparent, verifiable voting. The portfolio lists Solidity, Web3.js, React, Ethereum, IPFS, MetaMask, and Node.js. Code: github.com/red1-for-hek/smart-election-by-blockchain."],
  [/flood|flood spaces/, "Flood Spaces 2.0 is an AI/ML project for flood-risk prediction and early alerts. Its listed tools include Python, TensorFlow, Pandas, React, FastAPI, and GIS. Code: github.com/red1-for-hek/Flood-Spaces-2.0."],
  [/phoenix|jarvis|voice assistant|desktop assistant/, "Phoenix 3.0 is a voice-enabled desktop assistant and automation project. Its listed technologies include Python, Speech Recognition, PyAutoGUI, OpenAI API, and Tkinter. Code: github.com/red1-for-hek/phoenix3.0."],
  [/redx.?chess|chess engine/, "RedxChess is the portfolio’s chess-engine project, built with Python, C++, neural networks, bitboards, and the UCI protocol. The site links to its playable page at /play."],
  [/prodesk|e.?commerce|store|shopping/, "Prodesk is an e-commerce web application with product browsing and checkout. Its listed stack is React, Node.js, MongoDB, Express, and Stripe. Code: github.com/red1-for-hek/prodesk."],
  [/hek.?tools|android security|security research/, "HekTools is listed as an Android security-research project using Kotlin, Android SDK, Firebase, Python, and encryption. See the project entry for its stated scope."],
];

const answerFor = (question: string) => {
  const q = question.toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}]+/gu, " ").trim();

  const project = projectAnswers.find(([pattern]) => pattern.test(q));
  if (project) return project[1];

  if (/phone|mobile|number|call|फोन|मोबाइल/.test(q)) {
    return "No phone number is published in this portfolio. You can contact Shubham by email at shubhamkanpura7@gmail.com, or use GitHub: github.com/iam-shubhamm.";
  }
  if (/github|source code|repository|repo/.test(q)) {
    return "GitHub: github.com/iam-shubhamm. Individual project repositories are linked from the Projects section where available.";
  }
  if (/linkedin|professional profile/.test(q)) {
    return "LinkedIn: linkedin.com/in/shubhamsingh7a.";
  }
  if (/contact|email|reach|hire|connect|मेल/.test(q)) {
    return "Email Shubham at shubhamkanpura7@gmail.com. You can also connect on LinkedIn at linkedin.com/in/shubhamsingh7a or GitHub at github.com/iam-shubhamm.";
  }
  if (/who|about|shubham|background|experience|education|graduate/.test(q)) {
    return "Shubham Singh is presented here as a Computer Science graduate open to opportunities. His portfolio focuses on practical analytics, AI/ML, and full-stack projects.";
  }
  if (/data analytics|analytics|dashboard|visuali[sz]|sql|report|business intelligence/.test(q)) {
    return "Data analytics turns raw data into useful evidence: clean and validate it, explore patterns, summarize results with metrics and visualizations, then communicate decisions clearly. The portfolio’s analytics toolkit includes Python, Pandas, NumPy, MySQL, data cleaning, and visualization.";
  }
  if (/data science|predict|model|scikit|statistics/.test(q)) {
    return "Data science combines data preparation, statistics, experimentation, and machine learning to answer questions or make predictions. The portfolio lists Python, Pandas, NumPy, Scikit-learn, TensorFlow, and PyTorch among its tools.";
  }
  if (/machine learning|\bml\b|deep learning|neural network/.test(q)) {
    return "Machine learning learns patterns from examples for tasks such as prediction or classification; deep learning uses multi-layer neural networks for more complex patterns. The portfolio’s AI/ML toolkit includes Python, TensorFlow, PyTorch, OpenCV, and Scikit-learn.";
  }
  if (/3d|character|avatar|ai image|image generation|generative image/.test(q)) {
    return "The portfolio uses an animated 3D character as an interactive visual: it responds to pointer movement and transitions into a typing pose as you scroll. AI image generation is a broader AI topic where generative models create images from prompts; it is separate from the listed portfolio projects.";
  }
  if (/artificial intelligence|\bai\b|ai developer|llm|chatbot|nlp|agent/.test(q)) {
    return "The AI work described in this portfolio covers intelligent applications, chatbots, language technologies, and automation. Listed tools include Python, TensorFlow, PyTorch, OpenCV, Scikit-learn, LLMs, and NLP. Drishti and Phoenix 3.0 are examples in the Projects section.";
  }
  if (/full.?stack|frontend|front end|backend|back end|web development|react|node/.test(q)) {
    return "Full-stack development covers the user-facing interface as well as server-side logic, APIs, and data storage. The portfolio lists React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, Tailwind CSS, REST APIs, Docker, and Git.";
  }
  if (/project|portfolio|built|work|how many/.test(q)) {
    return "The portfolio highlights 20+ completed projects across analytics, AI/ML, and software development. Featured examples include Drishti, VoteChain, Flood Spaces 2.0, Phoenix 3.0, RedxChess, Prodesk, and HekTools. Open the Projects section for descriptions and available links.";
  }
  if (/skill|technology|stack|tech|tool/.test(q)) {
    return "The four focus areas shown here are Data Analytics, Data Science, AI Developer, and Full-Stack. The related tools include Python, Pandas, NumPy, MySQL, Scikit-learn, TensorFlow, PyTorch, React, Node.js, databases, and REST APIs.";
  }
  if (/opportunit|available|job|role|work with/.test(q)) {
    return "The portfolio says Shubham is open to opportunities. For a professional conversation, email shubhamkanpura7@gmail.com or connect on LinkedIn: linkedin.com/in/shubhamsingh7a.";
  }
  return "I can answer questions about Shubham’s portfolio, projects, Data Analytics, Data Science, AI/ML, Full-Stack development, skills, or public contact links. Try asking about a specific project such as Drishti, Flood Spaces, or Phoenix 3.0.";
};

const AIAssist = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [scrolled, setScrolled] = useState(() => typeof window !== "undefined" && window.scrollY > 60);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { from: "assistant", text: "Hi! Ask about Shubham’s skills, projects, or how to get in touch." },
  ]);

  useEffect(() => {
    const updatePosition = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", updatePosition, { passive: true });
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  const send = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const question = input.trim();
    if (!question) return;
    setMessages((current) => [...current, { from: "visitor", text: question }, { from: "assistant", text: answerFor(question) }]);
    setInput("");
  };

  return (
    <aside className={`ai-assist${scrolled ? " ai-assist-scrolled" : ""}`} aria-label="AI Assist">
      {open && (
        <section className="ai-assist-panel" aria-label="Ask about Shubham">
          <header className="ai-assist-heading">
            <span className="ai-assist-mark" aria-hidden="true">✦</span>
            <div><strong>AI Assist</strong><small>Ask about Shubham</small></div>
            <button type="button" className="ai-assist-close" onClick={() => setOpen(false)} aria-label="Close AI Assist">×</button>
          </header>
          <div className="ai-assist-messages" aria-live="polite">
            {messages.map((message, index) => (
              <p className={`ai-message ai-message-${message.from}`} key={`${index}-${message.from}`}>{message.text}</p>
            ))}
          </div>
          <form className="ai-assist-form" onSubmit={send}>
            <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask a question…" aria-label="Ask a question" />
            <button type="submit" aria-label="Send question">↑</button>
          </form>
          <p className="ai-assist-note">Portfolio information only</p>
        </section>
      )}
      <button className="ai-assist-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close AI Assist" : "Open AI Assist"}>
        <span aria-hidden="true">✦</span> AI Assist
      </button>
    </aside>
  );
};

export default AIAssist;
