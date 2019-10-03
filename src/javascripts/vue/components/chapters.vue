<template lang="html">
<div>
  <component v-for="(chapter, key) in chapters"
             :is="key"
             v-if="print_mode || key === current_chapter"
             :title="chapter.title"
             :content="chapter.content"
             :print_mode="print_mode">
  </component>
</div>
</template>

<script>
import introduction from './chapters/introduction.vue'
import education from './chapters/education.vue'
import skills from './chapters/skills.vue'
import experience from './chapters/experience.vue'

export default {
  props: ['chapters', 'current_chapter', 'print_mode'],
  components: {
    'introduction': introduction,
    'education': education,
    'skills': skills,
    'experience': experience
  }
}
</script>
