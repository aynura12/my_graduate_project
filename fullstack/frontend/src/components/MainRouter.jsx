import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from "../layout/footer/Footer"
import Navbar1 from '../layout/navbar/Navbar1'

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
