import { initializeBoard } from '../board'

const board = (state = initializeBoard(50), action) => {
  switch (action.type) {
    case 'SET_SNAKE_POSITION':
      return setSnakePosition(state, action.position)
    default:
      return state
  }
}

export function setSnakePosition (board, position) {
  const snakeRow = position[0][0]
  const snakeColumn = position[0][1]
  const oldBoard = board.map((row, rowIndex) => {
    if (rowIndex === snakeRow) {
      return row.map((column, columnIndex) => {
        if (columnIndex === snakeColumn) {
          return 2
        } else {
          return 0
        }
      })
    } else if (rowIndex !== snakeRow) {
      return [...Array(row.length)].map(x => 0)
    }
  })
  return oldBoard
}

export default board
