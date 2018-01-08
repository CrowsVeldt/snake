/* eslint-env jest */

import body from '../src/index'

describe('The Body Element', () => {
  test('has an h1 as it\'s first child', () => {
    expect(body.childNodes[0].nodeName).toEqual('H1')
  })
})
