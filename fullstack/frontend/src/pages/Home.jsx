import React from 'react'
import { Helmet } from 'react-helmet-async'
import Cause from '../components/home1/Cause'
import Charity from '../components/home1/Charity'
import DoHelp from '../components/home1/DoHelp'
import Donation from '../components/home1/Donation'
import GiveHelp from '../components/home1/GiveHelp'
import HelpUs from '../components/home1/HelpUs'
import ReadMore from '../components/home1/ReadMore'
import Recent from '../components/home1/Recent'
import Volunteers from '../components/home1/Volunteers'
import Header from '../layout/header/Header'
const Home = () => {
  return (
    <div>
    <Helmet><title>Home</title></Helmet>
    <Header/>
    <ReadMore/>
    <HelpUs/>
    <Donation/>
    <Charity/>
    <Cause/>
    <GiveHelp/>
    <DoHelp/>
    <Volunteers/>
    <Recent/>
 
    </div>
  )
}

export default Home
