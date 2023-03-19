require("./bootstrap");

import { createApp } from "vue";
import router from "./frontroutes";
import FrontApp from "./FrontApp.vue";
// import Navbar from "./front_components/Navbar.vue";
const app = createApp(FrontApp);
app.component("front-app", FrontApp);
// app.component("nav-bar", Navbar);

app.use(router);
app.mount("#front");
