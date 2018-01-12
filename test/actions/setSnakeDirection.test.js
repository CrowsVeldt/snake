/* eslint-env jest */
import setSnakeDirection from '../../src/actions/setSnakeDirection'

describe('the setSnakeDirection', () => {
  test('should be a function', () => {
    expect(typeof setSnakeDirection).toEqual('function')
  })

  test('should return an object', () => {
    expect(typeof setSnakeDirection()).toEqual('object')
  })

  test('the returned object should have a type property', () => {
    expect(setSnakeDirection().type).not.toEqual(undefined)
  })

  test('the returned object should have a direction property', () => {
    expect(setSnakeDirection('left').direction).not.toEqual(undefined)
  })

  test('the returned direction should be the same as what is passed in to the action creator', () => {
    expect(setSnakeDirection('left').direction).toEqual('left')
  })
})
