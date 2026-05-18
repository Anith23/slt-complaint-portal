import React from "react";

import {

  Navigate

} from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  /* =========================================
     CHECK TOKEN
  ========================================= */

  const adminToken = localStorage.getItem(

    "adminToken"

  );

  /* =========================================
     IF NOT LOGGED IN
  ========================================= */

  if (!adminToken) {

    return <Navigate to="/admin/login" />;

  }

  /* =========================================
     ALLOW ACCESS
  ========================================= */

  return children;

};

export default ProtectedRoute;