/* eslint-env jest */
import board, {initializeGameBoard} from './board'

describe('board', () => {
  test('returns state unchanged by default', () => {
    expect(board([], 'TEST')).toEqual([])
  })

  test('returns an empty board when called without a state', () => {
    expect(board(undefined, {
      type: 'TEST'
    })).toEqual(initializeGameBoard(50))
  })
})

describe('generateGameBoard', () => {
  test('returns a new board', () => {
    expect(Array.isArray(initializeGameBoard())).toEqual(true)
  })
})
