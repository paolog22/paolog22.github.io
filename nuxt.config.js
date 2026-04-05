export default {
  ssr: false,
  target: 'static',

  head: {
    title: 'Paolo Garcia | Senior Full Stack Developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Paolo Garcia — Senior Full Stack Developer with 9+ years of experience. Vue.js, Spring Boot, Laravel, Node.js, AWS, Docker.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#0f172a' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@300;400;500;600;700&display=swap' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css' }
    ]
  },

  css: [
    '~/assets/css/main.css'
  ],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    '@nuxtjs/pwa'
  ],

  pwa: {
    manifest: {
      name: 'Paolo Garcia Portfolio',
      short_name: 'PaoloG',
      theme_color: '#0f172a',
      background_color: '#0f172a'
    }
  },

  generate: {
    fallback: '404.html'
  },

  build: {}
}
