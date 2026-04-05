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
          class="nav-link inline-flex items-center gap-1.5"
          :class="{ active: activeSection === link.id }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" :stroke="link.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="link.svg" />
          {{ link.label }}
        </a>
      </div>

      <!-- Mobile toggle -->
      <button
        class="md:hidden text-slate-400 hover:text-white p-2"
        aria-label="Toggle menu"
        @click="mobileOpen = !mobileOpen"
      >
        <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
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
        class="flex items-center gap-2 px-6 py-3 text-sm text-slate-400 hover:text-green-400 transition-colors"
        @click="mobileOpen = false"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" :stroke="link.color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="link.svg" />
        {{ link.label }}
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
        {
          id: 'hero', href: '#hero', label: 'Home', color: '#22c55e',
          svg: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'
        },
        {
          id: 'skills', href: '#skills', label: 'Skills', color: '#3b82f6',
          svg: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'
        },
        {
          id: 'quests', href: '#quests', label: 'Quests', color: '#a855f7',
          svg: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>'
        },
        {
          id: 'achievements', href: '#achievements', label: 'Achievements', color: '#eab308',
          svg: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>'
        },
        {
          id: 'inventory', href: '#inventory', label: 'Inventory', color: '#06b6d4',
          svg: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'
        },
        {
          id: 'contact', href: '#contact', label: 'Contact', color: '#22c55e',
          svg: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>'
        }
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
