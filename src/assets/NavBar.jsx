import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({cartData}) => {
  return (
    <div className='nav'>
      <div className='header'>
            <h2>Add To Cart</h2>
      </div>
      <div className='classList'>
        <ul>
          <Link to="/cart_demo"><li>Home</li></Link>
        <Link to="/cart_demo/cart" > <li onClick={()=>{
            console.log("Cart Here")
          }}className='cartCircle'>
            {
             cartData.length==0?"": <span className='dot'>{cartData.length}</span>
            }
            Cart</li></Link>
        </ul>
      </div>
      </div>
  )
}

export default NavBar