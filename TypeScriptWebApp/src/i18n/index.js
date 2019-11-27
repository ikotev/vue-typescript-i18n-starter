import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
export var i18n = new VueI18n({
    locale: '',
    fallbackLocale: 'en'
});
var loadedLanguages = [];
export var SUPPORTED_LANGUAGES = ['en', 'bg', 'ja'];
export function loadLanguageAsync(lang) {
    if (!SUPPORTED_LANGUAGES.includes(lang)) {
        throw new Error("Language '" + lang + "' is not supported!");
    }
    if (i18n.locale === lang) {
        return Promise.resolve();
    }
    if (loadedLanguages.includes(lang)) {
        i18n.locale = lang;
        return Promise.resolve();
    }
    //return import(/* webpackChunkName: "lang-[request]" */ `./${lang}.json`).then(
    return import("./" + lang + ".json")
        .then(function (messages) {
        i18n.setLocaleMessage(lang, messages.default);
        loadedLanguages.push(lang);
        i18n.locale = lang;
        return Promise.resolve();
    });
}
//# sourceMappingURL=index.js.map