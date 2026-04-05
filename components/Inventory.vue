<template>
  <section id="inventory" class="py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="section-header">
        <div class="section-icon bg-cyan-900/50 text-cyan-400">💼</div>
        <div>
          <h2 class="pixel-font text-cyan-400 text-sm md:text-base" style="text-shadow: 0 0 10px rgba(6,182,212,0.5);">INVENTORY</h2>
          <p class="text-slate-500 text-sm mt-1">Tools &amp; technologies equipped</p>
        </div>
      </div>

      <!-- Category tabs -->
      <div class="flex flex-wrap gap-2 mb-8">
        <button
          v-for="cat in categories"
          :key="cat"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
          :class="activeCategory === cat
            ? 'bg-cyan-600 text-white'
            : 'bg-slate-800 text-slate-400 hover:text-slate-300 hover:bg-slate-700'"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Inventory Grid -->
      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        <div
          v-for="item in filteredItems"
          :key="item.name"
          class="inventory-slot"
          :title="item.name"
        >
          <div class="text-2xl mb-2 flex items-center justify-center h-8">
            <i v-if="item.devicon" :class="item.devicon" style="font-size: 1.75rem;" />
            <span v-else>{{ item.icon }}</span>
          </div>
          <div class="text-xs text-slate-300 font-medium leading-tight">{{ item.name }}</div>
          <div class="mt-1">
            <div
              v-for="i in 5"
              :key="i"
              class="inline-block w-1.5 h-1.5 rounded-full mx-px"
              :class="i <= item.stars ? starColor(item.category) : 'bg-slate-700'"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      activeCategory: 'All',
      categories: ['All', 'Frontend', 'Backend', 'Mobile', 'DevOps', 'Database', 'Tools'],
      items: [
        // Frontend
        { name: 'Vue.js', devicon: 'devicon-vuejs-plain colored', stars: 5, category: 'Frontend' },
        { name: 'Nuxt', devicon: 'devicon-nuxtjs-plain colored', stars: 5, category: 'Frontend' },
        { name: 'JavaScript', devicon: 'devicon-javascript-plain colored', stars: 5, category: 'Frontend' },
        { name: 'TypeScript', devicon: 'devicon-typescript-plain colored', stars: 4, category: 'Frontend' },
        { name: 'Tailwind', devicon: 'devicon-tailwindcss-plain colored', stars: 5, category: 'Frontend' },
        { name: 'Vuetify', devicon: 'devicon-vuetify-plain colored', stars: 4, category: 'Frontend' },
        { name: 'HTML5', devicon: 'devicon-html5-plain colored', stars: 5, category: 'Frontend' },
        { name: 'CSS3', devicon: 'devicon-css3-plain colored', stars: 5, category: 'Frontend' },
        { name: 'Webpack', devicon: 'devicon-webpack-plain colored', stars: 4, category: 'Frontend' },
        { name: 'Vite', devicon: 'devicon-vitejs-plain colored', stars: 4, category: 'Frontend' },
        { name: 'jQuery', devicon: 'devicon-jquery-plain colored', stars: 4, category: 'Frontend' },
        { name: 'Bootstrap', devicon: 'devicon-bootstrap-plain colored', stars: 4, category: 'Frontend' },
        // Backend
        { name: 'Spring', devicon: 'devicon-spring-plain colored', stars: 4, category: 'Backend' },
        { name: 'Laravel', devicon: 'devicon-laravel-original colored', stars: 5, category: 'Backend' },
        { name: 'Express', devicon: 'devicon-express-original', stars: 4, category: 'Backend' },
        { name: 'NestJs', devicon: 'devicon-nestjs-original colored', stars: 4, category: 'Backend' },
        { name: 'AdonisJs', devicon: 'devicon-adonisjs-original colored', stars: 3, category: 'Backend' },
        { name: 'Node.js', devicon: 'devicon-nodejs-plain colored', stars: 5, category: 'Backend' },
        { name: 'GraphQL', devicon: 'devicon-graphql-plain colored', stars: 3, category: 'Backend' },
        { name: 'Firebase', devicon: 'devicon-firebase-plain colored', stars: 4, category: 'Backend' },
        // Mobile
        { name: 'Flutter', devicon: 'devicon-flutter-plain colored', stars: 4, category: 'Mobile' },
        { name: 'Dart', devicon: 'devicon-dart-plain colored', stars: 4, category: 'Mobile' },
        { name: 'Android', devicon: 'devicon-android-plain colored', stars: 4, category: 'Mobile' },
        { name: 'Apple', devicon: 'devicon-apple-original', stars: 4, category: 'Mobile' },
        // DevOps
        { name: 'Docker', devicon: 'devicon-docker-plain colored', stars: 4, category: 'DevOps' },
        { name: 'Kubernetes', devicon: 'devicon-kubernetes-plain colored', stars: 3, category: 'DevOps' },
        { name: 'AWS', devicon: 'devicon-amazonwebservices-plain-wordmark colored', stars: 4, category: 'DevOps' },
        { name: 'Jenkins', devicon: 'devicon-jenkins-plain colored', stars: 4, category: 'DevOps' },
        { name: 'Ansible', devicon: 'devicon-ansible-plain colored', stars: 3, category: 'DevOps' },
        { name: 'Linux', devicon: 'devicon-linux-plain', stars: 5, category: 'DevOps' },
        { name: 'Ubuntu', devicon: 'devicon-ubuntu-plain colored', stars: 5, category: 'DevOps' },
        { name: 'Bash', devicon: 'devicon-bash-plain', stars: 4, category: 'DevOps' },
        // Database
        { name: 'MySQL', devicon: 'devicon-mysql-plain colored', stars: 5, category: 'Database' },
        { name: 'PostgreSQL', devicon: 'devicon-postgresql-plain colored', stars: 4, category: 'Database' },
        { name: 'MongoDB', devicon: 'devicon-mongodb-plain colored', stars: 4, category: 'Database' },
        { name: 'MS SQL', devicon: 'devicon-microsoftsqlserver-plain colored', stars: 3, category: 'Database' },
        // Tools
        { name: 'Git', devicon: 'devicon-git-plain colored', stars: 5, category: 'Tools' },
        { name: 'GitHub', devicon: 'devicon-github-original', stars: 5, category: 'Tools' },
        { name: 'JIRA', devicon: 'devicon-jira-plain colored', stars: 4, category: 'Tools' },
        { name: 'Cloudflare', devicon: 'devicon-cloudflare-plain colored', stars: 4, category: 'Tools' },
        { name: 'npm', devicon: 'devicon-npm-original-wordmark colored', stars: 5, category: 'Tools' },
        { name: 'VS Code', devicon: 'devicon-vscode-plain colored', stars: 5, category: 'Tools' }
      ]
    }
  },
  computed: {
    filteredItems () {
      if (this.activeCategory === 'All') { return this.items }
      return this.items.filter(i => i.category === this.activeCategory)
    }
  },
  methods: {
    starColor (category) {
      const colors = {
        Frontend: 'bg-green-400',
        Backend: 'bg-blue-400',
        Mobile: 'bg-purple-400',
        DevOps: 'bg-orange-400',
        Database: 'bg-cyan-400',
        Tools: 'bg-yellow-400'
      }
      return colors[category] || 'bg-slate-400'
    }
  }
}
</script>

<style scoped>
.inventory-slot i {
  color: #94a3b8;
}

.inventory-slot i.colored {
  color: inherit;
}

.inventory-slot:hover i {
  filter: brightness(1.2);
}
</style>
