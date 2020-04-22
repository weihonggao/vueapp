import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transitionName: '',
  },
  mutations: {
    transitionName_M(state, value) {
      state.transitionName = value
    }
  },
  actions: {
    transitionName_A({commit}, name) {
      commit ('transitionName_M', name)
    }
  },
  getters: {
    transitionName: state => state.transitionName,
  },
  modules: {}
})
