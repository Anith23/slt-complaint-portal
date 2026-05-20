import React, { useRef } from "react";

import jsPDF from "jspdf";

import html2canvas from "html2canvas";

import ComplaintSummary from "../../components/track/ComplaintSummary";

import ComplaintProgress from "../../components/track/ComplaintProgress";

import ComplaintTimeline from "../../components/track/ComplaintTimeline";

import ComplaintDetailsCard from "../../components/track/ComplaintDetailsCard";

import Navbar from "../../components/common/Navbar";

import Footer from "../../components/common/Footer";

import "../../styles/TrackComplaintPage.css";

const TrackComplaintResult = ({ complaint }) => {

  /* =====================================
     PDF REF
  ===================================== */

  const pdfRef = useRef();

  /* =====================================
     DOWNLOAD PDF
  ===================================== */

  const handleDownloadPDF = async () => {

  try {

    const element = pdfRef.current;

    const canvas = await html2canvas(
      element,
      {
        scale: 3,
        useCORS: true,
        scrollY: -window.scrollY
      }
    );

    const imgData =
      canvas.toDataURL("image/png");

    const pdf = new jsPDF(
      "p",
      "mm",
      "a4"
    );

    /* A4 SIZE */

    const pageWidth = 210;

    

    /* IMAGE SIZE */

    const imgWidth = pageWidth - 10;

    const imgHeight =
      (canvas.height * imgWidth)
      / canvas.width;

    let position = 5;

    pdf.addImage(

      imgData,

      "PNG",

      5,

      position,

      imgWidth,

      imgHeight

    );

    pdf.save(
      `${complaint.crn}.pdf`
    );

  }

  catch (error) {

    console.log(
      "PDF Download Error:",
      error
    );

  }

};

  return (

    <div className="track-result-wrapper">

      {/* NAVBAR */}

      <Navbar />

      {/* PDF CONTENT */}

      <div
        ref={pdfRef}
        className="pdf-content"
      >

        {/* =====================================
            TOP SUCCESS HEADER
        ===================================== */}

        <div className="track-success-header">

          <div className="success-left">

            <div className="success-icon">

              ✓

            </div>

            <div>

              <h1>

                Complaint Found

              </h1>

              <p>

                Here is the current status of your complaint.

              </p>

            </div>

          </div>

          {/* DOWNLOAD BUTTON */}

          <button
            className="download-btn"
            onClick={handleDownloadPDF}
          >

            Download / Print

          </button>

        </div>

        {/* =====================================
            SUMMARY CARD
        ===================================== */}

        <ComplaintSummary
          complaint={complaint}
        />

        {/* =====================================
            PROGRESS SECTION
        ===================================== */}

        <ComplaintProgress
          status={complaint.status}
        />

        {/* =====================================
            BOTTOM GRID
        ===================================== */}

        <div className="track-bottom-grid">

          {/* LEFT */}

          <ComplaintDetailsCard
            complaint={complaint}
          />

          {/* RIGHT */}

          <ComplaintTimeline
            timeline={
              complaint.timeline || []
            }
          />

        </div>

      </div>

      {/* FOOTER */}

      <Footer />

    </div>

  );

};

export default TrackComplaintResult;