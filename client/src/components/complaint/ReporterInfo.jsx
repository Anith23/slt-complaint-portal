import React, { useState } from "react";

import "../../styles/commonComplaint.css";

const ReporterInfo = ({
  formData,
  handleChange,
  nextStep
}) => {

  const [errors, setErrors] = useState({});

  /* =========================================
     ANONYMOUS CHECK
  ========================================= */

  const isAnonymous =
    formData.submissionType === "Anonymous";

  /* =========================================
     VALIDATION
  ========================================= */

  const validateForm = () => {

    let newErrors = {};

    /* SUBMISSION TYPE */

    if (!formData.submissionType) {

      newErrors.submissionType =
        "Please select submission type";

    }

    /* REPORTER CATEGORY */

    if (!formData.reporterCategory) {

      newErrors.reporterCategory =
        "Please select reporter category";

    }

    /* IF NOT ANONYMOUS */

    if (!isAnonymous) {

      /* FULL NAME */

      if (!formData.fullName?.trim()) {

        newErrors.fullName =
          "Full name is required";

      }

      /* EMAIL */

      if (!formData.contactEmail?.trim()) {

        newErrors.contactEmail =
          "Email address is required";

      }

      else if (

        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(

          formData.contactEmail

        )

      ) {

        newErrors.contactEmail =
          "Enter valid email address";

      }

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

    <div className="report-wrapper">

      {/* =========================================
          LEFT SIDE
      ========================================= */}

      <div className="report-form-card">

        {/* TITLE */}

        <h2 className="report-title">

          1. Reporter Information

        </h2>

        <p className="report-subtitle">

          Please provide your details.
          All information will be kept confidential.

        </p>

        <hr className="report-divider" />

        {/* =========================================
            SUBMISSION TYPE
        ========================================= */}

        <div className="mb-4">

          <label className="report-label">

            Submission Type *

          </label>

          <div className="submission-grid">

            {/* NAMED */}

            <label className="submission-card">

              <input
                type="radio"
                name="submissionType"
                value="Named"
                checked={
                  formData.submissionType === "Named"
                }
                onChange={handleChange}
              />

              <div>

                <h5>
                  Named (Identify yourself)
                </h5>

                <p>
                  We encourage identified submissions
                </p>

              </div>

            </label>

            {/* ANONYMOUS */}

            <label className="submission-card">

              <input
                type="radio"
                name="submissionType"
                value="Anonymous"
                checked={
                  formData.submissionType === "Anonymous"
                }
                onChange={handleChange}
              />

              <div>

                <h5>
                  Anonymous
                </h5>

                <p>
                  Your identity will remain confidential
                </p>

              </div>

            </label>

          </div>

          {errors.submissionType && (

            <p className="error-text">

              {errors.submissionType}

            </p>

          )}

        </div>

        {/* =========================================
            REPORTER CATEGORY
        ========================================= */}

        <div className="mb-4">

          <label className="report-label">

            Reporter Category *

          </label>

          <select
            className="report-input"
            name="reporterCategory"
            value={formData.reporterCategory || ""}
            onChange={handleChange}
          >

            <option value="">
              Select your category
            </option>

            <option value="Employee - SLT">
              Employee - SLT
            </option>

            <option value="Employee - Mobitel">
              Employee - Mobitel
            </option>

            <option value="Employee - SLTS">
              Employee - SLTS
            </option>

            <option value="Vendor">
              Vendor
            </option>

            <option value="Supplier">
              Supplier
            </option>

            <option value="Contractor">
              Contractor
            </option>

            <option value="Customer">
              Customer
            </option>

            <option value="Shareholder">
              Shareholder
            </option>

            <option value="Investor">
              Investor
            </option>

            <option value="General Public">
              General Public
            </option>

            <option value="Other">
              Other
            </option>

          </select>

          {errors.reporterCategory && (

            <p className="error-text">

              {errors.reporterCategory}

            </p>

          )}

        </div>

        {/* =========================================
            HIDE WHEN ANONYMOUS
        ========================================= */}

        {!isAnonymous && (

          <>

            {/* ROW 1 */}

            <div className="form-row">

              {/* FULL NAME */}

              <div className="form-group">

                <label className="report-label">

                  Full Name *

                </label>

                <input
                  type="text"
                  className="report-input"
                  name="fullName"
                  value={formData.fullName || ""}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />

                {errors.fullName && (

                  <p className="error-text">

                    {errors.fullName}

                  </p>

                )}

              </div>

              {/* STAFF ID */}

              <div className="form-group">

                <label className="report-label">

                  Employee / Staff ID

                </label>

                <input
                  type="text"
                  className="report-input"
                  name="employeeStaffId"
                  value={formData.employeeStaffId || ""}
                  onChange={handleChange}
                  placeholder="Enter Employee / Staff ID"
                />

              </div>

            </div>

            {/* ROW 2 */}

            <div className="form-row">

              {/* DIVISION */}

              <div className="form-group">

                <label className="report-label">

                  Division / Department

                </label>

                <input
                  type="text"
                  className="report-input"
                  name="divisionDepartment"
                  value={formData.divisionDepartment || ""}
                  onChange={handleChange}
                  placeholder="Enter division or department"
                />

              </div>

              {/* DESIGNATION */}

              <div className="form-group">

                <label className="report-label">

                  Designation

                </label>

                <input
                  type="text"
                  className="report-input"
                  name="designation"
                  value={formData.designation || ""}
                  onChange={handleChange}
                  placeholder="Enter designation"
                />

              </div>

            </div>

            {/* ROW 3 */}

            <div className="form-row">

              {/* EMAIL */}

              <div className="form-group">

                <label className="report-label">

                  Contact Email *

                </label>

                <input
                  type="email"
                  className="report-input"
                  name="contactEmail"
                  value={formData.contactEmail || ""}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                />

                {errors.contactEmail && (

                  <p className="error-text">

                    {errors.contactEmail}

                  </p>

                )}

              </div>

              {/* PHONE */}

              <div className="form-group">

                <label className="report-label">

                  Contact Telephone

                </label>

                <input
                  type="text"
                  className="report-input"
                  name="contactTelephone"
                  value={formData.contactTelephone || ""}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />

              </div>

            </div>

            {/* =========================================
                CONTACT METHOD
            ========================================= */}

            <div className="mb-5">

              <label className="report-label">

                Preferred Contact Method

              </label>

              <div className="contact-methods">

                <label>

                  <input
                    type="radio"
                    name="preferredContactMethod"
                    value="Email"
                    checked={
                      formData.preferredContactMethod ===
                      "Email"
                    }
                    onChange={handleChange}
                  />

                  Email

                </label>

                <label>

                  <input
                    type="radio"
                    name="preferredContactMethod"
                    value="Phone"
                    checked={
                      formData.preferredContactMethod ===
                      "Phone"
                    }
                    onChange={handleChange}
                  />

                  Phone

                </label>

                <label>

                  <input
                    type="radio"
                    name="preferredContactMethod"
                    value="No Contact Preferred"
                    checked={
                      formData.preferredContactMethod ===
                      "No Contact Preferred"
                    }
                    onChange={handleChange}
                  />

                  No contact preferred

                </label>

              </div>

            </div>

          </>

        )}

        {/* =========================================
            BUTTON
        ========================================= */}

        <div className="button-area">

          <button
            className="continue-btn"
            onClick={handleNext}
          >

            Save & Continue →

          </button>

        </div>

      </div>

      {/* =========================================
          RIGHT SIDE INFO PANEL
      ========================================= */}

      <div className="info-panel">

        <h3>
          Information
        </h3>

        <div className="info-box">

          <h5>
            Confidential
          </h5>

          <p>
            All information you provide
            will be treated confidentially.
          </p>

        </div>

        <div className="info-box">

          <h5>
            Secure
          </h5>

          <p>
            Your data is protected with
            industry-standard security measures.
          </p>

        </div>

        <div className="info-box">

          <h5>
            Impartial
          </h5>

          <p>
            Complaints are reviewed professionally.
          </p>

        </div>

        <div className="info-box">

          <h5>
            Whistleblower Protection
          </h5>

          <p>
            You are protected under regulations.
          </p>

        </div>

        <div className="help-panel">

          <h4>
            Need Help?
          </h4>

          <p>
            iau@sltelecom.lk
          </p>

          <p>
            011 2 123 456
          </p>

          <p>
            Mon - Fri : 8:30 AM - 5:00 PM
          </p>

        </div>

      </div>

    </div>

  );

};

export default ReporterInfo;