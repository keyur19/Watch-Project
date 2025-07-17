import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { CartProvider } from './components/CartContext';
import NavBar1 from './components/NavBar1';
import NavBar2 from './components/NavBar2';
import Home from './components/Home';
import Men from './components/Men';
import Women from './components/Women';
import Collection from './components/Collection';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';
import BuyButton from './components/BuyButton';
import PlaceOrder from './components/PlaceOrder';



const firstpara = {
  color:"#74c0fc",
  // color:"darkblue",
 fontWeight:"bold",
 fontSize:"23px",
 fontFamily:"monospace",
 display:"flex",
 justifyContent: "center",
 alignItems: "center",
 fontWeight:"900",
}
const defpara = {
  fontFamily:"serif",
  color:"hotpink",
  fontSize:"30px",
  display:"flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight:"900",
}
// navbar1
// navbar2
// home
// card
// footer
// men
// cardof men
// cardof men 2  
// women
// card of women
// card of women 2
// Collection
// collection card1
// collection card2
// Cart
// cart context
// buy button

function App() {
  return (
    <>
    <CartProvider>
    <div className='app'>
      <BrowserRouter>
      <NavBar1 />
      <NavBar2 />
      <div className=''>
        <br />
        <p style={firstpara} className="d-flex align-items-center">Wear Your Time With Pride On Your Wrist...
                    <br />
                
                </p>
      {/* <p style={secondpara} >Where every tick tells a story</p> */}
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/Men' Component= {Men } />
          <Route path='/Women' Component= {Women} />
          
          <Route path='/Collections' Component = {Collection } />
          <Route path = "/Cart" Component = {Cart} />
          {/* <Route path = "/Buy" Component={BuyButton} /> */}
          <Route path='/buy/:id' element = {<BuyButton />} />
          <Route path = "/place" element = {<PlaceOrder />} />
          <Route path = "/checkout" element = {<PlaceOrder />} />
        </Routes>
      </div>
      
      <p style={defpara}>Happy Shopping ...</p>
      <br />
      <Footer />
      </BrowserRouter>
    </div>
    </CartProvider>
    </>
  );
}

export default App;
/*
For your resume, you can describe your project in a way that highlights your skills and the technologies you used. Here's a suggestion on how to phrase it:

React Project: Wrist Wonders

Description: Developed a watch store application named "Wrist Wonders" using React. The application features a responsive design implemented with Bootstrap and includes functionalities like placing orders and selecting payment methods.
Technologies Used: React, Bootstrap, LocalStorage
Key Features:
User-friendly interface for browsing and purchasing watches.
Integrated local storage to manage user data without a backend database.
Responsive design ensuring optimal user experience across various devices.*/