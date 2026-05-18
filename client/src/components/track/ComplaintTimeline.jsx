import React from "react";

const ComplaintTimeline = ({ complaint }) => {

  /* SAFETY CHECK */

  if (!complaint) {

    return null;

  }

  /* =====================================
     TIMELINE DATA
  ===================================== */

  const timeline = [

    {
      title: "Complaint Submitted",
      date: complaint.createdAt,
      description:
        "Your complaint has been submitted successfully.",
      active: true
    },

    {
      title: "Under Investigation",
      date: complaint.updatedAt,
      description:
        complaint.status === "Under Investigation"
          ? "Your complaint is under investigation."
          : "Pending",
      active:
        complaint.status === "Under Investigation" ||
        complaint.status === "In Progress" ||
        complaint.status === "Resolved" ||
        complaint.status === "Closed"
    },

    {
      title: "In Progress",
      date: complaint.updatedAt,
      description:
        complaint.status === "In Progress"
          ? "Investigation currently in progress."
          : "Pending",
      active:
        complaint.status === "In Progress" ||
        complaint.status === "Resolved" ||
        complaint.status === "Closed"
    },

    {
      title: "Resolved",
      date: complaint.updatedAt,
      description:
        complaint.status === "Resolved"
          ? "Complaint resolved successfully."
          : "Pending",
      active:
        complaint.status === "Resolved" ||
        complaint.status === "Closed"
    },

    {
      title: "Closed",
      date: complaint.updatedAt,
      description:
        complaint.status === "Closed"
          ? "Complaint officially closed."
          : "Pending",
      active:
        complaint.status === "Closed"
    }

  ];

  return (

    <div className="timeline-card">

      <h2>
        Activity Timeline
      </h2>

      <div className="timeline-wrapper">

        {

          timeline.map((item, index) => (

            <div
              className="timeline-item"
              key={index}
            >

              {/* LINE */}

              {
                index !== timeline.length - 1 && (

                  <div className="timeline-line"></div>

                )
              }

              {/* DOT */}

              <div
                className={
                  item.active
                    ? "timeline-dot active"
                    : "timeline-dot"
                }
              >

                ✓

              </div>

              {/* CONTENT */}

              <div className="timeline-content">

                <h4>
                  {item.title}
                </h4>

                <span>

                  {
                    item.date
                      ? new Date(
                          item.date
                        ).toLocaleString()
                      : "-"
                  }

                </span>

                <p>
                  {item.description}
                </p>

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

};

export default ComplaintTimeline;