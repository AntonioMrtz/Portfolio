import umuIcon from "@/assets/icons/education/umu.svg";
import languagesIcon from "@/assets/icons/education/languages.svg";

export { type EducationID, type Education, EDUCATION_ID_TO_DATA };

type EducationID = "cs-degree-umu" | "languages";

interface Education {
  id: EducationID;
  label: string;
  iconUrl: ImageMetadata;
  entity: string;
  description: string;
  dates?: string;
}

const EDUCATION_ID_TO_DATA: Readonly<Record<EducationID, Education>> = {
  "cs-degree-umu": {
    id: "cs-degree-umu",
    label: "Computer Science Degree",
    iconUrl: umuIcon,
    description:
      "- Grade: 7.5/10 (GPA 3.3/4.0)\n- Software Engineering Specialization\n- Software Architecture with Honors",
    dates: "2019 - 2023",
    entity: "University of Murcia",
  },
  languages: {
    id: "languages",
    label: "Languages",
    iconUrl: languagesIcon,
    description: "- 🇪🇸 Spanish: Native\n- 🇬🇧 English: C1 (Advanced)",
    entity: "Personal",
  },
};
