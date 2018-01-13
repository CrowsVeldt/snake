/* eslint-env jest */
import gameTick from '../../src/actions/gameTick'

describe('the gameTick action creator', () => {
  test('should be a function', () => {
    expect(typeof gameTick).toEqual('function')
  })

  test('should return an object', () => {
    expect(typeof gameTick()).toEqual('object')
  })

  test('should return an object with a type property', () => {
    expect(gameTick().type).not.toEqual(undefined)
  })

  test('should return an object with type: GAME_TICK', () => {
    expect(gameTick().type).toEqual('GAME_TICK')
  })
})
