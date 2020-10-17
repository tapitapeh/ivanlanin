
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mesin Pencari Tweet Ivan Lanin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mesin pencari tweet Bahasa Indonesia dari Twitter Ivan Lanin (@ivanlanin)' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',

    // Uncomment this kalau nak guna GA
    // Doc : https://github.com/nuxt-community/analytics-module
    ['@nuxtjs/google-analytics', {
      id: 'UA-127417237-2'
    }],

    '@nuxtjs/pwa'
  ],
  pwa: {
    meta: {
      title: 'Ivan Lanin Bahasa Indonesia',
      author: 'achan.id',
    },
    manifest: {
      name: 'Ivan Lanin Bahasa Indonesia',
      short_name: 'Ivan Lanin',
      lang: 'id',
    },
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
