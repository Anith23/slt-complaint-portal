import React, { useState } from "react";

import "../../styles/commonComplaint.css";

const ComplaintDetails = ({
  formData,
  handleChange,
  nextStep,
  prevStep
}) => {

  /* =========================================
     ERROR STATE
  ========================================= */

  const [errors, setErrors] = useState({});

  /* =========================================
     TODAY DATE
  ========================================= */

  const today = new Date()
    .toLocaleDateString("en-CA");

  /* =========================================
     VALIDATION
  ========================================= */

  const validateForm = () => {

    let newErrors = {};

    /* CATEGORY */

    if (!formData.complaintCategory) {

      newErrors.complaintCategory =
        "Please select complaint category";

    }

    /* INCIDENT DATE */

    if (!formData.incidentDate) {

      newErrors.incidentDate =
        "Please select incident date";

    }

    /* LOCATION */

    if (
      !formData.incidentLocationDivision?.trim()
    ) {

      newErrors.incidentLocationDivision =
        "Location is required";

    }

    /* FREQUENCY */

    if (
      !formData.frequencyOfOccurrence
    ) {

      newErrors.frequencyOfOccurrence =
        "Please select frequency";

    }

    /* DESCRIPTION */

    if (
      !formData.complaintDescription?.trim()
    ) {

      newErrors.complaintDescription =
        "Description is required";

    }

    else if (

      formData.complaintDescription
        .replace(/\s+/g, " ")
        .trim()
        .length < 50

    ) {

      newErrors.complaintDescription =
        "Minimum 50 characters required";

    }

    /* AWARENESS */

    if (!formData.awarenessMethod) {

      newErrors.awarenessMethod =
        "Please select awareness method";

    }

    /* REPORTED PREVIOUSLY */

    if (!formData.reportedPreviously) {

      newErrors.reportedPreviously =
        "Please select an option";

    }

    /* PREVIOUS REPORT DETAILS */

    if (

      formData.reportedPreviously === "Yes" &&

      !formData.previousReportOutcome?.trim()

    ) {

      newErrors.previousReportOutcome =
        "Please provide previous report details";

    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };

  /* =========================================
     NEXT STEP
  ========================================= */

  const handleNext = () => {

    if (validateForm()) {

      nextStep();

    }

  };

  return (

    <div className="complaint-details-wrapper">

      {/* =========================================
          FORM CARD
      ========================================= */}

      <div className="complaint-form-card">

        {/* TITLE */}

        <h2 className="complaint-title">

          2. Complaint Details

        </h2>

        <p className="complaint-subtitle">

          Please provide details about your complaint or concern.

        </p>

        <hr className="complaint-divider" />

        {/* =========================================
            COMPLAINT CATEGORY
        ========================================= */}

        <div className="mb-4">

          <label className="complaint-label">

            Complaint Category *

          </label>

          <select
            className="complaint-input"
            name="complaintCategory"
            value={formData.complaintCategory || ""}
            onChange={handleChange}
          >

            <option value="">
              Select complaint category
            </option>

            <option value="Bribery">
              Bribery
            </option>

            <option value="Corruption">
              Corruption
            </option>

            <option value="Fraud">
              Fraud
            </option>

            <option value="Financial Misconduct">
              Financial Misconduct
            </option>

            <option value="Abuse of Authority">
              Abuse of Authority
            </option>

            <option value="Misappropriation of Property">
              Misappropriation of Property
            </option>

            <option value="Conflict of Interest">
              Conflict of Interest
            </option>

            <option value="Procurement Irregularity">
              Procurement Irregularity
            </option>

            <option value="Falsification of Records">
              Falsification of Records
            </option>

            <option value="Harassment">
              Harassment
            </option>

            <option value="Workplace Misconduct">
              Workplace Misconduct
            </option>

            <option value="Breach of Confidentiality">
              Breach of Confidentiality
            </option>

            <option value="Non-compliance with Policy">
              Non-compliance with Policy
            </option>

            <option value="Other Malpractice">
              Other Malpractice
            </option>

          </select>

          {errors.complaintCategory && (

            <p className="error-text">

              {errors.complaintCategory}

            </p>

          )}

        </div>

        {/* =========================================
            DATE + LOCATION
        ========================================= */}

        <div className="form-row">

          {/* DATE */}

          <div className="form-group">

            <label className="complaint-label">

              Date(s) of Alleged Incident *

            </label>

            <input
              type="date"
              className="complaint-input"
              name="incidentDate"
              value={formData.incidentDate || ""}
              onChange={handleChange}
              max={today}
            />

            <small className="helper-text">

              Future dates are not allowed.

            </small>

            {errors.incidentDate && (

              <p className="error-text">

                {errors.incidentDate}

              </p>

            )}

          </div>

          {/* LOCATION */}

          <div className="form-group">

            <label className="complaint-label">

              Location / Division *

            </label>

            <input
              type="text"
              className="complaint-input"
              name="incidentLocationDivision"
              value={
                formData.incidentLocationDivision || ""
              }
              onChange={handleChange}
              placeholder="Enter location or division"
            />

            {errors.incidentLocationDivision && (

              <p className="error-text">

                {errors.incidentLocationDivision}

              </p>

            )}

          </div>

        </div>

        {/* =========================================
            FREQUENCY
        ========================================= */}

        <div className="mb-4">

          <label className="complaint-label">

            Frequency of Occurrence *

          </label>

          <select
            className="complaint-input"
            name="frequencyOfOccurrence"
            value={
              formData.frequencyOfOccurrence || ""
            }
            onChange={handleChange}
          >

            <option value="">
              Select frequency
            </option>

            <option value="One-time incident">
              One-time incident
            </option>

            <option value="Repeated">
              Repeated – periodic
            </option>

            <option value="Ongoing">
              Ongoing / continuous
            </option>

            <option value="Unknown">
              Unknown
            </option>

          </select>

          {errors.frequencyOfOccurrence && (

            <p className="error-text">

              {errors.frequencyOfOccurrence}

            </p>

          )}

        </div>

        {/* =========================================
            DESCRIPTION
        ========================================= */}

        <div className="mb-4">

          <label className="complaint-label">

            Description of Complaint *

          </label>

          <textarea
            className="complaint-textarea"
            name="complaintDescription"
            value={
              formData.complaintDescription || ""
            }
            onChange={handleChange}
            rows={6}
            maxLength={2000}
            placeholder="Describe what occurred, when, where and who was involved."
          />

          <div
            className={
              formData.complaintDescription?.length > 1800
                ? "text-end warning-text"
                : "text-end small-text"
            }
          >

            {

              formData.complaintDescription

                ? formData.complaintDescription.length

                : 0

            }

            /2000 characters

          </div>

          {errors.complaintDescription && (

            <p className="error-text">

              {errors.complaintDescription}

            </p>

          )}

        </div>

        {/* =========================================
            AWARENESS METHOD
        ========================================= */}

        <div className="mb-4">

          <label className="complaint-label">

            How did you become aware? *

          </label>

          <div className="radio-group">

            <label>

              <input
                type="radio"
                name="awarenessMethod"
                value="Direct witness"
                checked={
                  formData.awarenessMethod ===
                  "Direct witness"
                }
                onChange={handleChange}
              />

              Direct witness

            </label>

            <label>

              <input
                type="radio"
                name="awarenessMethod"
                value="Informed by another party"
                checked={
                  formData.awarenessMethod ===
                  "Informed by another party"
                }
                onChange={handleChange}
              />

              Informed by another party

            </label>

            <label>

              <input
                type="radio"
                name="awarenessMethod"
                value="Discovered through documents"
                checked={
                  formData.awarenessMethod ===
                  "Discovered through documents"
                }
                onChange={handleChange}
              />

              Discovered through documents

            </label>

            <label>

              <input
                type="radio"
                name="awarenessMethod"
                value="Other"
                checked={
                  formData.awarenessMethod ===
                  "Other"
                }
                onChange={handleChange}
              />

              Other

            </label>

          </div>

          {errors.awarenessMethod && (

            <p className="error-text">

              {errors.awarenessMethod}

            </p>

          )}

        </div>

        {/* =========================================
            PREVIOUSLY REPORTED
        ========================================= */}

        <div className="mb-4">

          <label className="complaint-label">

            Has this matter been reported previously? *

          </label>

          <div className="radio-inline">

            <label>

              <input
                type="radio"
                name="reportedPreviously"
                value="Yes"
                checked={
                  formData.reportedPreviously ===
                  "Yes"
                }
                onChange={handleChange}
              />

              Yes

            </label>

            <label>

              <input
                type="radio"
                name="reportedPreviously"
                value="No"
                checked={
                  formData.reportedPreviously ===
                  "No"
                }
                onChange={handleChange}
              />

              No

            </label>

          </div>

          {errors.reportedPreviously && (

            <p className="error-text">

              {errors.reportedPreviously}

            </p>

          )}

        </div>

        {/* =========================================
            PREVIOUS REPORT OUTCOME
        ========================================= */}

        {

          formData.reportedPreviously === "Yes" && (

            <div className="mb-4">

              <label className="complaint-label">

                If yes, to whom and what was the outcome?

              </label>

              <textarea
                className="complaint-textarea"
                rows={4}
                name="previousReportOutcome"
                value={
                  formData.previousReportOutcome || ""
                }
                onChange={handleChange}
                placeholder="Provide previous report details and outcome."
              />

              {errors.previousReportOutcome && (

                <p className="error-text">

                  {errors.previousReportOutcome}

                </p>

              )}

            </div>

          )

        }

        {/* =========================================
            BUTTONS
        ========================================= */}

        <div className="button-group">

          <button
            type="button"
            className="back-btn"
            onClick={prevStep}
          >

            ← Back

          </button>

          <button
            type="button"
            className="continue-btn"
            onClick={handleNext}
          >

            Save & Continue →

          </button>

        </div>

      </div>

    </div>

  );

};

export default ComplaintDetails;