import React, { useState } from "react";

import axios from "axios";

import {
  toast,
  ToastContainer
} from "react-toastify";

import { useNavigate } from "react-router-dom";

import "./../../styles/UserAuth.css";

import sltLogo from "../../assets/slt-logo.png";

import {
  FaEnvelope,
  FaLock,
  FaArrowRight
} from "react-icons/fa";

const UserLoginPage = () => {

  const navigate = useNavigate();

  /* FORM STATE */

  const [formData, setFormData] = useState({

    email: "",
    password: ""

  });

  /* HANDLE CHANGE */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };

  /* HANDLE LOGIN */

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(

        "https://slt-complaint-portal.onrender.com",

        formData

      );

      /* SAVE TOKEN */

      localStorage.setItem(

        "token",

        response.data.token

      );

      /* SAVE USER */

      localStorage.setItem(

        "user",

        JSON.stringify(response.data.user)

      );

      toast.success(

        response.data.message

      );

      /* REDIRECT */

      setTimeout(() => {

        navigate("/user/dashboard");

      }, 1500);

    }

    catch (error) {

      toast.error(

        error.response?.data?.message ||

        "Login Failed"

      );

    }

  };

  return (

    <div className="user-auth-page">

      <ToastContainer />

      {/* LEFT SIDE */}

      <div className="user-auth-left">

        <div className="auth-logo">

          <img
            src={sltLogo}
            alt="SLT Logo"
          />

        </div>

        <div className="left-content">

          <h1>
            Complaint & Concern
          </h1>

          <h2>
            Reporting Portal
          </h2>

          <div className="blue-line"></div>

          <p>
            Login securely to track and manage
            your complaints online.
          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="user-auth-right">

        <div className="register-card">

          <div className="register-header">

            <h2>
              User Login
            </h2>

            <p>
              Access your complaint portal
            </p>

          </div>

          {/* FORM */}

          <form
            className="register-form"
            onSubmit={handleSubmit}
          >

            {/* EMAIL */}

            <div className="input-group">

              <FaEnvelope className="input-icon" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            {/* PASSWORD */}

            <div className="input-group">

              <FaLock className="input-icon" />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="register-btn"
            >

              Login

              <FaArrowRight />

            </button>

          </form>

          {/* FOOTER */}

          <div className="auth-footer">

            Don't have an account?

            <span>
              Register
            </span>

          </div>

        </div>

      </div>

    </div>

  );

};

export default UserLoginPage;