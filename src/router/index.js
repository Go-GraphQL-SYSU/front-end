import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Signout from '@/components/Signout'
import Signin from '@/components/Signin'
import search from '@/components/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/Signout',
      name: 'Signout',
      component: Signout
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
