const board = (state = initializeGameBoard(50), action) => {
  switch (action.type) {
    case 'START_NEW_GAME':
      return // TODO: Add the snake to the board
    default:
      return state
  }
}

export function initializeGameBoard (size = 0) {
  // 0 === empty tile && 1 === wall tile
  return [...Array(size)].map((x, index) => {
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
