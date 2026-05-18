const Complaint = require("../models/Complaint");


// =================================
// Get All Complaints
// =================================
exports.getAllComplaints = async (req, res) => {

  try {

    const complaints = await Complaint.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      total: complaints.length,
      complaints
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }

};


// =================================
// Update Complaint Status
// =================================
exports.updateComplaintStatus = async (req, res) => {

  try {

    const { status } = req.body;

    const complaint =
      await Complaint.findByIdAndUpdate(

        req.params.id,

        { status },

        { new: true }

      );

    if (!complaint) {

      return res.status(404).json({
        success: false,
        message: "Complaint not found"
      });

    }

    res.status(200).json({
      success: true,
      message: "Status updated successfully",
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