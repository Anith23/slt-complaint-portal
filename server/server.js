const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

/* DATABASE */

const connectDB = require("./config/db");

/* ROUTES */

const authRoutes =
require("./routes/authRoutes");

const complaintRoutes =
require("./routes/complaintRoutes");

const dashboardRoutes =
require("./routes/dashboardRoutes");

const adminRoutes =
require("./routes/adminRoutes");

const analyticsRoutes =
require("./routes/analyticsRoutes");

const reportRoutes =
require("./routes/reportRoutes");

/* CONFIG */

dotenv.config();

/* DATABASE CONNECTION */

connectDB();

/* APP */

const app = express();

/* MIDDLEWARE */

app.use(cors());

app.use(express.json());

/* =========================================
   TEST ROUTE
========================================= */

app.get("/", (req, res) => {

  res.send(
    "SLT Complaint Portal API Running"
  );

});

/* =========================================
   API ROUTES
========================================= */

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/complaints",
  complaintRoutes
);

app.use(
  "/api/dashboard",
  dashboardRoutes
);

app.use(
  "/api/admin",
  adminRoutes
);

app.use(
  "/api/analytics",
  analyticsRoutes
);

app.use(
  "/api/reports",
  reportRoutes
);

/* =========================================
   PORT
========================================= */

const PORT =
process.env.PORT || 5000;

/* =========================================
   SERVER
========================================= */

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});