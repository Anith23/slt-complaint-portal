import React from "react";

import { FaEye } from "react-icons/fa";

const RecentComplaints = ({ complaints = [] }) => {

  return (

    <div className="table-card">

      {/* HEADER */}

      <div className="table-header">

        <h3>
          Recent Complaints
        </h3>

        <a
          href="/admin/complaints"
          className="view-all"
        >
          View All
        </a>

      </div>

      {/* TABLE */}

      <div className="complaints-table-wrapper">

        <table className="complaint-table">

          <thead>

            <tr>

              <th>CRN</th>

              <th>Reporter Name</th>

              <th>Category</th>

              <th>Status</th>

              <th>Priority</th>

              <th>Submitted On</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {complaints.length > 0 ? (

              complaints.map((item, index) => (

                <tr key={item._id || index}>

                  {/* CRN */}

                  <td>

                    <strong>
                      {item.crn}
                    </strong>

                  </td>

                  {/* REPORTER */}

                  <td>

                    {item.fullName || "Anonymous"}

                  </td>

                  {/* CATEGORY */}

                  <td>

                    {item.complaintCategory || "N/A"}

                  </td>

                  {/* STATUS */}

                  <td>

                    <span
                      className={`status-badge ${item.status
                        ?.toLowerCase()
                        .replace(/\s/g, "")}`}
                    >

                      {item.status || "Pending"}

                    </span>

                  </td>

                  {/* PRIORITY */}

                  <td>

                    <span className="priority-badge medium">

                      Medium

                    </span>

                  </td>

                  {/* DATE */}

                  <td>

                    {new Date(
                      item.createdAt
                    ).toLocaleDateString("en-GB", {

                      day: "2-digit",
                      month: "short",
                      year: "numeric"

                    })}

                  </td>

                  {/* ACTION */}

                  <td>

                    <button className="view-btn">

                      <FaEye />

                    </button>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="7"
                  style={{

                    textAlign: "center",
                    padding: "30px"

                  }}
                >

                  No complaints found

                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default RecentComplaints;