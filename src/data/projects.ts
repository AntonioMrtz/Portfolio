import type { ImageMetadata } from "astro";
import type { TechId } from "./stack";
import adventjsIcon from "@/assets/images/companies/advent-js.webp";

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
    description:
      "I created adventjs-cli, a command-line tool designed to streamline and automate the setup for each AdventJS challenge so developers can focus on solving problems, not configuring environments.\n\nWhat adventjs-cli provides?\n\nWith a single command, it automatically generates:\n\n- A TypeScript function template ready for your solution\n- A Markdown file with the full problem description\n- A Jest test file to validate your implementation\n\nBuilt-in development tooling\n\nThe project comes pre configured with:\n- Debugging tools\n- Jest testing environment\n- TypeScript setup\n- ESLint for code quality\n- Prettier for consistent formatting\n- GitHub Actions CI workflows\n\nThis tool streamlines the entire challenge workflow, making it easier, faster, and more enjoyable to tackle AdventJS throughout the season.",
    websiteUrl: "https://adventjs.dev/",
    repoUrl: "https://github.com/AntonioMrtz/adventjs-cli",
    iconUrl: adventjsIcon,
    tech: ["nodejs", "typescript", "github_actions", "jest"],
  },
  "adventjs-2024": {
    id: "adventjs-2024",
    name: "AdventJS 2024",
    description:
      "My solutions to the AdventJS 2024 challenge\n\nAdventJS is an annual event that helps developers improve their coding skills with 25 progressively harder challenges leading up to Christmas. The challenges are primarily focused on JavaScript and TypeScript, and in some cases Python. Each day, a new challenge is released, and participants are encouraged to solve it and share their solutions.",
    websiteUrl: "https://adventjs.dev/",
    repoUrl: "https://github.com/AntonioMrtz/AdventJS-2024",
    iconUrl: adventjsIcon,
    tech: ["typescript", "python"],
  },
};
