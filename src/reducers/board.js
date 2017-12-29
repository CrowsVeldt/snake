const board = (state = initializeGameBoard(), action) => {
  switch (action.type) {
    case 'START_NEW_GAME':
      return initializeGameBoard(50, true)
    default:
      return state
  }
}

export function initializeGameBoard (size = 50, snake) {
  // 0 === empty tile && 1 === wall tile && 2 === snake tile

  const wall = [...Array(size)].map(x => 1)
  const normalLine = [1].concat([...Array(size - 2)].map(x => 0)).concat([1])

  return [...Array(size)].map((x, index) => {
    if (index === 0 || index === size - 1) {
      return wall
    } if (snake && index === size / 2) {
      return [1].concat([...Array((size - 2) / 2)].map(x => 0)).concat([2]).concat([...Array(((size - 2) / 2) - 1)].map(x => 0)).concat([1])
    } else {
      return normalLine
    }
  })
}

export default board
