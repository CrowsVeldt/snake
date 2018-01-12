const snake = (state = {
  snakeDirection: 'right'
}, action) => {
  switch (action.type) {
    case 'SET_SNAKE_DIRECTION':
      return Object.assign({}, state, {
        snakeDirection: action.direction
      })
    case 'SET_SNAKE_POSITION':
      return Object.assign({}, state, {
        snakePosition: action.position
      })
    default:
      return state
  }
}

export default snake
