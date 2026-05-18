import React from "react";

import {
  FaEye,
  FaEdit,
  FaEllipsisV
} from "react-icons/fa";

const ComplaintTable = ({

  complaints,

  setSelectedComplaint,

  setOpenDrawer

}) => {

  /* =========================================
     FORMAT DATE
  ========================================= */

  const formatDate = (date) => {

    return new Date(date).toLocaleDateString(

      "en-GB",

      {

        day: "2-digit",
        month: "short",
        year: "numeric"

      }

    );

  };

  /* =========================================
     STATUS CLASS
  ========================================= */

  const getStatusClass = (status) => {

    switch (status) {

      case "Under Investigation":

        return "investigation";

      case "In Progress":

        return "progress";

      case "Resolved":

        return "resolved";

      default:

        return "pending";

    }

  };

  return (

    <div className="complaint-table-wrapper">

      <table className="complaint-table">

        {/* =========================================
            TABLE HEAD
        ========================================= */}

        <thead>

          <tr>

            <th>CRN</th>

            <th>Reporter Name</th>

            <th>Category</th>

            

            <th>Status</th>

            <th>Assigned Officer</th>

            <th>Submitted On</th>

            <th>Actions</th>

          </tr>

        </thead>

        {/* =========================================
            TABLE BODY
        ========================================= */}

        <tbody>

          {

            complaints.length > 0 ? (

              complaints.map((complaint) => (

                <tr key={complaint._id}>

                  {/* CRN */}

                  <td className="crn">

                    {complaint.crn}

                  </td>

                  {/* REPORTER */}

                  <td>

                    {

                      complaint.submissionType ===
                      "Anonymous"

                        ? "Anonymous"

                        : complaint.fullName

                    }

                  </td>

                  {/* CATEGORY */}

                  <td>

                    {complaint.complaintCategory}

                  </td>

                  {/* DESCRIPTION */}

                  

                  {/* STATUS */}

                  <td>

                    <span
                      className={`status-badge ${getStatusClass(

                        complaint.status

                      )}`}
                    >

                      {complaint.status}

                    </span>

                  </td>

                  {/* OFFICER */}

                  <td>

                    {

                      complaint.assignedOfficer ||

                      "Not Assigned"

                    }

                  </td>

                  {/* DATE */}

                  <td>

                    {

                      formatDate(

                        complaint.createdAt

                      )

                    }

                  </td>

                  {/* ACTIONS */}

                  <td>

                    <div className="table-actions">

                      {/* VIEW */}

                      <button

                        className="action-btn view-btn"

                        onClick={() => {

                          setSelectedComplaint(

                            complaint

                          );

                          setOpenDrawer(true);

                        }}

                      >

                        <FaEye />

                      </button>

                      {/* EDIT */}

                      <button

                        className="action-btn edit-btn"

                        onClick={() => {

                          setSelectedComplaint(

                            complaint

                          );

                          setOpenDrawer(true);

                        }}

                      >

                        <FaEdit />

                      </button>

                      {/* MORE */}

                      <button className="action-btn more-btn">

                        <FaEllipsisV />

                      </button>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="8"
                  className="no-data"
                >

                  No complaints found

                </td>

              </tr>

            )

          }

        </tbody>

      </table>

      {/* =========================================
          FOOTER
      ========================================= */}

      <div className="table-footer">

        <p>

          Showing

          {" "}

          {complaints.length}

          {" "}

          complaint(s)

        </p>

        <div className="pagination">

          <button>{"<"}</button>

          <button className="active">

            1

          </button>

          <button>{">"}</button>

        </div>

      </div>

    </div>

  );

};

export default ComplaintTable;