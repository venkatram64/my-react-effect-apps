import React from 'react'
import ClickIncrementCounter from './ClickIncrementCounter'
import MouseOverIncrementCounter from './MouseOverIncrementCounter'

const Counter = () => {
  return (
    <div>
      <ClickIncrementCounter/>
      <MouseOverIncrementCounter/>
    </div>
  )
}

export default Counter