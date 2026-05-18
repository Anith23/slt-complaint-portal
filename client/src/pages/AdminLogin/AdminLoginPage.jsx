import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import sltLogo from "../../assets/slt-logo.png";

import "./../../styles/AdminLoginPage.css";

const AdminLoginPage = () => {

  /* =========================================
     STATES
  ========================================= */

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  /* =========================================
     LOGIN FUNCTION
  ========================================= */

  const handleLogin = (e) => {

    e.preventDefault();

    /* TEMP ADMIN LOGIN */

    if (

      email === "admin@slt.lk" &&

      password === "admin123"

    ) {

      /* SAVE TOKEN */

      localStorage.setItem(

        "adminToken",

        "admin_logged_in"

      );

      /* REDIRECT */

      navigate("/admin/dashboard");

    }

    else {

      alert("Invalid Admin Credentials");

    }

  };

  return (

    <div className="admin-login-page">

      {/* =========================================
         LEFT PANEL
      ========================================= */}

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

      {/* =========================================
         RIGHT PANEL
      ========================================= */}

      <div className="admin-right-panel">

        <div className="login-card">

          <div className="login-icon">

            🔒

          </div>

          <h1>

            Admin Login

          </h1>

          <p className="login-subtitle">

            Welcome back! Please sign in to continue.

          </p>

          {/* =========================================
             LOGIN FORM
          ========================================= */}

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

            {/* OPTIONS */}

            <div className="login-options">

              <label>

                <input type="checkbox" />

                Remember me

              </label>

              <span className="forgot-password">

                Forgot Password?

              </span>

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="login-btn"
            >

              Login to Admin Panel

            </button>

          </form>

          {/* =========================================
             SECURITY BOX
          ========================================= */}

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