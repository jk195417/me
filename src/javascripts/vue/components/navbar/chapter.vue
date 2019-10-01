<template lang="html">
<a :class="{ 'active': !show_chapters && chapter === current_chapter }"
   class="nav-item nav-link text-dark text-capitalize"
   :href="'#' + chapter">
  {{ title }}
</a>
</template>

<script>
export default {
  props: ['chapter', 'current_chapter', 'show_chapters', 'title']
}
</script>
