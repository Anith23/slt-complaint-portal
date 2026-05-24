import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import sltLogo from "../../assets/slt-logo.png";

import "./../../styles/AdminLoginPage.css";

const AdminLoginPage = () => {

  /* =========================================
     STATES
  ========================================= */

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [otp, setOtp] = useState("");

  const [showOTP, setShowOTP] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  /* =========================================
     LOGIN FUNCTION
  ========================================= */

  const handleLogin = async (e) => {

    e.preventDefault();

    if (loading) return;

    try {

      setLoading(true);

      const response = await axios.post(

        "https://slt-complaint-portal.onrender.com",

        {

          email,

          password

        }

      );

      if (response.data.success) {

        localStorage.setItem(

          "adminId",

          response.data.adminId

        );

        setShowOTP(true);

        alert(

          "OTP sent to your email"

        );

      }

    }

    catch (error) {

      alert(

        error.response?.data?.message ||

        "Login Failed"

      );

    }

    finally {

      setLoading(false);

    }

  };

  /* =========================================
     VERIFY OTP
  ========================================= */

  const handleVerifyOTP = async (e) => {

    e.preventDefault();

    if (loading) return;

    try {

      setLoading(true);

      const adminId =

        localStorage.getItem(
          "adminId"
        );

      const response = await axios.post(

        "https://slt-complaint-portal.onrender.com",

        {

          adminId,

          otp

        }

      );

      if (response.data.success) {

        localStorage.setItem(

          "adminToken",

          response.data.token

        );

        navigate(
          "/admin/dashboard"
        );

      }

    }

    catch (error) {

      alert(

        error.response?.data?.message ||

        "OTP Verification Failed"

      );

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <div className="admin-login-page">

      {/* LEFT PANEL */}

      <div className="admin-left-panel">

        <div className="admin-brand">

          <img
            src={sltLogo}
            alt="SLT Logo"
            className="logo-image"
          />

        </div>

        <div className="admin-left-content">

          <h2>

            Internal Affairs Unit (IAU)

          </h2>

          <h1>

            Admin Portal

          </h1>

          <div className="blue-line"></div>

          <p>

            Securely manage and monitor complaints
            and concerns submitted to the IAU.

          </p>

        </div>

        <div className="admin-footer">

          © 2026 Sri Lanka Telecom PLC.

          <br />

          All Rights Reserved.

        </div>

      </div>

      {/* RIGHT PANEL */}

      <div className="admin-right-panel">

        <div className="login-card">

          <div className="login-icon">

            🔒

          </div>

          <h1>

            {

              showOTP

                ?

                "Verify OTP"

                :

                "Admin Login"

            }

          </h1>

          <p className="login-subtitle">

            {

              showOTP

                ?

                "Enter the OTP sent to your email"

                :

                "Welcome back! Please sign in to continue."

            }

          </p>

          {/* LOGIN FORM */}

          {

            !showOTP && (

              <form onSubmit={handleLogin}>

                {/* EMAIL */}

                <div className="form-group">

                  <label>

                    Email Address

                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) =>

                      setEmail(e.target.value)

                    }
                    required
                  />

                </div>

                {/* PASSWORD */}

                <div className="form-group">

                  <label>

                    Password

                  </label>

                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) =>

                      setPassword(e.target.value)

                    }
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="login-btn"
                  disabled={loading}
                >

                  {

                    loading

                      ?

                      "Sending OTP..."

                      :

                      "Login to Admin Panel"

                  }

                </button>

              </form>

            )

          }

          {/* OTP FORM */}

          {

            showOTP && (

              <form onSubmit={handleVerifyOTP}>

                <div className="form-group">

                  <label>

                    Enter OTP

                  </label>

                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) =>

                      setOtp(e.target.value)

                    }
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="login-btn"
                  disabled={loading}
                >

                  {

                    loading

                      ?

                      "Verifying..."

                      :

                      "Verify OTP"

                  }

                </button>

              </form>

            )

          }

          {/* SECURITY BOX */}

          <div className="security-box">

            <h4>

              Authorized Access Only

            </h4>

            <p>

              This is a restricted area.
              Unauthorized access is strictly prohibited
              and may be subject to legal action.

            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default AdminLoginPage;