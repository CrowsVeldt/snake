/* eslint-env jest */
import createStartButton from '../src/startButton'

describe('createStartButton', () => {
  test('is a function', () => {
    expect(typeof createStartButton).toEqual('function')
  })

  test('returns an HTML button', () => {
    expect(createStartButton().nodeName).toEqual('BUTTON')
  })
})
