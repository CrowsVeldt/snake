const board = (state = 0, action) => {
  // board should receive state as an array
  switch (action.type) {
    case 'START_NEW_GAME':
      return generateGameBoard(state)
  }
}

// TODO: Think about this some more
export function generateGameBoard (dimension = 0) {
  return [...Array(dimension)].map(x => [...Array(dimension)].map(x => 0))
}

export default board
