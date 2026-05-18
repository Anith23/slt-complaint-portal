import React from "react";

const StepThree = ({
  formData,
  prevStep,
  submitForm
}) => {

  return (

    <div className="card shadow-sm border-0">

      <div className="card-body">

        <h3 className="mb-4">
          Review Complaint
        </h3>

        <p>
          <strong>Submission Type:</strong>
          {" "}
          {formData.submissionType}
        </p>

        <p>
          <strong>Category:</strong>
          {" "}
          {formData.complaintCategory}
        </p>

        <p>
          <strong>Location:</strong>
          {" "}
          {formData.incidentLocation}
        </p>

        <p>
          <strong>Description:</strong>
          {" "}
          {formData.description}
        </p>


        <div className="d-flex justify-content-between">

          <button
            className="btn btn-secondary"
            onClick={prevStep}
          >
            Back
          </button>

          <button
            className="btn btn-success"
            onClick={submitForm}
          >
            Submit Complaint
          </button>

        </div>

      </div>

    </div>

  );

};

export default StepThree;