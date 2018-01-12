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

  test('should return gameActive: false when called with no parameters', () => {
    expect(game(undefined, {type: 'TEST'})).toEqual({gameActive: false})
  })

  test('should return gameActive: active when it receives START_GAME action', () => {
    expect(game(undefined, {type: 'START_GAME'})).toEqual({gameActive: true})
  })
})
