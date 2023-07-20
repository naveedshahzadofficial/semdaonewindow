import { createApp } from "vue";
import mitt from "mitt";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/scss/app.scss";

const pinia = createPinia();
const emitter = mitt();
const app = createApp(App);

app.config.globalProperties.emitter = emitter;

app.use(pinia).use(router).mount("#app");
