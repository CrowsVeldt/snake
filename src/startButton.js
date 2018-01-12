import setSnakePosition from './actions/setSnakePosition'
import startGame from './actions/startGame'

const createStartButton = (dispatch) => {
  const button = document.createElement('button')
  button.innerHTML = 'Start'
  if (dispatch) {
    button.onclick = () => {
      dispatch(startGame())
      dispatch(setSnakePosition([2, 2]))
    }
  }
  return button
}

export default createStartButton
