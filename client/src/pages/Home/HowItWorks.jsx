import React from "react";

import {
  FaUser,
  FaClipboardList,
  FaTasks,
  FaCheckCircle,
  FaArrowRight
} from "react-icons/fa";

const HowItWorks = () => {

  return (

    <section className="how-section">

      <div className="how-container">

        <h2 className="how-title">
          How It Works
        </h2>

        <div className="how-steps">

          {/* STEP 1 */}
          <div className="how-step">

            <div className="step-icon blue-step">

              <div className="step-number">
                1
              </div>

              <FaUser />

            </div>

            <h3>Register / Login</h3>

            <p>
              Create an account or login to continue.
            </p>

          </div>

          {/* ARROW */}
          <div className="step-arrow">
            <div className="arrow-line"></div>

            <FaArrowRight className="arrow-icon" />
          </div>

          {/* STEP 2 */}
          <div className="how-step">

            <div className="step-icon green-step">

              <div className="step-number">
                2
              </div>

              <FaClipboardList />

            </div>

            <h3>Submit Complaint</h3>

            <p>
              Provide details about your complaint or concern.
            </p>

          </div>

          {/* ARROW */}
          <div className="step-arrow">

            <div className="arrow-line"></div>

            <FaArrowRight className="arrow-icon" />

          </div>

          {/* STEP 3 */}
          <div className="how-step">

            <div className="step-icon yellow-step">

              <div className="step-number">
                3
              </div>

              <FaTasks />

            </div>

            <h3>Track Progress</h3>

            <p>
              Monitor the progress and status of your complaint.
            </p>

          </div>

          {/* ARROW */}
          <div className="step-arrow">

            <div className="arrow-line"></div>

            <FaArrowRight className="arrow-icon" />

          </div>

          {/* STEP 4 */}
          <div className="how-step">

            <div className="step-icon purple-step">

              <div className="step-number">
                4
              </div>

              <FaCheckCircle />

            </div>

            <h3>Issue Resolved</h3>

            <p>
              We will resolve the issue and notify you.
            </p>

          </div>

        </div>

      </div>

    </section>

  );

};

export default HowItWorks;