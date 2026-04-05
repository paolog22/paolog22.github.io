<template>
  <section id="skills" class="py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="section-header">
        <div class="section-icon bg-blue-900/50 text-blue-400">🌲</div>
        <div>
          <h2 class="pixel-font text-blue-400 text-sm md:text-base glow-blue">SKILL TREE</h2>
          <p class="text-slate-500 text-sm mt-1">Abilities unlocked over 9+ years</p>
        </div>
      </div>

      <!-- Skill Categories -->
      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="category in skillCategories"
          :key="category.name"
          class="game-card p-6"
        >
          <div class="flex items-center gap-3 mb-5">
            <span class="text-xl">{{ category.icon }}</span>
            <h3 class="font-semibold text-lg" :class="category.titleColor">{{ category.name }}</h3>
            <span class="ml-auto pixel-font text-xs text-slate-500" style="font-size: 0.55rem;">
              LVL {{ category.level }}
            </span>
          </div>

          <div class="space-y-4">
            <div v-for="skill in category.skills" :key="skill.name">
              <div class="flex justify-between text-sm mb-1">
                <span class="text-slate-300">{{ skill.name }}</span>
                <span class="text-slate-500 text-xs">{{ skill.level }}/100</span>
              </div>
              <div class="skill-bar-track">
                <div
                  class="skill-bar-fill"
                  :class="category.barColor"
                  :style="{ width: mounted ? skill.level + '%' : '0%' }"
                />
              </div>
              <div class="flex flex-wrap gap-1 mt-1">
                <span
                  v-for="sub in skill.subs"
                  :key="sub"
                  class="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400"
                >
                  {{ sub }}
                </span>
              </div>
            </div>
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
      mounted: false,
      skillCategories: [
        {
          name: 'Frontend',
          icon: '🎨',
          level: 95,
          titleColor: 'text-green-400',
          barColor: 'bg-green-500',
          skills: [
            { name: 'Vue.js / Nuxt', level: 95, subs: ['Vue 2/3', 'Vuex', 'Pinia', 'Nuxt'] },
            { name: 'JavaScript / TypeScript', level: 92, subs: ['ES6+', 'TypeScript', 'Webpack', 'Vite'] },
            { name: 'Styling', level: 88, subs: ['Tailwind CSS', 'Vuetify', 'Bootstrap', 'CSS3'] },
            { name: 'PWA', level: 85, subs: ['Service Workers', 'Offline-first'] }
          ]
        },
        {
          name: 'Backend',
          icon: '⚙',
          level: 90,
          titleColor: 'text-blue-400',
          barColor: 'bg-blue-500',
          skills: [
            { name: 'Java / Spring Boot', level: 88, subs: ['Spring Boot', 'Microservices'] },
            { name: 'PHP / Laravel', level: 90, subs: ['Laravel', 'REST APIs'] },
            { name: 'Node.js', level: 85, subs: ['Express', 'NestJs', 'AdonisJs'] },
            { name: 'Databases', level: 87, subs: ['MySQL', 'PostgreSQL', 'MongoDB', 'MS SQL'] }
          ]
        },
        {
          name: 'Mobile',
          icon: '📱',
          level: 78,
          titleColor: 'text-purple-400',
          barColor: 'bg-purple-500',
          skills: [
            { name: 'Flutter', level: 75, subs: ['Dart', 'Cross-platform'] },
            { name: 'Hybrid / Bridge', level: 80, subs: ['CapacitorJS', 'NativeScript'] },
            { name: 'PWA Mobile', level: 85, subs: ['iOS', 'Android', 'Native wrappers'] }
          ]
        },
        {
          name: 'DevOps & Cloud',
          icon: '☁',
          level: 82,
          titleColor: 'text-orange-400',
          barColor: 'bg-orange-500',
          skills: [
            { name: 'AWS', level: 82, subs: ['EC2', 'S3', 'RDS'] },
            { name: 'Containers', level: 85, subs: ['Docker', 'Kubernetes'] },
            { name: 'CI/CD', level: 80, subs: ['Jenkins', 'Ansible', 'GitHub Actions'] },
            { name: 'Linux', level: 88, subs: ['Ubuntu', 'Server Admin', 'Shell'] }
          ]
        }
      ]
    }
  },
  mounted () {
    setTimeout(() => {
      this.mounted = true
    }, 300)
  }
}
</script>
