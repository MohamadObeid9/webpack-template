import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    ignores: ["**/*.config.js", "dist/main.js", "**/*.config.cjs"],
  },
  {
    rules: {
      "@typescript-eslint/no-require-imports": [
        "error",
        {
          allowAsImport: true,
        },
      ],
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
