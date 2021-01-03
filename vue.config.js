const routes = require('./src/router/routes');

module.exports = {
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
    },
    bomb: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'play/bomb.html',
    },
    draw: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'play/draw.html',
    },
    show: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'play/show.html',
    },
    speak: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'play/speak.html',
    },
    rules: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'rules.html',
    },
    settings: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'settings.html',
    },
    import: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'import.html',
    },
    about: {
      entry: 'src/main.ts',
      template: 'public/index.html',
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
    // config
    //   .plugin('html')
    //   .tap((args) => {
    //     args[0].title = 'Hot Minute';
    //     return args;
    //   });

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
