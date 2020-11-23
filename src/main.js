import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
// import $ from 'jquery'


const app = createApp(App);
app.use(router);//注意顺序
app.mount("#app");
