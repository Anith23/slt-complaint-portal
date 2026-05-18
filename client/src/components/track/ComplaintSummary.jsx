import React from "react";

const ComplaintSummary = ({ complaint }) => {

  return (

    <div className="track-summary-card">

      <h2>
        Complaint Summary
      </h2>

      <div className="summary-grid">

        {/* CRN */}

        <div className="summary-item">

          <span>
            Complaint Reference Number (CRN)
          </span>

          <strong className="summary-crn">
            {complaint.crn}
          </strong>

        </div>

        {/* CATEGORY */}

        <div className="summary-item">

          <span>
            Category
          </span>

          <strong>
            {complaint.complaintCategory}
          </strong>

        </div>

        {/* STATUS */}

        <div className="summary-item">

          <span>
            Status
          </span>

          <div className={`status-badge ${complaint.status}`}>

            {complaint.status}

          </div>

        </div>

        {/* SUBMITTED DATE */}

        <div className="summary-item">

          <span>
            Submitted On
          </span>

          <strong>

            {
              new Date(
                complaint.createdAt
              ).toLocaleString()
            }

          </strong>

        </div>

        {/* UPDATED DATE */}

        <div className="summary-item">

          <span>
            Last Updated On
          </span>

          <strong>

            {
              new Date(
                complaint.updatedAt
              ).toLocaleString()
            }

          </strong>

        </div>

        {/* PRIORITY */}

        <div className="summary-item">

          <span>
            Priority
          </span>

          <div className={`priority-badge ${complaint.priority}`}>

            {complaint.priority || "Medium"}

          </div>

        </div>

      </div>

    </div>

  );

};

export default ComplaintSummary;