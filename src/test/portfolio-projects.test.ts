import { describe, expect, it } from "vitest";
import { config } from "@/portfolio/config";
import { projectGroups } from "@/portfolio/projectGroups";

describe("Portfolio requested content", () => {
  it("orders projects Full Stack, Data Analytics, then AI/ML", () => {
    expect(projectGroups.map((group) => group.id)).toEqual(["fullstack", "data", "ai"]);
    expect(config.projects.map((project) => project.group)).toEqual(["fullstack", "fullstack", "fullstack", "data", "data", "data", "ai", "ai"]);
  });
  it("includes ShikshaVerse and excludes Bharat Learning Atlas", () => {
    const shikshaVerse = config.projects.find((project) => project.title === "ShikshaVerse - Educational Learning Platform");
    expect(shikshaVerse?.technologies).toBe("React, TypeScript, TanStack Start, Supabase, PostgreSQL");
    expect(shikshaVerse?.link).toBe("https://shiksha-varsh.vercel.app/");
    expect(config.projects.find((project) => project.title === "Bharat Learning Atlas")).toBeUndefined();
  });
  it("includes Morsel with the provided URL and fitted thumbnail", () => {
    const foodDelivery = config.projects.find((project) => project.title === "Morsel- A Food Delivery Web Application");
    expect(foodDelivery?.technologies).toBe("React.js, React Router, Vite, Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs");
    expect(foodDelivery?.link).toBe("https://food-delivery-app-dablu.vercel.app/");
    expect(foodDelivery?.image).toContain("food-delivery-thumbnail.png");
  });
  it("includes Mitra Work and excludes The Quiz Adda", () => {
    const mitraWork = config.projects.find((project) => project.title === "Mitra Work - CRM and Team Management System");
    expect(mitraWork?.technologies).toBe("HTML, CSS, JavaScript, Node.js, SQLite");
    expect(mitraWork?.link).toBe("https://github.com/iam-shubhamm/Mitra-Work-Project-CRM");
    expect(config.projects.find((project) => project.title === "The Quiz Adda")).toBeUndefined();
  });
  it("includes Heart Attack Prediction as the final year ML project", () => {
    const project = config.projects.find((project) => project.title === "Heart Attack Prediction");
    expect(project?.group).toBe("ai");
    expect(project?.category).toBe("AI / ML · Final Year Project");
  });
  it("contains only the two provided experiences", () => {
    expect(config.experiences.map((experience) => experience.position)).toEqual(["Technical Project Associate (Web Development & AI)", "Data Visualisation: Empowering Business with Effective Insights"]);
  });
  it("uses Shubham's LinkedIn for Hire Me", () => {
    expect(config.contact.linkedin).toBe("https://www.linkedin.com/in/shubhamsingh7a");
  });
});