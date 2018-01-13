import setSnakePosition from './actions/setSnakePosition'

const gameLoop = (state, dispatch) => {
  const snakePosition = state.snake.snakePosition
  const snakeDirection = state.snake.snakeDirection

  switch (snakeDirection) {
    case 'right':
      return dispatch(setSnakePosition([snakePosition[0], snakePosition[1] + 1]))
    default:
      break
  }
}

export default gameLoop
