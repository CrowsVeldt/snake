/* eslint-env jest */
import setSnakePosition from './setSnakePosition'

describe('setSnakePosition', () => {
  test('is a function', () => {
    expect(typeof setSnakePosition).toBe('function')
  })

  test('returns an object', () => {
    expect(typeof setSnakePosition()).toBe('object')
  })

  test('returns an object with type: SET_SNAKE_POSITION', () => {
    const action = setSnakePosition()
    expect(action.type).toEqual('SET_SNAKE_POSITION')
  })

  test('takes an array parameter and returns it as position', () => {
    const action = setSnakePosition([24, 25])
    expect(action.position).toEqual([24, 25])
  })
})
