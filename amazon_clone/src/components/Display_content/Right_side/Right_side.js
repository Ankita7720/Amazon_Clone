import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Right_side.css';
import { Outlet, Link } from "react-router-dom";
const Right_side = () => {
    const [listOfProduct,setListOfProducts] = useState([]);

    useEffect(()=>{
        //api call
        let list =[
            {id:"1",name : "Iphone10", rating: "34565", price: "45324", image:"https://ik.imagekit.io/amazon123/71i2XhHU3pL._AC_UL640_FMwebp_QL65__bSvBM9yyu9E.webp?updatedAt=1628852293583"},
            {id:"2",name : "Iphone11 Pro", rating: "656", price:"50999", image:"https://ik.imagekit.io/amazon123/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__mSWkMhTkWnT.webp?updatedAt=1628852292388"},
            {id:"3",name : "Iphone12 Pro max", rating: "8754", price:"76543", image:"https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578"},
            {id:"4",name : "Iphone13", rating: "34457", price:"637357", image:"https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461"},
            {id:"5",name : "Iphone12 Pro", rating: "8754", price:"76543", image:"https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578"},
            {id:"6",name : "Iphone13 Pro", rating: "344574", price:"637357", image:"https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461"}
    
        ]
        
        setListOfProducts(list);
    },[]);

  return (
    <div className='Right_side_main'>
        {/* <Product image="https://ik.imagekit.io/yza54hvfcw/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1669925337849" name="iphone 11 (64GB)-Green" rating="23,876" price="61,654"/>
        <Product image="https://ik.imagekit.io/yza54hvfcw/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1669925338108" name="iphone 13 Pro (128GB)-Blue" rating="19,876" price="90,000"/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/> */}
        {   
                listOfProduct.map ( (item) =>(
                    <Link to={"/place_order/"+item.id}><Product defination={item}/></Link>
                    
                ))
            }
    </div>

    
  )
}

export default Right_side
