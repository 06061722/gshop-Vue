import Vue from 'vue'
import { Button } from 'mint-ui'
import App from './app.vue'
import router from './router/index.js'
import store from './store/store.js'
import './mock/mockServer.js'


Vue.component(Button.name, Button)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})