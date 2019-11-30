import { Module } from 'vuex';
import { TeamState } from '../types';
import { RootState } from '../../../types';

const teams: Module<TeamState, RootState> = {
    namespaced: true,
    state: {
        count: 0
    },
    getters: {
        count(state) {
            return state.count;
        }
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    }
};

export default teams;
