import React from 'react'
import "./Checkout.css"

const CheckoutItems = (props) => {
  return (
    <div>
      <div style={{ border: "1px solid #E7E7E7", width: "95%", display:"flex", height: "250px", margin: "25px"}}>
                <div style={{margin: "25px"}}>
                    <img height="200px" src="https://ik.imagekit.io/yza54hvfcw/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1669925337849" />
                </div>
                <div style={{ marginTop: "20px"}}>
                    <div style={{fontSize: "20px"}} className="textgap">iphone 11 pro max</div>
                    <div style={{ fontWeight: "bold"}} className="textgap">70,927.00</div>
                    <div className="textgap">In stock</div>
                    
                </div>
        </div>
    </div>
   
  )
}

export default CheckoutItems
