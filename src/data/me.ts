export {
  type ContactId,
  type Contact,
  type CvInfo,
  CONTACT_ID_TO_DATA,
  PERSONAL_INFO,
  CV_DATA,
};
import emailIcon from "@/assets/icons/email.svg?url";
import githubIcon from "@/assets/icons/github.svg?url";
import linkedinIcon from "@/assets/icons/linkedin.svg?url";
import cvIcon from "@/assets/icons/cv.svg?url";
import profileIcon from "@/assets/images/me/profile-pic-no-bg-tall.png";

type ContactId = "email" | "linkedin" | "github";

interface Contact {
  id: ContactId;
  label: string;
  url: string;
  iconPath: string;
  copyUrl?: string;
}

interface PersonalInfo {
  name: string;
  title: string[];
  description: string;
  profilePicturePath: string;
}

const PERSONAL_INFO: PersonalInfo = {
  name: "Antonio Martínez Fernández",
  title: ["Full Stack Developer", "Python, Angular, Node.js & React"],
  description: "🎯 Transforming ideas into Software",
  profilePicturePath: profileIcon.src,
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
  iconPath: string;
}

const CV_DATA: Readonly<CvInfo> = {
  label: "CV",
  url: "/cv/CV_Antonio_Martinez_Fernandez.pdf",
  iconPath: cvIcon,
};
