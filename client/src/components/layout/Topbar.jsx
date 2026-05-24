import React from "react";

import "../../styles/Topbar.css";

const Topbar = ({

  title,
  subtitle

}) => {

  return (

    <div className="topbar">

      <div>

        <h1>{title}</h1>

        <p>{subtitle}</p>

      </div>

    </div>

  );

};

export default Topbar;