import React, {

  useState

} from "react";

import axios from "axios";

import { useNavigate }
from "react-router-dom";

const AdminOTP = () => {

  const navigate =
    useNavigate();

  const [otp, setOtp] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const adminId =
    localStorage.getItem(
      "adminId"
    );

  const handleVerifyOTP =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const response =
          await axios.post(

            "http://localhost:5000/api/admin/verify-otp",

            {

              adminId,

              otp

            }

          );

        /* SAVE TOKEN */

        localStorage.setItem(

          "adminToken",

          response.data.token

        );

        /* REDIRECT */

        navigate(
          "/admin/dashboard"
        );

      }

      catch (error) {

        alert(

          error.response?.data?.message ||

          "OTP Verification Failed"

        );

      }

      finally {

        setLoading(false);

      }

    };

  return (

    <div
      className="admin-login-page"
    >

      <div
        className="admin-login-card"
      >

        <h2>
          Verify OTP
        </h2>

        <p>
          Enter the OTP sent to
          your email
        </p>

        <form
          onSubmit={
            handleVerifyOTP
          }
        >

          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) =>
              setOtp(
                e.target.value
              )
            }
            required
          />

          <button type="submit">

            {

              loading

                ?

                "Verifying..."

                :

                "Verify OTP"

            }

          </button>

        </form>

      </div>

    </div>

  );

};

export default AdminOTP;