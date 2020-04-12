export default {
  mode: 'spa',

  head: {
    title: 'Abraxis Shipping Company',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Abraxis Shipping Company' }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: {
    color: '#fff'
  },

  css: [
    '~/assets/styles/main.css'
  ],

  plugins: [
    '~/plugins/router.js'
  ]
}
