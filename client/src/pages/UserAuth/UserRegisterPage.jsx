import React, { useState } from "react";

import axios from "axios";

import {
  toast,
  ToastContainer
} from "react-toastify";

import "./../../styles/UserAuth.css";

import sltLogo from "../../assets/slt-logo.png";

import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaIdCard,
  FaLock,
  FaArrowRight
} from "react-icons/fa";

const UserRegisterPage = () => {

  /* FORM STATE */

  const [formData, setFormData] = useState({

    fullName: "",
    nic: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: ""

  });

  /* HANDLE CHANGE */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };

  /* HANDLE SUBMIT */

  const handleSubmit = async (e) => {

    e.preventDefault();

    /* PASSWORD CHECK */

    if (
      formData.password !==
      formData.confirmPassword
    ) {

      toast.error(
        "Passwords do not match"
      );

      return;

    }

    try {

      const response = await axios.post(

        "http://localhost:5000/api/auth/register",

        {

          fullName: formData.fullName,
          nic: formData.nic,
          mobile: formData.mobile,
          email: formData.email,
          password: formData.password

        }

      );

      toast.success(
        response.data.message
      );

      /* CLEAR FORM */

      setFormData({

        fullName: "",
        nic: "",
        mobile: "",
        email: "",
        password: "",
        confirmPassword: ""

      });

    }

    catch (error) {

      toast.error(

        error.response?.data?.message ||

        "Registration Failed"

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
            Submit complaints securely and track complaint
            progress through the online portal.
          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="user-auth-right">

        <div className="register-card">

          <div className="register-header">

            <h2>
              Create Account
            </h2>

            <p>
              Register to access the complaint portal
            </p>

          </div>

          {/* FORM */}

          <form
            className="register-form"
            onSubmit={handleSubmit}
          >

            {/* ROW 1 */}

            <div className="form-row">

              <div className="input-group">

                <FaUser className="input-icon" />

                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="input-group">

                <FaIdCard className="input-icon" />

                <input
                  type="text"
                  name="nic"
                  placeholder="NIC Number"
                  value={formData.nic}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            {/* ROW 2 */}

            <div className="form-row">

              <div className="input-group">

                <FaPhoneAlt className="input-icon" />

                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />

              </div>

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

            {/* CONFIRM */}

            <div className="input-group">

              <FaLock className="input-icon" />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="register-btn"
            >

              Create Account

              <FaArrowRight />

            </button>

          </form>

          {/* FOOTER */}

          <div className="auth-footer">

            Already have an account?

            <span>
              Login
            </span>

          </div>

        </div>

      </div>

    </div>

  );

};

export default UserRegisterPage;