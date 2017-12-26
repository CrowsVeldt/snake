const board = (state = {}, action) => {
  switch (action.type) {
    case 'START_NEW_GAME':
      break
    default:
      return initializeGameBoard(50)
  }
}

export function initializeGameBoard (dimension = 0) {
  return [...Array(dimension)].map(x => [...Array(dimension)].map(x => 0))
}

export default board
