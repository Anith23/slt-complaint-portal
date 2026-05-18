import React from "react";

import {
  FaBell,
  FaChevronDown
} from "react-icons/fa";

const UserTopbar = () => {

  return (

    <div className="user-topbar">

      {/* RIGHT */}

      <div className="user-topbar-right">

        <div className="notification-icon">

          <FaBell />

          <span>
            2
          </span>

        </div>

        <div className="user-profile-box">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="user"
          />

          <div>

            <h4>
              Nimal Perera
            </h4>

            <p>
              nimal.perera@slttelecom.lk
            </p>

          </div>

          <FaChevronDown />

        </div>

      </div>

    </div>

  );

};

export default UserTopbar;