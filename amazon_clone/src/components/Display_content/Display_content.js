import React from 'react'
import Left_side from './Left_side/Left_side'
import Right_side from './Right_side/Right_side'

const Display_content = () => {
  return (
    <div style={{ display: 'flex'}}>
      
      <div><Left_side/></div>
      <div><Right_side/></div>
    </div>
  )
}

export default Display_content
