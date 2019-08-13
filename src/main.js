import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'
import 'bootstrap'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render : h => h(App)
})
