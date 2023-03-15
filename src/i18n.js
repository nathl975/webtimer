import i18n from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import french from './translation/fr.json';
import english from './translation/en.json';

const resources = {
    fr: {
        translation: french
    },
    en: {
        translation: english
    }
};

i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
            resources,
            keySeparator: '.',
            fallbackLng: "en",
        }
    );
export default i18n;