import Vue from 'vue'
import Router from 'vue-router'
import test from "@/components/test/test.vue";//测试页面主页
import homePage from '@/components/view/homePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
