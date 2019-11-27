import * as _ from 'lodash';
import axios from 'axios';

declare const VERSION: string;
declare const PRODUCTION: any;

console.log('Running App version: ', VERSION);
console.log('Production: ', PRODUCTION);
console.log('lodash: ', _.VERSION);
console.log('axios: ', axios);

import Vue, { CreateElement, VNode } from 'vue';
import App from './app.vue';
import store from './store';
import { i18n, loadLanguageAsync } from './i18n';

const lang = 'en';
loadLanguageAsync(lang).then(() => {
    new Vue({
        store,
        i18n,
        render(h: CreateElement): VNode {
            return h(App);
        }
    }).$mount('#app');
});
