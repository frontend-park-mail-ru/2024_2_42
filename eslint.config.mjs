import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    rules: {
      quotes: ["error", "single"], // Замените двойные кавычки на одинарные
    },
  },
  pluginJs.configs.recommended,
];
