<template>
  <section id="quests" class="py-20 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Section Header -->
      <div class="section-header">
        <div class="section-icon bg-purple-900/50 text-purple-400">📜</div>
        <div>
          <h2 class="pixel-font text-purple-400 text-sm md:text-base glow-purple">QUEST LOG</h2>
          <p class="text-slate-500 text-sm mt-1">Completed missions &amp; campaigns</p>
        </div>
      </div>

      <!-- Timeline -->
      <div class="quest-timeline space-y-10">
        <div
          v-for="(quest, index) in quests"
          :key="index"
          class="relative game-card p-6 ml-2"
        >
          <!-- Timeline node -->
          <div class="quest-node">
            <div class="quest-node-inner" :style="{ background: quest.color }" />
          </div>

          <!-- Quest header -->
          <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <span class="pixel-font text-xs" :style="{ color: quest.color, fontSize: '0.6rem' }">
                {{ quest.type }}
              </span>
              <h3 class="text-lg font-semibold text-slate-200 mt-1">{{ quest.company }}</h3>
              <p class="text-slate-400 text-sm">{{ quest.role }}</p>
            </div>
            <div class="text-right">
              <span class="text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-full">
                {{ quest.period }}
              </span>
              <div v-if="quest.location" class="text-xs text-slate-600 mt-1">
                &#128205; {{ quest.location }}
              </div>
            </div>
          </div>

          <!-- Quest objectives -->
          <div class="space-y-2 mb-4">
            <div
              v-for="(obj, i) in quest.objectives"
              :key="i"
              class="flex items-start gap-2 text-sm text-slate-400"
            >
              <span class="text-green-400 mt-0.5 flex-shrink-0">&#10003;</span>
              <span>{{ obj }}</span>
            </div>
          </div>

          <!-- Loot (tech used) -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in quest.tech"
              :key="tech"
              class="text-xs px-2 py-1 rounded bg-slate-800/80 text-slate-400 border border-slate-700"
            >
              {{ tech }}
            </span>
          </div>

          <!-- XP reward -->
          <div class="mt-4 flex items-center gap-2 text-xs">
            <span class="text-yellow-500">&#11088;</span>
            <span class="text-yellow-500/70">+{{ quest.xp }} XP</span>
            <span class="text-slate-600">&mdash; {{ quest.duration }}</span>
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
      quests: [
        {
          type: 'MAIN QUEST',
          company: 'Blueline Active Asia Inc.',
          role: 'Full Stack Developer',
          period: 'May 2021 — Dec 2024',
          duration: '3 yrs 8 mos',
          location: 'Makati, Philippines',
          color: '#22c55e',
          xp: 3800,
          objectives: [
            'Built PWA with Vue.js and native wrapper bridge for iOS/Android',
            'Integrated third-party gaming platforms (PlayTech, Advant)',
            'Implemented Docker containerization for development and production',
            'Mentored junior developers and led code reviews'
          ],
          tech: ['Vue.js', 'PWA', 'Docker', 'PlayTech', 'Advant', 'iOS', 'Android']
        },
        {
          type: 'SIDE QUEST',
          company: 'MedProject',
          role: 'Full Stack Developer (Part-time)',
          period: 'Jun 2022 — Oct 2022',
          duration: '5 mos',
          location: 'Makati, Philippines',
          color: '#3b82f6',
          xp: 500,
          objectives: [
            'Integrated API with Stash.ph payment platform',
            'Built Cashier module for Hospital Application'
          ],
          tech: ['API Integration', 'Stash.ph', 'Hospital Systems']
        },
        {
          type: 'SIDE QUEST',
          company: 'Aloware',
          role: 'Senior Software Engineer (Part-time)',
          period: 'Jul 2021 — Nov 2021',
          duration: '5 mos',
          location: 'New York, USA (Remote)',
          color: '#a855f7',
          xp: 600,
          objectives: [
            'Integration work with Simpsocial platform',
            'Led data migration project for car dealership clients',
            'Built web scraping tools for data collection'
          ],
          tech: ['Simpsocial', 'Data Migration', 'Web Scraping']
        },
        {
          type: 'MAIN QUEST',
          company: 'Stash PH Pte Ltd.',
          role: 'Software Engineer',
          period: 'Sep 2016 — May 2021',
          duration: '4 yrs 9 mos',
          location: 'Makati, Philippines',
          color: '#06b6d4',
          xp: 4500,
          objectives: [
            'Built PhilHealth-accredited healthcare claims processing system',
            'Migrated monolith (Java/JSP) to Spring Boot + Laravel/Vue.js',
            'Developed insurance broker platform with LOA tracking',
            'Set up CI/CD pipelines with Jenkins, Ansible, and AWS',
            'Created online prescription PWA for healthcare providers'
          ],
          tech: ['Spring Boot', 'Laravel', 'Vue.js', 'Jenkins', 'Ansible', 'AWS', 'MySQL']
        },
        {
          type: 'STARTER QUEST',
          company: 'Incubix Technologies Inc.',
          role: 'Full Stack Developer',
          period: 'Sep 2015 — Apr 2016',
          duration: '8 mos',
          location: 'Makati, Philippines',
          color: '#eab308',
          xp: 800,
          objectives: [
            'Built TeaChat — a video-conferencing platform',
            'Introduced Laravel framework to the team',
            'Developed NewsByte — news aggregation app for Facebook FreeBasics'
          ],
          tech: ['Laravel', 'Video Conferencing', 'Facebook FreeBasics']
        },
        {
          type: 'TUTORIAL',
          company: 'College for Research and Technology',
          role: 'I.T Instructor',
          period: 'May 2015 — Sep 2015',
          duration: '5 mos',
          location: 'Cabanatuan, Philippines',
          color: '#f97316',
          xp: 400,
          objectives: [
            'Taught hardware, networking, and programming (Java, PHP)',
            'Led courses in data structures and database design'
          ],
          tech: ['Java', 'PHP', 'Networking', 'Database Design', 'Teaching']
        }
      ]
    }
  }
}
</script>
