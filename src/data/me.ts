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
import logoIcon from "@/assets/images/me/logoAM.webp";

import aboutMeDescriptionRaw from "@/data/files/about-me.txt?raw";

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
  title: [`Senior Full-Stack Developer`, "Angular, Python, React & Node.js"],
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
  id: string;
  label: string;
  url: string;
  iconPath: ImageMetadata;
}

const CV_DATA: Readonly<CvInfo> = {
  id: "cv",
  label: "CV",
  url: `${import.meta.env.BASE_URL}/cv/CV_Antonio_Martinez_Fernandez.pdf`,
  iconPath: cvIcon,
};

const ABOUT_ME = {
  title: "Hi I'm Antonio! 👋",
  description: aboutMeDescriptionRaw.replace(
    /\$\{YEARS_OF_EXPERIENCE\}/g,
    YEARS_OF_EXPERIENCE.toString(),
  ),
};
