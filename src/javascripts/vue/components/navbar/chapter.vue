<template lang="html">
<a :class="{ 'active': !print_mode && chapter === current_chapter }"
   class="nav-item nav-link text-dark text-capitalize"
   :href="'#' + chapter">
  {{ title }}
</a>
</template>

<script>
export default {
  props: ['chapter', 'current_chapter', 'print_mode', 'title']
}
</script>
