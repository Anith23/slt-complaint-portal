import React from "react";

const StepOne = ({
  formData,
  handleChange,
  nextStep
}) => {

  return (

    <div className="card shadow-sm border-0">

      <div className="card-body">

        <h3 className="mb-4">
          Complaint Information
        </h3>

        <div className="mb-3">

          <label className="form-label">
            Submission Type
          </label>

          <select
            className="form-select"
            name="submissionType"
            value={formData.submissionType}
            onChange={handleChange}
          >

            <option value="">
              Select
            </option>

            <option value="Named">
              Named
            </option>

            <option value="Anonymous">
              Anonymous
            </option>

          </select>

        </div>


        <div className="mb-3">

          <label className="form-label">
            Complaint Category
          </label>

          <select
            className="form-select"
            name="complaintCategory"
            value={formData.complaintCategory}
            onChange={handleChange}
          >

            <option value="">
              Select
            </option>

            <option value="Fraud">
              Fraud
            </option>

            <option value="Harassment">
              Harassment
            </option>

            <option value="Corruption">
              Corruption
            </option>

          </select>

        </div>


        <button
          className="btn btn-primary"
          onClick={nextStep}
        >
          Next
        </button>

      </div>

    </div>

  );

};

export default StepOne;