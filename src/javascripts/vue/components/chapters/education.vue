<template lang="html">
<main id="education" class="container">
  <h3 v-if="print_mode" class="text-capitalize font-weight-normal my-4">{{title}}</h3>
  <div v-for="education in content" class="education">
    <h5 class="my-2 text-capitalize font-weight-normal">
      <i class="fas fa-graduation-cap"></i> {{ education.degree }}
    </h5>
    <p class="d-flex">
      <img v-if="education.badge" :src="education.badge" class="education-badge mr-2 align-self-center">
      <span class="text-capitalize">
        <div>{{ education.school }}</div>
        <div v-if="education.department">{{ education.department }}</div>
      </span>
      <span class="ml-auto small font-weight-light">
        <span v-if="education.from">{{ date_formater(education.from) }}</span> -
        <span v-if="education.to">{{ date_formater(education.to) }}</span>
      </span>
    </p>
    <p v-if="education.gpa" class="font-weight-light">GPA {{ education.gpa }}</p>
    <div v-if="education.description" class="container">
      <p v-for="sentence in sentences(education.description)">{{ sentence }}</p>
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
  .education-badge {
    max-width: 40px;
    max-height: 40px;
  }
  .education:last-of-type hr {
     display: none;
  }
</style>
