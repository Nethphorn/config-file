# Installation Guide

To use these configurations, you must install the following peer dependencies in your project.

## 📦 Basic Setup (JS/TS)
To get started with basic JS and TypeScript linting:

```bash
pnpm add -D eslint typescript-eslint
```

## 🪄 Svelte Support
Required for the `svelte.js` module:

```bash
pnpm add -D eslint-pugin-svelte svelte-eslint-parser
```

## 🧪 Testing Support (Vitest/Playwright)
Required for the `testing.js` module:

```bash
pnpm add -D eslint-plugin-vitest eslint-plugin-playwright vitest
```

## 🎨 Styling (Prettier)
Required for the `prettier.js` module:

```bash
pnpm add -D eslint-config-prettier prettier
```

## ✨ Spelling
If you want to use the CSpell rules:

```bash
pnpm add -D cspell
```

---

## Using Lefthook
If you want to use the pre-commit hooks, copy `lefthook.yml` to your project root and install:

```bash
pnpm add -D lefthook
pnpm exec lefthook install
```
