import { describe, expect, it } from "vitest";
import { activeWorkGroup, groupScrollOffset } from "@/portfolio/workScroll";

const groups = [
  { id: "fullstack" as const, offset: 0 },
  { id: "data" as const, offset: 1800 },
  { id: "ai" as const, offset: 3600 },
];

describe("Continuous project category scrolling", () => {
  it("advances Full Stack to Data Analytics automatically", () => {
    expect(activeWorkGroup(groups, 1799)).toBe("fullstack");
    expect(activeWorkGroup(groups, 1800)).toBe("data");
  });
  it("advances Data Analytics to AI/ML automatically", () => {
    expect(activeWorkGroup(groups, 3599)).toBe("data");
    expect(activeWorkGroup(groups, 3600)).toBe("ai");
  });
  it("reverses through the same categories when scrolling up", () => {
    expect([3600, 1800, 0].map((position) => activeWorkGroup(groups, position))).toEqual(["ai", "data", "fullstack"]);
  });
  it("keeps category navigation inside the horizontal track", () => {
    expect(groupScrollOffset(3600, 3200)).toBe(3200);
    expect(groupScrollOffset(1800, 3200)).toBe(1800);
    expect(groupScrollOffset(-10, 3200)).toBe(0);
  });
});