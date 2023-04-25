import { createStore } from 'vuex'
import { vmcodeModule } from './vmcodeModule'

export default createStore({
  state: {
    isAuth: false,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    vmcode: vmcodeModule
  }
})
