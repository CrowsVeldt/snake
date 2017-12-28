/* eslint-env jest */
import board, {initializeGameBoard} from './board'

describe('board', () => {
  test('returns an empty board by default', () => {
    expect(board(undefined, 'TEST')).toEqual(initializeGameBoard(50))
  })

  test.skip('Start new game when it receives STAR_NEW_GAME', () => {
    expect(board({}, {
      type: 'START_NEW_GAME'
    })).toEqual()
  })
})

describe('generateGameBoard', () => {
  test('returns a new board', () => {
    expect(Array.isArray(initializeGameBoard())).toEqual(true)
  })
})
