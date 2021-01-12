import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import vuetify from './plugins/vuetify';
import store from './store';

// Google Analytics
Vue.use(VueAnalytics, {
  id: 'UA-42885055-6',
  autoTracking: {
    exception: process.env.NODE_ENV === 'production',
  },
  router,
});

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app');
