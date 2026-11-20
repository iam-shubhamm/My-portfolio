import { createFileRoute, ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const App = lazy(() => import("@/portfolio/WorksApp"));

export const Route = createFileRoute("/myworks")({
  head: () => ({
    meta: [
      { title: "All Works | Shubham Singh" },
      { name: "description", content: "Browse Shubham Singh's eight projects in Full Stack, Data Analytics and AI/ML, including Bharat Learning Atlas and Heart Attack Prediction." },
      { property: "og:title", content: "All Works | Shubham Singh" },
      { property: "og:description", content: "Browse Shubham Singh's eight projects in Full Stack, Data Analytics and AI/ML, including Bharat Learning Atlas and Heart Attack Prediction." },
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
