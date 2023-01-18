import React from 'react'
import './Right_side.css';
import getSymbolFromCurrency from 'currency-symbol-map'
const Product = (props) => {
  return (
    <div className='product'>
      <div className='product_img'>
        <img src={props.defination.image}height="280px"></img>
        {/* <img src="https://ik.imagekit.io/yza54hvfcw/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1669925337849"height="280px"></img> */}
      </div>
      <div className='product_name'>
        {props.defination.name}
        {/* iphone 11 (64GB)-Green */}
      </div>
      <div className='product_rating'>
      {/* <Rating name="read-only" value={4} style={{fontSize:"20px"}} readOnly /> */}
        {props.defination.rating}
        
      </div>
      <div className='product_price'>
      {getSymbolFromCurrency('INR')}{props.defination.price}
      </div>
    </div>
  )
}

export default Product

 