import { connect } from 'react-redux'
import Layout from './GameLayout'

const mapStateToProps = state => state

const Board = connect(
  mapStateToProps,
  null
)(Layout)

export default Board
