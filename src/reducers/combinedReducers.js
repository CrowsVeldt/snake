import board from './boardReducer'
import game from './gameReducer'
import snake from './snakeReducer'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  board,
  game,
  snake
})

export default reducers
