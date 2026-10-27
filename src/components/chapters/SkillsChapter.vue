<script setup lang="ts">
import { sentences } from '../../format'
import type { Skills } from '../../types'

defineProps<{ title: string; content: Skills; printMode: boolean }>()
</script>

<template>
  <main id="skills" class="container">
    <h3 v-if="printMode" class="text-capitalize fw-normal my-4">{{ title }}</h3>
    <div>
      <p v-for="(sentence, index) in sentences(content.description)" :key="index">{{ sentence }}</p>
    </div>
    <ul class="list-unstyled">
      <li v-for="skill in content.list" :key="skill.name" class="d-inline-block border border-secondary rounded px-3 py-1 me-2 mt-2 text-center">
        {{ skill.name }}
        <div class="small fw-light">{{ skill.rate }}</div>
      </li>
    </ul>
    <hr />
  </main>
</template>
