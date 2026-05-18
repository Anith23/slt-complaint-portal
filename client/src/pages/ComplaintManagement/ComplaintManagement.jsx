import React, {

  useEffect,
  useState

} from "react";

import axios from "axios";

import Sidebar from "../AdminDashboard/Sidebar";

import TopNavbar from "../AdminDashboard/TopNavbar";

import ComplaintTable from "./components/ComplaintTable";

import ComplaintDetails from "./components/ComplaintDetails";

import "./style/ComplaintManagement.css";

const ComplaintManagement = () => {

  /* =========================================
     STATES
  ========================================= */

  const [complaints, setComplaints] = useState([]);

  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const [openDrawer, setOpenDrawer] = useState(false);

  /* =========================================
     FETCH COMPLAINTS
  ========================================= */

  const fetchComplaints = async () => {

    try {

      const response = await axios.get(

        "http://localhost:5000/api/complaints/all"

      );

      setComplaints(

        response.data.complaints

      );

    }

    catch (error) {

      console.log(error);

    }

  };



    /* =========================================
     UPDATE COMPLAINT STATUS
  ========================================= */

  const updateComplaintStatus = async (
    complaintId,
    updatedData
  ) => {

    try {

      await axios.put(

        `http://localhost:5000/api/complaints/update-status/${complaintId}`,

        updatedData

      );

      /* REFRESH */

      fetchComplaints();

      /* UPDATE SELECTED */

      if (selectedComplaint?._id === complaintId) {

        setSelectedComplaint({

          ...selectedComplaint,

          ...updatedData

        });

      }

      alert("Complaint updated successfully");

    }

    catch (error) {

      console.log(error);

      alert("Update failed");

    }

  };

  /* =========================================
     LOAD DATA
  ========================================= */

  useEffect(() => {

    fetchComplaints();

  }, []);

  return (

    <div className="dashboard-layout">

      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN */}

      <div className="dashboard-main">

        <TopNavbar />

        <div className="complaint-management-page">

          {/* HEADER */}

          <div className="page-header">

            <h1>

              Complaint Management

            </h1>

            <p>

              Manage all submitted complaints

            </p>

          </div>

          {/* TABLE */}

          <ComplaintTable

            complaints={complaints}

            setSelectedComplaint={setSelectedComplaint}

            setOpenDrawer={setOpenDrawer}

          />

          {/* DRAWER */}

          {/* DRAWER */}

          <ComplaintDetails

            openDrawer={openDrawer}

            setOpenDrawer={setOpenDrawer}

            selectedComplaint={selectedComplaint}

            updateComplaintStatus={
              updateComplaintStatus
            }

          />

        </div>

      </div>

    </div>

  );

};

export default ComplaintManagement;