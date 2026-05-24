const Complaint = require("../models/Complaint");

/* =========================================
   GET ANALYTICS DATA
========================================= */

const getAnalyticsData = async (req, res) => {

  try {

    /* TOTAL */

    const totalComplaints =
      await Complaint.countDocuments();

    /* PENDING */

    const pendingComplaints =
      await Complaint.countDocuments({

        status: "Pending"

      });

    /* UNDER INVESTIGATION */

    const underInvestigation =
      await Complaint.countDocuments({

        status: "Under Investigation"

      });

    /* RESOLVED */

    const resolvedComplaints =
      await Complaint.countDocuments({

        status: "Resolved"

      });

    /* CLOSED */

    const closedComplaints =
      await Complaint.countDocuments({

        status: "Closed"

      });

    /* RESPONSE */

    res.status(200).json({

      success: true,

      data: {

        totalComplaints,

        pendingComplaints,

        underInvestigation,

        resolvedComplaints,

        closedComplaints

      }

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Server Error"

    });

  }

};

module.exports = {

  getAnalyticsData

};