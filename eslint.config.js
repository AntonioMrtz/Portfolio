import eslintPluginAstro from "eslint-plugin-astro";
import typescriptParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.ts", "**/*.astro"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
        extraFileExtensions: [".astro"],
      },
    },
  },

  ...eslintPluginAstro.configs.recommended,

  // global overrides or custom rules
  {
    rules: {
      // "astro/no-set-html-directive": "error"
    },
  },
];
