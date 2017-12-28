import { connect } from 'react-redux'
import gameLayout from './gameLayout'

const mapStateToProps = state => {
  return {
    board: state.board
  }
}

const GameBoard = connect(
  mapStateToProps,
  null
)(gameLayout)

export default GameBoard
