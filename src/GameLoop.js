import { connect } from 'react-redux'

let GameLoop = ({store}) => {
  console.log(store)
  // TODO: Every 60th of a second, dispatch actions to the store to update the game state as appropriate
  return null
}
GameLoop = connect()(GameLoop)

export default GameLoop
