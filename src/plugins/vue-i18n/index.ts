/// <reference lib="dom" />
import type { App } from 'vue';
import { createI18n } from 'vue-i18n';

import en from '@/langs/en';
import es from '@/langs/es';

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$t: typeof t;
	}
}

export const supportedLocales: string[] = ['en', 'es'];
export const defaultLocale: (typeof supportedLocales)[number] = 'es';

export const i18n = createI18n({
	legacy: false,
	locale: localStorage.getItem('locale') || defaultLocale,
	fallbackLocale: defaultLocale,
	messages: {
		en,
		es,
	},
	modifiers: {
		trimCapitalize: (value: unknown) => {
			let result = String(value).trim();
			result = result.charAt(0).toUpperCase() + result.slice(1);
			return result;
		},
	},
});

const translate = i18n.global.t as (...args: unknown[]) => string;

export const t = (...props: unknown[]): string => {
	let result = translate(...props);
	result = result.trim();
	return result;
};

export const vueI18n = {
	install: (app: App): void => {
		app.config.globalProperties.$t = t;
		app.use(i18n);
	},
};
