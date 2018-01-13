import startGame from './actions/startGame'

const createStartButton = (dispatch) => {
  const button = document.createElement('button')
  button.innerHTML = 'Start'
  if (dispatch) {
    button.onclick = () => {
      dispatch(startGame())
    }
  }
  return button
}

export default createStartButton
