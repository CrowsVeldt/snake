import { createStore } from 'redux'
import reducers from './reducers/combinedReducers'
import { createBoard, updateBoard } from './board'
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

let board = createBoard(store.getState().board)

store.subscribe(() => {
  updateBoard(store.getState().board, body)
})

body.appendChild(title)
body.appendChild(createStartButton(store.dispatch))
body.appendChild(board)

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}

export default body
