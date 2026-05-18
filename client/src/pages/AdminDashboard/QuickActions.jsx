import React from "react";

import {
  FaClipboardList,
  FaUserPlus,
  FaFileDownload,
  FaCog,
  FaArrowRight
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const QuickActions = () => {

  const navigate = useNavigate();

  const actions = [

    {
      icon: <FaClipboardList />,
      title: "View All Complaints",
      subtitle: "Manage all complaints",
      color: "blue",
      path: "/admin/complaints"
    },

    {
      icon: <FaUserPlus />,
      title: "Assign to Officer",
      subtitle: "Assign complaint",
      color: "green",
      path: "/admin/complaints"
    },

    {
      icon: <FaFileDownload />,
      title: "Generate Report",
      subtitle: "Download reports",
      color: "purple",
      path: "/admin/reports"
    },

    {
      icon: <FaCog />,
      title: "System Settings",
      subtitle: "Manage settings",
      color: "gray",
      path: "/admin/settings"
    }

  ];

  return (

    <div className="quick-actions">

      {/* HEADER */}

      <h3>

        Quick Actions

      </h3>

      {/* GRID */}

      <div className="quick-grid">

        {actions.map((item, index) => (

          <div

            className="quick-card"

            key={index}

            onClick={() => navigate(item.path)}

          >

            {/* TOP */}

            <div className="quick-top">

              <div className={`quick-icon ${item.color}`}>

                {item.icon}

              </div>

              <FaArrowRight />

            </div>

            {/* CONTENT */}

            <h4>

              {item.title}

            </h4>

            <p>

              {item.subtitle}

            </p>

          </div>

        ))}

      </div>

    </div>

  );

};

export default QuickActions;