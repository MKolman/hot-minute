import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Selector from '../views/Selector.vue';
import Play from '../views/Play.vue';
import Bomb from '../views/Bomb.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/selector',
    name: 'Select Activity',
    component: Selector,
  },
  {
    path: '/play/bomb',
    name: 'Bomb',
    component: Bomb,
  },
  {
    path: '/play/:type(speak|draw|show)',
    name: 'Play',
    component: Play,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
