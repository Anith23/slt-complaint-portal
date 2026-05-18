import React from "react";

import {
  FaEye
} from "react-icons/fa";

const UserComplaintTable = ({ setOpenDrawer }) => {

  return (

    <div className="user-complaint-table-card">

      <table className="user-complaint-table">

        <thead>

          <tr>

            <th>CRN</th>
            <th>Category</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Submitted On</th>
            <th>Last Updated</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td className="crn">
              IAU-2026-000123
            </td>

            <td>Billing Issues</td>

            <td>Incorrect bill amount</td>

            <td>
              <span className="user-status investigation">
                Under Investigation
              </span>
            </td>

            <td>21 May 2026</td>

            <td>22 May 2026</td>

            <td>

              <button
                className="view-btn"
                onClick={() => setOpenDrawer(true)}
              >

                <FaEye />

              </button>

            </td>

          </tr>

          <tr>

            <td className="crn">
              IAU-2026-000122
            </td>

            <td>Service Quality</td>

            <td>Poor internet connection</td>

            <td>
              <span className="user-status progress">
                In Progress
              </span>
            </td>

            <td>20 May 2026</td>

            <td>21 May 2026</td>

            <td>

              <button
                className="view-btn"
                onClick={() => setOpenDrawer(true)}
              >

                <FaEye />

              </button>

            </td>

          </tr>

          <tr>

            <td className="crn">
              IAU-2026-000121
            </td>

            <td>Network Issues</td>

            <td>Frequent disconnections</td>

            <td>
              <span className="user-status pending">
                Pending
              </span>
            </td>

            <td>20 May 2026</td>

            <td>20 May 2026</td>

            <td>

              <button
                className="view-btn"
                onClick={() => setOpenDrawer(true)}
              >

                <FaEye />

              </button>

            </td>

          </tr>

        </tbody>

      </table>

    </div>

  );

};

export default UserComplaintTable;