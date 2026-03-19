# 🛠️ Project Standards & Configs

A centralized, modular repository for high-quality ESLint rules and GitHub Action workflows. Use this to ensure consistency and best practices across all your projects.

---

## 🚀 How to Use

To use these configurations in your own project, follow these steps:

### 1. Install Dependencies
You'll need `eslint` (v9+) and the specific plugins for the modules you want to use.

```bash
# Core Requirements
pnpm add -D eslint typescript-eslint

# For Svelte support
pnpm add -D eslint-plugin-svelte svelte-eslint-parser

# For Styling (Prettier)
pnpm add -D eslint-config-prettier prettier

# For Testing
pnpm add -D eslint-plugin-vitest eslint-plugin-playwright vitest
```

### 2. Copy the Configs
You can copy the files from the `ESLint/` directory into your project's `eslint/` folder, then reference them in your `eslint.config.js`.

**Example `eslint.config.js`:**
```javascript
import formatConfig from "./eslint/format.js";
import typescriptConfig from "./eslint/typescript.js";
import svelteConfig from "./eslint/svelte.js";

export default [
    { files: ["**/*.{js,ts,svelte}"], ...formatConfig },
    { files: ["**/*.ts", "**/*.svelte"], ...typescriptConfig },
    { files: ["**/*.svelte"], ...svelteConfig },
];
```

---

## 📂 Available Modules

| Module | Purpose | Keywords |
| :--- | :--- | :--- |
| `format.js` | Core JS/TS coding style | `no-var`, `prefer-const`, `eqeqeq` |
| `typescript.js` | Strict TS logic & type safety | `floating-promises`, `no-explicit-any` |
| `svelte.js` | Svelte 5 and SvelteKit standards | `no-at-html-tags`, `Svelte 5` |
| `testing.js` | Vitest and Playwright rules | `vitest/test`, `playwright/expect` |
| `prettier.js` | Formatting consistency | `prettier/prettier`, `endOfLine: lf` |

---

## 🤖 GitHub Actions
Reusable workflows are available in the `workflows/` directory. You can call them from your project's CI using `workflow_call`.

---

## 🧑‍🤝‍🧑 Contributors
Made with ❤️ for friends and collaborators. Feel free to open a PR to suggest new rules!
