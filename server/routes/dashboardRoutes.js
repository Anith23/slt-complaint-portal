const express = require("express");

const router = express.Router();

const {

  getDashboardData

} = require("../controllers/dashboardController");

/* =========================================
   FULL DASHBOARD
========================================= */

router.get(

  "/full",

  getDashboardData

);

module.exports = router;