import React from 'react'
import styled from 'styled-components'

const App = () => {
  let board = generateGameBoard()
  return (
    <GameBoard>
      {
        board.map(row => {
          return row.map(item => {
            return <GameSpace />
          })
        })
      }
    </GameBoard>

  )
}

function generateGameBoard () {
  const board = []
  let index = 100

  while (index > 0) {
    board.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    index--
  }
  return board
}

const GameBoard = styled.div`
  height: 100px;
  width: 100px;
  background-color: black;
  display: flex;
  flex-wrap: wrap;
`

const GameSpace = styled.div`
  height: 8px;
  width: 8px;
  border: 0.2px solid white;
`

export default App
