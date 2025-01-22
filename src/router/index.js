import { createRouter, createWebHashHistory } from 'vue-router';
import index from '../views/index.vue';
import contact from '../views/contact.vue';
const routes = [
 {path:'/',name:'index',component: () => import('@/views/index.vue')},
 {path:'/contact',name:'contact',component: () => import('@/views/contact.vue')},
 {path:'/UpLog',name:'UpLog',component: () => import('@/views/UpLog.vue')},

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash, // 滾動到目標 ID
        behavior: 'smooth' // 平滑滾動
      };
    }
    return { top: 0 };
  }
});

export default router
