import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);
const selectedWordListsDefault = [
  '/root/bomb/rock.txt',
  // '/root/bomb/Billboard/1990s.txt',
  '/root/bomb/Billboard/2000s.txt',
  '/root/bomb/Billboard/2010s.txt',
  // '/root/draw/dangelov/easy.txt',
  '/root/draw/dangelov/hard.txt',
  '/root/draw/dangelov/medium.txt',
  '/root/draw/dangelov/objects.txt',
  // '/root/draw/dangelov/persons.txt',
  // '/root/draw/dangelov/verbs.txt',
  '/root/show/FamousRealOrFictionalCharacters.txt',
  '/root/show/charades_stolen.txt',
  '/root/show/movies.txt',
  '/root/speak/idioms.txt',
  '/root/speak/nehasinha_taboo.txt',
  '/root/speak/pavlas_words.txt',
] as string[];
export default new Vuex.Store({
  state: {
    animationTimeS: 15.0,
    bombProbability: 0.15,
    scores: [] as any[],
    timer: 60,
    selectedWordlists: selectedWordListsDefault,
  },
  mutations: {
    updateSelectedWordlists(state, value) {
      state.selectedWordlists = value;
    },
    updateAnimationTimeS(state, value) {
      state.animationTimeS = value;
    },
    updateBombProbability(state, value) {
      state.bombProbability = value;
    },
    updateScores(state, value) {
      state.scores = value;
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
