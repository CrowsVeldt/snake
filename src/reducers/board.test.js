/* eslint-env jest */
import board, {initializeGameBoard} from './board'

describe('board', () => {
  test('returns a blank board by default', () => {
    expect(board([], 'TEST')).toEqual([])
  })

  test('returns an empty game when START_NEW_GAME received', () => {
    expect(board({}, {
      type: 'START_NEW_GAME'
    })).toEqual(initializeGameBoard(50))
  })
})

describe('generateGameBoard', () => {
  test('returns a new board', () => {
    expect(Array.isArray(initializeGameBoard())).toEqual(true)
  })
})
