<template lang="html">
<div>
  <component v-for="(chapter, key) in visible_chapters"
             :key="key"
             :is="key"
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
  },
  computed: {
    visible_chapters: function () {
      if (this.print_mode) return this.chapters
      return { [this.current_chapter]: this.chapters[this.current_chapter] }
    }
  }
}
</script>
