/* eslint-env jest */
import game from './game'

describe('The game reducer', () => {
  test('is a function', () => {
    expect(typeof game).toEqual('function')
  })

  test('returns the previous state by default', () => {
    const testState = {
      test1: 'test1',
      test2: 'test2'
    }
    const result = game(testState, {type: 'TEST'})
    expect(result).toEqual(testState)
  })

  test('returns {game: active} when it receives the START_GAME action', () => {
    const result = game({}, {type: 'START_GAME'})
    expect(result).toEqual({game: 'active'})
  })
})
