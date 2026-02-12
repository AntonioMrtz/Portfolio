import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [".wrangler/**", "node_modules/**"],
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn", // Allow any for dynamic Notion API types
    },
  },
);
