import React from "react";

import {
  FaBars,
  FaBell,
  FaSearch,
  FaChevronDown
} from "react-icons/fa";

const TopNavbar = () => {

  return (

    <div className="top-navbar">

      {/* LEFT SIDE */}
      <div className="navbar-left">

        <button className="menu-toggle">

          <FaBars />

        </button>

        <div className="navbar-title">

          <h2>
            Dashboard
          </h2>

          <p>
            Overview of complaints and system activity
          </p>

        </div>

      </div>

      {/* CENTER */}
      <div className="navbar-center">

        <div className="search-box">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search complaints, CRN, reporter..."
          />

          <span className="shortcut-key">
            Ctrl + K
          </span>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-right">

        {/* NOTIFICATION */}
        <div className="notification-box">

          <FaBell className="bell-icon" />

          <span className="notification-badge">
            8
          </span>

        </div>

        {/* PROFILE */}
        <div className="admin-profile">

          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="Admin"
          />

          <div className="admin-info">

            <h4>
              Nimal Perera
            </h4>

            <p>
              Super Admin
            </p>

          </div>

          <FaChevronDown className="dropdown-icon" />

        </div>

      </div>

    </div>

  );

};

export default TopNavbar;