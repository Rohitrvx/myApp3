import React from 'react'
import Header from './Header/Header.jsx'
import Mid from './home/Mid.jsx'
import Footer from './Footer/Footer.jsx'
import Cart from './component/Cart/Cart.jsx'
import Contact from './component/Contact/Contact.jsx'
import ShopCategory from './component/ShopCategory/ShopCategory.jsx'
// import ProductDetails from './component/Product Details/ProductDetails.jsx'
import Checkout  from './component/Checkout/Checkout.jsx';
import Description from './component/Description/Description.jsx'
import { Routes, Route } from 'react-router-dom'


import './App.css'
import ProductDetails from './component/Product Details/ProductDetails.jsx'


function App() {
  return (
    <>

      <Header/>
      <Routes>
        <Route path="/" element= {<Mid/>}></Route>
        <Route path="/cart" element= { <Cart/>}></Route>
        <Route path="/contact" element= {  <Contact/>}></Route>
        <Route path="/ShopCategory" element = {<ShopCategory/>}></Route>
        <Route path="/ProductDetails" element= { <ProductDetails/>}></Route>
      </Routes>
      <Footer/>
     
    
    </>
  )
}

export default App
