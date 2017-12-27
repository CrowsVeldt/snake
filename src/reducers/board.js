const board = (state, action) => {
  switch (action.type) {
    case 'START_NEW_GAME':
      return initializeGameBoard(50)
    default:
      return initializeGameBoard(50)
      // return state
  }
}

export function initializeGameBoard (size = 0) {
  // Returns a multi-dimensional array representing the gamespace
  return [...Array(size)].map((x, index) => {
    // 0 === empty tile && 1 === wall tile
    if (index === 0 || index === size - 1) {
      return [...Array(size)].map(x => 1)
    } else {
      return [1].concat(
        [...Array(size - 2)].map(x =>
          0)).concat([1])
    }
  })
}

export default board
