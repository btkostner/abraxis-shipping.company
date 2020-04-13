export default {
  mode: 'spa',

  head: {
    title: 'Abraxis Shipping Company',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Abraxis Shipping Company' },
      { hid: 'msapplication', name: 'msapplication-TileColor', content: '' },
      { hid: 'theme', name: 'theme-color', content: '#2d2d2d' }
    ],

    link: [
      { rel: 'apple', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon-32', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon-16', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: {
    color: '#fff'
  },

  css: [
    '~/assets/styles/main.css'
  ]
}
