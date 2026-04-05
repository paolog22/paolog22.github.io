<template>
  <section id="hero" class="min-h-screen flex items-center justify-center relative px-4 py-20">
    <!-- Floating particles -->
    <div
      v-for="i in 12"
      :key="i"
      class="particle"
      :style="{
        left: `${(i * 8.3) % 100}%`,
        animationDelay: `${i * 0.7}s`,
        animationDuration: `${6 + (i % 4)}s`,
        background: i % 3 === 0 ? '#22c55e' : i % 3 === 1 ? '#3b82f6' : '#a855f7'
      }"
    />

    <div class="max-w-4xl w-full">
      <!-- Character Card -->
      <div class="game-card p-8 md:p-12">
        <!-- Status bar top -->
        <div class="flex items-center justify-between mb-6 text-xs text-gray-500">
          <span class="pixel-font" style="font-size: 0.6rem;">LVL 9+ &nbsp;SENIOR FULL STACK DEVELOPER</span>
          <span class="pixel-font text-green-400" style="font-size: 0.6rem;">● ONLINE</span>
        </div>

        <!-- Name & Title -->
        <div class="mb-8">
          <h1 class="pixel-font text-green-400 text-xl md:text-3xl mb-4 glow-green">
            {{ displayedName }}
            <span v-if="isTyping" class="typing-cursor" />
          </h1>
          <p class="text-xl md:text-2xl text-slate-300 font-light">
            Senior Full Stack Developer
          </p>
          <p class="text-slate-500 mt-2">
            9+ years crafting web &amp; mobile experiences
          </p>
        </div>

        <!-- XP Bar -->
        <div class="mb-8">
          <div class="flex justify-between text-xs text-slate-400 mb-2">
            <span>EXP</span>
            <span class="text-green-400">{{ xpYears }} / 10 years</span>
          </div>
          <div class="xp-bar-track">
            <div class="xp-bar-fill" :style="{ width: xpWidth + '%' }" />
          </div>
        </div>

        <!-- Stats Row -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center p-3 rounded-lg bg-slate-800/50">
            <div class="text-2xl mb-1">{{ stat.icon }}</div>
            <div class="text-lg font-bold" :class="stat.color">{{ stat.value }}</div>
            <div class="text-xs text-slate-500">{{ stat.label }}</div>
          </div>
        </div>

        <!-- Quick Tags -->
        <div class="flex flex-wrap gap-2 mb-8">
          <span
            v-for="tag in tags"
            :key="tag.text"
            class="achievement-badge"
            :class="tag.class"
          >
            {{ tag.icon }} {{ tag.text }}
          </span>
        </div>

        <!-- CTA -->
        <div class="flex flex-wrap gap-4">
          <a
            href="#quests"
            class="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-green-600/25"
          >
            &#9655; View Quest Log
          </a>
          <a
            href="#contact"
            class="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-green-500 text-slate-300 hover:text-green-400 rounded-lg font-medium transition-all"
          >
            &#9993; Send Message
          </a>
          <a
            href="https://github.com/paolog22"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 rounded-lg font-medium transition-all"
          >
            GitHub
          </a>
        </div>
      </div>

      <!-- Scroll hint -->
      <div class="text-center mt-8 text-slate-600 animate-bounce">
        <span class="pixel-font" style="font-size: 0.6rem;">&#9660; SCROLL TO EXPLORE &#9660;</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      displayedName: '',
      fullName: 'PAOLO GARCIA',
      isTyping: true,
      xpYears: 0,
      xpWidth: 0,
      stats: [
        { icon: '&#128187;', value: '9+', label: 'Years EXP', color: 'text-green-400' },
        { icon: '&#127919;', value: '6', label: 'Companies', color: 'text-blue-400' },
        { icon: '&#128640;', value: '15+', label: 'Projects', color: 'text-purple-400' },
        { icon: '&#127942;', value: '4', label: 'Cisco Certs', color: 'text-yellow-400' }
      ],
      tags: [
        { icon: '&#9889;', text: 'Vue.js Expert', class: 'text-green-400 border-green-800 bg-green-950' },
        { icon: '&#9881;', text: 'Spring Boot', class: 'text-blue-400 border-blue-800 bg-blue-950' },
        { icon: '&#128156;', text: 'Laravel', class: 'text-red-400 border-red-800 bg-red-950' },
        { icon: '&#9729;', text: 'AWS / Docker', class: 'text-orange-400 border-orange-800 bg-orange-950' },
        { icon: '&#128241;', text: 'Mobile Dev', class: 'text-cyan-400 border-cyan-800 bg-cyan-950' }
      ]
    }
  },
  mounted () {
    this.typeWriter()
    setTimeout(() => {
      this.animateXP()
    }, 500)
  },
  methods: {
    typeWriter () {
      let i = 0
      const interval = setInterval(() => {
        if (i < this.fullName.length) {
          this.displayedName += this.fullName.charAt(i)
          i++
        } else {
          this.isTyping = false
          clearInterval(interval)
        }
      }, 80)
    },
    animateXP () {
      const target = 9
      const duration = 1500
      const steps = 30
      const increment = target / steps
      let current = 0
      const interval = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(interval)
        }
        this.xpYears = Math.round(current)
        this.xpWidth = (current / 10) * 100
      }, duration / steps)
    }
  }
}
</script>
