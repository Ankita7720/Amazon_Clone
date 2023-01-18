
import "./PlaceOrder.css"
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Outlet, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react';
// import { CartContext } from '../CartContext';
const PlaceOrder = (props) => {
    // const [item,size,increment]=useContext(CartContext);
    const [productDetails,setProductDetails] = useState([]);
    let { id } = useParams();

    // const addToCart=function(){
    //     increment(productDetails);
    // }

    useEffect(()=>{
        //api call
        let list = [
            {
                id: 1,
                name: "New Apple IPhone 10",
                rating: "34565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "50999",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71i2XhHU3pL._AC_UL640_FMwebp_QL65__bSvBM9yyu9E.webp?updatedAt=1628852293583",
                about: [
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 2,
                name: "IPhone 11 Pro",
                rating: "34565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "50999",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__mSWkMhTkWnT.webp?updatedAt=1628852292388",
                about: [
                    "Desription for iphone 11 ",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 3,
                name: "Iphone12 Pro Max",
                rating: "34565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "76543",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578",
                about: [
                    "Desription for iphone 12 ",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 4,
                name: "Iphone13",
                rating: "34565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "637357",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461",
                about: [
                    "Desription for iphone 13",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 5,
                name: "Iphone12 Pro",
                rating: "34565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "76543",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578",
                about: [
                    "Desription for iphone 12 pro ",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 6,
                name: "Iphone13 Pro",
                rating: "344574",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "63,735",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/amazon123/71i2XhHU3pL._AC_UL640_FMwebp_QL65__bSvBM9yyu9E.webp?updatedAt=1628852293583",
                about: [
                    "Desription for iphone 13",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
        ];

        //fake API
        let itemfilter = list.filter ( item => {
            if(item.id== id) return item;
        })

        console.log(itemfilter);
        setProductDetails(itemfilter[0]);
    },[]);
  return (
    <div>
      <Grid container>
                <Grid item xs={5}>
                    <img className="placeorder__image" src={productDetails.image} />
                </Grid>
                <Grid item xs={4}>
                    <div className="placeholder__description">
                        <div style={{fontSize:"24px", lineHeight:"32px", fontWeight: 500}}>{productDetails.name}</div>
                        <div>
                            {productDetails.rating} ratings |
                            {productDetails.review} answered questions
                        </div>
                        <hr></hr>
                        <div>
                            <div className="textgap">Price:	<span className="pricetag">₹ {productDetails.price}</span></div>
                            <div className="textgap">FREE delivery: <strong>{productDetails.delivery}</strong></div>
                            <div className="textgap">EMI starts at ₹{productDetails.emi} No Cost EMI available</div>
                            <div style={{ color: "#007600", fontSize: "20px"}} className="textgap">{productDetails.status}</div>
                            <div className="textgap">Sold by <strong>{productDetails.soldby}</strong> and Fulfilled by Amazon.</div>
                            
                        </div>
                        </div>
                        <div>
                            <br></br>
                            <div style={{fontSize:"24px" }} className="about">About this item</div>
                            <div>
                            <ul>
                                {   
                                    productDetails.about!=undefined ?
                                    productDetails.about.map ( (item) =>(
                                        <li>{item}</li>
                                    )) : <span></span>
                                }
                                </ul>
                                {/* <ul>
                                <li>6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display</li>
                                <li>Water and dust resistant (2 meters for up to 30 minutes, IP68)</li>
                                <li>Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps</li>
                                <li>12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo</li>
                                <li>Face ID for secure authentication</li>
                                <li>A13 Bionic chip with third-generation Neural Engine</li>
                                <li>Fast-charge capable</li>
                                </ul> */}
                            </div>
                            
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                    <Paper variant="outlined">
                        <div className='button1'>
                        {/* <button className="addtocart" onClick={addToCart}>Add to Cart</button> */}
                        <button className="addtocart">Add to Cart</button>
                        <Link to="/checkout"><button className="buynow">Buy Now</button></Link>
                        </div>
                        </Paper>
                    </Grid>
                    </Grid>
    </div>
  )
}

export default PlaceOrder
