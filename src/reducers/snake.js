const snake = (state = {
  snakePosition: [null, null]
}, action) => {
  switch (action.type) {
    case 'SET_SNAKE_POSITION':
      return {
        ...state,
        snakePosition: action.position
      }
    default:
      return {
        ...state
      }
  }
}

export default snake
