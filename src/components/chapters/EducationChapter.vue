<script setup lang="ts">
import { formatDate, sentences } from '../../format'
import type { Education } from '../../types'

defineProps<{ title: string; content: Education[]; printMode: boolean }>()
</script>

<template>
  <main id="education" class="container">
    <h3 v-if="printMode" class="text-capitalize fw-normal my-4">{{ title }}</h3>
    <section v-for="education in content" :key="education.school" class="education">
      <h5 class="my-2 text-capitalize fw-normal">
        <i class="fas fa-graduation-cap" aria-hidden="true"></i> {{ education.degree }}
      </h5>
      <div class="d-flex mb-3">
        <img v-if="education.badge" :src="education.badge" :alt="education.school" class="education-badge me-2 align-self-center" />
        <div class="text-capitalize">
          <div>{{ education.school }}</div>
          <div v-if="education.department">{{ education.department }}</div>
        </div>
        <div class="ms-auto small fw-light">
          <span v-if="education.from">{{ formatDate(education.from) }}</span> -
          <span v-if="education.to">{{ formatDate(education.to) }}</span>
        </div>
      </div>
      <p v-if="education.gpa" class="fw-light">GPA {{ education.gpa }}</p>
      <div v-if="education.description" class="container">
        <p v-for="(sentence, index) in sentences(education.description)" :key="index">{{ sentence }}</p>
      </div>
      <hr />
    </section>
    <hr />
  </main>
</template>

<style scoped>
.education-badge {
  max-width: 40px;
  max-height: 40px;
}
.education:last-of-type hr {
  display: none;
}
</style>
