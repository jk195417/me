<template lang="html">
  <div class="container pt-2">
    <navbar :chapters="data.chapters"
            :websites="data.websites"
            v-model:current_chapter="current_chapter"
            :print_mode="print_mode">
    </navbar>
    <chapters :chapters="data.chapters"
              :current_chapter="current_chapter"
              :print_mode="print_mode">
    </chapters>
    <foooter :info="data.info"
             :i18n="i18n"
             v-model:current_lang="current_lang"
             v-model:print_mode="print_mode">
    </foooter>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import chapters from './components/chapters.vue'
import footer from './components/footer.vue'

// Each data/$lang.yml becomes one version of the resume
const files = import.meta.glob('../../../data/*.yml', { eager: true, import: 'default' })
const i18n = Object.fromEntries(
  Object.entries(files).map(([path, data]) => [path.match(/([^/]+)\.yml$/)[1], data])
)

export default {
  name: 'App',
  components: {
    'navbar': navbar,
    'chapters': chapters,
    'foooter': footer
  },
  data: () => ({
    i18n: i18n,
    current_lang: 'zh-TW',
    current_chapter: 'introduction',
    print_mode: false
  }),
  computed: {
    data: function () {
      return this.i18n[this.current_lang]
    }
  }
}
</script>

<style lang="css">
main:last-of-type > hr:last-of-type {
  display: none;
}

.nav-item.active {
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
}
</style>
