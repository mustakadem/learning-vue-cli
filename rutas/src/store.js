import Vuex from 'vuex';
import Vue from 'vue'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    auth:true,
  },
  mutations:{
    cambiar:(state) => state.auth = !state.auth,
  }
});
