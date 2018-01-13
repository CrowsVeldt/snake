/* eslint-env jest */

import body, { changeSnakeDirection } from '../src/index'

describe('The Body Element', () => {
  test('has an h1 as it\'s 1st child', () => {
    expect(body.childNodes[0].nodeName).toEqual('H1')
  })

  test('has a button as it\'s 2rd child', () => {
    expect(body.childNodes[1].nodeName).toEqual('BUTTON')
  })

  test('has div as it\'s 3nd child', () => {
    expect(body.childNodes[2].nodeName).toEqual('DIV')
  })
})

describe('changeSnakeDirection', () => {
  test('should return "up" when it receives 37 and currentDirection is "right"', () => {
    expect(changeSnakeDirection(37, 'right')).toEqual('up')
  })
  test('should return "left" when it receives 37 and currentDirection is "up"', () => {
    expect(changeSnakeDirection(37, 'up')).toEqual('left')
  })
  test('should return "down" when it receives 37 and currentDirection is "left"', () => {
    expect(changeSnakeDirection(37, 'left')).toEqual('down')
  })
  test('should return "right" when it receives 37 and currentDirection is "down"', () => {
    expect(changeSnakeDirection(37, 'down')).toEqual('right')
  })

  test('should return "down" when it receives 39 and currentDirection is "right"', () => {
    expect(changeSnakeDirection(39, 'right')).toEqual('down')
  })
  test('should return "right" when it receives 39 and currentDirection is "up"', () => {
    expect(changeSnakeDirection(39, 'up')).toEqual('right')
  })
  test('should return "up" when it receives 39 and currentDirection is "left"', () => {
    expect(changeSnakeDirection(39, 'left')).toEqual('up')
  })
  test('should return "left" when it receives 39 and currentDirection is "down"', () => {
    expect(changeSnakeDirection(39, 'down')).toEqual('left')
  })

  test('should return an error when currenDirection is anything else', () => {
    expect(() => {
      changeSnakeDirection(39, 'blah').toThrow()
    })
  })
})
