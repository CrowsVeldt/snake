import { initializeBoard } from '../board'

const board = (state = initializeBoard(50), action) => {
  switch (action.type) {
    case 'SET_SNAKE_POSITION':
      return setSnakePosition(2, state, action.position[0])
    default:
      return state
  }
}

export function setSnakePosition (piece, board, position) {
  return board.map((row, rowIndex) => {
    if (rowIndex === position[0]) {
      return row.slice(0, position[1]).concat([piece]).concat(row.slice(position[1] + 1))
    } else {
      return row
    }
  })
}

export default board
