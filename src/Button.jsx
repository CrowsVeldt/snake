import React from 'react'

const Button = (
  props,
  onClick
) => {
  return (
    <button onClick={props.onClick}>
      Start!
    </button>
  )
}

export default Button
