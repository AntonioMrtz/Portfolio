import type { TechId } from "./stack";

export { BADGE_ID_TO_DATA, type Badge };

type Badge = {
  id: TechId;
  name: string;
  imageUrl: string;
};

const BADGE_ID_TO_DATA: Readonly<Record<TechId, Badge>> = {
  python: {
    id: "python",
    name: "Python",
    imageUrl:
      "https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=FFD54F",
  },
  react: {
    id: "react",
    name: "React",
    imageUrl:
      "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  },
  fastapi: {
    id: "fastapi",
    name: "FastAPI",
    imageUrl:
      "https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white",
  },
  mongodb: {
    id: "mongodb",
    name: "MongoDB",
    imageUrl:
      "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white",
  },
  electron: {
    id: "electron",
    name: "Electron",
    imageUrl:
      "https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white",
  },
  angular: {
    id: "angular",
    name: "Angular",
    imageUrl:
      "https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white",
  },
  rxjs: {
    id: "rxjs",
    name: "RxJS",
    imageUrl:
      "https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white",
  },
  typescript: {
    id: "typescript",
    name: "TypeScript",
    imageUrl:
      "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
  },
  ionic: {
    id: "ionic",
    name: "Ionic",
    imageUrl:
      "https://img.shields.io/badge/Ionic-3880FF?style=for-the-badge&logo=ionic&logoColor=white",
  },
  nodejs: {
    id: "nodejs",
    name: "Node.js",
    imageUrl:
      "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white",
  },
  github_actions: {
    id: "github_actions",
    name: "GitHub Actions",
    imageUrl:
      "https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white",
  },
  jest: {
    id: "jest",
    name: "Jest",
    imageUrl:
      "https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white",
  },
  astro: {
    id: "astro",
    name: "Astro",
    imageUrl:
      "https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white",
  },
  javascript: {
    id: "javascript",
    name: "JavaScript",
    imageUrl:
      "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000",
  },
  css: {
    id: "css",
    name: "CSS",
    imageUrl:
      "https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css&logoColor=white",
  },
  bootstrap: {
    id: "bootstrap",
    name: "Bootstrap",
    imageUrl:
      "https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white",
  },
  html: {
    id: "html",
    name: "HTML",
    imageUrl:
      "https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white",
  },
  postgresql: {
    id: "postgresql",
    name: "PostgreSQL",
    imageUrl:
      "https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white",
  },
  redis: {
    id: "redis",
    name: "Redis",
    imageUrl:
      "https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white",
  },
  php: {
    id: "php",
    name: "PHP",
    imageUrl:
      "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
  },
  english: {
    id: "english",
    name: "English",
    imageUrl:
      "https://img.shields.io/badge/English-0073B1?style=for-the-badge&logo=linkedin&logoColor=white",
  },
  nestjs: {
    id: "nestjs",
    name: "NestJS",
    imageUrl:
      "https://img.shields.io/badge/NestJS-E02337?style=for-the-badge&logo=nestjs&logoColor=white",
  },
  aws: {
    id: "aws",
    name: "AWS",
    imageUrl:
      "https://custom-icon-badges.demolab.com/badge/AWS-%23FF9900.svg?logo=aws&logoColor=white",
  },
  google_cloud: {
    id: "google_cloud",
    name: "Google Cloud",
    imageUrl:
      "https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
  },
};
