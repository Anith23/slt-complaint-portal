import React from "react";

const ComplaintFilters = () => {

  return (

    <div className="complaint-filters">

      <select>
        <option>All Status</option>
      </select>

      <select>
        <option>All Categories</option>
      </select>

      <select>
        <option>All Priority</option>
      </select>

      <select>
        <option>All Assigned To</option>
      </select>

      <input
        type="text"
        placeholder="01 May 2026 - 21 May 2026"
      />

      <button className="reset-btn">
        Reset
      </button>

      <button className="export-btn">
        Export
      </button>

    </div>

  );

};

export default ComplaintFilters;