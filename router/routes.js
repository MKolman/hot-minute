module.exports = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Index.vue'),
  },
  {
    path: '/selector',
    name: 'Select Activity',
    component: () => import('../pages/Selector.vue'),
  },
  {
    path: '/play/bomb',
    name: 'Bomb',
    component: () => import('../pages/play/Bomb.vue'),
  },
  {
    path: '/play/:type(speak|draw|show)',
    name: 'Play',
    component: () => import('../pages/play/Play.vue'),
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
    component: () => import('../pages/About.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../pages/Settings.vue'),
  },
  {
    path: '/rules',
    name: 'Rules',
    component: () => import('../pages/Rules.vue'),
  },
  {
    path: '/import',
    name: 'Import',
    component: () => import('../pages/Import.vue'),
  },
];
