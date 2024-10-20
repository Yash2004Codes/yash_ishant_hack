import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    providers: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setProviders(state, providers) {
      state.providers = providers;
    },
  },
  actions: {
    fetchProviders({ commit }) {
      // Fetch provider data from an API or a local file
      commit('setProviders', fetchedProviders);
    },
  },
});
