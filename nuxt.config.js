export default {
  ssr: false,
  target: 'static',

  head: {
    title: 'Paolo Garcia | Senior Full Stack Developer — 9+ Years Experience',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Paolo Garcia — Senior Full Stack Developer with 9+ years building web & mobile apps. Expert in Vue.js, Nuxt, Spring Boot, Laravel, Node.js, AWS, Docker. Open to opportunities in Europe & Germany.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#0f172a' },
      { name: 'author', content: 'Paolo Garcia' },
      { name: 'keywords', content: 'Paolo Garcia, Full Stack Developer, Senior Developer, Vue.js, Nuxt.js, Spring Boot, Laravel, Node.js, AWS, Docker, Kubernetes, TypeScript, JavaScript, PHP, Java, Flutter, portfolio, software engineer, web developer, Philippines, Germany' },
      { name: 'robots', content: 'index, follow' },

      // Open Graph
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://paolog22.github.io/' },
      { hid: 'og:title', property: 'og:title', content: 'Paolo Garcia | Senior Full Stack Developer — 9+ Years Experience' },
      { hid: 'og:description', property: 'og:description', content: 'Gamified developer portfolio — 9+ years crafting web & mobile experiences with Vue.js, Spring Boot, Laravel, Node.js, AWS, Docker.' },
      { hid: 'og:image', property: 'og:image', content: 'https://paolog22.github.io/og-image.png' },
      { property: 'og:site_name', content: 'Paolo Garcia Portfolio' },
      { property: 'og:locale', content: 'en_US' },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Paolo Garcia | Senior Full Stack Developer' },
      { name: 'twitter:description', content: 'Gamified developer portfolio — 9+ years crafting web & mobile experiences with Vue.js, Spring Boot, Laravel, Node.js, AWS, Docker.' },
      { name: 'twitter:image', content: 'https://paolog22.github.io/og-image.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://paolog22.github.io/' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@300;400;500;600;700&display=swap' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css' }
    ],
    script: [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Paolo Garcia',
          url: 'https://paolog22.github.io',
          jobTitle: 'Senior Full Stack Developer',
          description: 'Senior Full Stack Developer with 9+ years of experience in Vue.js, Spring Boot, Laravel, Node.js, AWS, and Docker.',
          email: 'garciapaolo22@gmail.com',
          telephone: '+639277908766',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Cabanatuan City',
            addressRegion: 'Nueva Ecija',
            addressCountry: 'PH'
          },
          sameAs: [
            'https://github.com/paolog22'
          ],
          knowsAbout: [
            'Vue.js', 'Nuxt.js', 'JavaScript', 'TypeScript', 'Spring Boot', 'Java',
            'Laravel', 'PHP', 'Node.js', 'Express', 'NestJS', 'AWS', 'Docker',
            'Kubernetes', 'MySQL', 'PostgreSQL', 'MongoDB', 'Flutter', 'REST API',
            'CI/CD', 'Agile', 'Microservices', 'PWA'
          ],
          alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: 'AMA Computer College, Cabanatuan'
          },
          hasCredential: [
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'CCNA Exploration: Network Fundamentals',
              credentialCategory: 'Cisco Certification',
              dateCreated: '2013-03-15'
            },
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'CCNA Exploration: Routing Protocols and Concepts',
              credentialCategory: 'Cisco Certification',
              dateCreated: '2014-01-15'
            },
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'CCNA Exploration: LAN Switching and Wireless',
              credentialCategory: 'Cisco Certification',
              dateCreated: '2014-03-27'
            },
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'CCNA Routing and Switching: Connecting Networks',
              credentialCategory: 'Cisco Certification',
              dateCreated: '2015-07-27'
            }
          ],
          worksFor: {
            '@type': 'Organization',
            name: 'Available for hire'
          }
        }
      },
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Paolo Garcia Portfolio',
          url: 'https://paolog22.github.io',
          description: 'Gamified portfolio of Paolo Garcia, Senior Full Stack Developer with 9+ years of experience.'
        }
      }
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
      name: 'Paolo Garcia — Senior Full Stack Developer',
      short_name: 'PaoloG',
      description: 'Gamified portfolio of Paolo Garcia, Senior Full Stack Developer with 9+ years of experience.',
      theme_color: '#0f172a',
      background_color: '#0f172a',
      lang: 'en'
    },
    meta: {
      name: 'Paolo Garcia Portfolio',
      author: 'Paolo Garcia',
      description: 'Senior Full Stack Developer with 9+ years of experience.',
      theme_color: '#0f172a',
      ogHost: 'https://paolog22.github.io'
    }
  },

  generate: {
    fallback: '404.html'
  },

  build: {}
}
