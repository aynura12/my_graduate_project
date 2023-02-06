import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar1 from "../layout/navbar/Navbar1"
import Footer from "../layout/footer/Footer"
const MainRouter = () => {
  return (
    <div>
      <Navbar1/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainRouter
