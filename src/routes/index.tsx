import { createFileRoute, ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const loadApp = () => import("@/portfolio/HomeApp");
// Begin loading the portfolio code (and the 3D model) as early as possible.
if (typeof window !== "undefined") loadApp();
const App = lazy(loadApp);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shubham Singh | Full Stack & Data Analytics Portfolio" },
      { name: "description", content: "Explore Shubham Singh's full-stack, data analytics and machine learning projects, experience and contact details." },
      { property: "og:title", content: "Shubham Singh | Full Stack & Data Analytics Portfolio" },
      { property: "og:description", content: "Explore Shubham Singh's full-stack, data analytics and machine learning projects, experience and contact details." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preload", href: "/models/character.enc", as: "fetch", crossOrigin: "anonymous" },
      { rel: "preload", href: "/draco/draco_decoder.wasm", as: "fetch", crossOrigin: "anonymous" },
      { rel: "preload", href: "/models/char_enviorment.hdr", as: "fetch", crossOrigin: "anonymous" },
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
