import React, { useState } from "react";

import ProgressSidebar from "../common/ProgressSidebar";

import "../../styles/subjectInformation.css";

const SubjectInformation = ({
  formData,
  handleChange,
  nextStep,
  prevStep
}) => {

  const [errors, setErrors] = useState({});

  /* =========================================
     VALIDATION
  ========================================= */

  const validateForm = () => {

    let newErrors = {};

    /* REQUIRED FIELD */

    if (!formData.involvesSeniorManagement) {

      newErrors.involvesSeniorManagement =
        "Please select an option";

    }

    /* CONDITIONAL FIELD */

    if (

      formData.involvesSeniorManagement === "Yes" &&

      !formData.seniorPersonnelNames?.trim()

    ) {

      newErrors.seniorPersonnelNames =
        "Please enter names of senior personnel";

    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };

  /* =========================================
     NEXT BUTTON
  ========================================= */

  const handleNext = () => {

    if (validateForm()) {

      nextStep();

    }

  };

  return (

    <div className="subject-wrapper">

      {/* =========================================
          LEFT SIDE
      ========================================= */}

      <div className="subject-form-card">

        {/* TITLE */}

        <h2 className="subject-title">

          3. Subject(s) Information

        </h2>

        <p className="subject-subtitle">

          Please provide information about the person(s)
          involved in the complaint.

        </p>

        <hr className="subject-divider" />

        {/* =========================================
            PERSONS INVOLVED
        ========================================= */}

        <div className="subject-group">

          <label className="subject-label">

            Name(s) of Person(s) Involved

          </label>

          <textarea
            className="subject-textarea"
            rows="4"
            placeholder='Enter names separated by comma or type "Unknown"'
            name="personsInvolved"
            value={formData.personsInvolved || ""}
            onChange={handleChange}
          />

          <small className="subject-small">

            Multiple names can be separated using commas.

          </small>

        </div>

        {/* =========================================
            DESIGNATION
        ========================================= */}

        <div className="subject-group">

          <label className="subject-label">

            Designation / Role of Subject(s)

          </label>

          <input
            type="text"
            className="subject-input"
            placeholder="Example: DGM - Procurement"
            name="subjectDesignationRole"
            value={formData.subjectDesignationRole || ""}
            onChange={handleChange}
          />

        </div>

        {/* =========================================
            ORGANIZATION
        ========================================= */}

        <div className="subject-group">

          <label className="subject-label">

            Organisation of Subject(s)

          </label>

          <select
            className="subject-input"
            name="subjectOrganization"
            value={formData.subjectOrganization || ""}
            onChange={handleChange}
          >

            <option value="">
              Select organisation
            </option>

            <option value="SLT">
              SLT
            </option>

            <option value="Mobitel">
              Mobitel
            </option>

            <option value="SLTS">
              SLTS
            </option>

            <option value="Vendor">
              Vendor
            </option>

            <option value="External">
              External
            </option>

            <option value="Unknown">
              Unknown
            </option>

          </select>

        </div>

        {/* =========================================
            RELATIONSHIP
        ========================================= */}

        <div className="subject-group">

          <label className="subject-label">

            Relationship of Subject to Reporter

          </label>

          <div className="radio-group">

            <label>

              <input
                type="radio"
                name="relationshipToReporter"
                value="Superior"
                checked={
                  formData.relationshipToReporter ===
                  "Superior"
                }
                onChange={handleChange}
              />

              Superior

            </label>

            <label>

              <input
                type="radio"
                name="relationshipToReporter"
                value="Manager"
                checked={
                  formData.relationshipToReporter ===
                  "Manager"
                }
                onChange={handleChange}
              />

              Manager

            </label>

            <label>

              <input
                type="radio"
                name="relationshipToReporter"
                value="Peer"
                checked={
                  formData.relationshipToReporter ===
                  "Peer"
                }
                onChange={handleChange}
              />

              Peer

            </label>

            <label>

              <input
                type="radio"
                name="relationshipToReporter"
                value="Colleague"
                checked={
                  formData.relationshipToReporter ===
                  "Colleague"
                }
                onChange={handleChange}
              />

              Colleague

            </label>

            <label>

              <input
                type="radio"
                name="relationshipToReporter"
                value="Subordinate"
                checked={
                  formData.relationshipToReporter ===
                  "Subordinate"
                }
                onChange={handleChange}
              />

              Subordinate

            </label>

            <label>

              <input
                type="radio"
                name="relationshipToReporter"
                value="External"
                checked={
                  formData.relationshipToReporter ===
                  "External"
                }
                onChange={handleChange}
              />

              External Party

            </label>

            <label>

              <input
                type="radio"
                name="relationshipToReporter"
                value="Unknown"
                checked={
                  formData.relationshipToReporter ===
                  "Unknown"
                }
                onChange={handleChange}
              />

              Unknown

            </label>

          </div>

        </div>

        {/* =========================================
            SENIOR MANAGEMENT
        ========================================= */}

        <div className="subject-group">

          <label className="subject-label">

            Does the complaint involve senior management
            or any IAU member? *

          </label>

          <div className="radio-group">

            <label>

              <input
                type="radio"
                name="involvesSeniorManagement"
                value="Yes"
                checked={
                  formData.involvesSeniorManagement ===
                  "Yes"
                }
                onChange={handleChange}
              />

              Yes

            </label>

            <label>

              <input
                type="radio"
                name="involvesSeniorManagement"
                value="No"
                checked={
                  formData.involvesSeniorManagement ===
                  "No"
                }
                onChange={handleChange}
              />

              No

            </label>

            <label>

              <input
                type="radio"
                name="involvesSeniorManagement"
                value="Unsure"
                checked={
                  formData.involvesSeniorManagement ===
                  "Unsure"
                }
                onChange={handleChange}
              />

              Unsure

            </label>

          </div>

          {errors.involvesSeniorManagement && (

            <p className="error-text">

              {errors.involvesSeniorManagement}

            </p>

          )}

        </div>

        {/* =========================================
            CONDITIONAL FIELD
        ========================================= */}

        {

          formData.involvesSeniorManagement === "Yes" && (

            <div className="subject-group">

              <label className="subject-label">

                Name(s) of Senior Personnel Involved *

              </label>

              <textarea
                className="subject-textarea"
                rows="3"
                placeholder="Enter names of senior personnel"
                name="seniorPersonnelNames"
                value={
                  formData.seniorPersonnelNames || ""
                }
                onChange={handleChange}
              />

              {errors.seniorPersonnelNames && (

                <p className="error-text">

                  {errors.seniorPersonnelNames}

                </p>

              )}

            </div>

          )

        }

        {/* =========================================
            BUTTONS
        ========================================= */}

        <div className="subject-buttons">

          <button
            className="back-btn"
            onClick={prevStep}
          >

            ← Back

          </button>

          <button
            className="continue-btn"
            onClick={handleNext}
          >

            Save & Continue →

          </button>

        </div>

      </div>

      {/* =========================================
          RIGHT SIDE
      ========================================= */}

      <ProgressSidebar
        step={3}
        title="Subject(s) Information"
        description="Provide information about the person(s) involved in the complaint."
      />

    </div>

  );

};

export default SubjectInformation;