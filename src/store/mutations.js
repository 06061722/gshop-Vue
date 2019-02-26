import {
  RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS,
  RECEIVE_USER_INFO, RESET_USER_INFO, RECEIVE_GOODS, RECEIVE_RATINGS,
  RECEIVE_INFO, INCRESE_FOOD_COUNT, DECRESE_FOOD_COUNT, CLEAR_CART, RECEIVE_SEARCH_SHOPS
} from "./mutation-types";
import Vue from "vue";

export default {
  [RECEIVE_ADDRESS](state, address) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, categorys) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, shops) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO](state, userInfo) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO](state) {
    state.userInfo = {}
  },
  [RECEIVE_GOODS](state, goods) {
    state.goods = goods
  },
  [RECEIVE_RATINGS](state, ratings, ) {
    state.ratings = ratings
  },
  [RECEIVE_INFO](state, info) {
    state.info = info
  },
  [INCRESE_FOOD_COUNT](state, food) {
    if (!food.count) {
      Vue.set(food, 'count', 1)
      state.cartFood.push(food)
    } else {
      food.count++
    }
  },
  [DECRESE_FOOD_COUNT](state, food) {
    if (food.count) {
      food.count--
      if (food.count === 0) {
        state.cartFood.pop(state.cartFood.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CART](state) {
    state.cartFood.forEach(food => food.count = 0);

    state.cartFood = []
  },
  [RECEIVE_SEARCH_SHOPS](state, searchShops) {
    state.searchShops = searchShops
  },
}