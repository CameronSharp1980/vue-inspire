import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Inspire from '@/components/Inspire'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inspire',
      component: Inspire
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
