<template lang="html">
  <div class="container pt-2">
    <navbar :chapters="data.chapters"
            :websites="data.websites"
            :current_chapter.sync="current_chapter"
            :print_mode="print_mode">
    </navbar>
    <chapters :chapters="data.chapters"
              :current_chapter="current_chapter"
              :print_mode="print_mode">
    </chapters>
    <foooter :info="data.info"
             :i18n="i18n"
             :current_lang.sync="current_lang"
             :print_mode.sync="print_mode">
    </foooter>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import chapters from './components/chapters.vue'
import footer from './components/footer.vue'
import i18n from '../../../data/*.yml'

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
