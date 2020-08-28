import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#4486a0',
        secondary: '#e00428',
        accent: '#e39d23',
      },
    },
  },
});
