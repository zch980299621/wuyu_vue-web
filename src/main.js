import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import VueFontAwesomeCss from 'vue-fontawesome-css'

//使用全局变量
import globalVariable from './components/common/global/global_variable/global_variable.js'
Vue.prototype.GLOBAL = globalVariable

Vue.use(ElementUI)
Vue.use(VueFontAwesomeCss)
new Vue({
  el: '#app',
  render : h => h(App),
  router,
})
