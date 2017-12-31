import { connect } from 'react-redux'
import gameLayout from './gameLayout'

const mapStateToProps = state => state


const GameBoard = connect(
  mapStateToProps,
  null
)(gameLayout)

export default GameBoard
