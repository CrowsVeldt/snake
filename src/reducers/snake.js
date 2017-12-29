const snake = (state = {
  snakePosition: [0, 0]
}, action) => {
  switch (action.type) {
    case 'SET_SNAKE_POSITION':
      return Object.assign({}, {
        snakePosition: action.position
      })
    default:
      return {
        ...state
      }
  }
}

export default snake
