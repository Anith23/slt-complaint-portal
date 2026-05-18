import React from "react";

import {
  FaTimes,
  FaCheck,
  FaSearch,
  FaClipboardCheck,
  FaCheckCircle
} from "react-icons/fa";

const ComplaintProgressDrawer = ({
  openDrawer,
  setOpenDrawer
}) => {

  return (

    <>

      {/* OVERLAY */}

      <div
        className={
          openDrawer
            ? "drawer-overlay show"
            : "drawer-overlay"
        }
        onClick={() => setOpenDrawer(false)}
      ></div>

      {/* DRAWER */}

      <div
        className={
          openDrawer
            ? "progress-drawer open"
            : "progress-drawer"
        }
      >

        {/* HEADER */}

        <div className="drawer-header">

          <div>

            <h2>
              Complaint Progress
            </h2>

            <p>
              IAU-2026-000123
            </p>

          </div>

          <button
            onClick={() => setOpenDrawer(false)}
          >

            <FaTimes />

          </button>

        </div>

        {/* TIMELINE */}

        <div className="progress-timeline">

          <div className="timeline-step active">

            <div className="timeline-icon">
              <FaCheck />
            </div>

            <h4>
              Submitted
            </h4>

          </div>

          <div className="timeline-line active"></div>

          <div className="timeline-step active">

            <div className="timeline-icon search">
              <FaSearch />
            </div>

            <h4>
              Under Investigation
            </h4>

          </div>

          <div className="timeline-line"></div>

          <div className="timeline-step">

            <div className="timeline-icon">
              <FaClipboardCheck />
            </div>

            <h4>
              In Progress
            </h4>

          </div>

          <div className="timeline-line"></div>

          <div className="timeline-step">

            <div className="timeline-icon">
              <FaCheckCircle />
            </div>

            <h4>
              Resolved
            </h4>

          </div>

        </div>

        {/* INFO CARD */}

        <div className="progress-info-card">

          <p>
            We are currently investigating your complaint.
            You will be notified via email for updates.
          </p>

        </div>

      </div>

    </>

  );

};

export default ComplaintProgressDrawer;