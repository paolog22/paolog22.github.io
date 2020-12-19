<template>
  <div>
    <prompt v-show="showPrompt" @proceed="onProceed" />
    <result :name="name" />
  </div>
</template>

<script>
import Prompt from '~/components/prompt.vue'
import Result from '~/components/result'

export default {
  components: {
    Prompt,
    Result
  },
  data () {
    return {
      showPrompt: true,
      name: ''
    }
  },
  methods: {
    onProceed ({ name }) {
      this.name = name
      this.showPrompt = false
    }
  }
}
</script>
