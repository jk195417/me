import 'bootstrap'
import '@fortawesome/fontawesome-free/js/all'
import gtag from '/assets/javascripts/gtag'
window.gtag = gtag
import { render, changeMain } from '/assets/javascripts/component_renderer.js'
window.changeMain = changeMain
render()
