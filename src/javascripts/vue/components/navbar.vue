<template lang="html">
<div>
  <nav class="nav align-items-center justify-content-center">
    <chapter v-for="(chapter, key) in chapters"
          :chapter="key"
          :current_chapter="current_chapter"
          :print_mode="print_mode"
          :title="chapter.title"
          @click.native="$emit('update:current_chapter', key)">
    </chapter>
    <div class="w-100"></div>
    <website v-for="site in websites"
             :src="site.src"
             :fa_icon="site.fa_icon">
    </website>
  </nav>
  <hr>
</div>
</template>

<script>
import chapter from './navbar/chapter.vue'
import website from './navbar/website.vue'

export default {
  props: ['chapters', 'current_chapter', 'print_mode', 'websites'],
  components: {
    'chapter': chapter,
    'website': website
  }
}
</script>
