import type * as AlpineNS from "alpinejs";
import intersect from "@alpinejs/intersect";

interface ExperienceCard {
  revealed: boolean;
  expanded: boolean;
  isMobile: boolean;
  readonly forceCollapse: boolean;
  readonly shouldCollapse: boolean;
  init(): void;
  toggle(): void;
}

export default (Alpine: AlpineNS.Alpine) => {
  Alpine.plugin(intersect);

  Alpine.data(
    "experienceCard",
    (): AlpineNS.AlpineComponent<ExperienceCard> => ({
      revealed: false,
      expanded: false,
      isMobile: false,

      get forceCollapse() {
        return this.$el.dataset.forceCollapse === "true";
      },

      get shouldCollapse() {
        return this.forceCollapse || this.isMobile;
      },

      init() {
        const mq = window.matchMedia("(max-width: 768px)");
        this.isMobile = mq.matches;
        mq.addEventListener(
          "change",
          (e: MediaQueryListEvent) => (this.isMobile = e.matches),
        );
      },

      toggle() {
        if (this.shouldCollapse) this.expanded = !this.expanded;
      },
    }),
  );
};
