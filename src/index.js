import { createStore } from 'redux'
import { createBoard, updateBoard } from './board'
import createStartButton from './startButton'
import gameLoop from './gameLoop'
import reducers from './reducers/combinedReducers'
import setSnakeDirection from './actions/setSnakeDirection'

const store = createStore(
  reducers, /* preloaded state, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const body = document.getElementsByTagName('body')[0]
body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.alignItems = 'center'

body.addEventListener('keydown', (key) => {
  const currentDirection = store.getState().snake.snakeDirection
  if (key.keyCode === 37 || key.keyCode === 39) {
    console.log(key)
    store.dispatch(setSnakeDirection(changeSnakeDirection(key.keyCode, currentDirection)))
  }
})

const title = document.createElement('h1')
title.innerHTML = 'Snake'

let board = createBoard(store.getState().board)

store.subscribe(() => {
  updateBoard(store.getState().board, body)
})

setInterval(() => {
  if (store.getState().game.gameActive === true) {
    gameLoop(store.getState(), store.dispatch)
  }
}, 200)

body.appendChild(title)
body.appendChild(createStartButton(store.dispatch))
body.appendChild(board)

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}

export default body

export const changeSnakeDirection = (directionOfTurn, currentDirection) => {
  switch (directionOfTurn) {
    case 37:
      switch (currentDirection) {
        case 'right':
          return 'up'
        case 'up':
          return 'left'
        case 'left':
          return 'down'
        case 'down':
          return 'right'
        default:
          break
      }
      break
    case 39:
      switch (currentDirection) {
        case 'right':
          return 'down'
        case 'up':
          return 'right'
        case 'left':
          return 'up'
        case 'down':
          return 'left'
        default:
          break
      }
      break
    default:
      return new Error('currentDirection value is invalid')
  }
}
