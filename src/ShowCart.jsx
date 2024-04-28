import React from 'react'
import Mdata from './data.json'
import Card from './Card'
import RomoveCard from './assets/RomoveCard'
import { Link } from 'react-router-dom'
const ShowCart = ({setCartData,cartData}) => {
    var price=0;
     for(var i=0;i<cartData.length;i++){
           price=price+cartData[i]
     }
  return (
    <>
     <div className='cartInfo'>
        <p>Total-Carts: {cartData.length}</p>
        <p>Total-Price:{price}</p>
    </div>
    <div className='showCart'>
        {
            cartData.length==0?<center  className='noCart'>No cart Details,For Shope Go this <Link to="/cart_demo"> Shop </Link> </center>:""
        }
        {
            cartData.map((data,id)=>{
             return   <RomoveCard key={id} id={Mdata[data].id} name={Mdata[data].name} setCartData={setCartData} cartData={cartData} />
            })
        }
    </div>
    </>
  )
}

export default ShowCart