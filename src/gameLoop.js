import gameTick from './actions/gameTick'

const gameLoop = (dispatch) => {
  return dispatch(gameTick())
}

export default gameLoop
