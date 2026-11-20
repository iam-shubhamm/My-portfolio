import { createFileRoute, ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const App = lazy(() => import("@/portfolio/PlayApp"));

export const Route = createFileRoute("/play")({
  head: () => ({
    meta: [
      { title: "Play Chess | Shubham Singh's Portfolio" },
      { name: "description", content: "Play chess against RedoxChess with an AI coach." },
      { property: "og:title", content: "Play Chess | Shubham Singh's Portfolio" },
      { property: "og:description", content: "Play chess against RedoxChess with an AI coach." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ClientOnly>
      <Suspense>
        <App />
      </Suspense>
    </ClientOnly>
  );
}
