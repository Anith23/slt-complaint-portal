import React, { useState } from "react";

import "../../styles/UserDashboard.css";

import UserSidebar from "./components/UserSidebar";
import UserTopbar from "./components/UserTopbar";
import UserComplaintTable from "./components/UserComplaintTable";
import ComplaintProgressDrawer from "./components/ComplaintProgressDrawer";

const UserDashboard = () => {

  const [openDrawer, setOpenDrawer] = useState(false);

  return (

    <div className="user-dashboard-layout">

      {/* SIDEBAR */}

      <UserSidebar />

      {/* MAIN */}

      <div className="user-dashboard-main">

        {/* TOPBAR */}

        <UserTopbar />

        {/* CONTENT */}

        <div className="user-dashboard-content">

          <div className="dashboard-header">

            <h1>
              My Complaints
            </h1>

            <p>
              View and track the status of your complaints
            </p>

          </div>

          {/* TABLE */}

          <UserComplaintTable
            setOpenDrawer={setOpenDrawer}
          />

        </div>

      </div>

      {/* DRAWER */}

      <ComplaintProgressDrawer
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />

    </div>

  );

};

export default UserDashboard;