/* eslint-env jest */
import board, {generateGameBoard} from './board'

describe('board', () => {
  test('returns a new board when it receives START_NEW_GAME', () => {
    expect(board(0, {
      type: 'START_NEW_GAME'
    })).toEqual([])
  })

  test('returns a two dimensional array when START_NEW_GAME is received with state 2', () => {
    expect(board(2, {
      type: 'START_NEW_GAME'
    })).toEqual([[0, 0], [0, 0]])
  })
})

describe('generateGameBoard', () => {
  test('returns a new board', () => {
    expect(Array.isArray(generateGameBoard(1))).toEqual(true)
  })
})
