import React from 'react'
import styled from 'styled-components'

const gameLayout = (
  state
) => {
  let id = 0
  return (
    <Background>
      {state.board.map(row => {
        return row.map(space => {
          return (
            <GameSpace key={id++} />
          )
        })
      })}
    </Background>
  )
}
// TODO: figure out how to scale the board based on the number of children
const Background = styled.div`
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

export default gameLayout
