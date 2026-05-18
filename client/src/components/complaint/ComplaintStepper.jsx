import React from "react";

import "../../styles/stepper.css";

const ComplaintStepper = ({ step }) => {

  const steps = [

    {
      number: 1,
      title: "Reporter Information",
      subtitle: "Tell us about yourself"
    },

    {
      number: 2,
      title: "Complaint Details",
      subtitle: "Provide complaint details"
    },

    {
      number: 3,
      title: "Subject Information",
      subtitle: "Who is involved?"
    },

    {
      number: 4,
      title: "Evidence",
      subtitle: "Upload evidence"
    },

    {
      number: 5,
      title: "Declaration",
      subtitle: "Confirm & agree"
    },

    {
      number: 6,
      title: "Confirmation",
      subtitle: "Review & submit"
    }

  ];

  return (

    <div className="stepper-wrapper">

      {steps.map((item) => (

        <div
          className="stepper-item"
          key={item.number}
        >

          <div
            className={`step-circle ${
              step >= item.number
                ? "active"
                : ""
            }`}
          >

            {item.number}

          </div>

          <div className="step-content">

            <h5>
              {item.title}
            </h5>

            <p>
              {item.subtitle}
            </p>

          </div>

        </div>

      ))}

    </div>

  );

};

export default ComplaintStepper;