import App from './App'
import combinedReducers from './reducers/combinedReducers'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={createStore(combinedReducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
)
