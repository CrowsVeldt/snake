/* eslint-env jest */
import boardReducer from '../../src/reducers/boardReducer'

const validBoardArray = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
const testPosition = [[0, 0], [0, 0]]

describe('The Board Reducer', () => {
  test('returns the state unchanged by default', () => {
    const testAction = {type: 'TEST'}
    expect(boardReducer({i: 0}, testAction)).toEqual({i: 0})
  })
  test('returns a new state when called with SET_SNAKE_POSITION', () => {
    const testAction = {
      type: 'SET_SNAKE_POSITION',
      position: testPosition
    }
    expect(boardReducer(validBoardArray, testAction)).not.toEqual(validBoardArray)
  })
  test('should return a new state array when called with SET_SNAKE_POSITION', () => {
    const testAction = {
      type: 'SET_SNAKE_POSITION',
      position: testPosition
    }
    expect(Array.isArray(boardReducer(validBoardArray, testAction))).toEqual(true)
  })
})
