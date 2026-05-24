import type { TechId } from "./stack";
import openWebinarsIcon from "@/assets/images/certifications/open-webinars.webp";
import udemyIcon from "@/assets/icons/certifications/udemy.svg";
import mongoDbIcon from "@/assets/icons/certifications/mongodb.svg";
import efIcon from "@/assets/icons/certifications/ef.svg";

export { CERTIFICATION_ID_TO_DATA, type Certification, type CertificationId };

type CertificationId =
  | "mongo-db-dev-path"
  | "ef-set"
  | "udemy-python-asyncio"
  | "udemy-nestjs-microservices"
  | "open-webinars-planning-poker"
  | "open-webinars-product-owner"
  | "open-webinars-advanced-scrum"
  | "open-webinars-kanban"
  | "open-webinars-technical-scrum"
  | "open-webinars-scrum-managing-teams"
  | "open-webinars-testing-vitest"
  | "open-webinars-managing-agile-sprints";

interface Certification {
  id: CertificationId;
  name: string;
  diplomaUrl?: string;
  websiteUrl?: string;
  iconUrl: ImageMetadata;
  tech: TechId[];
}

// Order matters.
const CERTIFICATION_ID_TO_DATA: Readonly<
  Record<CertificationId, Certification>
> = {
  "mongo-db-dev-path": {
    id: "mongo-db-dev-path",
    name: "MongoDB Python Developer Path",
    diplomaUrl: "https://learn.mongodb.com/c/li9YP1_MT72mPAgTZT11UQ",
    websiteUrl:
      "https://learn.mongodb.com/learning-paths/mongodb-python-developer-path",
    iconUrl: mongoDbIcon,
    tech: ["mongodb"],
  },
  "udemy-python-asyncio": {
    id: "udemy-python-asyncio",
    name: "Python asynchronous programming using AsyncIO module",
    websiteUrl: "https://www.udemy.com/course/python-asyncio-high-level-api/",
    diplomaUrl:
      "https://www.udemy.com/certificate/UC-bd978c03-17fc-44b1-8edf-92308a7e90ee/",
    iconUrl: udemyIcon,
    tech: ["python"],
  },
  "udemy-nestjs-microservices": {
    id: "udemy-nestjs-microservices",
    name: "[In progress] NestJS Microservices — Build & Deploy a Scalable Backend",
    websiteUrl:
      "https://www.udemy.com/course/nestjs-microservices-build-deploy-a-scaleable-backend/",
    diplomaUrl: "",
    iconUrl: udemyIcon,
    tech: ["nestjs", "nodejs", "jest", "mongodb", "google_cloud"],
  },
  "ef-set": {
    id: "ef-set",
    name: "EF SET English Certificate 88/100 (C2 Proficient)",
    diplomaUrl: "https://cert.efset.org/URJMDR",
    websiteUrl: "https://www.efset.org/es/ef-set-50/",
    iconUrl: efIcon,
    tech: ["english"],
  },
  "open-webinars-planning-poker": {
    id: "open-webinars-planning-poker",
    name: "Agile Estimation with Planning Poker",
    diplomaUrl: "https://openwebinars.net/cert/farX",
    iconUrl: openWebinarsIcon,
    tech: ["scrum", "agile"],
  },
  "open-webinars-product-owner": {
    id: "open-webinars-product-owner",
    name: "Product Owner Course in Practice",
    diplomaUrl: "https://openwebinars.net/certificacion/q0n8lgO7",
    iconUrl: openWebinarsIcon,
    tech: ["scrum", "agile"],
  },
  "open-webinars-advanced-scrum": {
    id: "open-webinars-advanced-scrum",
    name: "Advanced Scrum Course",
    diplomaUrl: "https://openwebinars.net/certificacion/KBLgUYf3",
    iconUrl: openWebinarsIcon,
    tech: ["scrum", "agile"],
  },
  "open-webinars-kanban": {
    id: "open-webinars-kanban",
    name: "Design and Use a Kanban Board",
    diplomaUrl: "https://openwebinars.net/cert/qBrZ",
    iconUrl: openWebinarsIcon,
    tech: ["kanban"],
  },
  "open-webinars-technical-scrum": {
    id: "open-webinars-technical-scrum",
    name: "Technical Scrum Course",
    diplomaUrl: "https://openwebinars.net/certificacion/TJvP6FPx",
    iconUrl: openWebinarsIcon,
    tech: ["scrum", "agile"],
  },
  "open-webinars-scrum-managing-teams": {
    id: "open-webinars-scrum-managing-teams",
    name: "Scrum: Managing Teams with Scrum",
    diplomaUrl: "https://openwebinars.net/cert/vkZp",
    iconUrl: openWebinarsIcon,
    tech: ["scrum", "agile"],
  },
  "open-webinars-managing-agile-sprints": {
    id: "open-webinars-managing-agile-sprints",
    name: "Managing Agile Sprints with Scrum",
    diplomaUrl: "https://openwebinars.net/cert/rJFi",
    iconUrl: openWebinarsIcon,
    tech: ["scrum", "agile"],
  },
  "open-webinars-testing-vitest": {
    id: "open-webinars-testing-vitest",
    name: "Testing with Vitest",
    diplomaUrl: "https://openwebinars.net/certificacion/8euvD9vM",
    iconUrl: openWebinarsIcon,
    tech: ["vitest"],
  },
};
