const express = require("express");

const router = express.Router();



const {

  getReportSummary,
  getComplaintsByCategory,
  getAllReports,
  downloadCSVReport,
  downloadPDFReport

} = require("../controllers/reportsController");

/* =========================================
   REPORT SUMMARY
========================================= */

router.get(

  "/summary",

  getReportSummary

);



router.get(

  "/category",

  getComplaintsByCategory

);

router.get(
  "/all",
  getAllReports
);


router.get(

  "/download/csv",

  downloadCSVReport

);

router.get(

  "/download/pdf",

  downloadPDFReport

);



module.exports = router;