import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#e22a28',
        secondary: '#fd8ab3',
        accent: '#74cbe6',
      },
    },
  },
});
