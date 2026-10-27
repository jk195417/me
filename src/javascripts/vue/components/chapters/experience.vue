<template lang="html">
  <main id="experience" class="container">
    <h3 v-if="print_mode" class="text-capitalize fw-normal my-4">{{title}}</h3>
    <div v-for="(experience, index) in content" :key="index" class="experience">
      <h5 class="text-capitalize fw-normal my-2">
        <i class="fas fa-folder"></i> {{ experience.type }}
      </h5>
      <p class="d-flex">
        <span>
          <div>{{ experience.title }}</div>
          <div v-if="experience.subtitle">{{ experience.subtitle }}</div>
          <a v-if="experience.link" :href="experience.link" target="_blank">{{experience.link}}</a>
          <div v-if="experience.tags">
            <span v-for="tag in experience.tags" :key="tag" class="text-capitalize fw-light badge text-body border border-secondary me-1 mt-1">
              {{ tag }}
            </span>
          </div>
        </span>
        <span class="ms-auto small fw-light">
          <span v-if="experience.from">{{ date_formater(experience.from) }}</span> -
          <span v-if="experience.to">{{ date_formater(experience.to) }}</span>
        </span>
      </p>
      <div class="container">
        <p v-for="(sentence, index) in sentences(experience.description)" :key="index">{{ sentence }}</p>
        <img v-if="experience.image" :src="experience.image" class="border border-dark">
      </div>
      <hr>
    </div>
    <hr>
  </main>
</template>

<script>
import chapter from './mixins/chapter'

export default {
  mixins: [chapter]
}
</script>

<style lang="css" scoped>
  img {
    max-width: 100%;
  }
  .experience:last-of-type hr {
     display: none;
  }
</style>
