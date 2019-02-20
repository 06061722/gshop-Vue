import Vue from 'vue'
import App from './app.vue'
import router from './router/index.js'
import store from './store/store.js'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})