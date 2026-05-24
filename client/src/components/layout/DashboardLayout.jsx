import React from "react";

import Sidebar from "../../pages/AdminDashboard/Sidebar";

import Topbar from "./Topbar";

import "../../styles/DashboardLayout.css";

const DashboardLayout = ({

  children,
  title,
  subtitle

}) => {

  return (

    <div className="dashboard-layout">

      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN CONTENT */}

      <div className="dashboard-main">

        {/* TOPBAR */}

        <Topbar
          title={title}
          subtitle={subtitle}
        />

        {/* PAGE CONTENT */}

        <div className="dashboard-content">

          {children}

        </div>

      </div>

    </div>

  );

};

export default DashboardLayout;