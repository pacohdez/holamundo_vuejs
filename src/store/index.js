import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter:0
  },
  mutations: {
    increment (state,cant){
      state.counter += cant;
    },
    decrement (state){
      state.counter -= 1;
    }
  }
})
