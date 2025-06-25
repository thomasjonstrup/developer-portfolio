import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
	// add more generic rule sets here, such as:
	// js.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	{
		files: ["**/*.ts", "**/*.tsx"],
		languageOptions: {
			parser: tsParser,
		},
		plugins: {
			"@typescript-eslint": tseslint,
		},
		rules: {
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": ["error"],
		},
	},
	{
		files: ["**/*.astro"],
		// Astro plugin handles parsing, but you may need to enable TypeScript rules in <script> blocks
		rules: {
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": ["error"],
		},
	},
];
