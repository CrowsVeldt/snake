/* eslint-env jest */

import gameLoop from '../src/gameLoop'

describe('gameLoop', () => {
  test('should be a function', () => {
    expect(typeof gameLoop).toEqual('function')
  })
})
