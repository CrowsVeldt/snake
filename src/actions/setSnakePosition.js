const setSnakePosition = (position) => {
  if (!Array.isArray(position)) {
    throw new Error('Parameter must be an array')
  } else if (position.length < 2) {
    throw new Error('Position has too few elements')
  } else if (position.length > 2) {
    throw new Error('Position has too many elements')
  }
  return {
    type: 'SET_SNAKE_POSITION',
    position
  }
}

export default setSnakePosition
