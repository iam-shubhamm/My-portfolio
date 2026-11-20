import type { ProjectGroup } from "./projectGroups";

export function groupScrollOffset(offset: number, distance: number) {
  return Math.min(Math.max(0, offset), Math.max(0, distance));
}

export function activeWorkGroup(groups: { id: ProjectGroup; offset: number }[], position: number): ProjectGroup {
  let active: ProjectGroup = "fullstack";
  for (const group of groups) {
    if (position >= group.offset) active = group.id;
  }
  return active;
}