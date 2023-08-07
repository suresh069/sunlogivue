import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Footer from './components/Footer.vue'
import Dropdown from "./components/Dropdown.vue";
import Location from "./components/Location.vue";
import LocationInfo from "./components/LocationInfo.vue";
import Login from "./components/Login.vue"
import Syohin from "./components/Syohin.vue";
import SyohinInfo from "./components/SyohinInfo.vue";
import Kanryo from "./components/Kanryo.vue";
import  "bootstrap/dist/css/bootstrap.css"
import  "bootstrap/dist/js/bootstrap.js"
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import router from './routing';



const app=createApp(App).use(router);

app.mount('#app')
