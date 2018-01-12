import { initializeBoard } from '../board'

const board = (state = initializeBoard(50), action) => {
  switch (action.type) {
    case 'SET_SNAKE_POSITION':
      return setPiecePosition(2, state, action.position)
    default:
      return state
  }
}

export function setPiecePosition (piece, board, position) {
  return board.map((subArray, index) => {
    if (index === position[0]) {
      return subArray.map((item, index2) => {
        if (index2 === position[1]) {
          return piece
        } else {
          return item
        }
      })
    } else {
      return subArray
    }
  })
}

export default board
