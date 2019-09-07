import Vue from 'vue'
import Vuex from 'vuex'
import state from  './state'
import mutation from  './mutation'
import action from  './action'
import getters from './getters'


Vue.use(Vuex)

export  default new Vuex.Store({
  state,
  mutation,
  action,
  getters
})
