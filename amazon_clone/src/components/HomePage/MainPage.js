import React, { Component } from 'react';
import AdvertisementFour from './four_img_Ad/AdvertisementFour';
import "./MainPage.css";
import AdvertisementOne from './one_img_Ad/AdvertisementOne';
import { Outlet, Link } from "react-router-dom";

class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='main_page'>
                <div className='main_Advertisement'>
                    <Link to="/display"><AdvertisementOne/></Link>
                    <AdvertisementFour/>
                    <AdvertisementOne/>
                    <AdvertisementOne/>
                    <AdvertisementFour/>
                    <AdvertisementOne/>
                </div>
            </div>
         );
    }
}
 
export default MainPage;