import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/v-model',
      name: 'v-model',
      component: () => import('../views/VModel/Parent.vue')
    },
    {
      path: '/v-for-v-if',
      name: 'v-for-v-if',
      component: () => import('../views/VFor-VIf/index.vue')
    },
    {
      path: '/emits',
      name: 'emits',
      component: () => import('../views/Emits/Parent.vue')
    },
    {
      path: '/event-bus',
      name: 'event-bus',
      component: () => import('../views/EventBus/Parent.vue')
    },
    {
      path: '/teleport',
      name: 'teleport',
      component: () => import('../views/Teleport/Outer.vue')
    }
  ]
})

export default router
