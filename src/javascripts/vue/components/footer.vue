<template lang="html">
  <footer>
    <hr>
    <nav class="nav align-items-center justify-content-center text-muted">

      <div class="mr-auto"></div>
      <i18n v-for="(data, lang) in i18n"
            :lang="lang"
            :current_lang="current_lang"
            @click.native="$emit('update:current_lang', lang)">
      </i18n>
      <a :class="{ 'active': show_chapters }"
         class="nav-item nav-link text-muted small"
         @click="$emit('update:show_chapters', !show_chapters)"
         href="javascript:void(0)">
        <i class="far fa-file-pdf"></i>
      </a>
      <div class="w-100"></div>
      <div class="nav-item mr-2">
        <i class="far fa-copyright"></i> 2019 by {{ info.name }}
      </div>
      <div class="nav-item">
        <i class="fas fa-envelope ml-1"></i> {{ info.email }}
      </div>
    </nav>
  </footer>
</template>

<script>
import i18n from './footer/i18n.vue'
export default {
  props: ['info', 'i18n', 'current_lang', 'show_chapters'],
  components: {
    'i18n': i18n
  },
}
</script>
