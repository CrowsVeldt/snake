import React from 'react'
import styled from 'styled-components'

const App = () => {
  return <GameBoard />
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
