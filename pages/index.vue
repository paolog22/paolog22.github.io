<template>
  <div>
    <div class="scanline-overlay" />
    <GameNav />
    <main class="pt-14">
      <HeroSection />
      <SkillTree />
      <QuestLog />
      <Achievements />
      <Inventory />
      <ContactSection />
    </main>

    <!-- Footer -->
    <footer class="py-8 px-4 border-t border-slate-800 text-center">
      <p class="pixel-font text-slate-600" style="font-size: 0.55rem;">
        &copy; 2026 PAOLO GARCIA &mdash; BUILT WITH NUXT.JS + TAILWIND CSS
      </p>
      <p class="text-xs text-slate-700 mt-2">
        GAME OVER? Not even close. &#127918;
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  mounted () {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in-up').forEach((el) => {
      observer.observe(el)
    })
  }
}
</script>
