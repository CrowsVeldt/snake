import { connect } from 'react-redux'
import Button from './Button'
import setSnakePosition from './actions/setSnakePosition'
import setMushroomPosition from './actions/setMushroomPosition'
import startGame from './actions/startGame'

const mapStoreToProps = store => store.game

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(setSnakePosition([24, 24]))
      dispatch(setMushroomPosition([8, 8]))
      dispatch(startGame())
    }
  }
}

const StartButton = connect(
  mapStoreToProps,
  mapDispatchToProps
)(Button)

export default StartButton
