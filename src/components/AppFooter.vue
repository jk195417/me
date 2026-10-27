<script setup lang="ts">
defineProps<{ languages: string[] }>()
const currentLang = defineModel<string>('currentLang', { required: true })
const printMode = defineModel<boolean>('printMode', { required: true })
const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <hr />
    <nav class="nav align-items-center justify-content-center" aria-label="Language and print mode">
      <button
        v-for="lang in languages"
        :key="lang"
        type="button"
        class="nav-item nav-link text-dark small me-2"
        :class="{ active: lang === currentLang }"
        :aria-pressed="lang === currentLang"
        @click="currentLang = lang"
      >
        {{ lang }}
      </button>
      <div class="me-auto"></div>
      <button
        type="button"
        class="nav-item nav-link text-dark small"
        :class="{ active: printMode }"
        :aria-pressed="printMode"
        @click="printMode = !printMode"
      >
        <i class="far fa-file-pdf" aria-hidden="true"></i> Print Mode
      </button>
      <div class="w-100"></div>
      <div class="nav-item">
        Copyright <i class="far fa-copyright" aria-hidden="true"></i> 2019-{{ year }}
        <a href="mailto:jk195417@gmail.com?subject=github.com/jk195417/me.git" class="text-dark">楊竑昕</a>
      </div>
      <a href="https://github.com/jk195417/me/fork" class="nav-item nav-link text-dark">
        <i class="fas fa-code-branch" aria-hidden="true"></i> Fork This Project
      </a>
    </nav>
  </footer>
</template>
