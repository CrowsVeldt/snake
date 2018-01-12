const snake = (state = {
  snakeDirection: 'right'
}, action) => {
  switch (action.type) {
    case 'SET_SNAKE_DIRECTION':
      return Object.assign({}, state, {
        snakeDirection: action.direction
      })
    default:
      return state
  }
}

export default snake
