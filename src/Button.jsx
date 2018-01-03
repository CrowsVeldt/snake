import React from 'react'

const Button = (
  props,
  onClick
) => {
  return (
    <button onClick={
      props.game === 'inactive' ? props.onClick : undefined }>
      Start!
    </button>
  )
}

export default Button
