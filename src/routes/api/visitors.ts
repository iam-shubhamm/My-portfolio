import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/visitors")({
  server: {
    handlers: {
      POST: async () => {
        const supabaseUrl = process.env["SUPABASE_URL"];
        const supabaseAnonKey = process.env["SUPABASE_ANON_KEY"];
        if (!supabaseUrl || !supabaseAnonKey) {
          return Response.json({ error: "Visitor counter is not configured" }, { status: 503 });
        }

        const response = await fetch(`${supabaseUrl.replace(/\/+$/, "")}/rest/v1/rpc/increment_portfolio_visits`, {
          method: "POST",
          headers: {
            apikey: supabaseAnonKey,
            Authorization: `Bearer ${supabaseAnonKey}`,
            "Content-Type": "application/json",
          },
          body: "{}",
        });

        if (!response.ok) {
          console.error("Supabase visitor counter failed:", response.status, await response.text());
          return Response.json({ error: "Visitor count could not be updated" }, { status: 502 });
        }

        const count: unknown = await response.json();
        if (typeof count !== "number" || !Number.isSafeInteger(count) || count < 1) {
          console.error("Supabase visitor counter returned an invalid count:", count);
          return Response.json({ error: "Visitor count could not be updated" }, { status: 502 });
        }

        return Response.json({ count });
      },
    },
  },
});
