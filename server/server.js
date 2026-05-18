const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const complaintRoutes = require("./routes/complaintRoutes");

const dashboardRoutes = require("./routes/dashboardRoutes");

/* CONFIG */

dotenv.config();

/* DATABASE */

connectDB();

/* APP */

const app = express();

/* MIDDLEWARE */

app.use(cors());

app.use(express.json());

/* ROUTES */

app.use(
  "/api/auth",
  authRoutes
);

/* TEST ROUTE */

app.get("/", (req, res) => {

  res.send(
    "SLT Complaint Portal API Running"
  );

});

/* PORT */

const PORT = process.env.PORT || 5000;

/* SERVER */

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});

app.use(
  "/api/complaints",
  complaintRoutes
);

app.use("/api/complaints", complaintRoutes);

app.use("/api/dashboard", dashboardRoutes);