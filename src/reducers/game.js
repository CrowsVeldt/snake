const game = (state = { game: 'inactive' }, action) => {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        game: 'active'
      }
    default:
      return state
  }
}

export default game
