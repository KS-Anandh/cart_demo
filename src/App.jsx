import React, { useState,Link} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import NavBar from './assets/NavBar'
import Cards from './Cards'
import Layout from './assets/Layout'
import ShowCart from './ShowCart'
const App = () => {
  const [cartData,setCartData]=useState([]);
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/cart_demo" element={<Layout cartData={cartData}/>}>
            <Route  index element={<Cards cartData={cartData} setCartData={setCartData}/>}/>
            <Route path="/cart_demo/cart" element={<ShowCart cartData={cartData} setCartData={setCartData}/>}/>
        </Route>  
    </Routes>
    </BrowserRouter>
      </>
  )
}
export default App
