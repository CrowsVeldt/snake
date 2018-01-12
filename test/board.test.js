/* eslint-env jest */

import {
  initializeBoard,
  createBoard,
  renderBoardSpaces
} from '../src/board'

describe('initializeBoard', () => {
  test('Returns an array', () => {
    expect(Array.isArray(initializeBoard(5))).toEqual(true)
  })

  test('returns an empty game board', () => {
    expect(initializeBoard(5)).toEqual([
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1]
    ])
  })

  test('throws an error if an invalid board size is given', () => {
    expect(() => {
      initializeBoard(1)
    }).toThrow(RangeError)
  })
})

describe('renderBoardSpaces', () => {
  test('is a function', () => {
    expect(typeof renderBoardSpaces).toEqual('function')
  })

  test('returns an array', () => {
    expect(Array.isArray(renderBoardSpaces([[0]]))).toEqual(true)
  })

  test('returns an array containing DOM nodes', () => {
    const testBoard = renderBoardSpaces([[0]])
    const testNode = testBoard[[0]]
    expect(testNode.toString()).toEqual('[object HTMLDivElement]')
  })
})

describe('the board spaces returned by renderBoardSpaces', () => {
  test('are green if empty', () => {
    const testBoard = renderBoardSpaces([[0]])
    const testNode = testBoard[0][0]
    expect(testNode.style.backgroundColor).toEqual('green')
  })

  test('are red if they are wall spaces', () => {
    const testBoard = renderBoardSpaces([[1]])
    const testNode = testBoard[0][0]
    expect(testNode.style.backgroundColor).toEqual('red')
  })
})

describe('createBoard', () => {
  const validBoardArray = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]
  ]

  test('throws an error if called witha non-array parameter', () => {
    expect(() => {
      createBoard(5)
    }).toThrow()
  })

  test('should throw an error if called with an invalid board array', () => {
    expect(() => {
      createBoard([0])
    }).toThrow()
  })

  test('should return a div if called with a valid board array', () => {
    expect(createBoard(validBoardArray).nodeName).toEqual('DIV')
  })

  test('the returned DIV should have (boardArray * boardArray) children elements', () => {
    const childElements = validBoardArray.length * validBoardArray.length
    expect(createBoard(validBoardArray).childElementCount).toEqual(childElements)
  })
})
