const routes = require('./src/router/routes');

const page = {
  entry: 'src/main.ts',
  template: 'public/index.html',
  title: 'Hot Minute',
};

module.exports = {
  pages: {
    index: {
      ...page,
      filename: 'index.html',
    },
    bomb: {
      ...page,
      filename: 'play/bomb.html',
    },
    draw: {
      ...page,
      filename: 'play/draw.html',
    },
    show: {
      ...page,
      filename: 'play/show.html',
    },
    speak: {
      ...page,
      filename: 'play/speak.html',
    },
    rules: {
      ...page,
      filename: 'rules.html',
    },
    settings: {
      ...page,
      filename: 'settings.html',
    },
    import: {
      ...page,
      filename: 'import.html',
    },
    about: {
      ...page,
      filename: 'about.html',
    },
  },
  publicPath: '/',
  transpileDependencies: [
    'vuetify',
  ],
  pwa: {
    name: 'Hot Minute',
    themeColor: '#e39d23',
    msTileColor: '#e39d23',
    manifestOptions: {
      orientation: 'portrait',
      background_color: '#efefef',
      icons: [
        {
          src: 'img/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'img/icons/maskable-android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: 'img/icons/maskable-android-chrome-152x152.png',
          sizes: '152x152',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/mstile-150x150.png',
    },
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'google-fonts-webfonts',
          },
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-webfonts',
          },
        },
        {
          urlPattern: /^https:\/\/cdn\.jsdelivr\.net/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'material-icons',
          },
        },
      ],
    },
  },
  chainWebpack: (config) => {
    config
      .module
      .rule('raw')
      .test(/(\.txt|arrow.svg)$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();
  },
  pluginOptions: {
    sitemap: {
      baseURL: 'https://hotminute.kolman.si',
      routes,
    },
  },
};
