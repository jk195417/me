<script setup lang="ts">
import { formatDate, sentences } from '../../format'
import type { Experience } from '../../types'

defineProps<{ title: string; content: Experience[]; printMode: boolean }>()
</script>

<template>
  <main id="experience" class="container">
    <h3 v-if="printMode" class="text-capitalize fw-normal my-4">{{ title }}</h3>
    <section v-for="experience in content" :key="experience.title" class="experience">
      <h5 class="text-capitalize fw-normal my-2">
        <i class="fas fa-folder" aria-hidden="true"></i> {{ experience.type }}
      </h5>
      <div class="d-flex mb-3">
        <div>
          <div>{{ experience.title }}</div>
          <div v-if="experience.subtitle">{{ experience.subtitle }}</div>
          <a v-if="experience.link" :href="experience.link" target="_blank" rel="noopener">{{ experience.link }}</a>
          <div v-if="experience.tags">
            <span
              v-for="tag in experience.tags"
              :key="tag"
              class="text-capitalize fw-light badge text-body border border-secondary me-1 mt-1"
            >
              {{ tag }}
            </span>
          </div>
        </div>
        <div class="ms-auto small fw-light text-nowrap ps-2">
          <span v-if="experience.from">{{ formatDate(experience.from) }}</span> -
          <span v-if="experience.to">{{ formatDate(experience.to) }}</span>
        </div>
      </div>
      <div class="container">
        <p v-for="(sentence, index) in sentences(experience.description)" :key="index">{{ sentence }}</p>
        <img v-if="experience.image" :src="experience.image" :alt="experience.title" class="border border-dark" />
      </div>
      <hr />
    </section>
    <hr />
  </main>
</template>

<style scoped>
img {
  max-width: 100%;
}
.experience:last-of-type hr {
  display: none;
}
</style>
