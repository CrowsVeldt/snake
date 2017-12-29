import App from './App'
import combinedReducers from './reducers/combinedReducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <Provider store={createStore(
  combinedReducers, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)}>
    <App />
  </Provider>,
  document.getElementById('root')
)
