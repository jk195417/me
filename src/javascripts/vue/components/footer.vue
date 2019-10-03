<template lang="html">
  <footer>
    <hr>
    <nav class="nav align-items-center justify-content-center">
      <i18n v-for="(data, lang) in i18n"
            :lang="lang"
            :current_lang="current_lang"
            @click.native="$emit('update:current_lang', lang)"
            class="text-dark">
      </i18n>
      <div class="mr-auto"></div>
      <a :class="{ 'active': print_mode }"
         @click="$emit('update:print_mode', !print_mode)"
         href="javascript:void(0)"
         class="nav-item nav-link text-dark small">
        <i class="far fa-file-pdf"></i> Print Mode
      </a>
      <div class="w-100"></div>
      <div class="nav-item">
        Copyright <i class="far fa-copyright"></i> 2019
        <a href="mailto:jk195417@gmail.com?subject=github.com/jk195417/me.git"
           class="text-dark"> 楊竑昕
        </a>
      </div>
      <a href="https://github.com/jk195417/me/fork"
         class="nav-item nav-link text-dark">
        <i class="fas fa-code-branch"></i> Fork This Project
      </a>
    </nav>
  </footer>
</template>

<script>
import i18n from './footer/i18n.vue'

export default {
  props: ['info', 'i18n', 'current_lang', 'print_mode'],
  components: {
    'i18n': i18n
  }
}
</script>
