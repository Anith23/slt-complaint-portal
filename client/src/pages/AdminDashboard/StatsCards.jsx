import React from "react";

import "../../styles/AdminDashboard.css";

import {
  FaClipboardList,
  FaClock,
  FaSearch,
  FaCheckCircle,
  FaExclamationTriangle
} from "react-icons/fa";

const StatsCards = ({ stats = {} }) => {

  const cards = [

    {
      title: "Total Complaints",
      value: stats.totalComplaints || 0,
      icon: <FaClipboardList />,
      color: "blue",
      growth: "12.5% from last month"
    },

    {
      title: "Pending Complaints",
      value: stats.pendingComplaints || 0,
      icon: <FaClock />,
      color: "orange",
      growth: "8.3% from last month"
    },

    {
      title: "Under Investigation",
      value: stats.investigationComplaints || 0,
      icon: <FaSearch />,
      color: "purple",
      growth: "6.2% from last month"
    },

    {
      title: "Resolved Complaints",
      value: stats.resolvedComplaints || 0,
      icon: <FaCheckCircle />,
      color: "green",
      growth: "15.7% from last month"
    },

    {
      title: "High Priority",
      value: stats.highPriorityComplaints || 0,
      icon: <FaExclamationTriangle />,
      color: "red",
      growth: "Urgent complaint cases"
    }

  ];

  return (

    <div className="stats-grid">

      {

        cards.map((card, index) => (

          <div
            className="stat-card"
            key={index}
          >

            <div
              className={`stat-icon ${card.color}`}
            >

              {card.icon}

            </div>

            <div className="stat-info">

              <h3>
                {card.title}
              </h3>

              <h1>
                {card.value}
              </h1>

              <p>
                {card.growth}
              </p>

            </div>

          </div>

        ))

      }

    </div>

  );

};

export default StatsCards;