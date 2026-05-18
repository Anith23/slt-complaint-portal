import React, {
  useState,
  useEffect
} from "react";

import {
  FaTimes,
  FaFilePdf,
  FaImage,
  FaDownload
} from "react-icons/fa";

const ComplaintDetails = ({

  openDrawer,

  setOpenDrawer,

  selectedComplaint,

  updateComplaintStatus

}) => {

  /* =========================================
     STATES
  ========================================= */

  const [status, setStatus] = useState("");

  const [priority, setPriority] = useState("");

  const [assignedOfficer, setAssignedOfficer] = useState("");

  /* =========================================
     LOAD SELECTED DATA
  ========================================= */

  useEffect(() => {

    if (selectedComplaint) {

      setStatus(
        selectedComplaint.status || "Pending"
      );

      setPriority(
        selectedComplaint.priority || "Medium"
      );

      setAssignedOfficer(
        selectedComplaint.assignedOfficer || ""
      );

    }

  }, [selectedComplaint]);

  /* =========================================
     UPDATE HANDLER
  ========================================= */

  const handleUpdate = async () => {

    await updateComplaintStatus(

      selectedComplaint._id,

      {

        status,

        priority,

        assignedOfficer

      }

    );

  };

  /* =========================================
     NO DATA
  ========================================= */

  if (!selectedComplaint) {

    return null;

  }

  return (

    <>

      {/* OVERLAY */}

      <div
        className={`drawer-overlay ${
          openDrawer ? "show-overlay" : ""
        }`}
        onClick={() => setOpenDrawer(false)}
      ></div>

      {/* DRAWER */}

      <div
        className={`complaint-drawer ${
          openDrawer ? "open-drawer" : ""
        }`}
      >

        {/* HEADER */}

        <div className="drawer-header">

          <div>

            <h2>
              Complaint Details
            </h2>

            <p>
              Complaint information overview
            </p>

          </div>

          <button
            className="close-drawer-btn"
            onClick={() => setOpenDrawer(false)}
          >
            <FaTimes />
          </button>

        </div>

        {/* BODY */}

        <div className="drawer-body">

          {/* CRN */}

          <div className="drawer-crn-section">

            <span className="drawer-label">
              Complaint Reference
            </span>

            <h3>
              {selectedComplaint.crn}
            </h3>

            <span className="drawer-status">
              {selectedComplaint.status}
            </span>

          </div>

          {/* INFO GRID */}

          <div className="drawer-grid">

            <div className="drawer-item">

              <label>Reporter</label>

              <p>
                {
                  selectedComplaint.fullName
                  || "Anonymous"
                }
              </p>

            </div>

            <div className="drawer-item">

              <label>Category</label>

              <p>
                {
                  selectedComplaint.complaintCategory
                }
              </p>

            </div>

            <div className="drawer-item">

              <label>Priority</label>

              <p className="high-text">
                {
                  selectedComplaint.priority
                  || "Medium"
                }
              </p>

            </div>

            <div className="drawer-item">

              <label>Assigned To</label>

              <p>
                {
                  selectedComplaint.assignedOfficer
                  || "Not Assigned"
                }
              </p>

            </div>

            <div className="drawer-item">

              <label>Submitted Date</label>

              <p>

                {
                  new Date(
                    selectedComplaint.createdAt
                  ).toLocaleDateString()
                }

              </p>

            </div>

            <div className="drawer-item">

              <label>Last Updated</label>

              <p>

                {
                  new Date(
                    selectedComplaint.updatedAt
                  ).toLocaleDateString()
                }

              </p>

            </div>

          </div>

          {/* SUBJECT */}

          <div className="drawer-section">

            <label>Subject</label>

            <div className="drawer-box">

              {
                selectedComplaint.complaintCategory
              }

            </div>

          </div>

          {/* DESCRIPTION */}

          <div className="drawer-section">

            <label>Description</label>

            <div className="drawer-box description-box">

              {
                selectedComplaint.complaintDescription
              }

            </div>

          </div>

          {/* UPDATE SECTION */}

          <div className="drawer-grid">

            {/* STATUS */}

            <div className="drawer-item">

              <label>
                Update Status
              </label>

              <select
                value={status}
                onChange={(e) =>
                  setStatus(
                    e.target.value
                  )
                }
              >

                <option value="Pending">
                  Pending
                </option>

                <option value="Under Investigation">
                  Under Investigation
                </option>

                <option value="In Progress">
                  In Progress
                </option>

                <option value="Resolved">
                  Resolved
                </option>

                <option value="Closed">
                  Closed
                </option>

              </select>

            </div>

            {/* PRIORITY */}

            <div className="drawer-item">

              <label>
                Priority
              </label>

              <select
                value={priority}
                onChange={(e) =>
                  setPriority(
                    e.target.value
                  )
                }
              >

                <option value="Low">
                  Low
                </option>

                <option value="Medium">
                  Medium
                </option>

                <option value="High">
                  High
                </option>

              </select>

            </div>

            {/* OFFICER */}

            <div className="drawer-item">

              <label>
                Assign Officer
              </label>

              <input
                type="text"
                value={assignedOfficer}
                onChange={(e) =>
                  setAssignedOfficer(
                    e.target.value
                  )
                }
                placeholder="Officer name"
              />

            </div>

          </div>

        </div>

        {/* FOOTER */}

        <div className="drawer-footer">

          <button
            className="cancel-btn"
            onClick={() => setOpenDrawer(false)}
          >
            Cancel
          </button>

          <button
            className="update-btn"
            onClick={handleUpdate}
          >
            Update Complaint
          </button>

        </div>

      </div>

    </>

  );

};

export default ComplaintDetails;