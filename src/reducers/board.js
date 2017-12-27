const board = (state = {}, action) => {
  switch (action.type) {
    case 'START_NEW_GAME':
      // return initializeGameBoard(50)
      break
    default:
      // return state
      return initializeGameBoard(50)
  }
}

export function initializeGameBoard (size = 0) {
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
