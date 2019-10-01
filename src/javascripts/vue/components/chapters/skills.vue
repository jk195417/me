<template lang="html">
<main id="skills" class="container">
  <h3 v-if="show_chapters" class="text-capitalize font-weight-normal my-4">{{title}}</h3>
  <div>
    <p v-for="sentence in description">{{ sentence }}</p>
  </div>
  <div>
    <span v-for="skill in content.list" class="btn border border-secondary mr-2 mt-2">
      {{ skill.name }}
      <div class="small font-weight-light">{{ skill.rate }}</div>
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
