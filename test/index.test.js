/* eslint-env jest */

import body from '../src/index'

describe('The Body Element', () => {
  test('has an h1 as it\'s first child', () => {
    expect(body.childNodes[0].nodeName).toEqual('H1')
  })
  test('has a button as it\'s second child', () => {
    expect(body.childNodes[1].nodeName).toEqual('BUTTON')
  })
})
