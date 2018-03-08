import Vue from 'vue'
import VDatatables from './lib/index.js'
Vue.use(VDatatables)

import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
