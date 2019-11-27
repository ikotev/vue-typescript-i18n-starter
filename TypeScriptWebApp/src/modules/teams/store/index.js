var teams = {
    namespaced: true,
    state: {
        count: 0
    },
    getters: {
        count: function (state) {
            return state.count;
        }
    },
    mutations: {
        increment: function (state) {
            state.count++;
        }
    }
};
export default teams;
//# sourceMappingURL=index.js.map