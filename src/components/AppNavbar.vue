<script setup lang="ts">
import { computed } from 'vue'
import type { ChapterKey, Chapters, Website } from '../types'

const props = defineProps<{
  chapters: Chapters
  websites: Website[]
  printMode: boolean
}>()
const currentChapter = defineModel<ChapterKey>('currentChapter', { required: true })

const chapterTabs = computed(() =>
  (Object.keys(props.chapters) as ChapterKey[]).map((key) => ({ key, title: props.chapters[key].title })),
)
</script>

<template>
  <div>
    <nav class="nav align-items-center justify-content-center" aria-label="Chapters">
      <button
        v-for="tab in chapterTabs"
        :key="tab.key"
        type="button"
        class="nav-item nav-link text-dark text-capitalize"
        :class="{ active: !printMode && tab.key === currentChapter }"
        :aria-pressed="!printMode && tab.key === currentChapter"
        @click="currentChapter = tab.key"
      >
        {{ tab.title }}
      </button>
      <div class="w-100"></div>
      <a
        v-for="site in websites"
        :key="site.src"
        :href="site.src"
        :title="site.name"
        :aria-label="site.name"
        class="nav-item nav-link text-dark"
        target="_blank"
        rel="noopener"
      >
        <i :class="site.fa_icon" aria-hidden="true"></i>
      </a>
    </nav>
    <hr />
  </div>
</template>
