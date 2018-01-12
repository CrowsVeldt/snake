/* eslint-env jest */
import boardReducer, { setPiecePosition } from '../../src/reducers/boardReducer'

const validBoardArray = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1]
]

const testResult = setPiecePosition(1, validBoardArray, [1, 1])

describe('The Board Reducer', () => {
  test('returns the state unchanged by default', () => {
    const testAction = {type: 'TEST'}
    expect(boardReducer({i: 1}, testAction)).toEqual({i: 1})
  })
})

describe('setPiecePosition', () => {
  test('should be a function', () => {
    expect(typeof setPiecePosition).toEqual('function')
  })

  test('should throw an error if called without parameters', () => {
    expect(() => {
      setPiecePosition()
    }).toThrow()
  })

  test('should return an array', () => {
    expect(Array.isArray(testResult)).toEqual(true)
  })

  test('should return a changed array', () => {
    expect(testResult).not.toEqual(validBoardArray)
  })

  test('the element at "position" shoult equal the "piece" parameter', () => {
    expect(testResult[1][1]).toEqual(1)
  })
})
