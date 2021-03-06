﻿import Vue from 'vue';
import Vuex from 'vuex';
import { RootState } from '../types';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
    state: {
        count: 0
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})