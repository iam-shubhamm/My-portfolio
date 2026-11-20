export const projectGroups = [
  { id: "fullstack", label: "Full Stack" },
  { id: "data", label: "Data Analytics" },
  { id: "ai", label: "AI/ML" },
] as const;
export type ProjectGroup = (typeof projectGroups)[number]["id"];