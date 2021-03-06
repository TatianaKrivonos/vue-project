import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import colorDirective from './color'
import List from './List.vue'
import router from './routes'

import store from './store'

Vue.use(Vuelidate)
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.filter('upperCase', (val) => val.toUpperCase())

Vue.directive('colored', colorDirective)

Vue.component('app-list', List)

Vue.http.options.root = 'http://localhost:3000/'
Vue.http.interceptors.push(request => {
  request.headers.set('Auth', 'RAND TOKEN ' + Math.random())
})

Vue.mixin({
  beforeCreate() {
    console.log('beforeCreate')
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})

