import type { TechId } from "./stack";
import adventjsIcon from "@/assets/images/companies/advent-js.webp";

export { type ProjectId, PROJECT_ID_TO_DATA, type Project };

type ProjectId = "adventjs-2024";

interface Project {
  id: ProjectId;
  name: string;
  description: string;
  websiteUrl: string;
  repoUrl?: string;
  iconUrl: string;
  tech: TechId[];
}

const PROJECT_ID_TO_DATA: Record<ProjectId, Project> = {
  "adventjs-2024": {
    id: "adventjs-2024",
    name: "AdventJS 2024",
    description:
      "My solutions to the AdventJS 2024 challenge\n\nAdventJS is an annual event that helps developers improve their coding skills with 25 progressively harder challenges leading up to Christmas. The challenges are primarily focused on JavaScript and TypeScript, and in some cases Python. Each day, a new challenge is released, and participants are encouraged to solve it and share their solutions.",
    websiteUrl: "https://adventjs.dev/",
    repoUrl: "https://github.com/AntonioMrtz/AdventJS-2024",
    iconUrl: adventjsIcon.src,
    tech: ["typescript", "python"],
  },
};
