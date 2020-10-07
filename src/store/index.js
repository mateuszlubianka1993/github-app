import Vue from "vue";
import Vuex from "vuex";

import githubApi from "../apis/githubApi";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: [],
    userRepos: [],
    organizations: []
  },
  mutations: {
    fillUser(state, data) {
      const results = [];
      results.push(data);
      state.user = results;
    },
    fillUserRepos(state, data) {
      state.userRepos = data;
    },
    fillOrganizations(state, data) {
      state.organizations = data;
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
    },
    getUserRepos({ commit }, payload) {
      githubApi
        .get(`/users/${payload}/repos`, {
          params: {
            sort: "created",
            direction: "desc",
            per_page: 60
          }
        })
        .then(res => {
          commit("fillUserRepos", res.data);
        })
        .catch(err => console.log(err));
    },
    getOrganizations({ commit }) {
      githubApi
        .get(`/organizations`, {
          params: {
            per_page: 15
          }
        })
        .then(res => {
          commit("fillOrganizations", res.data);
        })
        .catch(err => console.log(err));
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    repos(state) {
      return state.userRepos;
    },
    organizations(state) {
      return state.organizations;
    }
  }
});
