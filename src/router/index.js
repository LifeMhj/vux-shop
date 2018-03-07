import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Category from '@/components/category/category'
import Cart from '@/components/cart/cart'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          redirect: '/home'
      },
      {
          path: '/home',
          component: Home,
      },
      {
          path: '/cart',
          component: Cart,
      }
  ]
})
