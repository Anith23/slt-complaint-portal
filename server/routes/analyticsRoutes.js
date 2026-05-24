const express = require("express");

const router = express.Router();

const {

  getAnalyticsData

} = require("../controllers/analyticsController");

/* =========================================
   ANALYTICS DATA
========================================= */

router.get(

  "/",

  getAnalyticsData

);

module.exports = router;