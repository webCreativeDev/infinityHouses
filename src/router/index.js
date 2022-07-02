import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Houses from '../views/Houses.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/houses',
      name: 'houses',
      component: Houses
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ]
})

export default router
