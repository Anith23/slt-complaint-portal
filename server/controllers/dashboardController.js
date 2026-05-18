const Complaint = require("../models/Complaint");

/* =========================================
   FULL DASHBOARD DATA
========================================= */

const getDashboardData = async (req, res) => {

  try {

    /* =========================================
       TOTAL STATS
    ========================================= */

    const totalComplaints = await Complaint.countDocuments();

    const pendingComplaints = await Complaint.countDocuments({

      status: "Pending"

    });

    const investigationComplaints = await Complaint.countDocuments({

      status: "Under Investigation"

    });

    const resolvedComplaints = await Complaint.countDocuments({

      status: "Resolved"

    });

    /* =========================================
       RECENT COMPLAINTS
    ========================================= */

    const recentComplaints = await Complaint.find()

      .sort({ createdAt: -1 })

      .limit(5);

    /* =========================================
       CATEGORY STATS
    ========================================= */

    const categoryStats = await Complaint.aggregate([

      {

        $group: {

          _id: "$complaintCategory",

          count: {

            $sum: 1

          }

        }

      }

    ]);

    /* =========================================
       STATUS STATS
    ========================================= */

    const statusStats = await Complaint.aggregate([

      {

        $group: {

          _id: "$status",

          count: {

            $sum: 1

          }

        }

      }

    ]);

    /* =========================================
       MONTHLY STATS
    ========================================= */

    const monthlyStats = await Complaint.aggregate([

      {

        $group: {

          _id: {

            month: {

              $month: "$createdAt"

            }

          },

          total: {

            $sum: 1

          }

        }

      },

      {

        $sort: {

          "_id.month": 1

        }

      }

    ]);

    /* =========================================
       RESPONSE
    ========================================= */

    res.status(200).json({

      success: true,

      stats: {

        totalComplaints,

        pendingComplaints,

        investigationComplaints,

        resolvedComplaints

      },

      recentComplaints,

      categoryStats,

      statusStats,

      monthlyStats

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

module.exports = {

  getDashboardData

};