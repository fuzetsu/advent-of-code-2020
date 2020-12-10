import { render } from 'preact'
import { m } from '/vdom'
import { App } from '/App'
import 'spectre.css/dist/spectre.css'
import 'spectre.css/dist/spectre-icons.css'
import 'prismjs/themes/prism.css'

render(m(App), document.body)
