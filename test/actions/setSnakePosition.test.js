/* eslint-env jest */

import setSnakePosition from '../../src/actions/setSnakePosition'

describe('The setSnakePosition action creater', () => {
  const testCall = setSnakePosition([1, 1])

  test('should be a function', () => {
    expect(typeof setSnakePosition).toEqual('function')
  })

  test('should return an object', () => {
    expect(typeof testCall).toEqual('object')
  })

  test('the returned object should have a type propert', () => {
    expect(testCall.type).not.toEqual(undefined)
  })

  test('the returned objects type should be SET_SNAKE_POSITION', () => {
    expect(testCall.type).toEqual('SET_SNAKE_POSITION')
  })

  test('should return an object with a position property', () => {
    expect(testCall.position).not.toEqual(undefined)
  })

  test('should throw an error if called with something other than an array', () => {
    expect(() => {
      setSnakePosition('bad parameter')
    }).toThrow()
  })

  test('should throw an error if the position array has too few elements', () => {
    expect(() => {
      setSnakePosition([1])
    }).toThrow()
  })

  test('should throw an error if the position array has too many elements', () => {
    expect(() => {
      setSnakePosition([1, 1, 1])
    }).toThrow()
  })
})
