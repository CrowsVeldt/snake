/* eslint-env jest */

import { createBoard } from '../src/board'

describe('The Board', () => {
  test('Returns an array', () => {
    expect(Array.isArray(createBoard())).toEqual(true)
  })
})
