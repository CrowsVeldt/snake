import board from './boardReducer'
import game from './gameReducer'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  board,
  game
})

export default reducers
