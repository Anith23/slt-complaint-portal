import React from "react";

const ProgressBar = ({ step }) => {

  const percentage = (step / 3) * 100;

  return (

    <div className="mb-4">

      <div className="d-flex justify-content-between mb-2">

        <span>Step {step} of 3</span>

        <span>{percentage}%</span>

      </div>

      <div className="progress">

        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${percentage}%` }}
        >
        </div>

      </div>

    </div>

  );

};

export default ProgressBar;