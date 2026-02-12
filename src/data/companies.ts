import type { ImageMetadata } from "astro";
import type { TechId } from "./stack";
import metricaSportsIcon from "@/assets/images/companies/metrica-sports.png";
import spotifyElectronIcon from "@/assets/images/companies/spotify-electron.webp";
import bionetIcon from "@/assets/images/companies/bionet.png";
import mayorOpticaIcon from "@/assets/images/companies/mayor-optica.webp";
import byproxIcon from "@/assets/images/companies/byprox.png";

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
      description:
        "As a Frontend Developer, I design and implement high-performance, reactive interfaces for the Metrica Nexus cross-platform application, taking end-to-end ownership of features in a fast-paced startup environment.\n\n- Developed and maintained frontend features with Angular (v14) for the Metrica Nexus product (desktop and mobile apps).\n- Took ownership of end-to-end features, collaborating with a diverse, international team in a fast-paced startup environment.\n- Built reactive and high-performance interfaces using RxJS. Partnered with designers to improve UX/UI experiences.\n- Worked on cross-platform applications with Electron and Ionic.",
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
      description:
        "As the owner and Lead Developer of an open-source cross-platform music streaming application, I have been at the forefront of replicating and enhancing Spotify's functionalities while incorporating unique user-requested features such as the ability to upload personal music.\n\n- Led a global open-source team of 25+ contributors using Agile methodologies, managing Git/GitHub workflows, PRs, and issue tracking.\n- Developed REST APIs using Python, FastAPI, and MongoDB, including JWT-based authentication.\n- Designed a scalable music streaming architecture leveraging AWS (S3, CloudFront, Lambda) for storage, CDN, and serverless processing.\n- Built a cross-platform desktop application with React, TypeScript, and Electron, featuring a Spotify-inspired UI.\n- Implemented Dockerized environments, CI/CD pipelines with GitHub Actions, and automated testing with Jest, React Testing Library, and pytest.",
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
      description:
        "Participate in all stages of software development for ROSITA2, an embedded system for bioreactors, developing both frontend and backend solutions while ensuring seamless integration with hardware.\n\n- Development of Rest APIs and microservices using Python and FastAPI. Usage of Redis queues and events for fast and efficient microservices communication.\n- Design and development of a touchscreen and desktop application interface for real-time management of bioreactors with Angular (v12-19), Bootstrap and Neutralino. Successfully migrated all systems from Angular 12 to 19.\n- Software lead for bSmart devices such as CT1 and bBreath4 obtaining integrated backend-frontend solutions and working closely with electronics teams for integrating low level hardware software. Led meetings for retrospective analysis and future planning based on requirements and user feedback.\n- Contribute to architecture planning and decision-making for system design.\n- Worked extensively with technologies such as OPC UA and Asyncio.\n- Unit and integration tests with pytest as well as extensive testing with physical prototypes to ensure reliability and performance. Testing with Jasmine and Karma to validate frontend product requirements.",
      contractType: ContractType.FullTime,
      dates: "Nov 2023 - Jul 2025",
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
      description:
        "- Led end-to-end website development from concept to production deployment.\n- Designed the UI/UX to create a professional, user-centered digital experience aligned with brand identity.\n- Built a responsive, performance-optimized frontend ensuring seamless cross-device compatibility.\n- Managed deployment, optimization, and launch, delivering a fully operational production-ready website.",
      contractType: ContractType.Freelance,
      dates: "Jan 2023 - May 2023",
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
      description:
        "Developed the backend and frontend for a travel application structured around points of interest (POIs).\n\n- Developed the organizational structure and navigation through countries, regions, cities, and points of interest using PHP.\n- Data persistence using MySQL.\n- Organized content graphically using HTML, CSS and JavaScript.",
      contractType: ContractType.Internship,
      dates: "Jan 2022 - Jun 2022",
      tech: ["php", "javascript", "postgresql", "html", "css"],
    },
  },
};
