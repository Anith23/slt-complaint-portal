import React, {
  useState
} from "react";

import axios from "axios";

import TrackComplaintResult from "./TrackComplaintResult";

import Navbar from "../../components/common/Navbar";

import Footer from "../../components/common/Footer";

import "../../styles/TrackComplaintPage.css";

const TrackComplaintPage = () => {

  /* =====================================
     STATES
  ===================================== */

  const [formData, setFormData] = useState({

    crn: "",
    trackingCode: ""

  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [complaint, setComplaint] = useState(null);

  /* =====================================
     HANDLE INPUT
  ===================================== */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };

  /* =====================================
     TRACK COMPLAINT
  ===================================== */

  const handleTrackComplaint = async (e) => {

    e.preventDefault();

    setLoading(true);

    setError("");

    try {

      const response = await axios.post(

        "http://localhost:5000/api/complaints/track",

        {

          crn: formData.crn.trim(),

          trackingCode:
            formData.trackingCode.trim()

        }

      );

      setComplaint(
        response.data.complaint
      );

    }

    catch (error) {

      setError(

        "Complaint not found. Please check your CRN and Tracking Code."

      );

    }

    finally {

      setLoading(false);

    }

  };

  /* =====================================
     RESULT PAGE
  ===================================== */

  if (complaint) {

    return (

      <TrackComplaintResult
        complaint={complaint}
      />

    );

  }

  /* =====================================
     TRACK FORM PAGE
  ===================================== */

  return (

    <div className="track-page">

      {/* TOP SECTION */}

      <div className="track-top-section">
        <Navbar />
        <h1>
          Track Your Complaint
        </h1>

        <p>
          Enter your Complaint Reference Number and Tracking Code to check complaint status.
        </p>

      </div>

      {/* FORM CARD */}

      <div className="track-form-card">

        <form onSubmit={handleTrackComplaint}>

          {/* CRN */}

          <div className="track-form-group">

            <label>
              Complaint Reference Number (CRN)
            </label>

            <input
              type="text"
              name="crn"
              placeholder="IAU-2026-000001"
              value={formData.crn}
              onChange={handleChange}
              required
            />

          </div>

          {/* TELEPHONE */}

          <div className="track-form-group">

            <label>
              Tracking Code
            </label>

            <input
              type="text"
              name="trackingCode"
              placeholder="TRK-X7K29P"
              value={formData.trackingCode}
              onChange={handleChange}
              required
            />

          </div>

          {/* ERROR */}

          {error && (

            <div className="track-error">

              {error}

            </div>

          )}

          {/* BUTTON */}

          <button
            type="submit"
            className="track-btn"
          >

            {
              loading
                ? "Tracking..."
                : "Track Complaint"
            }

          </button>

        </form>

      </div>

      <Footer/>

    </div>

  );

};

export default TrackComplaintPage;