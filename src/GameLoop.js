import { connect } from 'react-redux'

let GameLoop = () => {
  // TODO: Figure out how to get state from context here
  // TODO: Every 60th of a second, dispatch actions to the store to update the game state as appropriate
  return null
}
GameLoop = connect()(GameLoop)

export default GameLoop
