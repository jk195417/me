<template lang="html">
<a :class="{ 'active': lang === current_lang }"
   class="nav-item nav-link text-muted small mr-2"
   href="javascript:void(0)">
  {{ lang }}
</a>
</template>

<script>
export default {
  props: ['lang', 'current_lang']
}
</script>
