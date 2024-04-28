import React from 'react'
import Mdata from '../data.json'
const RomoveCard = ({id,name,setCartData,cartData}) => {
  return (
    <div className='dataCard'>
           <p>{id}</p>
           <p>{name}</p>
           <button className="button"onClick={()=>{
            const data=cartData.filter((data)=>{
                return (data!=id)
            })
            setCartData(data)
           }}>Remove Card</button>
    </div>
  )
}

export default RomoveCard