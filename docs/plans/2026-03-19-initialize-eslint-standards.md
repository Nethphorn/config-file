# eslint-standards Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Initialize the `eslint-standards` repository with a central, modular configuration for ESLint and GitHub Actions.

**Architecture:** Use a modern ESM structure where rule sets are separated into individual JS files within the `eslint/` directory. GitHub Action templates are stored in the `workflows/` directory.

**Tech Stack:** Node.js (ESM), ESLint 9+ (flat config), Svelte 5, TypeScript, Prettier, Vitest, Playwright.

---

### Task 1: Project Initialization

**Files:**
- Create: `package.json`
- Create: `.gitignore`

**Step 1: Create package.json**
Run: `npm init -y`
Expected: `package.json` created.

**Step 2: Update package.json to ESM and add dependencies**
Set `"type": "module"`. Add necessary dependencies.

**Step 3: Create .gitignore**
Add `node_modules`.

**Step 4: Commit**
```bash
git add package.json .gitignore
git commit -m "chore: initialize project"
```

### Task 2: Create Core Format Module

**Files:**
- Create: `eslint/format.js`

**Step 1: Write format.js**
Include rules: `no-var`, `prefer-const`, `no-console` (warn), etc.

**Step 2: Commit**
```bash
git add eslint/format.js
git commit -m "feat: add core format module"
```

### Task 3: Create TypeScript Module

**Files:**
- Create: `eslint/typescript.js`

**Step 1: Write typescript.js**
Include rules for strict types, floating promises, etc.

**Step 2: Commit**
```bash
git add eslint/typescript.js
git commit -m "feat: add typescript module"
```

### Task 4: Create Svelte Module

**Files:**
- Create: `eslint/svelte.js`

**Step 1: Write svelte.js**
Include Svelte 5 rules.

**Step 2: Commit**
```bash
git add eslint/svelte.js
git commit -m "feat: add svelte module"
```

### Task 5: Create Testing Module

**Files:**
- Create: `eslint/testing.js`

**Step 1: Write testing.js**
Include Vitest and Playwright rules.

**Step 2: Commit**
```bash
git add eslint/testing.js
git commit -m "feat: add testing module"
```

### Task 6: Create Prettier Module

**Files:**
- Create: `eslint/prettier.js`

**Step 1: Write prettier.js**
Include prettier integration.

**Step 2: Commit**
```bash
git add eslint/prettier.js
git commit -m "feat: add prettier module"
```

### Task 7: Create GitHub Action Workflows

**Files:**
- Create: `workflows/lint-check.yml`
- Create: `workflows/test-check.yml`

**Step 1: Write workflows**
Create reusable workflow templates.

**Step 2: Commit**
```bash
git add workflows/
git commit -m "feat: add reusable workflows"
```
