/* eslint-env jest */
import startGame from '../../src/actions/startGame'

describe('the startGame action creator', () => {
  test('should be a function', () => {
    expect(typeof startGame).toEqual('function')
  })

  test('should return an object', () => {
    expect(typeof startGame()).toEqual('object')
  })

  test('should return an object with a type property', () => {
    expect(startGame().type).not.toEqual(undefined)
  })

  test('should return an object with type: START_GAME', () => {
    expect(startGame().type).toEqual('START_GAME')
  })
})
