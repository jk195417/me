<template lang="html">
<a :href="src"
   class="nav-item nav-link text-dark"
   target="_blank">
  <i :class="fa_icon"></i>
</a>
</template>

<script>
export default {
  props: ['src', 'fa_icon']
}
</script>
