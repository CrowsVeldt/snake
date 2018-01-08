/* eslint-env jest */
import boardReducer from '../../src/reducers/boardReducer'

describe('The Board Reducer', () => {
  test('returns an Array', () => {
    expect(Array.isArray(boardReducer())).toEqual(true)
  })

  test.skip('returns the state unchanged by default', () => {

  })
})
