/* eslint-env jest */
import startButton from '../src/startButton'

describe('startButton', () => {
  test('is a button', () => {
    expect(startButton.nodeName).toEqual('BUTTON')
  })
})
