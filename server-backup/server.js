const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");

const complaintRoutes = require("./routes/complaintRoutes");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");

// Load Environment Variables
dotenv.config();


// Initialize Express
const app = express();


// ===============================
// Security Middleware
// ===============================
app.use(helmet());


// ===============================
// Rate Limiting
// ===============================
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(limiter);


// ===============================
// General Middleware
// ===============================
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));


// ===============================
// Routes
// ===============================
app.use("/api/complaints", complaintRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/admin", adminRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("SLT Complaint Portal API Running");
});


// ===============================
// MongoDB Connection
// ===============================
mongoose.connect(process.env.MONGO_URI)

.then(() => {

  console.log("MongoDB Connected");

  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });

})

.catch((err) => {
  console.log(err);
});