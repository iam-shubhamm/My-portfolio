import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const recipient = "shubhamkanpura7@gmail.com";
const windowMs = 10 * 60 * 1000;
const requestLimit = 5;
const requestsByAddress = new Map<string, number[]>();

type ContactBody = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
};

function jsonError(error: string, status: number) {
  return NextResponse.json({ error }, { status, headers: { "Cache-Control": "no-store" } });
}

function getClientAddress(request: Request) {
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function isContactBody(value: unknown): value is ContactBody {
  if (typeof value !== "object" || value === null || !("name" in value) || !("email" in value) ||
      !("subject" in value) || !("message" in value)) {
    return false;
  }
  const body = value as Record<string, unknown>;
  return typeof body.name === "string" && typeof body.email === "string" &&
    typeof body.subject === "string" && typeof body.message === "string" &&
    (body.company === undefined || typeof body.company === "string");
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return jsonError("Send your message as JSON.", 415);
  }

  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > 7000) {
    return jsonError("The message is too large.", 413);
  }

  let value: unknown;
  try {
    value = await request.json();
  } catch {
    return jsonError("The message request wasn’t valid JSON.", 400);
  }
  if (!isContactBody(value)) {
    return jsonError("Please complete all required contact fields.", 400);
  }

  const name = value.name.trim();
  const email = value.email.trim();
  const subject = value.subject.trim();
  const message = value.message.trim();
  if (value.company?.trim()) {
    return jsonError("The message could not be accepted.", 400);
  }
  if (!name || name.length > 100 || !subject || subject.length > 150 ||
      !message || message.length > 5000 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 || /[\r\n]/.test(subject)) {
    return jsonError("Check your name, email, subject, and message, then try again.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  if (!apiKey || !from) {
    return jsonError("Email delivery is not configured yet. Please email Shubham directly.", 503);
  }

  const now = Date.now();
  const address = getClientAddress(request);
  const recentRequests = (requestsByAddress.get(address) ?? []).filter((timestamp) => now - timestamp < windowMs);
  if (recentRequests.length >= requestLimit) {
    return jsonError("Too many messages were sent. Please wait a few minutes or email Shubham directly.", 429);
  }
  recentRequests.push(now);
  requestsByAddress.set(address, recentRequests);
  for (const [key, timestamps] of requestsByAddress) {
    if (timestamps.every((timestamp) => now - timestamp >= windowMs)) requestsByAddress.delete(key);
  }

  let upstream: Response;
  try {
    upstream = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `Portfolio contact: ${subject}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      }),
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    });
  } catch {
    return jsonError("Email delivery is temporarily unavailable. Please try again or email Shubham directly.", 502);
  }

  if (!upstream.ok) {
    return jsonError("Email delivery failed. Please try again or email Shubham directly.", 502);
  }
  return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
