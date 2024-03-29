export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DoIt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/reset.css',
    '@/assets/styles/animation.scss',
    '@/assets/styles/styles.scss',
    '@/assets/styles/plugins/swiper-bundle.css',
    '@/node_modules/vue-select/dist/vue-select.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vuelidate.js' },
    { src: '@/plugins/vcalendar.js', ssr: false },
    { src: '@/plugins/vue-awesome-swiper.js', mode: 'client', ssr: false },
    { src: '@/plugins/api.js' },
    { src: '@/plugins/axios.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    [
      '@nuxtjs/eslint-module', {}
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    '@nuxtjs/auth-next',

    // nuxt firebase
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyBIm7RzKFJIFAPI3TT56c0oZ9q9Gzo4T6k',
          authDomain: 'spacelab-proj-doit.firebaseapp.com',
          projectId: 'spacelab-proj-doit',
          storageBucket: 'spacelab-proj-doit.appspot.com',
          messagingSenderId: '989453622302',
          appId: '1:989453622302:web:e681c58ba29bb23f9de20f'
        },
        services: {
          auth: {
            initialize: {
              onAuthStateChangedAction: 'getCurrentUser',
            },
            ssr: true
          },
          storage: true,
          firestore: {
            ssr: true
          },
        }
      }
    ]
  ],

  // nuxt auth
  auth: {
    strategies: {
      custom: {
        scheme: '~/schemes/custom',
        token: {
          property: 'idToken',
          type: ''
        },
        user: {
          property: 'users'
        },
        endpoints: {
          login: {
            url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBIm7RzKFJIFAPI3TT56c0oZ9q9Gzo4T6k',
            method: 'post',
            propertyName: 'idToken'
          },
          user: {
            url: 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBIm7RzKFJIFAPI3TT56c0oZ9q9Gzo4T6k',
            method: 'post',
            propertyName: 'users',
            },
        }
      }
    },
    redirect: {
      login: '/',
      logout: '/login'
    }
  },

  router: {
    middleware: ['auth', 'admin'] // auth: false for specific component, guest for home redirect
  },

  loading: '~/components/loading.vue',

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    credentials: true,
    https: true
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    },
  },

  render: {
    bundleRenderer: {
      runInNewContext: false
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['v-calendar']
  },

  devtools: true
}
