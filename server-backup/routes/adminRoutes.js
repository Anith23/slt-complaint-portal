const express = require("express");

const router = express.Router();

const {
  getAllComplaints,
  updateComplaintStatus
} = require("../controllers/adminController");

const authMiddleware =
  require("../middleware/authMiddleware");


// =================================
// Get All Complaints
// =================================
router.get(
  "/complaints",
  authMiddleware,
  getAllComplaints
);


// =================================
// Update Complaint Status
// =================================
router.put(
  "/status/:id",
  authMiddleware,
  updateComplaintStatus
);


module.exports = router;