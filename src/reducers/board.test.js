/* eslint-env jest */
import board, {initializeGameBoard} from './board'

describe('board', () => {
  test('returns a blank board by default', () => {
    expect(board(0)).toEqual([])
  })

  test('returns a two dimensional array when START_NEW_GAME is received with state 2', () => {
    expect(board(2, {
      type: 'START_NEW_GAME'
    })).toEqual([[0, 0], [0, 0]])
  })
})

describe('generateGameBoard', () => {
  test('returns a new board', () => {
    expect(Array.isArray(initializeGameBoard(1))).toEqual(true)
  })
})
