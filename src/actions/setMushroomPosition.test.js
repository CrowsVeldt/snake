/* eslint-env jest */

import setMushroomPosition from './setMushroomPosition'

describe('setMushroomPosition', () => {
  test('is a function', () => {
    expect(typeof setMushroomPosition).toEqual('function')
  })

  test('returns an object', () => {
    expect(typeof setMushroomPosition()).toEqual('object')
  })

  test('returns an object with type: SET_MUSHROOM_POSITION', () => {
    expect(setMushroomPosition().type).toEqual('SET_MUSHROOM_POSITION')
  })

  test('takes an array parameter and returns it as position', () => {
    const action = setMushroomPosition([8, 8])
    expect(action.position).toEqual([8, 8])
  })
})
