import { connect } from 'react-redux'
import Button from './Button'
import setSnakePosition from './actions/setSnakePosition'
import startGame from './actions/startGame'

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(setSnakePosition([24, 24]))
      dispatch(startGame())
    }
  }
}

const StartButton = connect(
  null,
  mapDispatchToProps
)(Button)

export default StartButton
