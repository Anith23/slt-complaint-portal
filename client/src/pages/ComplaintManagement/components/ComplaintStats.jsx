import React from "react";

const ComplaintStats = () => {

  return (

    <div className="complaint-tabs">

      <button className="active-tab">
        All Complaints
      </button>

      <button>
        Total
        <span>1245</span>
      </button>

      <button>
        Pending
        <span>124</span>
      </button>

      <button>
        Under Investigation
        <span>54</span>
      </button>

      <button>
        Resolved
        <span>1067</span>
      </button>

      <button>
        Closed
        <span>0</span>
      </button>

    </div>

  );

};

export default ComplaintStats;