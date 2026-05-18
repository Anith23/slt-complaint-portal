import React from "react";

import {

  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip

} from "recharts";

const COLORS = [

  "#2563eb",
  "#16a34a",
  "#f59e0b",
  "#9333ea",
  "#ef4444"

];

const ChartsSection = ({

  categoryStats,
  statusStats,
  monthlyStats

}) => {

  /* CATEGORY DATA */

  const categoryData = categoryStats.map(

    (item) => ({

      name: item._id || "Unknown",

      value: item.count

    })

  );

  /* STATUS DATA */

  const statusData = statusStats.map(

    (item) => ({

      name: item._id || "Unknown",

      value: item.count

    })

  );

  /* MONTHLY DATA */

  const monthlyData = monthlyStats.map(

    (item) => ({

      month: item._id.month,

      total: item.total

    })

  );

  return (

    <div className="charts-grid">

      {/* CATEGORY */}

      <div className="chart-card">

        <h3>

          Complaints by Category

        </h3>

        <ResponsiveContainer
          width="100%"
          height={280}
        >

          <PieChart>

            <Pie
              data={categoryData}
              dataKey="value"
              outerRadius={100}
              label
            >

              {

                categoryData.map(

                  (entry, index) => (

                    <Cell
                      key={index}
                      fill={

                        COLORS[
                          index % COLORS.length
                        ]

                      }
                    />

                  )

                )

              }

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

      {/* MONTHLY */}

      <div className="chart-card">

        <h3>

          Complaints Over Time

        </h3>

        <ResponsiveContainer
          width="100%"
          height={280}
        >

          <LineChart data={monthlyData}>

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="total"
              stroke="#2563eb"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

      {/* STATUS */}

      <div className="chart-card">

        <h3>

          Complaints by Status

        </h3>

        <ResponsiveContainer
          width="100%"
          height={280}
        >

          <PieChart>

            <Pie
              data={statusData}
              dataKey="value"
              outerRadius={100}
              label
            >

              {

                statusData.map(

                  (entry, index) => (

                    <Cell
                      key={index}
                      fill={

                        COLORS[
                          index % COLORS.length
                        ]

                      }
                    />

                  )

                )

              }

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

};

export default ChartsSection;