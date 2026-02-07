export {
  type ContactId,
  type Contact,
  type CvInfo,
  CONTACT_ID_TO_DATA,
  PERSONAL_INFO,
  CV_DATA,
};
import type { ImageMetadata } from "astro";
import emailIcon from "@/assets/icons/email.svg";
import githubIcon from "@/assets/icons/github.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import cvIcon from "@/assets/icons/cv.svg";
import profileIcon from "@/assets/images/me/profile-pic-no-bg-tall.png?url";
import logoIcon from "@/assets/images/me/logoAM.png";

type ContactId = "email" | "linkedin" | "github";

interface Contact {
  id: ContactId;
  label: string;
  url: string;
  iconPath: ImageMetadata;
  copyUrl?: string;
}

interface PersonalInfo {
  name: string;
  title: string[];
  description: string;
  profilePicturePath: string;
  logo: ImageMetadata;
}

const PERSONAL_INFO: PersonalInfo = {
  name: "Antonio Martínez Fernández",
  title: ["Full Stack Developer", "Python, Angular, Node.js & React"],
  description: "🎯 Transforming ideas into Software",
  profilePicturePath: profileIcon,
  logo: logoIcon,
};

// Order matters for display purposes
const CONTACT_ID_TO_DATA: Readonly<Record<ContactId, Contact>> = {
  email: {
    id: "email",
    label: "Email",
    url: "mailto:antoniomartinezfernandez17@gmail.com",
    copyUrl: "antoniomartinezfernandez17@gmail.com",
    iconPath: emailIcon,
  },
  linkedin: {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/antonio-martinez-fernandez-dev/",
    iconPath: linkedinIcon,
  },
  github: {
    id: "github",
    label: "GitHub",
    url: "https://github.com/AntonioMrtz",
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
  url: "/cv/CV_Antonio_Martinez_Fernandez.pdf",
  iconPath: cvIcon,
};
