export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-progressive-web-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:wght@800;100;900&display=swap',
      },
    ],
  },

  target: 'static',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/variables.css', '@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (,recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },

  // Proxy config: https://www.npmjs.com/package/@nuxtjs/proxy

  proxy: {
    '/put': 'https://postman-echo.com',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      fileName: 'app-icon.png',
    },
    manifest: {
      name: 'Nuxt.js PWA',
      short_name: 'Nuxt.js PWA',
      lang: 'en',
    },
    workbox: {
      // Added script to Background Sync process
      cachingExtensions: '@plugins/workbox-sync',
      // GET requests for static data to store
      runtimeCaching: [
        {
          urlPattern: 'https://fonts.(?:googleapis|gstatic).com/(.*)',
          strategyOptions: {
            cacheName: 'font',
          },
        },
        {
          urlPattern: 'https://jsonplaceholder.typicode.com/users/1',
          strategyOptions: {
            cacheName: 'user-profile',
          },
        },
        {
          urlPattern: 'https://picsum.photos/id/1005/200',
          strategyOptions: {
            cacheName: 'user-photo',
          },
        },
      ],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Nuxt font awesome configuration
  fontawesome: {
    // Fetching just used icons
    icons: {
      solid: ['faBars', 'faTimes', 'faSortDown'],
      brands: ['faTwitter', 'faLinkedinIn', 'faFacebookF'],
    },
  },
}
