import React from 'react'
import { Helmet } from 'react-helmet-async'
import ReadMore from '../components/home1/ReadMore'
import Header1 from '../layout/header/Header1'
const Home1 = () => {
  return (
    <div>
      <Helmet><title>First Home</title></Helmet>
    <Header1/>
    <ReadMore/>
    </div>
  )
}

export default Home1
