import React from "react";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

import HeroSection from "./HeroSection";
import FeatureCards from "./FeatureCards";
import HowItWorks from "./HowItWorks";

import "../../styles/home.css";

const HomePage = () => {

  return (

    <div className="home-page">

      <Navbar />

      <HeroSection />

      <FeatureCards />

      <HowItWorks />

      <Footer />

    </div>

  );

};

export default HomePage;