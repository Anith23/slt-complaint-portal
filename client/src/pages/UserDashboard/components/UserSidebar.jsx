import React from "react";

import {
  FaHome,
  FaPlusCircle,
  FaClipboardList,
  FaSearch,
  FaUser,
  FaQuestionCircle,
  FaSignOutAlt
} from "react-icons/fa";

import sltLogo from "../../../assets/slt-logo.png";

const UserSidebar = () => {

  return (

    <div className="user-sidebar">

      {/* LOGO */}

      <div>

        <div className="user-sidebar-top">

          <img
            src={sltLogo}
            alt="SLT"
            className="user-sidebar-logo"
          />

          <p>
            USER PORTAL
          </p>

        </div>

        {/* MENU */}

        <div className="user-sidebar-menu">

          <div className="user-menu-item active">
            <FaHome />
            Dashboard
          </div>

          <div className="user-menu-item">
            <FaPlusCircle />
            Submit Complaint
          </div>

          <div className="user-menu-item">
            <FaClipboardList />
            My Complaints
          </div>

          <div className="user-menu-item">
            <FaSearch />
            Track Complaint
          </div>

          <div className="user-menu-item">
            <FaUser />
            My Profile
          </div>

          <div className="user-menu-item">
            <FaQuestionCircle />
            Help & Support
          </div>

        </div>

      </div>

      {/* LOGOUT */}

      <div className="user-logout-btn">

        <FaSignOutAlt />

        Logout

      </div>

    </div>

  );

};

export default UserSidebar;