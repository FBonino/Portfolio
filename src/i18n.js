import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './translations/en/global.json';
import es from './translations/es/global.json';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				global: en
			},
			es: {
				global: es
			}
		},
		detection: {
			lookupLocalStorage: 'Language'
		},
		fallbackLng: "en"
	});

export default i18n;