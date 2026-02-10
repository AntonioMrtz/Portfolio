import type { TechId } from "./stack";
import udemyIcon from "@/assets/icons/udemy.svg";
import mongoDbIcon from "@/assets/icons/mongodb.svg";
import efIcon from "@/assets/icons/ef.svg";

export { CERTIFICATION_ID_TO_DATA, type Certification };

type CertificationId = "mongo-db-dev-path" | "ef-set" | "udemy-python-asyncio";

interface Certification {
  id: CertificationId;
  name: string;
  diplomaUrl: string;
  websiteUrl: string;
  iconUrl: ImageMetadata;
  tech: TechId[];
}

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
  "ef-set": {
    id: "ef-set",
    name: "EF SET English Certificate 88/100 (C2 Proficient)",
    diplomaUrl: "https://cert.efset.org/URJMDR",
    websiteUrl: "https://www.efset.org/es/ef-set-50/",
    iconUrl: efIcon,
    tech: ["english"],
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
};
