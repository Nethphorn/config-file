import tseslint from "typescript-eslint";

/**
 * @type {import('eslint').Linter.Config}
 * Strict TypeScript logic and type safety rules.
 */
export default {
  plugins: {
    "@typescript-eslint": tseslint.plugin,
  },
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      project: true,
    },
  },
  rules: {
    "@typescript-eslint/no-floating-promises": "error", // Prevent unhandled promises
    "@typescript-eslint/no-explicit-any": "warn", // discouragement of 'any' to maintain type safety
    "@typescript-eslint/await-thenable": "error", // Ensure await is only used on promises
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
};
