import type { ImageMetadata } from "astro";
import type { TechId } from "./stack";
import metricaSportsIcon from "@/assets/images/companies/metrica-sports.webp";
import spotifyElectronIcon from "@/assets/images/companies/spotify-electron.webp";
import bionetIcon from "@/assets/images/companies/bionet.webp";
import mayorOpticaIcon from "@/assets/images/companies/mayor-optica.webp";
import byproxIcon from "@/assets/images/companies/byprox.webp";

import metricaSportsJobDescription from "@/data/files/job-descriptions/metrica-sports.txt?raw";
import spotifyElectronJobDescription from "@/data/files/job-descriptions/spotify-electron.txt?raw";
import bionetJobDescription from "@/data/files/job-descriptions/bionet.txt?raw";
import mayorOpticaJobDescription from "@/data/files/job-descriptions/mayor-optica.txt?raw";
import byproxJobDescription from "@/data/files/job-descriptions/byprox.txt?raw";

export { type CompanyId, COMPANY_ID_TO_DATA };

type CompanyId =
  | "bionet"
  | "metrica-sports"
  | "byprox"
  | "mayor-optica"
  | "spotify-electron";

interface Company {
  id: CompanyId;
  name: string;
  websiteUrl: string;
  repoUrl?: string;
  description: string;
  iconUrl: ImageMetadata;
  jobInfo: JobInfo;
}

interface JobInfo {
  title: string;
  description: string;
  contractType: ContractType;
  dates: string;
  tech: TechId[];
}

enum ContractType {
  FullTime = "Full Time",
  Freelance = "Freelance",
  Internship = "Internship",
}

// Order matters: the will be shown in this order in the UI.
const COMPANY_ID_TO_DATA: Readonly<Record<CompanyId, Company>> = {
  "metrica-sports": {
    id: "metrica-sports",
    name: "Metrica Sports",
    websiteUrl: "https://www.metrica-sports.com/",
    description:
      "Metrica Sports provides an analysis solution for non-professional and professional teams. Our products, PlayBase and Metrica Nexus, allow users to enhance their game with video and data integration.",
    iconUrl: metricaSportsIcon,
    jobInfo: {
      title: "Frontend Developer (Angular & RxJS)",
      description: metricaSportsJobDescription,
      contractType: ContractType.FullTime,
      dates: "May 2025 - Present",
      tech: ["angular", "rxjs", "typescript", "electron", "ionic"],
    },
  },
  "spotify-electron": {
    id: "spotify-electron",
    name: "Spotify Electron",
    websiteUrl: "https://antoniomrtz.github.io/SpotifyElectron_Web/",
    repoUrl: "https://github.com/AntonioMrtz/SpotifyElectron",
    description:
      "A cross-platform, open-source music streaming desktop app that includes Spotify-like core functionalities and user-requested features—such as the ability to upload personal music.",
    iconUrl: spotifyElectronIcon,
    jobInfo: {
      title: "Lead Developer (Python & React & FastAPI & AWS)",
      description: spotifyElectronJobDescription,
      contractType: ContractType.Freelance,
      dates: "May 2023 - Present",
      tech: ["python", "react", "fastapi", "mongodb", "aws"],
    },
  },
  bionet: {
    id: "bionet",
    name: "Bionet",
    websiteUrl: "https://bionet.com/",
    description:
      "BIONET is a leading manufacturer of laboratory, pilot and industrial equipment and software for the bioprocessing industry, as well as a provider of advanced bioprocess-related services for companies that want to produce biomolecules through microbial fermentation or through cell culturing processes.",
    iconUrl: bionetIcon,
    jobInfo: {
      title: "Full-Stack Developer (Python & Angular & FastAPI)",
      description: bionetJobDescription,
      contractType: ContractType.FullTime,
      dates: "October 2023 - Jul 2025",
      tech: ["python", "fastapi", "angular", "postgresql", "redis"],
    },
  },
  "mayor-optica": {
    id: "mayor-optica",
    name: "Mayor Óptica",
    websiteUrl: "https://antoniomrtz.github.io/MayorOpticaWeb/",
    repoUrl: "https://github.com/AntonioMrtz/MayorOpticaWeb",
    description: "Optical center in Puente Tocinos, Murcia",
    iconUrl: mayorOpticaIcon,
    jobInfo: {
      title: "Frontend Developer",
      description: mayorOpticaJobDescription,
      contractType: ContractType.Freelance,
      dates: "Jan 2023 - June 2023",
      tech: ["astro", "javascript", "css", "bootstrap", "html"],
    },
  },
  byprox: {
    id: "byprox",
    name: "Byprox",
    websiteUrl: "https://byprox.com/",
    description: "Development of Custom INDUSTRY 4.0 Projects",
    iconUrl: byproxIcon,
    jobInfo: {
      title: "Full-Stack Developer (PHP & JavaScript)",
      description: byproxJobDescription,
      contractType: ContractType.Internship,
      dates: "Jan 2022 - Jun 2022",
      tech: ["php", "javascript", "postgresql", "html", "css"],
    },
  },
};
