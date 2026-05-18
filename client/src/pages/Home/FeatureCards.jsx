import React from "react";

import {
  FaClipboardList,
  FaSearch,
  FaComments,
  FaShieldAlt
} from "react-icons/fa";

const FeatureCards = () => {

  return (

    <section className="features-section">

      <div className="features-grid">

        {/* CARD 1 */}
        <div className="feature-card">

          <div className="feature-icon blue-icon">
            <FaClipboardList />
          </div>

          <h3>Easy to Submit</h3>

          <p>
            Submit your complaints or concerns in just a few simple steps.
          </p>

        </div>

        {/* CARD 2 */}
        <div className="feature-card">

          <div className="feature-icon green-icon">
            <FaSearch />
          </div>

          <h3>Track Status</h3>

          <p>
            Track the status of your complaint in real-time and stay updated.
          </p>

        </div>

        {/* CARD 3 */}
        <div className="feature-card">

          <div className="feature-icon yellow-icon">
            <FaComments />
          </div>

          <h3>Quick Response</h3>

          <p>
            Our team ensures quick response and works on resolving your issue.
          </p>

        </div>

        {/* CARD 4 */}
        <div className="feature-card">

          <div className="feature-icon purple-icon">
            <FaShieldAlt />
          </div>

          <h3>Secure & Reliable</h3>

          <p>
            Your information is safe and protected with us.
          </p>

        </div>

      </div>

    </section>

  );

};

export default FeatureCards;