const game = (state = { gameActive: false }, action) => {
  switch (action.type) {
    case 'START_GAME':
      return Object.assign({}, state, {
        gameActive: true
      })
    default:
      return state
  }
}
export default game
