const Complaint = require("../models/Complaint");

const PDFDocument = require("pdfkit");

/* =========================================
   REPORT SUMMARY
========================================= */

exports.getReportSummary = async (

  req,
  res

) => {

  try {

    const month =
      req.query.month || "2026-05";

    const startDate =
      new Date(`${month}-01`);

    const endDate =
      new Date(startDate);

    endDate.setMonth(
      endDate.getMonth() + 1
    );

    /* TOTAL */

    const totalComplaints =
      await Complaint.countDocuments({

        createdAt: {

          $gte: startDate,
          $lt: endDate

        }

      });

    /* UNDER INVESTIGATION */

    const underInvestigation =
      await Complaint.countDocuments({

        status: "Under Investigation",

        createdAt: {

          $gte: startDate,
          $lt: endDate

        }

      });

    /* RESOLVED */

    const resolvedComplaints =
      await Complaint.countDocuments({

        status: "Resolved",

        createdAt: {

          $gte: startDate,
          $lt: endDate

        }

      });

    /* CLOSED */

    const closedComplaints =
      await Complaint.countDocuments({

        status: "Closed",

        createdAt: {

          $gte: startDate,
          $lt: endDate

        }

      });

    res.status(200).json({

      success: true,

      data: {

        totalComplaints,
        underInvestigation,
        resolvedComplaints,
        closedComplaints

      }

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
   COMPLAINTS BY CATEGORY
========================================= */

exports.getComplaintsByCategory = async (

  req,
  res

) => {

  try {

    const month =
      req.query.month || "2026-05";

    const startDate =
      new Date(`${month}-01`);

    const endDate =
      new Date(startDate);

    endDate.setMonth(
      endDate.getMonth() + 1
    );

    const data =
      await Complaint.aggregate([

        {

          $match: {

            createdAt: {

              $gte: startDate,
              $lt: endDate

            }

          }

        },

        {

          $group: {

            _id: "$complaintCategory",

            total: {

              $sum: 1

            }

          }

        }

      ]);

    res.status(200).json({

      success: true,

      data

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
   ALL REPORTS
========================================= */

exports.getAllReports = async (

  req,
  res

) => {

  try {

    const reports = [

      {

        id: 1,

        reportName:
          "Complaints Summary Report",

        description:
          "Summary of all complaints",

        format: "PDF",

        generatedBy: "Admin User",

        generatedOn: "2026-05-31"

      },

      {

        id: 2,

        reportName:
          "Category Analysis Report",

        description:
          "Complaint category analysis",

        format: "Excel",

        generatedBy: "Admin User",

        generatedOn: "2026-05-31"

      }

    ];

    res.status(200).json({

      success: true,

      data: reports

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
   DOWNLOAD CSV REPORT
========================================= */

exports.downloadCSVReport = async (

  req,
  res

) => {

  try {

    const month =
      req.query.month || "2026-05";

    const startDate =
      new Date(`${month}-01`);

    const endDate =
      new Date(startDate);

    endDate.setMonth(
      endDate.getMonth() + 1
    );

    const complaints =
      await Complaint.find({

        createdAt: {

          $gte: startDate,
          $lt: endDate

        }

      });

    let csv =

      "Complaint ID,Category,Status,Priority\n";

    complaints.forEach((item) => {

      csv +=

        `${item.complaintId || "N/A"},${item.complaintCategory || "N/A"},${item.status || "N/A"},${item.priority || "N/A"}\n`;

    });

    res.header(

      "Content-Type",
      "text/csv"

    );

    res.attachment(

      `complaints-report-${month}.csv`

    );

    return res.send(csv);

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
   DOWNLOAD PDF REPORT
========================================= */

exports.downloadPDFReport = async (

  req,
  res

) => {

  try {

    const month =
      req.query.month || "2026-05";

    const startDate =
      new Date(`${month}-01`);

    const endDate =
      new Date(startDate);

    endDate.setMonth(
      endDate.getMonth() + 1
    );

    const complaints =
      await Complaint.find({

        createdAt: {

          $gte: startDate,
          $lt: endDate

        }

      });

    /* SUMMARY */

    const totalComplaints =
      complaints.length;

    const resolvedComplaints =
      complaints.filter(

        item =>
          item.status === "Resolved"

      ).length;

    const pendingComplaints =
      complaints.filter(

        item =>
          item.status === "Pending"

      ).length;

    const highPriorityComplaints =
      complaints.filter(

        item =>
          item.priority === "High"

      ).length;

    /* PDF */

    const doc =
      new PDFDocument({

        margin: 50

      });

    /* RESPONSE */

    res.setHeader(

      "Content-Type",
      "application/pdf"

    );

    res.setHeader(

      "Content-Disposition",

      `attachment; filename=complaints-report-${month}.pdf`

    );

    doc.pipe(res);

    /* HEADER */

    doc

      .fontSize(24)

      .fillColor("#003b7a")

      .text(

        "SLT Internal Affairs Unit",

        {

          align: "center"

        }

      );

    doc.moveDown(0.5);

    doc

      .fontSize(18)

      .fillColor("black")

      .text(

        `Complaints Management Report - ${month}`,

        {

          align: "center"

        }

      );

    doc.moveDown(1);

    /* GENERATED DATE */

    doc

      .fontSize(11)

      .fillColor("gray")

      .text(

        `Generated On: ${new Date().toLocaleString()}`

      );

    doc.moveDown(1);

    /* EXECUTIVE SUMMARY */

    doc

      .fontSize(16)

      .fillColor("#111827")

      .text("Executive Summary");

    doc.moveDown(0.5);

    doc

      .fontSize(12)

      .fillColor("black")

      .text(`Total Complaints : ${totalComplaints}`);

    doc.text(

      `Resolved Complaints : ${resolvedComplaints}`

    );

    doc.text(

      `Pending Complaints : ${pendingComplaints}`

    );

    doc.text(

      `High Priority Complaints : ${highPriorityComplaints}`

    );

    doc.moveDown(1);

    /* COMPLAINT DETAILS */

    doc

      .fontSize(16)

      .fillColor("#111827")

      .text("Complaint Details");

    doc.moveDown(0.7);

    complaints.forEach(

      (item, index) => {

        doc

          .fontSize(13)

          .fillColor("#003b7a")

          .text(

            `Complaint ${index + 1}`

          );

        doc.moveDown(0.3);

        doc

          .fontSize(11)

          .fillColor("black")

          .text(

            `Complaint ID : ${item.complaintId || "N/A"}`

          );

        doc.text(

          `Category : ${item.complaintCategory || "N/A"}`

        );

        doc.text(

          `Status : ${item.status || "N/A"}`

        );

        doc.text(

          `Priority : ${item.priority || "N/A"}`

        );

        doc.text(

          `Description : ${item.description || "N/A"}`

        );

        doc.text(

          `Created Date : ${new Date(item.createdAt).toLocaleDateString()}`

        );

        doc.moveDown(1);

        doc

          .moveTo(50, doc.y)

          .lineTo(550, doc.y)

          .strokeColor("#d1d5db")

          .stroke();

        doc.moveDown(1);

      }

    );

    /* FOOTER */

    doc.moveDown(1);

    doc

      .fontSize(10)

      .fillColor("gray")

      .text(

        "SLT Internal Affairs Unit - Confidential Report",

        {

          align: "center"

        }

      );

    doc.end();

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,
      message: "Server Error"

    });

  }

};