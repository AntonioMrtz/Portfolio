import type { ImageMetadata } from "astro";
import type { TechId } from "./stack";
import adventjsIcon from "@/assets/images/companies/advent-js.webp";

import adventjsCliDescription from "@/data/files/project-descriptions/adventjs-cli.txt?raw";
import adventjs2024Description from "@/data/files/project-descriptions/adventjs-2024.txt?raw";

export { type ProjectId, PROJECT_ID_TO_DATA, type Project };

type ProjectId = "adventjs-2024" | "adventjs-cli";

interface Project {
  id: ProjectId;
  name: string;
  description: string;
  websiteUrl: string;
  repoUrl?: string;
  iconUrl: ImageMetadata;
  tech: TechId[];
}

const PROJECT_ID_TO_DATA: Readonly<Record<ProjectId, Project>> = {
  "adventjs-cli": {
    id: "adventjs-cli",
    name: "AdventJS CLI",
    description: adventjsCliDescription,
    websiteUrl: "https://adventjs.dev/",
    repoUrl: "https://github.com/AntonioMrtz/adventjs-cli",
    iconUrl: adventjsIcon,
    tech: ["nodejs", "typescript", "github_actions", "jest"],
  },
  "adventjs-2024": {
    id: "adventjs-2024",
    name: "AdventJS 2024",
    description: adventjs2024Description,
    websiteUrl: "https://adventjs.dev/",
    repoUrl: "https://github.com/AntonioMrtz/AdventJS-2024",
    iconUrl: adventjsIcon,
    tech: ["typescript", "python"],
  },
};
