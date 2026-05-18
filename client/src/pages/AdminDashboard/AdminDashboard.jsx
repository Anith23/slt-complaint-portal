import React, {
  useEffect,
  useState
} from "react";

import axios from "axios";

import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import StatsCards from "./StatsCards";
import ChartsSection from "./ChartsSection";
import RecentComplaints from "./RecentComplaints";
import QuickActions from "./QuickActions";

import "../../styles/AdminDashboard.css";

const AdminDashboard = () => {

  /* =====================================
     DASHBOARD STATE
  ===================================== */

  const [dashboardData, setDashboardData] = useState({

    stats: {

      totalComplaints: 0,
      pendingComplaints: 0,
      investigationComplaints: 0,
      resolvedComplaints: 0

    },

    recentComplaints: [],

    categoryStats: [],

    statusStats: [],

    monthlyStats: []

  });

  /* =====================================
     FETCH DASHBOARD DATA
  ===================================== */

  const fetchDashboardData = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/dashboard/full"
      );

      console.log(response.data);

      setDashboardData(response.data);

    }

    catch (error) {

      console.log(
        "Dashboard Fetch Error:",
        error
      );

    }

  };

  /* =====================================
     LOAD DATA
  ===================================== */

  useEffect(() => {

    fetchDashboardData();

  }, []);

  return (

    <div className="dashboard-layout">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="dashboard-main">

        {/* TOP NAVBAR */}
        <TopNavbar />

        {/* PAGE */}
        <div className="dashboard-page">

          {/* HEADER */}
          <div className="dashboard-header">

            <h1>
              Admin Dashboard
            </h1>

            <p>
              Monitor and manage complaint investigations
            </p>

          </div>

          {/* STATS */}
          <StatsCards
            stats={dashboardData.stats}
          />

          {/* CHARTS */}
          <ChartsSection
            categoryStats={dashboardData.categoryStats}
            statusStats={dashboardData.statusStats}
            monthlyStats={dashboardData.monthlyStats}
          />

          {/* BOTTOM */}
          <div className="dashboard-bottom">

            {/* RECENT COMPLAINTS */}
            <RecentComplaints
              complaints={dashboardData.recentComplaints}
            />

            {/* QUICK ACTIONS */}
            <QuickActions />

          </div>

        </div>

      </div>

    </div>

  );

};

export default AdminDashboard;