import { createRouter, createWebHashHistory } from 'vue-router';
import index from '../views/index.vue';
import contact from '../views/contact.vue';
const routes = [
 {path:'/',name:'index',component: () => import('@/views/index.vue')},
 {path:'/contact',name:'contact',component: () => import('@/views/contact.vue')},

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
