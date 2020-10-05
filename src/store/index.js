import Vue from "vue";
import Vuex from "vuex";

import githubApi from "../apis/githubApi";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    fillUser(state, data) {
      state.user = data;
      console.log(data);
    }
  },
  actions: {
    getUser({ commit }, payload) {
      githubApi
        .get(`/users/${payload}`)
        .then(res => {
          commit("fillUser", res.data);
        })
        .catch(err => console.log(err));
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  }
});
