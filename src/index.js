import { createStore } from 'redux'
import reducers from './reducers/combinedReducers'

const store = createStore(
  reducers, /* preloaded state, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const body = document.getElementsByTagName('body')[0]
const title = document.createElement('h1')
title.innerHTML = 'Snake'

store.subscribe(() => {
  console.log(store.getState())
})

body.appendChild(title)

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}

export default body
