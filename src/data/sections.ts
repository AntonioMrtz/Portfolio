export { type SectionID, type Section, SECTIONS_ID_TO_DATA };

type SectionID = "experience" | "projects" | "certifications" | "education";

interface Section {
  id: SectionID;
  label: string;
  icon: string;
}

const SECTIONS_ID_TO_DATA: Readonly<Record<SectionID, Section>> = {
  experience: {
    id: "experience",
    label: "Experience",
    icon: "💼",
  },
  projects: {
    id: "projects",
    label: "Projects",
    icon: "🏗️",
  },
  certifications: {
    id: "certifications",
    label: "Certifications",
    icon: "📜",
  },
  education: {
    id: "education",
    label: "Education",
    icon: "🎓",
  },
};
