import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "LayoutMainPage",
    components: "@/layouts/LayoutMainPage.vue",
    children: [
      {
        path: "/",
        name: "HelloWorld",
        component: () => import("@/components/HelloWorld.vue"),
      },
      {
        path: "/welcome",
        name: "TheWelcome",
        component: () => import("@/components/TheWelcome.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
