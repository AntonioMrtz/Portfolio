/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: {
          500: "var(--accent-orange-500)",
        },
        "secondary-purple": {
          300: "var(--secondary-purple-300)",
          400: "var(--secondary-purple-400)",
          500: "var(--secondary-purple-500)",
          600: "var(--secondary-purple-600)",
          900: "var(--secondary-purple-900)",
        },
        "primary-black": {
          400: "var(--primary-black-400)",
          500: "var(--primary-black-500)",
          600: "var(--primary-black-600)",
        },
        neutral: {
          white: "var(--neutral-white)",
          gray: {
            50: "var(--neutral-gray-50)",
            100: "var(--neutral-gray-100)",
            500: "var(--neutral-gray-500)",
          },
        },
      },
      fontFamily: {
        sans: ["Ubuntu", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
