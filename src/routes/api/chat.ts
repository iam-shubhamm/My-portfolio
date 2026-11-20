import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env["GROQ_API_KEY"];
        if (!apiKey) return Response.json({ error: "Server configuration error: Missing API Key" }, { status: 500 });
        const body = (await request.json().catch(() => ({}))) as { messages?: unknown };
        const messages = body.messages;
        if (!Array.isArray(messages) || messages.length === 0 || messages.length > 50)
          return Response.json({ error: "Messages must be a non-empty array" }, { status: 400 });
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
          body: JSON.stringify({ model: "openai/gpt-oss-20b", messages, temperature: 0.7, max_tokens: 300 }),
        });
        const data = (await res.json()) as { error?: { message?: string } };
        if (!res.ok) return Response.json({ error: data?.error?.message || "Failed to fetch from Groq" }, { status: res.status });
        return Response.json(data);
      },
    },
  },
});
