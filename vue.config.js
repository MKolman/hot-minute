module.exports = {
  publicPath: './',
  transpileDependencies: [
    'vuetify',
  ],
  pwa: {
    name: "Hot minute",
    themeColor: "#feb5ca",
    msTileColor: "#603cba",
    manifestOptions: {
      orientation: "portrait",
      background_color: "#fed5dd",
      icons: [
        {
          'src': 'img/icons/android-chrome-192x192.png',
          'sizes': '192x192',
          'type': 'image/png',
        },
        {
          'src': 'img/icons/android-chrome-512x512.png',
          'sizes': '512x512',
          'type': 'image/png',
        },
      ],
    },
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/mstile-150x150.png',
    }
  }
};