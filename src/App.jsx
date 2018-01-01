import GameBoard from './gameBoard'
import GameLoop from './gameLoop'
import React from 'react'
import StartButton from './StartButton'

let App = () => {
  return (
    <div>
      <GameLoop />
      <GameBoard />
      <StartButton />
    </div>
  )
}

export default App
