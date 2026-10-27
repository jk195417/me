<template lang="html">
<main id="skills" class="container">
  <h3 v-if="print_mode" class="text-capitalize fw-normal my-4">{{title}}</h3>
  <div>
    <p v-for="(sentence, index) in description" :key="index">{{ sentence }}</p>
  </div>
  <div>
    <span v-for="skill in content.list" :key="skill.name" class="btn border border-secondary me-2 mt-2">
      {{ skill.name }}
      <div class="small fw-light">{{ skill.rate }}</div>
    </span>
  </div>
  <hr>
</main>
</template>

<script>
import chapter from './mixins/chapter'

export default {
  mixins: [chapter],
  computed: {
    description: function () {
      return this.sentences(this.content.description)
    }
  }
}
</script>
