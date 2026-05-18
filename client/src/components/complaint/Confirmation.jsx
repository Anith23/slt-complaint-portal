import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import "../../styles/confirmation.css";

const Confirmation = ({ formData }) => {

  const navigate = useNavigate();

  const [referenceNumber, setReferenceNumber] = useState("");

  const [submittedDate, setSubmittedDate] = useState("");

  /* =========================================
     GENERATE CRN + DATE
  ========================================= */

  useEffect(() => {

    /* GET CRN FROM LOCAL STORAGE */

    const savedCRN = localStorage.getItem(
      "latestCRN"
    );

    if (savedCRN) {

      setReferenceNumber(savedCRN);

    }

    /* DATE */

    const now = new Date();

    const formattedDate = now.toLocaleString(

      "en-GB",

      {

        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"

      }

    );

    setSubmittedDate(formattedDate);

  }, []);

  /* =========================================
     PRINT PDF
  ========================================= */

  const handlePrint = () => {

    window.print();

  };

  /* =========================================
     BACK HOME
  ========================================= */

  const goHome = () => {

    navigate("/");

  };

  /* =========================================
     COPY REFERENCE NUMBER
  ========================================= */

  const copyReferenceNumber = () => {

    navigator.clipboard.writeText(
      referenceNumber
    );

    alert("Reference Number Copied!");

  };

  return (

    <div className="confirmation-wrapper">

      {/* =========================================
          LEFT SIDE
      ========================================= */}

      <div className="confirmation-card">

        {/* TITLE */}

        <h2 className="confirmation-title">

          6. Confirmation

        </h2>

        <p className="confirmation-subtitle">

          Your complaint has been submitted successfully.

        </p>

        {/* =========================================
            SUCCESS AREA
        ========================================= */}

        <div className="success-area">

          <div className="success-icon">

            ✓

          </div>

          <h3>

            Thank you for your submission!

          </h3>

          <p>

            Your complaint has been received by
            the Internal Affairs Unit (IAU).

          </p>

          <p>

            We will review the information provided
            and take appropriate action.

          </p>

        </div>

        {/* =========================================
            REFERENCE BOX
        ========================================= */}

        <div className="reference-box">

          <h4>

            Your Complaint Reference Number (CRN)

          </h4>

          <div className="reference-copy-area">

            <div className="reference-number">

              {referenceNumber}

            </div>

            <button
              className="copy-btn"
              onClick={copyReferenceNumber}
            >

              📋 Copy

            </button>

          </div>

          <p>

            Please save this reference number
            for future communication and follow-up.

          </p>

        </div>

        {/* =========================================
            WHAT NEXT
        ========================================= */}

        <div className="next-box">

          <h4>

            ⓘ What happens next?

          </h4>

          <p>

            Your complaint will be reviewed
            by the Internal Affairs Unit (IAU).

          </p>

          <p>

            All complaints are handled with
            strict confidentiality.

          </p>

          <p>

            Investigation updates may be shared
            through your preferred contact method.

          </p>

        </div>

        {/* =========================================
            BUTTONS
        ========================================= */}

        <div className="confirmation-buttons">

          {/* PRINT */}

          <button
            className="print-btn"
            onClick={handlePrint}
          >

            🖨 Print / Save as PDF

          </button>

          {/* HOME */}

          <button
            className="home-btn"
            onClick={goHome}
          >

            🏠 Back to Home

          </button>

        </div>

      </div>

      {/* =========================================
          RIGHT SIDEBAR
      ========================================= */}

      <div className="confirmation-sidebar">

        {/* =========================================
            SUMMARY
        ========================================= */}

        <div className="summary-card">

          <h3>

            Submission Summary

          </h3>

          {/* DATE */}

          <div className="summary-item">

            <span>

              📅 Submission Date & Time

            </span>

            <strong>

              {submittedDate}

            </strong>

          </div>

          {/* TYPE */}

          <div className="summary-item">

            <span>

              👥 Submission Type

            </span>

            <strong>

              {

                formData?.submissionType ||

                "Named"

              }

            </strong>

          </div>

          {/* NAME */}

          <div className="summary-item">

            <span>

              👤 Submitted By

            </span>

            <strong>

              {

                formData?.fullName ||

                "Anonymous"

              }

            </strong>

          </div>

          {/* EMAIL */}

          <div className="summary-item">

            <span>

              ✉ Contact Email

            </span>

            <strong>

              {

                formData?.contactEmail ||

                "Not Provided"

              }

            </strong>

          </div>

          {/* PHONE */}

          <div className="summary-item">

            <span>

              📞 Contact Phone

            </span>

            <strong>

              {

                formData?.contactTelephone ||

                "Not Provided"

              }

            </strong>

          </div>

          {/* CATEGORY */}

          <div className="summary-item">

            <span>

              📂 Complaint Category

            </span>

            <strong>

              {

                formData?.complaintCategory ||

                "Not Provided"

              }

            </strong>

          </div>

          {/* STATUS */}

          <div className="summary-item">

            <span>

              📌 Initial Status

            </span>

            <strong>

              Pending

            </strong>

          </div>

        </div>

        {/* =========================================
            HELP
        ========================================= */}

        <div className="help-card">

          <h4>

            Need Help?

          </h4>

          <p>

            If you need assistance,
            please contact us.

          </p>

          <p className="help-link">

            ✉ iau@sltelecom.lk

          </p>

          <p className="help-link">

            📞 011 2 123 456

          </p>

          <p>

            Mon - Fri : 8.30 AM - 5.00 PM

          </p>

        </div>

        {/* =========================================
            IMPORTANT
        ========================================= */}

        <div className="important-card">

          <h4>

            🛡 Important Note

          </h4>

          <p>

            Providing false or misleading
            information is an offence under
            the applicable laws of Sri Lanka
            and may result in legal action.

          </p>

        </div>

      </div>

    </div>

  );

};

export default Confirmation;