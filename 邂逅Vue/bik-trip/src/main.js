import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import pinia from "./stores/index";

import "normalize.css";
import "./assets/css/index.css";
createApp(App).use(pinia).use(router).mount("#app");
