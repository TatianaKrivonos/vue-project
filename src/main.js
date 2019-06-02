import Vue from 'vue'
import Vuelidate from 'vuelidate'

import App from './App.vue'
import colorDirective from './color'
import List from './List.vue'

Vue.use(Vuelidate)

Vue.filter('upperCase', (val) => val.toUpperCase())

Vue.directive('colored', colorDirective)

Vue.component('app-list', List)

Vue.mixin({
  beforeCreate() {
    console.log('beforeCreate')
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})

