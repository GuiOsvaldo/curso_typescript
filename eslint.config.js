import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    ignores: ["node_modules", "dist", "build"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // Regras recomendadas do TypeScript + Prettier no Flat Config
      ...tsPlugin.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,
    },
    settings: {
      "import/resolver": {
        node: {
          paths: ["src"],
          extensions: [".js", ".ts", "jsx", "tsx"],
        },
      },
    },
  },
];
