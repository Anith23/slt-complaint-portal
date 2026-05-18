import React from "react";

const ComplaintProgress = ({ status }) => {

  /* =====================================
     STEPS
  ===================================== */

  const steps = [

    "Pending",

    "Under Investigation",

    "In Progress",

    "Resolved",

    "Closed"

  ];

  /* =====================================
     CURRENT STEP
  ===================================== */

  const currentStep = steps.indexOf(status);

  return (

    <div className="track-progress-card">

      <h2>
        Complaint Progress
      </h2>

      <div className="progress-container">

        {

          steps.map((step, index) => (

            <div
              className="progress-step"
              key={index}
            >

              {/* LINE */}

              {
                index !== steps.length - 1 && (

                  <div
                    className={
                      index < currentStep
                        ? "progress-line active-line"
                        : "progress-line"
                    }
                  />

                )
              }

              {/* CIRCLE */}

              <div
                className={
                  index <= currentStep
                    ? "progress-circle active"
                    : "progress-circle"
                }
              >

                {
                  index < currentStep
                    ? "✓"
                    : index + 1
                }

              </div>

              {/* LABEL */}

              <h4>
                {step}
              </h4>

            </div>

          ))

        }

      </div>

    </div>

  );

};

export default ComplaintProgress;