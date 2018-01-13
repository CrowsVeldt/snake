/* eslint-env jest */
import boardReducer, { setSnakePosition} from '../../src/reducers/boardReducer'

// const validBoardArray = [
//   [1, 1, 1, 1, 1],
//   [1, 0, 0, 0, 1],
//   [1, 0, 0, 0, 1],
//   [1, 0, 0, 0, 1],
//   [1, 1, 1, 1, 1]
// ]
// const testResult = setSnakePosition(1, validBoardArray, [1, 1])

describe('The Board Reducer', () => {
  test('returns the state unchanged by default', () => {
    const testAction = {type: 'TEST'}
    expect(boardReducer({i: 1}, testAction)).toEqual({i: 1})
  })

//   test('should return a new state array when called with SET_SNAKE_POSITION', () => {
//     const testAction = {
//       type: 'SET_SNAKE_POSITION',
//       position: [1, 1]
//     }
//     expect(Array.isArray(boardReducer(validBoardArray, testAction))).toEqual(true)
//   })

//   test('returns a new state when called with SET_SNAKE_POSITION', () => {
//     const testAction = {
//       type: 'SET_SNAKE_POSITION',
//       position: [1, 1]
//     }
//     expect(boardReducer(validBoardArray, testAction)).not.toEqual(validBoardArray)
//   })
// })

// describe('setSnakePosition', () => {
//   test('should be a function', () => {
//     expect(typeof setSnakePosition).toEqual('function')
//   })

//   test('should throw an error if called without parameters', () => {
//     expect(() => {
//       setSnakePosition()
//     }).toThrow()
//   })

//   test('should return an array', () => {
//     expect(Array.isArray(testResult)).toEqual(true)
//   })

//   test('should return a changed array', () => {
//     expect(testResult).not.toEqual(validBoardArray)
//   })

//   test('the element at "position" shoult equal the "piece" parameter', () => {
//     expect(testResult[1][1]).toEqual(1)
//   })
// })
