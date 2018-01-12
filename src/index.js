import { createStore } from 'redux'
import reducers from './reducers/combinedReducers'
import { createBoard } from './board'
import createStartButton from './startButton'

const store = createStore(
  reducers, /* preloaded state, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const body = document.getElementsByTagName('body')[0]
body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.alignItems = 'center'
const title = document.createElement('h1')
title.innerHTML = 'Snake'

store.subscribe(() => {
})

body.appendChild(title)
body.appendChild(createBoard(store.getState().boardReducer))
body.appendChild(createStartButton(store.dispatch))

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}

export default body
