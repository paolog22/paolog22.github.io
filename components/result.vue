<template>
  <section class="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
    <header class="flex items-center justify-between">
      <h2 class="text-2xl leading-6 font-medium text-black">
        Hi, {{ name }}
      </h2>
      <button @click="again" class="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2">
        <svg class="group-hover:text-light-blue-600 text-light-blue-500 mr-2" width="12" height="20" fill="currentColor">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z" />
        </svg>
        Try Again
      </button>
    </header>
    <ul class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">
      <li>
        <a href="#" class="hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200">
          <dl class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
            <div>
              <dd class="leading-6 text-4xl text-black">
                {{ formatAMPM(from) }}
              </dd>
            </div>
            <div class="mt-5">
              <dd class="group-hover:text-light-blue-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4">
                <p>
                  {{ fromStr }}
                </p>
                <span>
                  Time in the Philippines
                </span>
              </dd>
            </div>
          </dl>
        </a>
      </li>

      <li>
        <a href="#" class="hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200">
          <dl class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
            <div>
              <dd class="leading-6 text-4xl text-black">
                {{ formatAMPM(to) }}
              </dd>
            </div>
            <div class="mt-5">
              <dd class="group-hover:text-light-blue-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4">
                <p>
                  {{ toStr }}
                </p>
                <span>
                  Time in the Melbourne, Australia
                </span>
              </dd>
            </div>
          </dl>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import { convertTimeZone } from '~/api'
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      from: null,
      to: null,
      result: {}
    }
  },
  computed: {
    fromStr () {
      if (this.from) {
        return this.from.toDateString()
      }

      return ''
    },
    toStr () {
      if (this.from) {
        return this.to.toDateString()
      }

      return ''
    }
  },
  async beforeMount () {
    const result = await convertTimeZone()
    const from = new Date(result.fromTimestamp * 1000)
    const to = new Date(result.toTimestamp * 1000)

    this.from = from
    this.to = to
    this.result = result
  },
  methods: {
    formatAMPM (date) {
      if (!date) {
        return ''
      }
      let hours = date.getHours()
      let minutes = date.getMinutes()
      const ampm = hours >= 12 ? 'pm' : 'am'
      hours = hours % 12
      hours = hours || 12 // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes
      const strTime = hours + ':' + minutes + ' ' + ampm
      return strTime
    },
    again () {
      window.location.reload()
    }
  }
}
</script>
