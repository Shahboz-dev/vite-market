import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/Main.vue'
import CurrentProduct from '../components/CurrentProduct.vue'

const routes = [
    {
      path: '/',
      component: Main
    },
    {
      path: '/:id',
      component: CurrentProduct
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
