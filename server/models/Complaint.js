const mongoose = require("mongoose");

/* =========================================
   COMPLAINT SCHEMA
========================================= */

const complaintSchema = new mongoose.Schema(

  {


    
    /* =========================================
       SYSTEM FIELDS
    ========================================= */

    crn: {

      type: String,

      required: true,

      unique: true

    },

    userId: {

      type: mongoose.Schema.Types.ObjectId,

      ref: "User",

      default: null

    },

    status: {

      type: String,

      enum: [

        "Pending",
        "Under Investigation",
        "In Progress",
        "Resolved",
        "Closed"

      ],

      default: "Pending"

    },

    assignedOfficer: {

      type: String,

      default: ""

    },

    /* =========================================
   PRIORITY
========================================= */

priority: {

  type: String,

  enum: [

    "Low",
    "Medium",
    "High"

  ],

  default: "Medium"

},

/* =========================================
   TIMELINE
========================================= */

timeline: [

  {

    title: {

      type: String

    },

    description: {

      type: String

    },

    date: {

      type: Date,

      default: Date.now

    }

  }

],

    ciabocEscalation: {

      type: Boolean,

      default: false

    },

    remarks: [

      {

        message: String,

        addedBy: String,

        createdAt: {

          type: Date,

          default: Date.now

        }

      }

    ],

    /* =========================================
       SECTION 1
       REPORTER INFORMATION
    ========================================= */

    submissionType: {

      type: String,

      enum: [

        "Named",
        "Anonymous"

      ],

      required: true

    },

    reporterCategory: {

      type: String,

      required: true

    },

    fullName: {

      type: String,

      default: ""

    },

    employeeStaffId: {

      type: String,

      default: ""

    },

    divisionDepartment: {

      type: String,

      default: ""

    },

    designation: {

      type: String,

      default: ""

    },

    contactEmail: {

      type: String,

      default: ""

    },

    contactTelephone: {

      type: String,

      default: ""

    },

    preferredContactMethod: {

      type: String,

      default: ""

    },

    /* =========================================
       SECTION 2
       COMPLAINT DETAILS
    ========================================= */

    complaintCategory: {

      type: String,

      required: true

    },

    incidentDate: {

      type: Date,

      required: true

    },

    incidentLocationDivision: {

      type: String,

      required: true

    },

    frequencyOfOccurrence: {

      type: String,

      required: true

    },

    complaintDescription: {

      type: String,

      required: true

    },

    awarenessMethod: {

      type: String,

      required: true

    },

    reportedPreviously: {

      type: String,

      enum: [

        "Yes",
        "No"

      ],

      required: true

    },

    previousReportOutcome: {

      type: String,

      default: ""

    },

    /* =========================================
       SECTION 3
       SUBJECT INFORMATION
    ========================================= */

    personsInvolved: {

      type: String,

      default: ""

    },

    subjectDesignationRole: {

      type: String,

      default: ""

    },

    subjectOrganization: {

      type: String,

      default: ""

    },

    relationshipToReporter: {

      type: String,

      default: ""

    },

    involvesSeniorManagement: {

      type: String,

      enum: [

        "Yes",
        "No",
        "Unsure"

      ],

      required: true

    },

    seniorPersonnelNames: {

      type: String,

      default: ""

    },

    /* =========================================
       SECTION 4
       SUPPORTING EVIDENCE
    ========================================= */

    hasSupportingEvidence: {

      type: String,

      enum: [

        "Yes",
        "No"

      ],

      required: true

    },

    evidenceTypes: [

      {

        type: String

      }

    ],

    uploadedFiles: [

      {

        fileName: String,

        filePath: String,

        fileType: String

      }

    ],

    witnessNames: {

      type: String,

      default: ""

    },

    additionalInformation: {

      type: String,

      default: ""

    },

    /* =========================================
       SECTION 5
       DECLARATION
    ========================================= */

    declarationAccepted: {

      type: Boolean,

      required: true

    },

    auditAcknowledgement: {

      type: Boolean,

      required: true

    },

    captchaVerified: {

      type: Boolean,

      default: false

    }

  },

  {

    timestamps: true

  }

);

module.exports = mongoose.model(

  "Complaint",

  complaintSchema

);