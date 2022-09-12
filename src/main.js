import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import { createPinia } from "pinia";
import "./assets/main.css";
import i18n from "@/i18n";

createApp(App).use(router).use(i18n).use(createPinia()).mount("#app");
