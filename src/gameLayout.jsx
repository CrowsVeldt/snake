import React from 'react'
import styled from 'styled-components'

const gameLayout = (
  state
) => {
  let id = 0
  return (
    <Background size={state.board.length}>
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
const Background = styled.div`
  background-color: black;
  height: ${props =>
    `${props.size * 10}px;`
  }
  width: ${props =>
    `${props.size * 10}px;`
  }
  display: grid;
  grid-template-columns: ${props =>
    `repeat(${props.size}, 10px [col-start]);`
  }
`
const GameSpace = styled.div`
  background-color: green;
  height: 8px;
  width: 8px;
`

export default gameLayout
