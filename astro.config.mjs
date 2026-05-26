// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://antoniomrtz.github.io",
  base: "/Portfolio",
  build: {
    inlineStylesheets: "always",
  },
  integrations: [sitemap(), alpinejs({ entrypoint: "/src/alpine" })],
  env: {
    schema: {
      GA_ENABLED: envField.boolean({
        context: "client",
        access: "public",
      }),
    },
    validateSecrets: true,
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Ubuntu-Light",
      cssVariable: "--font-ubuntu-light",
      display: "block",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Ubuntu-Light.ttf"],
            weight: 300,
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Ubuntu-Regular",
      cssVariable: "--font-ubuntu-regular",
      display: "block",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Ubuntu-Regular.ttf"],
            weight: 400,
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Ubuntu-Italic",
      cssVariable: "--font-ubuntu-italic",
      display: "block",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Ubuntu-Italic.ttf"],
            weight: 400,
            style: "italic",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Ubuntu-Medium",
      cssVariable: "--font-ubuntu-medium",
      display: "block",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Ubuntu-Medium.ttf"],
            weight: 500,
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Ubuntu-Bold",
      cssVariable: "--font-ubuntu-bold",
      display: "block",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Ubuntu-Bold.ttf"],
            weight: 700,
            style: "normal",
          },
        ],
      },
    },
  ],
});
