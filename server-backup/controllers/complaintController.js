const Complaint = require("../models/Complaint");

exports.createComplaint = async (req, res) => {

  try {

    // COUNT DOCUMENTS
    const count = await Complaint.countDocuments();

    // GENERATE CRN
    const crn =
      `IAU-2026-${String(count + 1).padStart(6, "0")}`;

    // CREATE NEW COMPLAINT
    const complaint = new Complaint({

      crn,

      // =========================
      // REPORTER INFORMATION
      // =========================
      submissionType: req.body.submissionType,
      reporterCategory: req.body.reporterCategory,
      fullName: req.body.fullName,
      employeeId: req.body.employeeId,
      division: req.body.division,
      designation: req.body.designation,
      email: req.body.email,
      telephone: req.body.telephone,
      preferredContact: req.body.preferredContact,

      // =========================
      // COMPLAINT DETAILS
      // =========================
      complaintCategory: req.body.complaintCategory,
      incidentDate: req.body.incidentDate,
      incidentLocation: req.body.incidentLocation,
      frequency: req.body.frequency,
      description: req.body.description,
      awarenessMethod: req.body.awarenessMethod,
      previouslyReported: req.body.previouslyReported,
      previousReportDetails: req.body.previousReportDetails,

      // =========================
      // SUBJECT INFORMATION
      // =========================
      subjects: req.body.subjects,
      subjectRole: req.body.subjectRole,
      subjectOrganization: req.body.subjectOrganization,
      relationshipToReporter: req.body.relationshipToReporter,
      involvesSeniorManagement: req.body.involvesSeniorManagement,
      seniorManagementNames: req.body.seniorManagementNames,

      // =========================
      // EVIDENCE
      // =========================
      witnesses: req.body.witnesses,
      additionalInfo: req.body.additionalInfo,

      // FILES
      evidenceFiles: req.files
        ? req.files.map(file => file.filename)
        : []

    });

    // SAVE TO DATABASE
    await complaint.save();

    console.log("NEW COMPLAINT SAVED");

    res.status(201).json({

      success: true,
      complaint

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,
      message: "Server Error"

    });

  }

};
