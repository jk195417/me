import nav from '/components/nav.html'
import footer from '/components/footer.html'
import links from '/components/links.html'
import index from '/components/main/index.html'
import projects from '/components/main/projects.html'
import resume from '/components/main/resume.html'
import references from '/components/main/references.html'

const components = {
  main: {
    index: 0,
    names: ['index', 'projects', 'resume', 'references'],
    html: [index, projects, resume, references]
  }
}

function clean(node) {
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild)
  }
}

function renderNav() {
  const node = document.getElementById('component-nav')
  clean(node)
  node.insertAdjacentHTML('afterbegin', nav)
}

function renderFooter() {
  const node = document.getElementById('component-footer')
  clean(node)
  node.insertAdjacentHTML('afterbegin', footer)
}

function renderLinks() {
  const node = document.getElementById('component-links')
  clean(node)
  node.insertAdjacentHTML('afterbegin', links)
}

function renderMain() {
  const node = document.getElementById('component-main')
  clean(node)
  node.insertAdjacentHTML('afterbegin', components.main.html[components.main.index])
}

function render() {
  renderNav()
  renderLinks()
  renderFooter()
  renderMain()
}

function changeMain(main) {
  let index = components.main.names.indexOf(main)
  if (index === -1) {
    components.main.index = 0
  } else {
    components.main.index = index
  }
  renderMain()
}

export { render, changeMain }
