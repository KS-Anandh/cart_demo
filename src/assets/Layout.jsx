import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const Layout = ({cartData}) => {
  return (
    <>
    <NavBar cartData={cartData}/>
    <Outlet/>
    </>
  )
}

export default Layout