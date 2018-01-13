import setSnakePosition from './actions/setSnakePosition'

const gameLoop = (state, dispatch) => {
  const snakePosition = state.snake.snakePosition
  const snakeDirection = state.snake.snakeDirection

  switch (snakeDirection) {
    // Unfortunately I'm not sure how to test this. So I'll depend on manual tests for now
    case 'right':
      return dispatch(setSnakePosition([
        [snakePosition[0][0], snakePosition[0][1] + 1],
        [snakePosition[0][0], snakePosition[0][1]]
      ]))
    case 'down':
      return dispatch(setSnakePosition([
        [snakePosition[0][0] + 1, snakePosition[0][1]],
        [snakePosition[0][0], snakePosition[0][1]]
      ]))
    case 'left':
      return dispatch(setSnakePosition([
        [snakePosition[0][0], snakePosition[0][1] - 1],
        [snakePosition[0][0], snakePosition[0][1]]
      ]))
    case 'up':
      return dispatch(setSnakePosition([
        [snakePosition[0][0] - 1, snakePosition[0][1]],
        [snakePosition[0][0], snakePosition[0][1]]
      ]))
    default:
      break
  }
}

export default gameLoop
