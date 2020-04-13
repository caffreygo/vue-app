import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@v/Home.vue";

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
    component: () => import("@v/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@c/Login.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
