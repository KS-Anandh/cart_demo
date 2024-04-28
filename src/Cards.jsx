import React from 'react'
import Card from './Card'
import data from './data.json'
const Cards = ({cartData,setCartData}) => {
  return (
    <div className='cards'>
    {
      data.map((data,id)=>{
        return <Card key={id}id={data.id} name={data.name} setCartData={setCartData} cartData={cartData}/> 
      })
    }
    </div>
  )
}

export default Cards