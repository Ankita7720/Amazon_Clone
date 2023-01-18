import React, { Component } from 'react'
import "./NavBar.css"  
import { Outlet, Link } from "react-router-dom";
import { CartContext } from '../CartContext';

class Navbar extends Component {
  // static contextType=CartContext;
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    let {item,size,increment}=this.context;
    return (
      <>
    <div className='navbar_component'>
      <div className='navbar_logo'>
        <div className='navnar_locator'>
          <div className='navbar_locImg'>
            <div className='navbar_location'>Pune</div>
          </div>
        </div>
       
      </div>
      <div>
          <select className="nav_dropdown">
              <option value="All">All</option>
              <option value="Alexa">Alexa</option>
              <option value="Books">Books</option>
              <option value="Baby">Baby</option>
              <option value="Beauty">Beauty</option>
              <option value="Clothes">Clothes</option>
              </select>
              </div>
      <div>
        <input type="text" className='navbar_search'></input>
      </div>
      <div>
        <div className='search_icon'></div>
      </div>
      <div className='navbar_signin'>Hello, Sign In</div>
      <div className='navbar_orders'>Orders
      </div>
      <div className='navbar_cart'>
        {/* <div className='cart_number'>{size}</div> */}
        <div className='cart_number'>0</div>
        <h5 className='navbar_cartText'>Cart</h5>
      </div>
    </div> 
    <div className='navbar__footer'>
            <div className="navbar__footer_text">Best Seller</div>
            <div className="navbar__footer_text">Mobile</div>
            <div className="navbar__footer_text">Books</div>
            <div className="navbar__footer_text">Fashion</div>
            <div className="navbar__footer_text">Electronics</div>
            <div className="navbar__footer_text">Skin Care</div>
            <div className="navbar__footer_text">Customer Service</div>
            <div className="navbar__footer_text">Computers</div>
            <div className="navbar__footer_text">Home & Kitchen</div>
    </div>
    </>);
  }
}
 
export default Navbar;