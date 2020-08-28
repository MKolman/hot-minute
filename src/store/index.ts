import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);
const defaultValues = {
  selectedWordlists2: [
    '/root/bomb/rock.txt',
    '/root/bomb/2000s.txt',
    '/root/bomb/2010s.txt',
    '/root/speak/hard.txt',
    '/root/speak/medium.txt',
    '/root/draw/hard.txt',
    '/root/draw/medium.txt',
    '/root/show/hard.txt',
    '/root/show/medium.txt',
  ],
  animationTimeS: 10.0,
  bombProbability: 0.15,
  scores: [] as any[],
  timer: 60,
  enabledSounds2: [
    'bomb', 'selected', 'select', 'countdown', 'timesup', 'winner', 'flip',
    'activity_type',
  ],
  tutorialStep: 0,
  activityHistory: [0, 0, 0, 0],
};
export default new Vuex.Store({
  state: {
    animationTimeS: defaultValues.animationTimeS,
    bombProbability: defaultValues.bombProbability,
    scores: defaultValues.scores,
    timer: defaultValues.timer,
    selectedWordlists2: defaultValues.selectedWordlists2.slice(),
    enabledSounds2: defaultValues.enabledSounds2.slice(),
    tutorialStep: defaultValues.tutorialStep,
    activityHistory: defaultValues.activityHistory.slice(),
  },
  mutations: {
    tutorialStop(state) {
      state.tutorialStep = -1;
    },
    tutorialStart(state) {
      state.tutorialStep = 0;
    },
    tutorialNext(state) {
      if (state.tutorialStep < 0) return;
      state.tutorialStep += 1;
      if (state.tutorialStep > 12) state.tutorialStep = -1;
    },
    setDefault(state, name: string) {
      (state as any)[name] = (defaultValues as any)[name];
    },
    setDefaultAll(state) {
      const keys = Object.keys(defaultValues);
      for (let i = 0; i < keys.length; i += 1) {
        (state as any)[keys[i]] = (defaultValues as any)[keys[i]];
      }
    },
    updateEnabledSounds(state, value) {
      state.enabledSounds2 = value;
    },
    updateSelectedWordlists2(state, value) {
      state.selectedWordlists2 = value;
    },
    updateAnimationTimeS(state, value) {
      state.animationTimeS = value;
    },
    updateBombProbability(state, value) {
      state.bombProbability = value;
      state.activityHistory = defaultValues.activityHistory.slice();
    },
    updateScores(state, value) {
      state.scores = value;
    },
    updateTimer(state, value) {
      state.timer = value;
    },
    updateActivityHistory(state, pickedActivity) {
      state.activityHistory[pickedActivity] += 1;
      for (let i = 0; i < state.activityHistory.length; i += 1) {
        state.activityHistory[i] /= 2;
      }
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
});
