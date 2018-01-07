/* eslint-env jest */

import { createBoard } from '../src/board'

describe('The Board', () => {
  test('Returns a div', () => {
    expect(createBoard()).toEqual(document.createElement('div'))
  })
})
