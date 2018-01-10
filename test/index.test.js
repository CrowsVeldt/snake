/* eslint-env jest */

import body from '../src/index'

describe('The Body Element', () => {
  test('has an h1 as it\'s 1st child', () => {
    expect(body.childNodes[0].nodeName).toEqual('H1')
  })

  test('has div as it\'s 2nd child', () => {
    expect(body.childNodes[1].nodeName).toEqual('DIV')
  })

  test('has a button as it\'s 3rd child', () => {
    expect(body.childNodes[2].nodeName).toEqual('BUTTON')
  })
})
