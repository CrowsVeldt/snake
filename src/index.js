import GameBoard from './gameBoard'
import combinedReducers from './reducers/combinedReducers'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

ReactDOM.render(
  // TODO: Add button to start game, that dispatchs an action
  <Provider store={createStore(combinedReducers)}>
    <GameBoard />
  </Provider>,
  document.getElementById('root')
)
