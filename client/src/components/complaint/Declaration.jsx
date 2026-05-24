import React, { useState } from "react";

import ReCAPTCHA from "react-google-recaptcha";

import "../../styles/declaration.css";

const Declaration = ({
  formData,
  handleChange,
  prevStep,
  submitForm,
  submitting
}) => {

  const [errors, setErrors] = useState({});

  /* =========================================
     CAPTCHA VERIFY
  ========================================= */

  const handleCaptcha = (value) => {

    handleChange({

      target: {

        name: "captchaVerified",

        value: !!value

      }

    });

  };

  /* =========================================
     VALIDATION
  ========================================= */

  const validateForm = () => {

    let newErrors = {};

    /* DECLARATION */

    if (!formData.declarationAccepted) {

      newErrors.declarationAccepted =
        "You must confirm the declaration";

    }

    /* AUDIT */

    if (!formData.auditAcknowledgement) {

      newErrors.auditAcknowledgement =
        "You must agree before submission";

    }

    /* CAPTCHA */

    if (!formData.captchaVerified) {

      newErrors.captchaVerified =
        "Please complete CAPTCHA verification";

    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };

  /* =========================================
     HANDLE SUBMIT
  ========================================= */

  const handleFinalSubmit = () => {

    if (validateForm()) {

      submitForm();

    }

  };

  return (

    <div className="declaration-wrapper">

      {/* =========================================
          LEFT SIDE
      ========================================= */}

      <div className="declaration-card">

        {/* TITLE */}

        <h2 className="declaration-title">

          5. Declaration & Submission

        </h2>

        <p className="declaration-subtitle">

          Please read the declaration carefully before submitting your complaint.

        </p>

        <hr className="declaration-divider" />

        {/* =========================================
            DECLARATION STATEMENT
        ========================================= */}

        <div className="declaration-statement-box">

          <h4>

            Declaration Statement

          </h4>

          <p>

            I hereby confirm that the information provided is,
            to the best of my knowledge, true and accurate.
            I understand that deliberate or malicious false
            reports are treated seriously and may result in
            disciplinary action under CEO’s Circular No. 23/2026.

          </p>

          <p>

            I acknowledge that the Internal Affairs Unit (IAU)
            will treat this submission with strict confidentiality
            and that no retaliation will be taken against me
            for raising a genuine concern.

          </p>

        </div>

        {/* =========================================
            DECLARATION CHECKBOX
        ========================================= */}

        <div className="declare-box">

          <input
            type="checkbox"
            name="declarationAccepted"
            checked={
              formData.declarationAccepted || false
            }
            onChange={(e) =>

              handleChange({

                target: {

                  name: "declarationAccepted",

                  value: e.target.checked

                }

              })

            }
          />

          <p>

            I confirm the above declaration and consent
            to the IAU processing my submission for
            investigation purposes.

          </p>

        </div>

        {errors.declarationAccepted && (

          <p className="error-text">

            {errors.declarationAccepted}

          </p>

        )}

        {/* =========================================
            AUDIT CHECKBOX
        ========================================= */}

        <div className="declare-box">

          <input
            type="checkbox"
            name="auditAcknowledgement"
            checked={
              formData.auditAcknowledgement || false
            }
            onChange={(e) =>

              handleChange({

                target: {

                  name: "auditAcknowledgement",

                  value: e.target.checked

                }

              })

            }
          />

          <p>

            I understand that this portal is monitored
            and all submissions are logged for audit purposes.

          </p>

        </div>

        {errors.auditAcknowledgement && (

          <p className="error-text">

            {errors.auditAcknowledgement}

          </p>

        )}

        {/* =========================================
            CAPTCHA
        ========================================= */}

        <div className="captcha-box">

          <label className="declaration-label">

            CAPTCHA Verification *

          </label>

          <ReCAPTCHA
            sitekey="6Ld1RuQsAAAAAI_0E0IBbnVXkRhHjILwD4erxo-Y"
            onChange={handleCaptcha}
          />

          {errors.captchaVerified && (

            <p className="error-text">

              {errors.captchaVerified}

            </p>

          )}

        </div>

        {/* =========================================
            BUTTONS
        ========================================= */}

        <div className="declaration-buttons">

          {/* DRAFT */}

          <button className="draft-btn">

            Save as Draft

          </button>

          <div className="right-buttons">

            {/* BACK */}

            <button
              className="back-btn"
              onClick={prevStep}
            >

              ← Back

            </button>

            {/* SUBMIT */}

            <button
              className="continue-btn"
              onClick={handleFinalSubmit}
              disabled={submitting}
            >

              {

                submitting

                  ?

                  "Submitting..."

                  :

                  "Review & Submit →"

              }

            </button>

          </div>

        </div>

      </div>

      {/* =========================================
          RIGHT SIDEBAR
      ========================================= */}

      

    </div>

  );

};

export default Declaration;