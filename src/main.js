import Vue from 'vue'
import { Button } from 'mint-ui'
import App from './app.vue'
import router from './router/index.js'
import store from './store/store.js'
import './mock/mockServer.js'
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'
import './fliters/index.js'

Vue.component(Button.name, Button)
Vue.use(VueLazyload, {
  loading
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})