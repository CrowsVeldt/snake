import { connect } from 'react-redux'
import gameLayout from './gameLayout'

const mapStateToProps = (
  state
) => {
  return {
    board: state.board
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const GameBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(gameLayout)

export default GameBoard
