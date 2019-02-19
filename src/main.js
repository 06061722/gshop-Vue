import Vue from 'vue'
import App from './app.vue'
import router from './router/index.js'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})