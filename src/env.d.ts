/// <reference types="astro/client" />

declare module "@alpinejs/intersect" {
  import type { Alpine } from "alpinejs";
  const intersect: (Alpine: Alpine) => void;
  export default intersect;
}
