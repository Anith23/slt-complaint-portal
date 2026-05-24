import React from "react";

import {

  FaThLarge,
  FaFileAlt,
  FaUsers,
  FaCheckCircle,
  FaChartBar,
  FaUserShield,
  FaClipboardList,
  FaHistory,
  FaCog,
  FaSignOutAlt

} from "react-icons/fa";

import {

  useNavigate,
  useLocation

} from "react-router-dom";

import sltLogo from "../../assets/slt-logo.png";
import "../../styles/Sidebar.css";

const Sidebar = () => {

  /* =========================================
     ROUTER
  ========================================= */

  const navigate = useNavigate();

  const location = useLocation();

  /* =========================================
     LOGOUT
  ========================================= */

  const handleLogout = () => {

    /* CLEAR STORAGE */

    localStorage.removeItem("adminToken");

    /* REDIRECT HOME */

    navigate("/");

  };

  return (

    <div className="sidebar">

      {/* =========================================
         TOP
      ========================================= */}

      <div>

        {/* LOGO */}

        <div className="sidebar-top">

          <img
            src={sltLogo}
            alt="SLT"
            className="sidebar-logo"
          />

          <h3>

            Internal Affairs Unit (IAU)

          </h3>

          <p>

            Admin Portal

          </p>

        </div>

        {/* =========================================
           MENU
        ========================================= */}

        <div className="sidebar-menu">

          {/* DASHBOARD */}

          <div

            className={`menu-item ${
              location.pathname === "/admin/dashboard"

                ? "active"

                : ""

            }`}

            onClick={() =>

              navigate("/admin/dashboard")

            }

          >

            <FaThLarge />

            Dashboard

          </div>

          {/* COMPLAINTS */}

          <div

            className={`menu-item ${
              location.pathname === "/admin/complaints"

                ? "active"

                : ""

            }`}

            onClick={() =>

              navigate("/admin/complaints")

            }

          >

            <FaFileAlt />

            Complaints

          </div>

          {/* INVESTIGATION 

          <div className="menu-item">

            <FaUsers />

            Investigation Queue

          </div>

           RESOLVED 

          <div className="menu-item">

            <FaCheckCircle />

            Resolved Cases

          </div>*/}

          

          <div

            className={`menu-item ${
              location.pathname === "/admin/analytics"

                ? "active"

                : ""

            }`}

            onClick={() =>

              navigate("/admin/analytics")

            }

          >

            <FaChartBar />

            Analytics

          </div>

          {/* USERS 

          <div className="menu-item">

            <FaUserShield />

            Users & Roles

          </div>

           REPORTS */}

          <div

            className={`menu-item ${
              location.pathname === "/admin/reports"

                ? "active"

                : ""

            }`}

            onClick={() =>

              navigate("/admin/reports")

            }

          >

            <FaClipboardList />

            Reports

          </div>

          {/* AUDIT 

          <div className="menu-item">

            <FaHistory />

            Audit Logs

          </div>

          SETTINGS 

          <div className="menu-item">

            <FaCog />

            Settings

          </div>*/}

        </div>

      </div>

      {/* =========================================
         PROFILE
      ========================================= */}

      <div>

        {/* PROFILE */}

        <div className="sidebar-profile">

          <div className="profile-avatar">

            NP

          </div>

          <div>

            <h4>

              Nimal Perera

            </h4>

            <p>

              Super Admin

            </p>

          </div>

        </div>

        {/* LOGOUT */}

        <div

          className="menu-item logout-btn"

          onClick={handleLogout}

        >

          <FaSignOutAlt />

          Logout

        </div>

      </div>

    </div>

  );

};

export default Sidebar;