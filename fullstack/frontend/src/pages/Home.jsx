import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Cause from "../components/Home/Cause";
import Charity from "../components/Home/Charity";
import DoHelp from "../components/Home/DoHelp";
import Donation from "../components/Home/Donation";
import GiveHelp from "../components/Home/GiveHelp";
import HelpUs from "../components/Home/HelpUs";
import ReadMore from "../components/Home/ReadMore";
import Recent from "../components/Home/Recent";
import Volunteers from "../components/Home/Volunteers";

import Header from "../layout/header/Header";
const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
      <ReadMore />
      <HelpUs />
      <Donation />
      <Charity />
      <Cause />
      <GiveHelp />
      <DoHelp />
      <Volunteers />
      <Recent />
    </div>
  );
};

export default Home;
