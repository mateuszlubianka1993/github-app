import Vue from "vue";
import Vuex from "vuex";

import githubApi from "../apis/githubApi";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: [],
        userRepos: []
    },
    mutations: {
        fillUser(state, data) {
            const results = [];
            results.push(data);
            state.user = results;
            console.log(data);
        },
        fillUserRepos(state, data) {
            state.userRepos = data;
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
                        sort: 'created',
                        direction: 'desc'
                    }
                })
                .then(res => {
                    commit("fillUserRepos", res.data);
                    console.log(res.data);
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
        }
    }
});