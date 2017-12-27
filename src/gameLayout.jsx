import React from 'react'
import styled from 'styled-components'

const gameLayout = (
  state
) => {
  let id = 0
  return (
    <Board size={state.board.length}>
      {state.board.map(row => {
        return row.map(tile => {
          switch (tile) {
            case 0:
              return (
                <EmptyTile key={id++} />
              )
            case 1:
              return (
                <WallTile key={id++} />
              )
          }
        })
      })}
    </Board>
  )
}
const Board = styled.div`
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
const EmptyTile = styled.div`
  background-color: green;
  height: 8px;
  width: 8px;
`

const WallTile = styled.div`
 background-color: red;
 height: 8px;
 width: 8px;

`

export default gameLayout
