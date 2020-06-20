import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/view/homePage.vue'
import login from '@/components/view/Login'
import registered from '@/components/view/Registered'
import description from '@/components/view/Description'
import adminSwagger2 from '@/components/view/AdminSwagger2'
import publishBlog from '@/components/view/PublishBlog'
import userBlogs from '@/components/view/UserBlogs'
import blogListRefresh from '@/components/view/BlogListRefresh'

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
    },
    {
      path: '/description',
      name: 'description',
      component: description
    },
    {
      path: '/adminSwagger2',
      name: 'adminSwagger2',
      component: adminSwagger2
    },
    {
      path: '/publishBlog',
      name: 'publishBlog',
      component: publishBlog
    },
    {
      path: '/userBlogs',
      name: 'userBlogs',
      component: userBlogs
    },
    {
      path: '/blogListRefresh',
      name: 'blogListRefresh',
      component: blogListRefresh
    },
  ]
})
