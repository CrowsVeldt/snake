import setSnakePosition from './actions/setSnakePosition'

const createStartButton = (dispatch) => {
  const button = document.createElement('button')
  button.innerHTML = 'Start'
  if (dispatch) {
    button.onclick = () => {
      dispatch(setSnakePosition([2, 2]))
    }
  }
  return button
}

export default createStartButton
