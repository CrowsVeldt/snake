export function updateBoard (boardState, body) {
  // I don't know how to test this/write it to be more testable. So I'll depend
  // on manual tests for now
  const board = createBoard(boardState)
  body.removeChild(document.getElementById('board'))
  body.appendChild(board)
}

export function renderBoardSpaces (boardSpaces) {
  return boardSpaces.map((boardSpacesRow, index) => {
    return boardSpacesRow.map((element, index2) => {
      let boardSpace = document.createElement('div')
      boardSpace.setAttribute('id', index + ' ' + index2)
      boardSpace.style.height = '8px'
      boardSpace.style.width = '8px'
      boardSpace.style.border = '1px solid black'
      switch (element) {
        case 0:
          boardSpace.style.backgroundColor = 'green'
          return boardSpace
        case 2:
          boardSpace.style.backgroundColor = 'purple'
          return boardSpace
        default:
          return Error('invalid space number')
      }
    })
  })
}

export function createBoard (boardArray) {
  const board = document.createElement('div')
  board.style.height = '500px'
  board.style.width = '500px'
  board.style.display = 'grid'
  board.style.gridTemplateColumns = 'repeat(50, 10px [col-start])'
  board.setAttribute('id', 'board')

  const boardChildren = renderBoardSpaces(boardArray)
  boardChildren.map(boardRow => {
    return boardRow.map(element => {
      board.appendChild(element)
    })
  })
  return board
}

export function initializeBoard (size) {
  return [...Array(size)].map((x, index) => {
    return [...Array(size)].map(x => 0)
  })
}
