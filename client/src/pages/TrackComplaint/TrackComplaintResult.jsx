import React from "react";

import ComplaintSummary from "../../components/track/ComplaintSummary";
import ComplaintProgress from "../../components/track/ComplaintProgress";
import ComplaintTimeline from "../../components/track/ComplaintTimeline";
import ComplaintDetailsCard from "../../components/track/ComplaintDetailsCard";

import Navbar from "../../components/common/Navbar";

import Footer from "../../components/common/Footer";

import "../../styles/TrackComplaintPage.css";

const TrackComplaintResult = ({ complaint }) => {

  return (

    <div className="track-result-wrapper">
        <Navbar />

      {/* =====================================
          TOP SUCCESS HEADER
      ===================================== */}

      <div className="track-success-header">

        <div className="success-left">

          <div className="success-icon">
            ✓
          </div>

          <div>

            <h1>
              Complaint Found
            </h1>

            <p>
              Here is the current status of your complaint.
            </p>

          </div>

        </div>

        <button className="download-btn">

          Download / Print

        </button>

      </div>

      {/* =====================================
          SUMMARY CARD
      ===================================== */}

      <ComplaintSummary
        complaint={complaint}
      />

      {/* =====================================
          PROGRESS SECTION
      ===================================== */}

      <ComplaintProgress
        status={complaint.status}
      />

      {/* =====================================
          BOTTOM GRID
      ===================================== */}

      <div className="track-bottom-grid">

        {/* LEFT */}

        <ComplaintDetailsCard
          complaint={complaint}
        />

        {/* RIGHT */}

        <ComplaintTimeline
          timeline={complaint.timeline || []}
        />

      </div>

      <Footer />

    </div>

  );

};

export default TrackComplaintResult;