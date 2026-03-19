import formatConfig from "./ESLint/format.js";
import typescriptConfig from "./ESLint/typescript.js";
import svelteConfig from "./ESLint/svelte.js";
import testingConfig from "./ESLint/testing.js";
import prettierConfig from "./ESLint/prettier.js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // Ignore build artifacts and dependencies
    ignores: ["node_modules/", "dist/", ".svelte-kit/"],
  },
  // 1. Core Basics (Applied to all JS/TS/Svelte files)
  {
    files: ["**/*.{js,ts,svelte}"],
    ...formatConfig,
  },
  // 2. TypeScript Logic (Applied to TS and Svelte files)
  {
    files: ["**/*.ts", "**/*.svelte"],
    ...typescriptConfig,
  },
  // 3. Svelte Specifics
  {
    files: ["**/*.svelte"],
    ...svelteConfig,
  },
  // 4. Testing patterns
  {
    files: ["**/*.{test,spec}.{js,ts}", "tests/**/*"],
    ...testingConfig,
  },
  // 5. Prettier (Always last to ensure it wins any formatting conflicts)
  {
    files: ["**/*.{js,ts,svelte}"],
    ...prettierConfig,
  },
];
