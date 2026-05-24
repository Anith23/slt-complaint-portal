import React, { useState } from "react";

import "../../styles/evidenceUpload.css";

const EvidenceUpload = ({
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

    if (!formData.hasSupportingEvidence) {

      newErrors.hasSupportingEvidence =
        "Please select an option";

    }

    /* CONDITIONAL FIELD */

    if (

      formData.hasSupportingEvidence === "Yes" &&

      (
        !formData.evidenceTypes ||

        formData.evidenceTypes.length === 0
      )

    ) {

      newErrors.evidenceTypes =
        "Please select at least one evidence type";

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

  /* =========================================
     CHECKBOX HANDLER
  ========================================= */

  const handleEvidenceType = (e) => {

    const {

      value,
      checked

    } = e.target;

    let updatedTypes =
      formData.evidenceTypes || [];

    if (checked) {

      updatedTypes = [

        ...updatedTypes,

        value

      ];

    }

    else {

      updatedTypes = updatedTypes.filter(

        (item) => item !== value

      );

    }

    handleChange({

      target: {

        name: "evidenceTypes",

        value: updatedTypes

      }

    });

  };

  /* =========================================
     FILE HANDLER
  ========================================= */

  const handleFileUpload = (e) => {

    const files = Array.from(e.target.files);

    handleChange({

      target: {

        name: "uploadedFiles",

        value: files

      }

    });

  };

  return (

    <div className="evidence-wrapper">

      {/* =========================================
          LEFT SIDE
      ========================================= */}

      <div className="evidence-form-card">

        {/* TITLE */}

        <h2 className="evidence-title">

          4. Supporting Evidence

        </h2>

        <p className="evidence-subtitle">

          Upload evidence or supporting information
          related to your complaint.

        </p>

        <hr className="evidence-divider" />

        {/* =========================================
            HAS EVIDENCE
        ========================================= */}

        <div className="evidence-group">

          <label className="evidence-label">

            Do you have supporting evidence? *

          </label>

          <div className="radio-group">

            <label>

              <input
                type="radio"
                name="hasSupportingEvidence"
                value="Yes"
                checked={
                  formData.hasSupportingEvidence ===
                  "Yes"
                }
                onChange={handleChange}
              />

              Yes

            </label>

            <label>

              <input
                type="radio"
                name="hasSupportingEvidence"
                value="No"
                checked={
                  formData.hasSupportingEvidence ===
                  "No"
                }
                onChange={handleChange}
              />

              No

            </label>

          </div>

          {errors.hasSupportingEvidence && (

            <p className="error-text">

              {errors.hasSupportingEvidence}

            </p>

          )}

        </div>

        {/* =========================================
            CONDITIONAL SECTION
        ========================================= */}

        {

          formData.hasSupportingEvidence === "Yes" && (

            <>

              {/* =========================================
                  EVIDENCE TYPES
              ========================================= */}

              <div className="form-group">

                <label className="form-label">

                  Evidence Type *

                </label>

                <div className="evidence-grid">

                  {/* DOCUMENTS */}

                  <label className="evidence-item">

                    <input
                      type="checkbox"
                      value="Documents"
                      checked={
                        formData.evidenceTypes.includes(
                          "Documents"
                        )
                      }
                      onChange={handleEvidenceType}
                    />

                    <span>

                      Documents / Records

                    </span>

                  </label>

                  {/* EMAIL */}

                  <label className="evidence-item">

                    <input
                      type="checkbox"
                      value="Emails"
                      checked={
                        formData.evidenceTypes.includes(
                          "Emails"
                        )
                      }
                      onChange={handleEvidenceType}
                    />

                    <span>

                      Emails / Communication

                    </span>

                  </label>

                  {/* PHOTOS */}

                  <label className="evidence-item">

                    <input
                      type="checkbox"
                      value="Photos"
                      checked={
                        formData.evidenceTypes.includes(
                          "Photos"
                        )
                      }
                      onChange={handleEvidenceType}
                    />

                    <span>

                      Photographs / Videos

                    </span>

                  </label>

                  {/* WITNESS */}

                  <label className="evidence-item">

                    <input
                      type="checkbox"
                      value="Witness Testimony"
                      checked={
                        formData.evidenceTypes.includes(
                          "Witness Testimony"
                        )
                      }
                      onChange={handleEvidenceType}
                    />

                    <span>

                      Witness Testimony

                    </span>

                  </label>

                  {/* FINANCIAL */}

                  <label className="evidence-item">

                    <input
                      type="checkbox"
                      value="Financial Records"
                      checked={
                        formData.evidenceTypes.includes(
                          "Financial Records"
                        )
                      }
                      onChange={handleEvidenceType}
                    />

                    <span>

                      Financial Records

                    </span>

                  </label>

                  {/* OTHER */}

                  <label className="evidence-item">

                    <input
                      type="checkbox"
                      value="Other"
                      checked={
                        formData.evidenceTypes.includes(
                          "Other"
                        )
                      }
                      onChange={handleEvidenceType}
                    />

                    <span>

                      Other

                    </span>

                  </label>

                </div>

                {errors.evidenceTypes && (

                  <p className="error-text">

                    {errors.evidenceTypes}

                  </p>

                )}

              </div>

              {/* =========================================
                  FILE UPLOAD
              ========================================= */}

              <div className="evidence-group">

                <label className="evidence-label">

                  File Upload

                </label>

                <input
                  type="file"
                  multiple
                  className="evidence-input"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={handleFileUpload}
                />

                <small className="evidence-small">

                  Accepted:
                  PDF, DOCX, JPG, PNG

                  <br />

                  Maximum 10 MB per file
                  (Maximum 5 files)

                </small>

              </div>

              {/* =========================================
                  FILE PREVIEW
              ========================================= */}

              {

                formData.uploadedFiles?.length > 0 && (

                  <div className="uploaded-files-list">

                    {

                      formData.uploadedFiles.map(

                        (file, index) => (

                          <div
                            key={index}
                            className="uploaded-file-card"
                          >

                            📄 {file.name}

                          </div>

                        )

                      )

                    }

                  </div>

                )

              }

            </>

          )

        }

        {/* =========================================
            WITNESSES
        ========================================= */}

        <div className="evidence-group">

          <label className="evidence-label">

            Names of Witness(es)

          </label>

          <input
            type="text"
            className="evidence-input"
            placeholder="Enter witness names separated by comma"
            name="witnessNames"
            value={formData.witnessNames || ""}
            onChange={handleChange}
          />

        </div>

        {/* =========================================
            ADDITIONAL INFORMATION
        ========================================= */}

        <div className="evidence-group">

          <label className="evidence-label">

            Additional Information

          </label>

          <textarea
            rows="5"
            className="evidence-textarea"
            placeholder="Enter additional information"
            name="additionalInformation"
            value={formData.additionalInformation || ""}
            onChange={handleChange}
          />

        </div>

        {/* =========================================
            BUTTONS
        ========================================= */}

        <div className="evidence-buttons">

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
          RIGHT SIDEBAR
      ========================================= */}

      

    </div>

  );

};

export default EvidenceUpload;