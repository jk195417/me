<script setup lang="ts">
import { computed, ref } from 'vue'
import { languages, resumes } from './resumes'
import type { ChapterKey } from './types'
import AppNavbar from './components/AppNavbar.vue'
import ChapterList from './components/ChapterList.vue'
import AppFooter from './components/AppFooter.vue'

const currentLang = ref(languages.includes('zh-TW') ? 'zh-TW' : languages[0])
const currentChapter = ref<ChapterKey>('introduction')
const printMode = ref(false)
const resume = computed(() => resumes[currentLang.value])
</script>

<template>
  <div class="container pt-2">
    <AppNavbar
      v-model:current-chapter="currentChapter"
      :chapters="resume.chapters"
      :websites="resume.websites"
      :print-mode="printMode"
    />
    <ChapterList :chapters="resume.chapters" :current-chapter="currentChapter" :print-mode="printMode" />
    <AppFooter v-model:current-lang="currentLang" v-model:print-mode="printMode" :languages="languages" />
  </div>
</template>

<style>
main:last-of-type > hr:last-of-type {
  display: none;
}

.nav-item.active {
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
}
</style>
