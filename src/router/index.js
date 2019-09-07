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
import Icon from '../components/console/products/icon/icon.vue'
import Help from '../components/console/products/help/help.vue'

import Applications from '../components/console/applications/applications.vue'
import Overview from  '../components/console/applications/overview/overview.vue'
import Analysis from '../components/console/applications/analysis/analysis.vue'

import Party from '../components/console/party/party.vue'
import Orgs from '../components/console/party/orgs/orgs.vue'
import News from '../components/console/news/news.vue'
import Settings from '../components/console/settings/settings.vue'

import DeiveDetail from '../components/console/products/devices/device-detail.vue'

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
              component: Devices,
              children:[
                {
                  path: '/console/products/:product_id/devices/:id',
                  component:DeiveDetail,
                }
              ]
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
              path: '/console/products/icon',
              component: Icon
            },
            {
              path: '/console/products/help',
              component: Help
            },
          ]
        },
        {
          path: '/console/applications',
          component: Applications,
          children:[
            {
              path: '/console/applications/overview',
              component: Overview
            },
            {
              path: '/console/applications/analysis',
              component: Analysis
            },
          ]
        },
        {
          path: '/console/party',
          component: Party,
          children:[
            {
              path: '/console/party/orgs',
              component: Orgs
            },
          ]
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
  ],
})
