import type { ImageMetadata } from "astro";
import type { TechId } from "./stack";
import adventjsIcon from "@/assets/images/companies/adventjs.webp";
import adventjs2024Description from "@/data/files/project-descriptions/adventjs-2024.txt?raw";
import portfolioIcon from "@/assets/images/me/logoAM.webp";

export { type ProjectId, PROJECT_ID_TO_DATA, type Project };

type ProjectId = "adventjs-2024" | "portfolio";

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
  "adventjs-2024": {
    id: "adventjs-2024",
    name: "AdventJS 2024",
    description: adventjs2024Description,
    websiteUrl: "https://adventjs.dev/",
    repoUrl: "https://github.com/AntonioMrtz/AdventJS-2024",
    iconUrl: adventjsIcon,
    tech: ["typescript", "python"],
  },
  portfolio: {
    id: "portfolio",
    name: "Portfolio",
    description:
      "My personal portfolio website built with Astro, showcasing my projects and skills.",
    websiteUrl: "https://antoniomrtz.github.io/Portfolio/",
    repoUrl: "https://github.com/AntonioMrtz/Portfolio",
    iconUrl: portfolioIcon,
    tech: ["astro", "typescript", "css"],
  },
};
