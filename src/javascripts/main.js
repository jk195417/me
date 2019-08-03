import 'bootstrap'
import '@fortawesome/fontawesome-free/js/all'
import gtag from './gtag'
window.gtag = gtag
import { render, changeMain } from './component_renderer.js'
window.changeMain = changeMain
render()
