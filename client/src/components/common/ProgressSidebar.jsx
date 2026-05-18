import React from "react";

import "../../styles/progressSidebar.css";

const ProgressSidebar = ({
  step,
  title,
  description
}) => {

  return (

    <div className="progress-sidebar">

      {/* PROGRESS CARD */}

      <div className="progress-card">

        <h3>
          Your Progress
        </h3>

        <div className="progress-header">

          {/* CIRCLE */}

          <div className="progress-circle">

            <div className="circle-inner">

              <span className="step-number">
                {step}
              </span>

              <span className="step-total">
                of 6
              </span>

            </div>

          </div>

          {/* TEXT */}

          <div className="progress-text">

            <h4>
              Step {step} of 6
            </h4>

            <p>
              {title}
            </p>

            <small>
              {description}
            </small>

          </div>

        </div>

      </div>


      {/* INFO CARD */}

      <div className="info-card">

        <h4>
          Information
        </h4>

        <p>
          All information you provide will
          be kept confidential and used only
          for the purpose of investigating
          your complaint.
        </p>

      </div>


      {/* HELP CARD */}

      <div className="help-card">

        <h4>
          Need Help?
        </h4>

        <p>
          If you need assistance,
          please contact us.
        </p>

        <div className="help-item">
          iau@sltelecom.lk
        </div>

        <div className="help-item">
          011 2 123 456
        </div>

        <div className="help-item">
          Mon - Fri : 8.30 AM - 5.00 PM
        </div>

      </div>

    </div>

  );

};

export default ProgressSidebar;