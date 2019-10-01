<template lang="html">
<div>
  <component v-for="(chapter, key) in chapters"
             :is="key"
             v-if="show_chapters || key === current_chapter"
             :title="chapter.title"
             :content="chapter.content"
             :show_chapters="show_chapters">
  </component>
</div>
</template>

<script>
import introduction from './chapters/introduction.vue'
import education from './chapters/education.vue'
import skills from './chapters/skills.vue'
import experience from './chapters/experience.vue'

export default {
  props: ['chapters', 'current_chapter', 'show_chapters'],
  components: {
    'introduction': introduction,
    'education': education,
    'skills': skills,
    'experience': experience
  }
}
</script>
