import Vue from 'vue'
import App from './App.vue'
import colorDirective from './color'

Vue.filter('upperCase', (val) => val.toUpperCase())

Vue.directive('colored', colorDirective)

new Vue({
  el: '#app',
  render: h => h(App)
})

