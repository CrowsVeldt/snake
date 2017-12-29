import { combineReducers } from 'redux'
import board from './board'
import snake from './snake'

export default combineReducers({
  board,
  snake
})
