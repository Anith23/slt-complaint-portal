import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

/* =========================================
   PUBLIC PAGES
========================================= */

import HomePage from "../pages/Home/HomePage";

import ComplaintPage from "../pages/Complaint/ComplaintPage";

import TrackComplaintPage from "../pages/TrackComplaint/TrackComplaintPage";

/* =========================================
   USER AUTH
========================================= */

import UserRegisterPage from "../pages/UserAuth/UserRegisterPage";

import UserLoginPage from "../pages/UserAuth/UserLoginPage";

/* =========================================
   ADMIN PAGES
========================================= */

import AdminLoginPage from "../pages/AdminLogin/AdminLoginPage";

import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";

import ComplaintManagement from "../pages/ComplaintManagement/ComplaintManagement";

import UserDashboard from "../pages/UserDashboard/UserDashboard";

/* =========================================
   PROTECTED ROUTE
========================================= */

import ProtectedRoute from "../components/auth/ProtectedRoute";

import AdminOTP from
"../pages/AdminOTP/AdminOTP";

/* =========================================
   APP ROUTES
========================================= */

const AppRoutes = () => {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME PAGE */}

        <Route
          path="/"
          element={<HomePage />}
        />

        {/* PUBLIC PAGES */}

        <Route
          path="/complaint"
          element={<ComplaintPage />}
        />

        <Route
          path="/track"
          element={<TrackComplaintPage />}
        />

        {/* USER AUTH */}

        <Route
          path="/register"
          element={<UserRegisterPage />}
        />

        <Route
          path="/login"
          element={<UserLoginPage />}
        />

        {/* USER DASHBOARD */}

        <Route
          path="/user/dashboard"
          element={<UserDashboard />}
        />

        {/* ADMIN LOGIN */}

        <Route
          path="/admin/login"
          element={<AdminLoginPage />}
        />

        <Route
          path="/admin/verify-otp"
          element={<AdminOTP />}
        />
        {/* ADMIN DASHBOARD */}

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>

              <AdminDashboard />

            </ProtectedRoute>
          }
        />

        {/* ADMIN COMPLAINT MANAGEMENT */}

        <Route
          path="/admin/complaints"
          element={
            <ProtectedRoute>

              <ComplaintManagement />

            </ProtectedRoute>
          }
        />

        {/* DEFAULT REDIRECT */}

        <Route
          path="*"
          element={<Navigate to="/" />}
        />

      </Routes>

      

      

    </BrowserRouter>

  );

};

export default AppRoutes;