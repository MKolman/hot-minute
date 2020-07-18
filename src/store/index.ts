import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    animationTimeS: 15.0,
    bombProbability: 0.15,
    score: 0,
    timer: 60,
  },
  mutations: {
    updateAnimationTimeS(state, value) {
      state.animationTimeS = value;
    },
    updateBombProbability(state, value) {
      state.bombProbability = value;
    },
    updateScore(state, value) {
      state.score = value;
    },
    updateTimer(state, value) {
      state.timer = value;
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [new VuexPersistence().plugin],
});
