/* eslint-env jest */
import startGame from './startGame'

describe('startGame', () => {
  test('is a function', () => {
    expect(typeof startGame).toBe('function')
  })

  test('to return an object', () => {
    expect(typeof startGame()).toBe('object')
  })

  test('to have the type START_GAME', () => {
    const action = startGame()
    expect(action.type).toEqual('START_GAME')
  })
})
