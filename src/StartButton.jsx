import { connect } from 'react-redux'
import Button from './Button'
import setSnakePosition from './actions/setSnakePosition'

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(setSnakePosition([24, 24]))
    }
  }
}

const StartButton = connect(
  null,
  mapDispatchToProps
)(Button)

export default StartButton
