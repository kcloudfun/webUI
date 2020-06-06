import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/view/homePage.vue'
import login from '@/components/view/Login'
import registered from '@/components/view/Registered'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/registered',
      name: 'registered',
      component: registered
    }
  ]
})
