import sveltePlugin from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";
import tsParser from "typescript-eslint";

/**
 * @type {import('eslint').Linter.Config}
 * Standards for Svelte 5 and SvelteKit projects.
 * Optimized for Svelte 5 Runes and TypeScript integration.
 */
// @ts-expect-error - external plugin type mismatch with ESLint 9 types
export default {
	plugins: {
		svelte: sveltePlugin,
	},
	languageOptions: {
		parser: svelteParser,
		parserOptions: {
			parser: tsParser.parser, // Delegate script parsing to typescript-eslint
			extraFileExtensions: [".svelte"],
			svelteConfig: {
				compilerOptions: {
					runes: true, // Explicitly enable Svelte 5 Runes support
				},
			},
		},
	},
	rules: {
		// Essential Svelte 5 rules (manually listed for better copy-paste clarity)
		"svelte/no-at-html-tags": "warn",
		"svelte/infinite-interpolation": "error",
		"svelte/valid-compile": "error",
		"svelte/no-unused-svelte-ignore": "error",
		"svelte/system": "error",
		"svelte/no-dupe-use-directives": "error",
	},
};
