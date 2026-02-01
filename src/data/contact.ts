export { type ContactId, type Contact, CONTACT_ID_TO_DATA, PERSONAL_INFO };
import emailIcon from "@/assets/icons/email.svg?url";
import githubIcon from "@/assets/icons/github.svg?url";
import linkedinIcon from "@/assets/icons/linkedin.svg?url";

type ContactId = "email" | "linkedin" | "github";

interface Contact {
  id: ContactId;
  label: string;
  url: string;
  iconPath: string;
}

interface PersonalInfo {
  name: string;
  description: string;
}

const PERSONAL_INFO: PersonalInfo = {
  name: "Antonio Martínez Fernández",
  description: "🎯 Transforming ideas into Software",
};

// Order matters for display purposes
const CONTACT_ID_TO_DATA: Record<ContactId, Contact> = {
  email: {
    id: "email",
    label: "Email",
    url: "mailto:antoniomartinezfernandez17@gmail.com",
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
