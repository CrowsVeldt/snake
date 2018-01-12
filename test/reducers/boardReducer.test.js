/* eslint-env jest */
import boardReducer from '../../src/reducers/boardReducer'

describe('The Board Reducer', () => {
  test('returns the state unchanged by default', () => {
    const testAction = {type: 'TEST'}
    expect(boardReducer({i: 1}, testAction)).toEqual({i: 1})
  })
})
