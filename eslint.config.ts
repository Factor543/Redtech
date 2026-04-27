import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
	{
		name: 'app/files-to-lint',
		files: ['**/*.{vue,ts,mts,tsx}'],
	},

	globalIgnores([
		'**/dist/**',
		'**/dist-ssr/**',
		'**/coverage/**',
		'**/build/**',
		'**/node_modules/**',
		'**/*.min.js',
		'**/*.min.css',
	]),

	...pluginVue.configs['flat/essential'],
	vueTsConfigs.recommended,

	{
		name: 'app/custom-rules',
		files: ['src/**/*.{vue,ts,mts,tsx}'],
		rules: {
		eqeqeq: ['error', 'always'],
		semi: ['error', 'always'],
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1,
				maxEOF: 0,
				maxBOF: 0,
			},
		],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'prefer-const': 'error',
		'no-var': 'error',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
			argsIgnorePattern: '^_',
			varsIgnorePattern: '^_',
			},
		],
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
			prefer: 'type-imports',
			},
		],
		'vue/no-v-html': 'warn',
		'vue/no-unused-components': 'warn',
		'vue/no-unused-vars': 'warn',
		'vue/multi-word-component-names': 'off',
		'vue/html-indent': ['error', 'tab', { baseIndent: 1 }],
		},
	},

	{
		name: 'app/config-files',
		files: ['*.config.{js,ts,mjs,cjs}', '**/*.config.{js,ts,mjs,cjs}'],
		rules: {
		eqeqeq: ['error', 'always'],
		'no-debugger': 'error',
		'no-console': 'off',
		},
	},
)
