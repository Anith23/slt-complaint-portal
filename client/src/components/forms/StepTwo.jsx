import React from "react";

const StepTwo = ({
  formData,
  handleChange,
  nextStep,
  prevStep
}) => {

  return (

    <div className="card shadow-sm border-0">

      <div className="card-body">

        <h3 className="mb-4">
          Incident Details
        </h3>

        <div className="mb-3">

          <label className="form-label">
            Incident Location
          </label>

          <input
            type="text"
            className="form-control"
            name="incidentLocation"
            value={formData.incidentLocation}
            onChange={handleChange}
          />

        </div>


        <div className="mb-3">

          <label className="form-label">
            Description
          </label>

          <textarea
            className="form-control"
            rows="5"
            name="description"
            value={formData.description}
            onChange={handleChange}
          >
          </textarea>

        </div>


        <div className="d-flex justify-content-between">

          <button
            className="btn btn-secondary"
            onClick={prevStep}
          >
            Back
          </button>

          <button
            className="btn btn-primary"
            onClick={nextStep}
          >
            Next
          </button>

        </div>

      </div>

    </div>

  );

};

export default StepTwo;