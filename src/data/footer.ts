import { PERSONAL_INFO, CONTACT_ID_TO_DATA } from "@/data/me";

export const FOOTER_SECTIONS = [
  {
    id: "about",
    heading: PERSONAL_INFO.name,
    type: "text",
    content: PERSONAL_INFO.description,
  },
  {
    id: "links",
    heading: "Useful Links",
    type: "links",
    items: [CONTACT_ID_TO_DATA.linkedin],
  },
  {
    id: "contact",
    heading: "Contact",
    type: "links",
    items: [CONTACT_ID_TO_DATA.github, CONTACT_ID_TO_DATA.email],
  },
];
