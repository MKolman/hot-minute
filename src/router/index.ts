import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/selector',
    name: 'Select Activity',
    component: () => import('../views/Selector.vue'),
  },
  {
    path: '/play/bomb',
    name: 'Bomb',
    component: () => import('../views/Bomb.vue'),
  },
  {
    path: '/play/:type(speak|draw|show)',
    name: 'Play',
    component: () => import('../views/Play.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue'),
  },
  {
    path: '/rules',
    name: 'Rules',
    component: () => import('../views/Rules.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
