import Actor from "@/types/Actor";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  // {
  //   path: "/actorInformations",
  //   name: "ActorInformations",
  //   component: () => import("@/views/ActorInformations.vue"),
  //   props: {
  //     actor: Actor,
  //   },
  // },
  {
    path: "/movieInformations",
    name: "MovieInformations",
    component: () => import("@/views/MovieInformations.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
});

export default router;
