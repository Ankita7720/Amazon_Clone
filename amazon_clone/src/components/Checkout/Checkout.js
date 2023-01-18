import React from 'react'
import "./Checkout.css"
import Grid from '@mui/material/Grid';
import CheckoutItems from './CheckoutItems';

const Checkout = () => {
  return (
    <div className='checkout_body'>
      <Grid container>
        <Grid item={10}>
        <div className="checkout__container">
            <div style={{fontSize: "30px" , fontWeight: "500" , padding : "20px 0px 0px 20px"}}>Shopping Cart</div>
                <div>
                    <CheckoutItems/>
                    <CheckoutItems/>
                    <CheckoutItems/>
                    <CheckoutItems/>

                </div>
        </div> 
        </Grid>
        <Grid item={2}>
            <div style={{ width: "300px", height:"200px", padding: "20px", marginTop: "25px", backgroundColor: "white"}}> 
                <div style={{ fontSize: "26px",fontWeight: "bold"}}>Subtotal (2item): 1,01,000.00</div>
                <button className='placeorder__button'>Proceed to buy</button>
            </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Checkout
