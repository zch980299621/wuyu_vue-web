import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/auth/login.vue'
import Home from '../pages/Home.vue'
import Console from '../components/console/console.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    { path: '/Home', component: Home},
    { path: '/', redirect: '/Home' },
    { path: '/login', component: Login },
    { path: '/console', component: Console },
  ]
})
