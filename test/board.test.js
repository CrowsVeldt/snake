/* eslint-env jest */

import { initalizeGameBoard } from '../src/board'

describe('The Board', () => {
  test('Returns an array', () => {
    expect(Array.isArray(initalizeGameBoard())).toEqual(true)
  })

  test('returns an empty game board', () => {
    expect(initalizeGameBoard(5)).toEqual([
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1]
    ])
  })
})
