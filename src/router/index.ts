import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import SignUp from '../views/SignUp.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/SignUp'
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
