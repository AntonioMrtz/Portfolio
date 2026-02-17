export {
  type ContactId,
  type Contact,
  type CvInfo,
  CONTACT_ID_TO_DATA,
  PERSONAL_INFO,
  CV_DATA,
  ABOUT_ME,
};
import type { ImageMetadata } from "astro";
import emailIcon from "@/assets/icons/common/email.svg";
import githubIcon from "@/assets/icons/common/github.svg";
import linkedinIcon from "@/assets/icons/common/linkedin.svg";
import cvIcon from "@/assets/icons/common/cv.svg";
import profileIcon from "@/assets/images/me/profile-pic-no-bg-tall.webp";
import logoIcon from "@/assets/images/me/logoAM.png";

type ContactId = "email" | "linkedin" | "github";

interface Contact {
  id: ContactId;
  label: string;
  url: string;
  shortUrl?: string;
  iconPath: ImageMetadata;
  copyUrl?: string;
}

interface PersonalInfo {
  name: string;
  title: string[];
  description: string;
  profilePicture: ImageMetadata;
  logo: ImageMetadata;
}

const YEARS_OF_EXPERIENCE = new Date().getFullYear() - 2022; // I started working in 2022, so we calculate the years of experience based on that.

const PERSONAL_INFO: PersonalInfo = {
  name: "Antonio Martínez Fernández",
  title: [
    `Full Stack Developer with +${YEARS_OF_EXPERIENCE} years experience`,
    "Python, Angular, Node.js & React",
  ],
  description: "🎯 Transforming ideas into Software",
  profilePicture: profileIcon,
  logo: logoIcon,
};

// Order matters for display purposes
const CONTACT_ID_TO_DATA: Readonly<Record<ContactId, Contact>> = {
  email: {
    id: "email",
    label: "Email",
    url: "mailto:antoniomartinezfernandez17@gmail.com",
    shortUrl: "antoniomartinezfernandez17@gmail.com",
    copyUrl: "antoniomartinezfernandez17@gmail.com",
    iconPath: emailIcon,
  },
  linkedin: {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/antonio-martinez-fernandez-dev/",
    shortUrl: "linkedin.com/in/antonio-martinez-fernandez-dev",
    iconPath: linkedinIcon,
  },
  github: {
    id: "github",
    label: "Github",
    url: "https://github.com/AntonioMrtz",
    shortUrl: "github.com/AntonioMrtz",
    iconPath: githubIcon,
  },
};

interface CvInfo {
  label: string;
  url: string;
  iconPath: ImageMetadata;
}

const CV_DATA: Readonly<CvInfo> = {
  label: "CV",
  url: `${import.meta.env.BASE_URL}/cv/CV_Antonio_Martinez_Fernandez.pdf`,
  iconPath: cvIcon,
};

const ABOUT_ME = {
  title: "Hi I'm Antonio! 👋",
  description: `My name is Antonio Martinez, and I'm a Full Stack Developer with +${YEARS_OF_EXPERIENCE} years of real-world experience building integrated frontend-backend solutions.

My main tech stack includes Python, FastAPI, Angular, React, and Node.js. I have worked in fast-paced international startups, taking ownership of product features end-to-end and collaborating closely with teams using my advanced English skills. I am fluent in both English and Spanish.

Music is a big passion of mine—I dedicated three years to Spotify Electron, an open-source music streaming app I built from scratch. The project replicates the Spotify UI, adds new features such as allowing users to upload songs, and provides a platform for discovering emerging artists. I led the project and coordinated over 30 contributors from around the world, gaining experience in open-source leadership, collaboration, and community-driven development.

I am a daily Linux user and enjoy understanding systems at a deeper level. I like experimenting with tools, optimizing workflows, and staying up to date with modern technologies and industry trends. I strongly believe in continuous improvement and strive to become at least 1% better every day, both technically and professionally.

Outside of work, I enjoy sports and music. I regularly practice trail running, cycling, gym training, and padel.

I hold a degree in Computer Science from the University of Murcia, where I specialized in Software Engineering.`,
};
