import experienceIcon from "@/assets/icons/common/briefcase.svg";
import projectsIcon from "@/assets/icons/common/rocket.svg";
import certificationIcon from "@/assets/icons/common/bookmark.svg";
import graduationCapIcon from "@/assets/icons/common/graduation-cap.svg";
import aboutMeIcon from "@/assets/icons/common/hand-shaking.svg";
import contactIcon from "@/assets/icons/common/mailbox.svg";

export { type SectionID, type Section, SECTIONS_ID_TO_DATA };

type SectionID =
  | "experience"
  | "projects"
  | "certifications"
  | "education"
  | "about-me"
  | "contact";

interface Section {
  id: SectionID;
  label: string;
  icon: ImageMetadata;
}

const SECTIONS_ID_TO_DATA: Readonly<Record<SectionID, Section>> = {
  experience: {
    id: "experience",
    label: "Experience",
    icon: experienceIcon,
  },
  projects: {
    id: "projects",
    label: "Projects",
    icon: projectsIcon,
  },
  certifications: {
    id: "certifications",
    label: "Certifications",
    icon: certificationIcon,
  },
  education: {
    id: "education",
    label: "Education",
    icon: graduationCapIcon,
  },
  "about-me": {
    id: "about-me",
    label: "About Me",
    icon: aboutMeIcon,
  },
  contact: {
    id: "contact",
    label: "Contact",
    icon: contactIcon,
  },
};
