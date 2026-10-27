<script setup lang="ts">
import { sentences } from '../../format'

defineProps<{ title: string; content: string; printMode: boolean }>()
</script>

<template>
  <main id="introduction" class="container">
    <h3 v-if="printMode" class="text-capitalize fw-normal my-4">{{ title }}</h3>
    <p v-for="(sentence, index) in sentences(content)" :key="index">{{ sentence }}</p>
    <hr />
  </main>
</template>
