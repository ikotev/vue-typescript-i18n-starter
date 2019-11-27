import * as _ from 'lodash';
import axios from 'axios';
console.log('Running App version: ', VERSION);
console.log('Production: ', PRODUCTION);
console.log('lodash: ', _.VERSION);
console.log('axios: ', axios);
import Vue from 'vue';
import App from './app.vue';
import store from './store';
import { i18n, loadLanguageAsync } from './i18n';
var lang = 'en';
loadLanguageAsync(lang).then(function () {
    new Vue({
        store: store,
        i18n: i18n,
        render: function (h) {
            return h(App);
        }
    }).$mount('#app');
});
//# sourceMappingURL=app.js.map