import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import VueFontAwesomeCss from 'vue-fontawesome-css'



Vue.use(ElementUI)
Vue.use(VueFontAwesomeCss)
new Vue({
  el: '#app',
  render : h => h(App),
  router,
})
