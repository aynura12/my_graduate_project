import React from 'react'
import { Helmet } from 'react-helmet-async'
import Cause from '../components/home1/Cause'
import Charity from '../components/home1/Charity'
import DoHelp from '../components/home1/DoHelp'
import Donation from '../components/home1/Donation'
import GiveHelp from '../components/home1/GiveHelp'
import HelpUs from '../components/home1/HelpUs'
import ReadMore from '../components/home1/ReadMore'
import Volunteers from '../components/home1/Volunteers'
import Header1 from '../layout/header/Header1'
const Home1 = () => {
  return (
    <div>
      <Helmet><title>First Home</title></Helmet>
    <Header1/>
    <ReadMore/>
    <HelpUs/>
    <Donation/>
    <Charity/>
    <Cause/>
    <GiveHelp/>
    <DoHelp/>
    <Volunteers/>
    </div>
  )
}

export default Home1
