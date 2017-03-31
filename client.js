var css = require('sheetify')
var yo = require('yo-yo')
var el

css('./client.css')


function component (str) {
  return yo`
    <section>
      <h1>${str}</h1>
    </section>
  `
}

function render () {
  if (!el) {
    el = component(window.location.hash.replace('#', ''))
    document.body.appendChild(el)
    return 
  }
  
  var newel = component(window.location.hash.replace('#', ''))
  yo.update(el, newel)
}

render()
window.addEventListener('hashchange', render, false);
