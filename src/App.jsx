import Board from './GameBoard'
import GameLoop from './GameLoop'
import React from 'react'
import StartButton from './StartButton'

const App = () => {
  return (
    <div>
      <GameLoop />
      <Board />
      <StartButton />
    </div>
  )
}

export default App
