<template>
  <section id="inventory" class="py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="section-header">
        <div class="section-icon bg-cyan-900/50 text-cyan-400">&#128188;</div>
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
          <div class="text-2xl mb-2">{{ item.icon }}</div>
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
        { name: 'Vue.js', icon: '&#128154;', stars: 5, category: 'Frontend' },
        { name: 'Nuxt', icon: '&#9889;', stars: 5, category: 'Frontend' },
        { name: 'JavaScript', icon: '&#128311;', stars: 5, category: 'Frontend' },
        { name: 'TypeScript', icon: '&#128309;', stars: 4, category: 'Frontend' },
        { name: 'Tailwind', icon: '&#128168;', stars: 5, category: 'Frontend' },
        { name: 'Vuetify', icon: '&#127912;', stars: 4, category: 'Frontend' },
        { name: 'HTML5', icon: '&#128196;', stars: 5, category: 'Frontend' },
        { name: 'CSS3', icon: '&#127752;', stars: 5, category: 'Frontend' },
        { name: 'Webpack', icon: '&#128230;', stars: 4, category: 'Frontend' },
        { name: 'Vite', icon: '&#9889;', stars: 4, category: 'Frontend' },
        { name: 'jQuery', icon: '&#128279;', stars: 4, category: 'Frontend' },
        { name: 'Bootstrap', icon: '&#128302;', stars: 4, category: 'Frontend' },
        // Backend
        { name: 'Spring Boot', icon: '&#127811;', stars: 4, category: 'Backend' },
        { name: 'Laravel', icon: '&#128308;', stars: 5, category: 'Backend' },
        { name: 'Express', icon: '&#128423;', stars: 4, category: 'Backend' },
        { name: 'NestJs', icon: '&#128305;', stars: 4, category: 'Backend' },
        { name: 'AdonisJs', icon: '&#9670;', stars: 3, category: 'Backend' },
        { name: 'REST API', icon: '&#128640;', stars: 5, category: 'Backend' },
        { name: 'GraphQL', icon: '&#128312;', stars: 3, category: 'Backend' },
        { name: 'Firebase', icon: '&#128293;', stars: 4, category: 'Backend' },
        // Mobile
        { name: 'Flutter', icon: '&#128038;', stars: 4, category: 'Mobile' },
        { name: 'CapacitorJS', icon: '&#128267;', stars: 4, category: 'Mobile' },
        { name: 'NativeScript', icon: '&#128241;', stars: 3, category: 'Mobile' },
        { name: 'PWA', icon: '&#127760;', stars: 5, category: 'Mobile' },
        // DevOps
        { name: 'Docker', icon: '&#128051;', stars: 4, category: 'DevOps' },
        { name: 'Kubernetes', icon: '&#9784;', stars: 3, category: 'DevOps' },
        { name: 'AWS', icon: '&#9729;', stars: 4, category: 'DevOps' },
        { name: 'Jenkins', icon: '&#9881;', stars: 4, category: 'DevOps' },
        { name: 'Ansible', icon: '&#128295;', stars: 3, category: 'DevOps' },
        { name: 'Linux', icon: '&#128039;', stars: 5, category: 'DevOps' },
        { name: 'CI/CD', icon: '&#128257;', stars: 4, category: 'DevOps' },
        // Database
        { name: 'MySQL', icon: '&#128190;', stars: 5, category: 'Database' },
        { name: 'PostgreSQL', icon: '&#128024;', stars: 4, category: 'Database' },
        { name: 'MongoDB', icon: '&#127811;', stars: 4, category: 'Database' },
        { name: 'MS SQL', icon: '&#128202;', stars: 3, category: 'Database' },
        // Tools
        { name: 'Git', icon: '&#128200;', stars: 5, category: 'Tools' },
        { name: 'JIRA', icon: '&#128203;', stars: 4, category: 'Tools' },
        { name: 'Cloudflare', icon: '&#9729;', stars: 4, category: 'Tools' },
        { name: 'Agile', icon: '&#128640;', stars: 4, category: 'Tools' }
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
