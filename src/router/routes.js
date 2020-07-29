module.exports = [
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
    meta: {
      sitemap: {
        slugs: [
          {
            type: 'speak',
            title: 'speak',
          },
          {
            type: 'draw',
            title: 'draw',
          },
          {
            type: 'show',
            title: 'show',
          },
        ],
      },
    },
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
