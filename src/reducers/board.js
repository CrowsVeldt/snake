const board = (state = initializeGameBoard(), action) => {
  switch (action.type) {
    case 'SET_SNAKE_POSITION':
      return state.map((item, index) => {
        if (index === action.position[0]) {
          return item.map((item2, index2) => {
            if (index2 === action.position[1]) {
              return 2
            } else {
              return item2
            }
          })
        } else {
          return item
        }
      })
    case 'SET_MUSHROOM_POSITION':
      return state.map((item, index) => {
        if (index === action.position[0]) {
          return item.map((item2, index2) => {
            if (index2 === action.position[1]) {
              return 3
            } else {
              return item2
            }
          })
        } else {
          return item
        }
      })
    default:
      return [...state]
  }
}

export function initializeGameBoard (size = 50) {
  // 0 === empty tile && 1 === wall tile
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
