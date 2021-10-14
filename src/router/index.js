// import { Actor } from "@/classes/Actor";
import Vue from "vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/actorInformations",
    name: "ActorInformations",
    component: () => import("@/views/ActorInformations.vue"),
    // props: {
    //   actor: Actor,
    // },
  },
];

const router = new VueRouter({
  routes: routes,
});

export default router;
