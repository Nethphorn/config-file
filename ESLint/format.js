import noCommentedCode from "eslint-plugin-no-commented-code";
/**
 * @type {import('eslint').Linter.Config}
 * Clean code basics and fundamental standards.
 */
export default {
	plugins: {
    "no-commented-code": noCommentedCode,
  },
  rules: {
    // no undefined 
    'no-undef': 'off',
    // no var
	'no-var': 'error',
	// prefer const
	'prefer-const': 'error',
	// no console
	'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
	// no debugger
	'no-debugger': 'error',
	// no commented code
	'no-commented-code/no-commented-code': 'warn',
	'no-restricted-syntax': [
		'error',
		{
			selector: 'Literal[value=null]',
			message: 'Use undefined instead of null.',
		},
	],
			eqeqeq: ['error', 'always'],
			curly: 'error',
  },
};
