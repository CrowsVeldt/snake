/* eslint-env jest */
import App from './App'
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

describe('The App Componenet', () => {
  const shallow = new ShallowRenderer()

  test('Renders without crashing', () => {
    const div = document.createElement('div')
    shallow.render(<App />, div)
  })

  test('Renders correctly', () => {
    const tree = shallow.render(<App />)
    expect(tree).toMatchSnapshot()
  })
})
