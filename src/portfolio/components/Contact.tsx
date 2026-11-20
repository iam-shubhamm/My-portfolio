import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { config } from "../config";
import "./styles/Contact.css";

const OWNER_EMAIL = config.contact.email;
const GITHUB_URL = "https://github.com/iam-shubhamm";
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(OWNER_EMAIL)}&authuser=${encodeURIComponent(OWNER_EMAIL)}`;

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim(), email = form.email.trim(), message = form.message.trim();
    if (!name || name.length > 100) return setError("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) return setError("Please enter a valid email.");
    if (!message || message.length > 2000) return setError("Please write a message (max 2000 characters).");
    setError("");
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${OWNER_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name, email, _replyto: email,
          _subject: form.subject.trim().slice(0, 150) || `New portfolio message from ${name}`,
          message, _template: "table", _captcha: "false",
        }),
      });
      const result = await res.json();
      if (!res.ok || (result.success !== true && result.success !== "true")) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-grid">
        <div className="contact-left">
          <p className="contact-eyebrow"><span>06</span> CONTACT</p>
          <h3>Have an idea?<br />Let’s talk.</h3>
          <p className="contact-lead">Tell me what you're working on or what you'd like to discuss.</p>
          <div className="contact-actions">
            <a href="#contact-form" className="contact-pill" data-cursor="disable">
              Say hello <MdArrowOutward />
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="contact-pill contact-pill-ghost" data-cursor="disable">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
        <form id="contact-form" className="contact-card" onSubmit={submit} noValidate>
          <div className="contact-row">
            <label>Your name<input value={form.name} onChange={update("name")} maxLength={100} /></label>
            <label>Email address<input type="email" value={form.email} onChange={update("email")} maxLength={255} /></label>
          </div>
          <label>Subject<input value={form.subject} onChange={update("subject")} maxLength={150} /></label>
          <label>Message<textarea rows={6} value={form.message} onChange={update("message")} maxLength={2000} /></label>
          {error && <p className="contact-msg contact-msg-err">{error}</p>}
          {status === "sent" && <p role="status" className="contact-msg contact-msg-ok">Thanks! Your message has been submitted.</p>}
          {status === "error" && <p className="contact-msg contact-msg-err">Couldn't send right now. Please email me directly.</p>}
          <Button type="submit" className="contact-send" disabled={status === "sending"} data-cursor="disable">
            {status === "sending" ? "Sending..." : "Send message"} <FiSend />
          </Button>
          <p className="contact-alt">Prefer email? <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noopener noreferrer">{OWNER_EMAIL}</a></p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
