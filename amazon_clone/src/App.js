import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import MainPage from './components/HomePage/MainPage';
import Display_content from './components/Display_content/Display_content';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Checkout from './components/Checkout/Checkout';
// import { BrowserRouter as Router, 
//   Link, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CartContextProvider from './components/CartContext';
function App() {
  return (
    
    <div className="App">
      {/* <CartContextProvider> */}
      <Navbar/>
      {/* <MainPage/> */}
      {/* <Display_content/> */}
      {/* <PlaceOrder/> */}
      {/* <Checkout/> */}
      <BrowserRouter>
      
      <Routes>
        
          <Route index element={<MainPage/>} />
          <Route path="/display" element={<Display_content/>} />
          <Route path="/place_order/:id" element={<PlaceOrder/>} />
          <Route path="/checkout" element={<Checkout/>} />
        
      </Routes>
      
    </BrowserRouter>
    {/* </CartContextProvider> */}
    </div>
    
  );
}

export default App;
