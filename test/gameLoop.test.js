/* eslint-env jest */
import gameLoop from '../src/gameLoop'

describe('Game Loop', () => {
  test('should be a function', () => {
    expect(typeof gameLoop).toEqual('function')
  })

  test('should return a function', () => {
    expect(typeof gameLoop()).toEqual('function')
  })
})
