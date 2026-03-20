// ESLint/testing.js
import vitestPlugin from "@vitest/eslint-plugin"; // Changed from "eslint-plugin-vitest"
import playwrightPlugin from "eslint-plugin-playwright";

/**
 * @type {import('eslint').Linter.Config}
 * Standards for reliable testing (Vitest and Playwright).
 */
export default {
  plugins: {
    vitest: vitestPlugin,
    playwright: playwrightPlugin,
  },
  rules: {
    "vitest/consistent-test-it": ["error", { fn: "test" }],
    "vitest/no-focused-tests": "error",
    "playwright/no-wait-for-timeout": "error",
    "playwright/valid-expect": "error",
  },
};
