<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
    <div class="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
      <!-- Logo -->
      <a href="#hero" class="pixel-font text-green-400 text-xs hover:text-green-300 transition-colors" style="font-size: 0.65rem;">
        PaoloG<span class="text-slate-500">.dev</span>
      </a>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-1">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="nav-link"
          :class="{ active: activeSection === link.id }"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Mobile toggle -->
      <button
        class="md:hidden text-slate-400 hover:text-white p-2"
        @click="mobileOpen = !mobileOpen"
      >
        <span v-if="!mobileOpen" class="text-xl">&#9776;</span>
        <span v-else class="text-xl">&#10005;</span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileOpen"
      class="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-slate-800 pb-4"
    >
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="block px-6 py-3 text-sm text-slate-400 hover:text-green-400 transition-colors"
        @click="mobileOpen = false"
      >
        {{ link.icon }} {{ link.label }}
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      mobileOpen: false,
      activeSection: 'hero',
      links: [
        { id: 'hero', href: '#hero', label: 'Home' },
        { id: 'skills', href: '#skills', label: 'Skills' },
        { id: 'quests', href: '#quests', label: 'Quests' },
        { id: 'achievements', href: '#achievements', label: 'Achievements' },
        { id: 'inventory', href: '#inventory', label: 'Inventory' },
        { id: 'contact', href: '#contact', label: 'Contact' }
      ]
    }
  },
  mounted () {
    const sections = this.links.map(l => l.id)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id
          }
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) { observer.observe(el) }
    })
  }
}
</script>
