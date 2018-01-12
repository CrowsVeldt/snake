export function renderBoardSpaces (boardArray) {
  return boardArray.map((subArray) => {
    return subArray.map((element) => {
      let boardSpace = document.createElement('div')
      boardSpace.style.height = '8px'
      boardSpace.style.width = '8px'
      boardSpace.style.border = '1px solid black'
      switch (element) {
        case 0:
          boardSpace.style.backgroundColor = 'green'
          return boardSpace
        case 1:
          boardSpace.style.backgroundColor = 'red'
          return boardSpace
        case 2:
          boardSpace.style.backgroundColor = 'purple'
          return boardSpace
      }
    })
  })
}

export function renderBoard (boardArray) {
  const board = document.createElement('div')
  board.style.height = '500px'
  board.style.width = '500px'
  board.style.display = 'grid'
  board.style.gridTemplateColumns = 'repeat(50, 10px [col-start])'

  const boardChildren = renderBoardSpaces(boardArray)
  boardChildren.map(subArray => {
    return subArray.map(element => {
      board.appendChild(element)
    })
  })
  return board
}

export function initializeBoard (size) {
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
