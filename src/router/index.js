import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/search-user",
    name: "SearchUser",
    component: () => import("../views/SearchUser.vue")
  },
  {
    path: "/repos/:user",
    name: "UserRepos",
    props: true,
    component: () => import("../views/UserRepos.vue")
  },
  {
    path: "/organization-repos/:organization",
    name: "OrganizationRepos",
    props: true,
    component: () => import("../views/OrganizationRepos.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
