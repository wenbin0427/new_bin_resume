import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// src/main.js
import 'bootstrap/dist/css/bootstrap.min.css';  // 引入 Bootstrap 的 CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // 引入 Bootstrap 的 JS
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';



createApp(App).use(router).mount('#app')
