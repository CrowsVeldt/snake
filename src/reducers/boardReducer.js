const boardReducer = (state = [], action) => {
  switch (action.type) {
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

export default boardReducer
