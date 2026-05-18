import React from "react";

const ComplaintDetailsCard = ({ complaint }) => {

  return (

    <div className="details-card">

      <h2>
        Complaint Details
      </h2>

      {/* SUBJECT */}

      <div className="details-group">

        <span>
          Subject
        </span>

        <p>
          {
            complaint.complaintCategory
            || "N/A"
          }
        </p>

      </div>

      {/* DESCRIPTION */}

      <div className="details-group">

        <span>
          Description
        </span>

        <p>
          {
            complaint.complaintDescription
            || "No description available"
          }
        </p>

      </div>

      {/* OFFICER */}

      <div className="details-row">

        <div>

          <span>
            Assigned Officer
          </span>

          <p>

            {
              complaint.assignedOfficer
                || "Not Assigned"
            }

          </p>

        </div>

        <div>

          <span>
            Department
          </span>

          <p>

            {
              complaint.divisionDepartment
                || "Not Assigned"
            }

          </p>

        </div>

      </div>

      {/* STATUS */}

      <div className="details-row">

        <div>

          <span>
            Current Status
          </span>

          <p>
            {
              complaint.status
              || "Pending"
            }
          </p>

        </div>

        <div>

          <span>
            Priority
          </span>

          <p>

            {
              complaint.priority
                || "Medium"
            }

          </p>

        </div>

      </div>

    </div>

  );

};

export default ComplaintDetailsCard;