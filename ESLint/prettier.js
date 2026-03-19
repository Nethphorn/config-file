// @ts-expect-error - no types for this package
import prettierConfig from "eslint-config-prettier";

export default {
	rules: {
		...prettierConfig.rules,
	},
};
