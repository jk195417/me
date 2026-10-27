<template lang="html">
  <main id="introduction" class="container">
    <h3 v-if="print_mode" class="text-capitalize fw-normal my-4">{{title}}</h3>
    <p v-for="(sentence, index) in description" :key="index">{{ sentence }}</p>
    <hr>
  </main>
</template>

<script>
import chapter from './mixins/chapter'

export default {
  mixins: [chapter],
  computed: {
    description: function () {
      return this.sentences(this.content)
    }
  }
}
</script>
