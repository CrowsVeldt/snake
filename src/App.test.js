/* eslint-env jest */
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('matches the previous snapshot', () => {
  const tree = renderer.create(<App />)
  expect(tree).toMatchSnapshot()
})
