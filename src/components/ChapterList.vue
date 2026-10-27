<script setup lang="ts">
import { computed } from 'vue'
import type { ChapterKey, Chapters } from '../types'
import IntroductionChapter from './chapters/IntroductionChapter.vue'
import SkillsChapter from './chapters/SkillsChapter.vue'
import EducationChapter from './chapters/EducationChapter.vue'
import ExperienceChapter from './chapters/ExperienceChapter.vue'

const props = defineProps<{
  chapters: Chapters
  currentChapter: ChapterKey
  printMode: boolean
}>()

// Print mode shows every chapter in the order of the YAML file
const visible = computed(() => {
  const keys = Object.keys(props.chapters) as ChapterKey[]
  return new Set(props.printMode ? keys : [props.currentChapter])
})
</script>

<template>
  <div>
    <IntroductionChapter v-if="visible.has('introduction')" v-bind="chapters.introduction" :print-mode="printMode" />
    <SkillsChapter v-if="visible.has('skills')" v-bind="chapters.skills" :print-mode="printMode" />
    <EducationChapter v-if="visible.has('education')" v-bind="chapters.education" :print-mode="printMode" />
    <ExperienceChapter v-if="visible.has('experience')" v-bind="chapters.experience" :print-mode="printMode" />
  </div>
</template>
