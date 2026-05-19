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

  /* SEARCH + FILTER STATES */

  const [searchTerm, setSearchTerm] = useState("");

  const [statusFilter, setStatusFilter] = useState("");

  const [priorityFilter, setPriorityFilter] = useState("");

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
     FILTERED COMPLAINTS
  ========================================= */

  const filteredComplaints = complaints.filter(
    (item) => {

      const matchesSearch =

        item.crn
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase())

        ||

        item.fullName
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase())

        ||

        item.complaintCategory
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesStatus =

        statusFilter === ""

        ||

        item.status === statusFilter;

      const matchesPriority =

        priorityFilter === ""

        ||

        item.priority === priorityFilter;

      return (

        matchesSearch

        &&

        matchesStatus

        &&

        matchesPriority

      );

    }
  );

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

          {/* =========================================
              FILTER BAR
          ========================================= */}

          <div className="filter-bar">

            {/* SEARCH */}

            <input
              type="text"
              placeholder="Search complaints..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

            {/* STATUS FILTER */}

            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value)
              }
            >

              <option value="">
                All Status
              </option>

              <option value="Pending">
                Pending
              </option>

              <option value="Under Investigation">
                Under Investigation
              </option>

              <option value="In Progress">
                In Progress
              </option>

              <option value="Resolved">
                Resolved
              </option>

              <option value="Closed">
                Closed
              </option>

            </select>

            {/* PRIORITY FILTER */}

            <select
              value={priorityFilter}
              onChange={(e) =>
                setPriorityFilter(e.target.value)
              }
            >

              <option value="">
                All Priority
              </option>

              <option value="High">
                High
              </option>

              <option value="Medium">
                Medium
              </option>

              <option value="Low">
                Low
              </option>

            </select>

          </div>

          {/* =========================================
              TABLE
          ========================================= */}

          <ComplaintTable

            complaints={filteredComplaints}

            setSelectedComplaint={setSelectedComplaint}

            setOpenDrawer={setOpenDrawer}

          />

          {/* =========================================
              DRAWER
          ========================================= */}

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