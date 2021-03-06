import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

import routes from 'src/routes'

const router = new VueRouter({
  hashbang: false,
  mode: 'history',
  linkActiveClass: 'is-active',
  routes
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
