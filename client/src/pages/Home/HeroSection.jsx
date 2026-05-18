import React from "react";

import { Link } from "react-router-dom";

const HeroSection = () => {

  return (

    <section className="hero-section">

      <div className="hero-overlay"></div>

      <div className="container">

        <div className="hero-content">

          <div className="hero-badge">
            Internal Affairs Unit Portal
          </div>

          <h1 className="hero-title">
            Complaint & Concern
            <br />
            Reporting Portal
          </h1>

          <p className="hero-description">
            We are here to listen and resolve.
            <br />
            Submit your complaint or concern and
            <br />
            we will take care of the rest.
          </p>

          <Link
            to="/complaint"
            className="hero-btn"
          >
            Submit a Complaint →
          </Link>

        </div>

      </div>

    </section>

  );

};

export default HeroSection;