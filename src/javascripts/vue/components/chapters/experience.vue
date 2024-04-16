<template lang="html">
  <main id="experience" class="container">
    <h3 v-if="print_mode" class="text-capitalize font-weight-normal my-4">{{title}}</h3>
    <div v-for="experience in content" class="experience">
      <h5 class="text-capitalize font-weight-normal my-2">
        <i class="fas fa-folder"></i> {{ experience.type }}
      </h5>
      <p class="d-flex">
        <span>
          <div>{{ experience.title }}</div>
          <div v-if="experience.subtitle">{{ experience.subtitle }}</div>
          <a v-if="experience.link" :href="experience.link" target="_blank">{{experience.link}}</a>
          <div v-if="experience.tags">
            <span v-for="tag in experience.tags" class="text-capitalize font-weight-light badge border border-secondary mr-1 mt-1">
              {{ tag }}
            </span>
          </div>
        </span>
        <span class="ml-auto small font-weight-light">
          <span v-if="experience.from">{{ date_formater(experience.from) }}</span> -
          <span v-if="experience.to">{{ date_formater(experience.to) }}</span>
        </span>
      </p>
      <div class="container">
        <p v-for="sentence in sentences(experience.description)">{{ sentence }}</p>
        <a v-if="experience.image" :href="experience.link" ><img :src="experience.image" class="border border-dark"></a>
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
