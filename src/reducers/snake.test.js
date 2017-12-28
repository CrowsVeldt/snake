/* eslint-env jest */
import snake from './snake'

describe('The Snake Reducer', () => {
  test('Returns the state unchanged when called with an unknown action', () => {
    const state = []
    expect(snake(state, 'TEST')).toEqual([])
  })
})
