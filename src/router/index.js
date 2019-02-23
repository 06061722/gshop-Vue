import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import shop from '../pages/shop/shop.vue'
import shopGoods from '../pages/shop/shopGoods/shopGoods.vue'
import shopRatings from '../pages/shop/shopRatings/shopRatings.vue'
import shopInfo from '../pages/shop/shopInfo/shopInfo.vue'
 

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/shop',
      component: shop,
      children: [
        {
          path: '/shop/goods',
          component: shopGoods
        },
        {
          path: '/shop/ratings',
          component: shopRatings
        },
        {
          path: '/shop/info',
          component: shopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        },
      ]
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})