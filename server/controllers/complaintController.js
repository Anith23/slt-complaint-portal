const Complaint = require("../models/Complaint");

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

    /* CREATE COMPLAINT */

    const complaint = new Complaint({

      ...req.body,

      crn,

      status: "Pending",

      priority: req.body.priority || "Medium",

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

    await complaint.save();

    res.status(201).json({

      success: true,

      message: "Complaint Submitted Successfully",

      crn,

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
      contactTelephone

    } = req.body;

    /* VALIDATION */

    if (!crn || !contactTelephone) {

      return res.status(400).json({

        success: false,

        message:
          "CRN and Telephone Number are required"

      });

    }

    /* FIND COMPLAINT */

    const complaint = await Complaint.findOne({

      crn: crn.trim(),

      contactTelephone:
        contactTelephone.trim()

    });

    /* NOT FOUND */

    if (!complaint) {

      return res.status(404).json({

        success: false,

        message: "Complaint not found"

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

    /* TIMELINE */

    complaint.timeline.push({

      title: status,

      description:
        `Complaint moved to ${status}`,

      date: new Date()

    });

    await complaint.save();

    res.status(200).json({

      success: true,
      message: "Complaint updated successfully",
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
   EXPORTS
========================================= */

module.exports = {

  createComplaint,

  getAllComplaints,

  getSingleComplaint,

  trackComplaint,

  updateComplaintStatus

};