/* eslint-env jest */

import game from '../../src/reducers/gameReducer'

describe('The Game reducer', () => {
  test('should be a function', () => {
    expect(typeof game).toEqual('function')
  })

  test('should require an action object with a type property', () => {
    expect(() => { game() }).toThrow(TypeError)
  })

  test('should accept a state, and return it unchanged by default', () => {
    expect(game([1, 2], {type: 'TEST'})).toEqual([1, 2])
  })

  test('should return game: inactive when called with no parameters', () => {
    expect(game(undefined, {type: 'TEST'})).toEqual({game: 'inactive'})
  })
})
