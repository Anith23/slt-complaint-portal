import React, { useState } from "react";

import axios from "axios";

import {

  toast,
  ToastContainer

} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Navbar from "../../components/common/Navbar";

import ComplaintStepper from "../../components/complaint/ComplaintStepper";

import ReporterInfo from "../../components/complaint/ReporterInfo";

import ComplaintDetails from "../../components/complaint/ComplaintDetails";

import SubjectInformation from "../../components/complaint/SubjectInformation";

import EvidenceUpload from "../../components/complaint/EvidenceUpload";

import Declaration from "../../components/complaint/Declaration";

import Confirmation from "../../components/complaint/Confirmation";

import "../../styles/complaint.css";

const ComplaintPage = () => {

  const [step, setStep] = useState(1);

  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({

  submissionType: "",

  reporterCategory: "",

  complaintCategory: "",

  incidentLocation: "",

  description: "",

  hasEvidence: "",

  evidenceTypes: [],

  witnessNames: "",

  additionalInformation: ""

});

  // NEXT STEP
  const nextStep = () => {

    if (step < 6) {

      setStep(step + 1);

    }

  };

  // PREVIOUS STEP
  const prevStep = () => {

    if (step > 1) {

      setStep(step - 1);

    }

  };

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value

    });

  };

  // FINAL SUBMIT
 const submitForm = async () => {

    try {

      setSubmitting(true);

      console.log(formData);

      const response = await axios.post(

        "http://localhost:5000/api/complaints/create",

        formData

      );

      console.log(response.data);

      localStorage.setItem(

        "latestCRN",

        response.data.crn

      );

      localStorage.setItem(

        "latestTrackingCode",

        response.data.trackingCode

      );

      toast.success(

        `Complaint Submitted Successfully | CRN: ${response.data.crn}`

      );

      setStep(6);

    }

    catch (error) {

      console.log(error);

      toast.error(

        error.response?.data?.message ||

        "Failed to submit complaint"

      );

    }

    finally {

      setSubmitting(false);

    }

  };

  return (

    <div className="complaint-page">

      <ToastContainer />

      {/* NAVBAR */}

      <Navbar />



      {/* STEPPER */}

      <div className="stepper-container">

        <div className="container">

          <ComplaintStepper step={step} />

        </div>

      </div>



      {/* MAIN CONTENT */}

      <div className="container py-5">

        <div className="complaint-content-wrapper">

          

            {/* STEP 1 */}

            {step === 1 && (

              <ReporterInfo
                formData={formData}
                handleChange={handleChange}
                nextStep={nextStep}
              />

            )}



            {/* STEP 2 */}

            {step === 2 && (

              <ComplaintDetails
                formData={formData}
                handleChange={handleChange}
                nextStep={nextStep}
                prevStep={prevStep}
              />

            )}



            {/* STEP 3 */}

            {step === 3 && (

              <SubjectInformation
                formData={formData}
                handleChange={handleChange}
                nextStep={nextStep}
                prevStep={prevStep}
              />

            )}



            {/* STEP 4 */}

            {step === 4 && (

              <EvidenceUpload
                formData={formData}
                handleChange={handleChange}
                nextStep={nextStep}
                prevStep={prevStep}
              />

            )}



            {/* STEP 5 */}

            {step === 5 && (

              <Declaration
                formData={formData}
                handleChange={handleChange}
                nextStep={nextStep}
                prevStep={prevStep}
                submitForm={submitForm}
                submitting={submitting}
              />

            )}



            {/* STEP 6 */}

            {step === 6 && (

              <Confirmation />

            )}

          

        </div>

      </div>



      {/* FOOTER */}

      <footer className="portal-footer">

        <div className="container">

          <div className="footer-wrapper">

            <div className="footer-left">

              © 2026 Sri Lanka Telecom PLC.
              All Rights Reserved.

            </div>

            <div className="footer-right">

              <span>Privacy Policy</span>

              <span>Terms & Conditions</span>

              <span>Contact Us</span>

            </div>

          </div>

        </div>

      </footer>

    </div>

  );

};

export default ComplaintPage;