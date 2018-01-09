const boardReducer = (state = [], action) => {
  switch (action.type) {
    case 'START_GAME':
      // TODO: Add START_GAME action creater
      // return state with board set to the result of createBoard()
      break
    default:
      return state
  }
}

export default boardReducer
