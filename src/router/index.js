import { createRouter, createWebHistory } from 'vue-router';
import index from '../views/index.vue';
import contact from '../views/contact.vue';
const routes = [
 {path:'/',name:'index',component:index},
 {path:'/contact',name:'contact',component:contact},

]

const router = createRouter({
  history: createWebHistory(),
  routes, // 加載路由配置
})

export default router
