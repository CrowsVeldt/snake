const board = (state = initializeGameBoard(), action) => {
  switch (action.type) {
    case 'UPDATE_BOARD':
      return null
    default:
      return [
        ...state
      ]
  }
}

export function initializeGameBoard (size = 50) {
  // 0 === empty tile && 1 === wall tile && 2 === snake tile

  const wall = [...Array(size)].map(x => 1)
  const normalLine = [1].concat([...Array(size - 2)].map(x => 0)).concat([1])

  return [...Array(size)].map((x, index) => {
    if (index === 0 || index === size - 1) {
      return wall
    } else {
      return normalLine
    }
  })
}

export default board
