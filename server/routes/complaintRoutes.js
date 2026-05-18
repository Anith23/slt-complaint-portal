const express = require("express");

const router = express.Router();

const {

  createComplaint,

  getAllComplaints,

  getSingleComplaint,

  trackComplaint,

  updateComplaintStatus

} = require("../controllers/complaintController");

/* =====================================
   CREATE COMPLAINT
===================================== */

router.post(
  "/create",
  createComplaint
);

/* =====================================
   GET ALL COMPLAINTS
===================================== */

router.get(
  "/all",
  getAllComplaints
);

/* =====================================
   GET SINGLE COMPLAINT
===================================== */

router.get(
  "/:id",
  getSingleComplaint
);

/* =====================================
   TRACK COMPLAINT
===================================== */

router.post(
  "/track",
  trackComplaint
);

/* =====================================
   UPDATE COMPLAINT STATUS
===================================== */

router.put(
  "/update-status/:id",
  updateComplaintStatus
);

module.exports = router;