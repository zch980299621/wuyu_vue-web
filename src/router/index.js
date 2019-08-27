import Vue from 'vue'
import VueRouter from 'vue-router'

const Console = () => import('../components/console/console.vue')

import Login from '../components/auth/login.vue'
import Home from '../pages/Home.vue'
//console
import Products from  '../components/console/products/products.vue'
import List from '../components/console/products/list/list.vue'
import Devices from '../components/console/products/devices/devices.vue'
import Categories from '../components/console/products/categories/categories.vue'
import Rule from '../components/console/products/rule/rule.vue'
import Help from '../components/console/products/help/help.vue'

import Applications from '../components/console/applications/applications.vue'
import Party from '../components/console/party/party.vue'
import News from '../components/console/news/news.vue'
import Settings from '../components/console/settings/settings.vue'



Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass: 'active',
  routes:[
    { path: '/Home', component: Home},
    { path: '/', redirect: '/Home' },
    { path: '/login', component: Login },
    {
      path: '/console',
      component: Console,
      children: [
        {
          path: '/console/products',
          component: Products,
          children: [
            {
              path: '/console/products/list',
              component: List
            },
            {
              path: '/console/products/devices',
              component: Devices
            },
            {
              path: '/console/products/categories',
              component: Categories
            },
            {
              path: '/console/products/rule',
              component: Rule
            },
            {
              path: '/console/products/help',
              component: Help
            },
          ]
        },
        {
          path: '/console/applications',
          component: Applications
        },
        {
          path: '/console/party',
          component: Party
        },
        {
          path: '/console/news',
          component: News
        },
        {
          path: '/console/settings',
          component: Settings
        }
      ]
    },
  ]
})
