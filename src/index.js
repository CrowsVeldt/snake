import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

ReactDOM.render(
  // get the board from the store, and pass it to App
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
