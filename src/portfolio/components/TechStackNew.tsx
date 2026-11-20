import "./styles/TechStackNew.css";

import techIcon0 from "devicon/icons/python/python-original.svg";
import techIcon1 from "devicon/icons/javascript/javascript-original.svg";
import techIcon2 from "devicon/icons/typescript/typescript-original.svg";
import techIcon3 from "devicon/icons/c/c-original.svg";
import techIcon4 from "devicon/icons/cplusplus/cplusplus-original.svg";
import techIcon5 from "devicon/icons/kotlin/kotlin-original.svg";
import techIcon6 from "devicon/icons/html5/html5-original.svg";
import techIcon7 from "devicon/icons/css3/css3-original.svg";
import techIcon8 from "devicon/icons/bash/bash-original.svg";
import techIcon9 from "devicon/icons/react/react-original.svg";
import techIcon10 from "devicon/icons/nextjs/nextjs-original.svg";
import techIcon11 from "devicon/icons/bootstrap/bootstrap-original.svg";
import techIcon12 from "devicon/icons/nodejs/nodejs-original.svg";
import techIcon13 from "devicon/icons/django/django-plain.svg";
import techIcon14 from "devicon/icons/flask/flask-original.svg";
import techIcon15 from "devicon/icons/fastapi/fastapi-original.svg";
import techIcon16 from "devicon/icons/tensorflow/tensorflow-original.svg";
import techIcon17 from "devicon/icons/pytorch/pytorch-original.svg";
import techIcon18 from "devicon/icons/scikitlearn/scikitlearn-original.svg";
import techIcon19 from "devicon/icons/opencv/opencv-original.svg";
import techIcon20 from "devicon/icons/numpy/numpy-original.svg";
import techIcon21 from "devicon/icons/tailwindcss/tailwindcss-original.svg";
import techIcon22 from "devicon/icons/pandas/pandas-original.svg";
import techIcon23 from "devicon/icons/mysql/mysql-original.svg";
import techIcon24 from "devicon/icons/postgresql/postgresql-original.svg";
import techIcon25 from "devicon/icons/mongodb/mongodb-original.svg";
import techIcon26 from "devicon/icons/firebase/firebase-plain.svg";
import techIcon27 from "devicon/icons/redis/redis-original.svg";
import techIcon28 from "devicon/icons/docker/docker-original.svg";
import techIcon29 from "devicon/icons/azure/azure-original.svg";
import techIcon30 from "devicon/icons/git/git-original.svg";
import techIcon31 from "devicon/icons/github/github-original.svg";
import techIcon32 from "devicon/icons/linux/linux-original.svg";
import techIcon33 from "devicon/icons/amazonwebservices/amazonwebservices-original.svg";
import techIcon34 from "devicon/icons/vscode/vscode-original.svg";
import techIcon35 from "devicon/icons/vercel/vercel-original.svg";
import techIcon36 from "devicon/icons/jupyter/jupyter-original.svg";
import techIcon37 from "devicon/icons/figma/figma-original.svg";
import techIcon38 from "devicon/icons/postman/postman-original.svg";
import techIcon39 from "devicon/icons/photoshop/photoshop-original.svg";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

// All tech stack items with their icons and official URLs
// Perfect inverted pyramid: 12 -> 10 -> 8 -> 6 -> 4 -> 2
const techStack: TechItem[][] = [
  // Row 1 - 12 items (largest)
  [
    { name: "Python", icon: techIcon0, url: "https://python.org" },
    { name: "JavaScript", icon: techIcon1, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", icon: techIcon2, url: "https://typescriptlang.org" },
    { name: "C", icon: techIcon3, url: "https://en.cppreference.com/w/c" },
    { name: "C++", icon: techIcon4, url: "https://isocpp.org" },
    { name: "Kotlin", icon: techIcon5, url: "https://kotlinlang.org" },
    { name: "HTML", icon: techIcon6, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: techIcon7, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "Bash", icon: techIcon8, url: "https://www.gnu.org/software/bash/" },
    { name: "React", icon: techIcon9, url: "https://react.dev" },
    { name: "Next.js", icon: techIcon10, url: "https://nextjs.org" },
    { name: "Bootstrap", icon: techIcon11, url: "https://getbootstrap.com" },
  ],
  // Row 2 - 10 items
  [
    { name: "Node.js", icon: techIcon12, url: "https://nodejs.org" },
    { name: "Django", icon: techIcon13, url: "https://djangoproject.com" },
    { name: "Flask", icon: techIcon14, url: "https://flask.palletsprojects.com" },
    { name: "FastAPI", icon: techIcon15, url: "https://fastapi.tiangolo.com" },
    { name: "TensorFlow", icon: techIcon16, url: "https://tensorflow.org" },
    { name: "PyTorch", icon: techIcon17, url: "https://pytorch.org" },
    { name: "Scikit-learn", icon: techIcon18, url: "https://scikit-learn.org" },
    { name: "OpenCV", icon: techIcon19, url: "https://opencv.org" },
    { name: "NumPy", icon: techIcon20, url: "https://numpy.org" },
    { name: "Tailwind", icon: techIcon21, url: "https://tailwindcss.com" },
  ],
  // Row 3 - 8 items
  [
    { name: "Pandas", icon: techIcon22, url: "https://pandas.pydata.org" },
    { name: "MySQL", icon: techIcon23, url: "https://mysql.com" },
    { name: "PostgreSQL", icon: techIcon24, url: "https://postgresql.org" },
    { name: "MongoDB", icon: techIcon25, url: "https://mongodb.com" },
    { name: "Firebase", icon: techIcon26, url: "https://firebase.google.com" },
    { name: "Redis", icon: techIcon27, url: "https://redis.io" },
    { name: "Docker", icon: techIcon28, url: "https://docker.com" },
    { name: "Azure", icon: techIcon29, url: "https://azure.microsoft.com" },
  ],
  // Row 4 - 6 items
  [
    { name: "Git", icon: techIcon30, url: "https://git-scm.com" },
    { name: "GitHub", icon: techIcon31, url: "https://github.com" },
    { name: "Linux", icon: techIcon32, url: "https://linux.org" },
    { name: "AWS", icon: techIcon33, url: "https://aws.amazon.com" },
    { name: "VS Code", icon: techIcon34, url: "https://code.visualstudio.com" },
    { name: "Vercel", icon: techIcon35, url: "https://vercel.com" },
  ],
  // Row 5 - 4 items
  [
    { name: "Jupyter", icon: techIcon36, url: "https://jupyter.org" },
    { name: "Figma", icon: techIcon37, url: "https://figma.com" },
    { name: "Postman", icon: techIcon38, url: "https://postman.com" },
    { name: "Photoshop", icon: techIcon39, url: "https://adobe.com/products/photoshop" },
  ],
  // Row 6 - 2 items (tip of pyramid)
  [
    { name: "Hugging Face", icon: "", url: "https://huggingface.co" },
    { name: "MS Office", icon: "", url: "https://www.microsoft.com/microsoft-365" },
  ],
];

const TechStackNew = () => {
  return (
    <div className="techstack-new" id="certifications">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>
        
        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (
                <a
                  key={techIndex}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="techstack-item"
                  title={tech.name}
                  data-cursor="disable"
                >
                  {tech.icon ? <img src={tech.icon} alt="" loading="lazy" decoding="async" /> : <span className="techstack-symbol" aria-hidden="true">{tech.name === "Hugging Face" ? "🤗" : "▦"}</span>}
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
