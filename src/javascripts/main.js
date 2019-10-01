import 'bootstrap'
import '@fortawesome/fontawesome-free/js/all'
import Vue from 'vue'
import gtag from './gtag'
import App from './vue/App.vue'

window.gtag = gtag

const app = new Vue({
  el: '#app',
  render: h => h(App)
})
