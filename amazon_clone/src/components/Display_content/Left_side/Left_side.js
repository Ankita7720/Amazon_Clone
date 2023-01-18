import React from 'react'
import "./Left_side.css";
const Left_side = () => {
  return (
    
      <div className='left_side_main'>
      <div className="leftSide__header">
                Brand
            </div>
            <div className="leftSide__brandname">
                <label className="brandname">
                    <input type="checkbox" value="Apple" />Apple
                </label>
                <label className="brandname">
                    <input type="checkbox" value="Samsung" />Samsung
                </label>
                <label className="brandname">
                    <input type="checkbox" value="MI" />Mi
                </label>
                <label className="brandname">
                    <input type="checkbox" value="Vivo" />Vivo
                </label>
                <label className="brandname">
                    <input type="checkbox" value="Oppo" />Oppo
                </label>
                <label className="brandname">
                    <input type="checkbox" value="One Plus" />One Plus
                </label>
            </div>
      </div>
    
  )
}

export default Left_side
