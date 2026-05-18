const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({

  crn: {
    type: String,
    unique: true
  },

  submissionType: String,

  reporterCategory: String,

  fullName: String,

  employeeId: String,

  division: String,

  designation: String,

  email: String,

  telephone: String,

  preferredContact: String,

  complaintCategory: String,

  incidentDate: String,

  incidentLocation: String,

  frequency: String,

  description: String,

  awarenessMethod: String,

  previouslyReported: String,

  previousReportDetails: String,

  subjects: String,

  subjectRole: String,

  subjectOrganization: String,

  relationshipToReporter: String,

  involvesSeniorManagement: String,

  seniorManagementNames: String,

  evidenceFiles: [String],

  witnesses: String,

  additionalInfo: String,

  status: {
    type: String,
    default: "Pending"
  }

}, {
  timestamps: true
});

module.exports =
  mongoose.model("Complaint", complaintSchema);