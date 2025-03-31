import { defineConfig } from "eslint/config";
import globals from "globals";
import pluginReact from "eslint-plugin-react";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser } },
  {
    rules: {
      "no-trailing-spaces": [
            "error"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
  },
  pluginReact.configs.flat.recommended,
]);