import { createApp } from "vue";
import App from "./App.vue";

import Header from "./components/header_footer/Header.vue";
import Footer from "./components/header_footer/Footer.vue";

const app = createApp(App);
app.component('app-header', Header)
app.mount("#app");

 