import { connect } from 'react-redux'
import Button from './Button'
import startNewGame from './actions/startNewGame'

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(startNewGame())
    }
  }
}

const StartButton = connect(
  null,
  mapDispatchToProps
)(Button)

export default StartButton
