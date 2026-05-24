const Complaint = require("../models/Complaint");

const generateTrackingCode =
require("../utils/generateTrackingCode");

const sendEmail =
require("../utils/sendEmail");
/* =========================================
   GENERATE CRN
========================================= */

const generateCRN = async () => {

  const year = new Date().getFullYear();

  const count = await Complaint.countDocuments();

  const nextNumber = String(
    count + 1
  ).padStart(6, "0");

  return `IAU-${year}-${nextNumber}`;

};

/* =========================================
   CREATE COMPLAINT
========================================= */

const createComplaint = async (req, res) => {

  try {

    /* GENERATE CRN */

    const crn = await generateCRN();

    /* GENERATE TRACKING CODE */

    const trackingCode =
      generateTrackingCode();

    /* CREATE COMPLAINT */

    const complaint = new Complaint({

      ...req.body,

      crn,

      trackingCode,

      status: "Pending",

      priority:
        req.body.priority || "Medium",

      assignedOfficer: "",

      department: "",

      timeline: [

        {

          title: "Complaint Submitted",

          description:
            "Your complaint submitted successfully.",

          date: new Date()

        }

      ]

    });

    /* SAVE COMPLAINT */

    await complaint.save();

    /* SEND EMAIL ONLY FOR NON-ANONYMOUS USERS */

    if (

      req.body.submissionType !==
        "Anonymous"

      &&

      req.body.contactEmail

    ) {

      await sendEmail(

        req.body.contactEmail,

        "Complaint Submitted Successfully",

        `

          <h2>
            Complaint Submitted Successfully
          </h2>

          <p>
            Your complaint has been received successfully.
          </p>

          <h3>
            Complaint Details
          </h3>

          <p>
            <strong>CRN:</strong>
            ${crn}
          </p>

          <p>
            <strong>Tracking Code:</strong>
            ${trackingCode}
          </p>

          <p>
            Please save these details securely
            for future complaint tracking.
          </p>

        `

      );

    }

    /* SEND RESPONSE */

    res.status(201).json({

      success: true,

      message:
        "Complaint Submitted Successfully",

      crn,

      trackingCode,

      complaint

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Server Error"

    });

  }

};

/* =========================================
   GET ALL COMPLAINTS
========================================= */

const getAllComplaints = async (req, res) => {

  try {

    const complaints = await Complaint.find()

      .sort({ createdAt: -1 });

    res.status(200).json({

      success: true,

      complaints

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Server Error"

    });

  }

};

/* =========================================
   GET SINGLE COMPLAINT
========================================= */

const getSingleComplaint = async (req, res) => {

  try {

    const complaint = await Complaint.findById(
      req.params.id
    );

    if (!complaint) {

      return res.status(404).json({

        success: false,

        message: "Complaint not found"

      });

    }

    res.status(200).json({

      success: true,

      complaint

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Server Error"

    });

  }

};

/* =========================================
   TRACK COMPLAINT
========================================= */

const trackComplaint = async (req, res) => {

  try {

    const {

      crn,
      trackingCode

    } = req.body;

    /* VALIDATION */

    if (!crn || !trackingCode) {

      return res.status(400).json({

        success: false,

        message:
          "CRN and Tracking Code are required"

      });

    }

    /* FIND COMPLAINT */

    const complaint =
      await Complaint.findOne({

        crn: crn.trim(),

        trackingCode:
          trackingCode.trim()

      });

    /* NOT FOUND */

    if (!complaint) {

      return res.status(404).json({

        success: false,

        message:
          "Invalid CRN or Tracking Code"

      });

    }

    /* SUCCESS */

    res.status(200).json({

      success: true,

      complaint

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Server Error"

    });

  }

};

/* =========================================
   UPDATE COMPLAINT STATUS
========================================= */

/* =========================================
   UPDATE COMPLAINT STATUS
========================================= */

const updateComplaintStatus = async (req, res) => {

  try {

    const { id } = req.params;

    const {
      status,
      priority,
      assignedOfficer
    } = req.body;

    const complaint = await Complaint.findById(id);

    if (!complaint) {

      return res.status(404).json({

        success: false,
        message: "Complaint not found"

      });

    }

    if (status) {

      complaint.status = status;

    }

    if (priority) {

      complaint.priority = priority;

    }

    if (assignedOfficer !== undefined) {

      complaint.assignedOfficer =
        assignedOfficer;

    }

    await complaint.save();

    res.status(200).json({

      success: true,
      complaint

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,
      message: error.message

    });

  }

};

/* =========================================
   EXPORTS
========================================= */

module.exports = {

  createComplaint,

  getAllComplaints,

  getSingleComplaint,

  trackComplaint,

  updateComplaintStatus

};