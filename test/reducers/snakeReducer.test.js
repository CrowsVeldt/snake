/* eslint-env jest */
import snake from '../../src/reducers/snakeReducer'

const testState = {}

describe('the Snake Reducer', () => {
  test('should be a function', () => {
    expect(typeof snake).toEqual('function')
  })

  test('should throw an error it it does not receive an action object with a type property', () => {
    expect(() => { snake() }).toThrow(TypeError)
  })

  test('should accept a state, and return it unchanged by default', () => {
    expect(snake({1: 1}, {type: 'TEST'})).toEqual({1: 1})
  })

  test('should return a new state when called with SET_SNAKE_DIRECTION action', () => {
    expect(snake(testState, {type: 'SET_SNAKE_DIRECTION'}).snakeDirection).not.toEqual(testState)
  })
})
