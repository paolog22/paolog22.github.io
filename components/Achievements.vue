<template>
  <section id="achievements" class="py-20 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Section Header -->
      <div class="section-header">
        <div class="section-icon bg-yellow-900/50 text-yellow-400">&#127942;</div>
        <div>
          <h2 class="pixel-font text-yellow-400 text-sm md:text-base" style="text-shadow: 0 0 10px rgba(234,179,8,0.5);">ACHIEVEMENTS</h2>
          <p class="text-slate-500 text-sm mt-1">Certifications &amp; education unlocked</p>
        </div>
      </div>

      <!-- Cisco Certifications -->
      <div class="mb-12">
        <h3 class="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
          <span class="text-cyan-400">&#128272;</span> Cisco Certifications
        </h3>
        <div class="grid sm:grid-cols-2 gap-4">
          <div
            v-for="cert in certifications"
            :key="cert.name"
            class="game-card p-5 cursor-default"
            :class="{ 'level-up-anim': cert.animate }"
            @mouseenter="cert.animate = true"
            @animationend="cert.animate = false"
          >
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-lg bg-cyan-900/30 border border-cyan-800 flex items-center justify-center text-2xl flex-shrink-0">
                &#127941;
              </div>
              <div>
                <h4 class="text-sm font-semibold text-cyan-300">{{ cert.name }}</h4>
                <p class="text-xs text-slate-500 mt-1">&#128197; {{ cert.date }}</p>
                <p class="text-xs text-slate-600">{{ cert.institution }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div>
        <h3 class="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
          <span class="text-blue-400">&#127891;</span> Education
        </h3>
        <div class="space-y-4">
          <div
            v-for="edu in education"
            :key="edu.degree"
            class="game-card p-5"
          >
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-lg bg-blue-900/30 border border-blue-800 flex items-center justify-center text-2xl flex-shrink-0">
                &#127891;
              </div>
              <div>
                <h4 class="text-sm font-semibold text-blue-300">{{ edu.degree }}</h4>
                <p class="text-sm text-slate-400">{{ edu.school }}</p>
                <p class="text-xs text-slate-500 mt-1">&#128197; {{ edu.period }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Currently Learning -->
      <div class="mt-12">
        <h3 class="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
          <span class="text-green-400">&#128218;</span> Currently Learning
        </h3>
        <div class="game-card p-5 border-dashed border-green-800">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-lg bg-green-900/30 border border-green-800 flex items-center justify-center text-2xl flex-shrink-0">
              &#127465;&#127466;
            </div>
            <div>
              <h4 class="text-sm font-semibold text-green-300">German Language — A1</h4>
              <p class="text-xs text-slate-400 mt-1">Enrolled in German language course (April 2026)</p>
              <div class="mt-2">
                <div class="xp-bar-track" style="height: 6px;">
                  <div class="xp-bar-fill" style="width: 15%;" />
                </div>
                <span class="text-xs text-slate-600 mt-1">Progress: A1 in progress</span>
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
      certifications: [
        {
          name: 'CCNA Exploration: Network Fundamentals',
          date: 'March 15, 2013',
          institution: 'AMA Computer College, Cabanatuan',
          animate: false
        },
        {
          name: 'CCNA Exploration: Routing Protocols and Concepts',
          date: 'January 15, 2014',
          institution: 'AMA Computer College, Cabanatuan',
          animate: false
        },
        {
          name: 'CCNA Exploration: LAN Switching and Wireless',
          date: 'March 27, 2014',
          institution: 'AMA Computer College, Cabanatuan',
          animate: false
        },
        {
          name: 'CCNA Routing and Switching: Connecting Networks',
          date: 'July 27, 2015',
          institution: 'AMA Computer College, Cabanatuan',
          animate: false
        }
      ],
      education: [
        {
          degree: 'Bachelor of Information and Technology',
          school: 'AMA Computer College, Cabanatuan',
          period: 'Apr 2010 — Apr 2015'
        },
        {
          degree: 'Computer System Design and Programming',
          school: 'AMA Computer Learning Center, Cabanatuan',
          period: 'Apr 2008 — Apr 2010'
        }
      ]
    }
  }
}
</script>
