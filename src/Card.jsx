import React, { useState } from 'react'

const Card = ({id,name,setCartData,cartData}) => {
   
  return (
<div className='dataCard'>
           <p>{id}</p>
           <p>{name}</p>
           <button className="button"onClick={()=>{
            setCartData([...cartData,id])
           }}>Add Card</button>
    </div>
  )
}

export default Card