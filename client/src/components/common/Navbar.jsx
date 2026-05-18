import React from "react";
import sltLogo from "../../assets/slt-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (

    <nav className="custom-navbar">

      <div className="container navbar-wrapper">

        <div className="navbar-logo">

          <Link to="/" className="logo-link">

            <img
              src={sltLogo}
              alt="SLT Logo"
              className="logo-image"
            />

          </Link>

        </div>

        <ul className="navbar-menu">

  <li>
    <Link to="/">
      Home
    </Link>
  </li>

  <li>
    <Link to="/">
      About Us
    </Link>
  </li>

  <li>
    <Link to="/track">
      Track Complaint
    </Link>
  </li>

  <li>
    <Link to="/">
      Help & Support
    </Link>
  </li>

  <li>
    <Link to="/">
      Contact Us
    </Link>
  </li>

</ul>

        <div className="navbar-buttons">

          <Link
            to="/admin/login"
            className="login-btn"
          >
            Login
          </Link>

          <Link
            to="/complaint"
            className="register-btn"
          >
            Register
          </Link>

        </div>

      </div>

    </nav>

  );

};

export default Navbar;