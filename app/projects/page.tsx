import type { Metadata } from "next";
import ProjectsPage from "./projects-page";

export const metadata: Metadata = {
  title: "More Projects | Shubham Singh",
  description: "Additional public project repositories by Shubham Singh.",
};

export default function Page() {
  return <ProjectsPage />;
}
