import React, {

  useEffect,
  useState

} from "react";

import axios from "axios";

import DashboardLayout from
"../../components/layout/DashboardLayout";

import "../../styles/AnalyticsPage.css";

import {

  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar

} from "recharts";

const AnalyticsPage = () => {

  /* =========================================
     STATES
  ========================================= */

  const [analytics, setAnalytics] =
  useState(null);

  const [categoryData, setCategoryData] =
    useState([]);

  /* =========================================
     CHART DATA
  ========================================= */

  const trendData = [

    { month: "Jan", complaints: 4 },
    { month: "Feb", complaints: 7 },
    { month: "Mar", complaints: 10 },
    { month: "Apr", complaints: 6 },
    { month: "May", complaints: 12 }

  ];

  

  const priorityData = [

    { name: "High", value: 6 },
    { name: "Medium", value: 8 },
    { name: "Low", value: 4 }

  ];

  const resolutionData = [

    { month: "Jan", days: 8 },
    { month: "Feb", days: 6 },
    { month: "Mar", days: 5 },
    { month: "Apr", days: 4 },
    { month: "May", days: 3 }

  ];

  const COLORS = [

    "#2563eb",
    "#10b981",
    "#f59e0b",
    "#ef4444"

  ];

  /* =========================================
     FETCH ANALYTICS
  ========================================= */

  useEffect(() => {

    fetchAnalytics();

  }, []);

  const fetchAnalytics = async () => {

  try {

    /* ANALYTICS */

    const response = await axios.get(

      "https://slt-complaint-portal.onrender.com"

    );

    setAnalytics(response.data.data);

    /* CATEGORY DATA */

    const categoryResponse =
      await axios.get(

        "https://slt-complaint-portal.onrender.com"

      );

    const formattedCategoryData =

      categoryResponse.data.data.map(

        (item) => ({

          name: item._id,

          value: item.total

        })

      );

    setCategoryData(
      formattedCategoryData
    );

  }

  catch (error) {

    console.log(error);

  }

};

  return (

    <DashboardLayout

      title="Analytics Dashboard"

      subtitle="Monitor complaint performance and key insights"

    >

      {/* KPI CARDS */}

      <div className="analytics-cards">

        <div className="analytics-card">

          <h3>Total Complaints</h3>

          <h1>
            {analytics?.totalComplaints || 0}
          </h1>

          <p>▲ 12.5% from last month</p>

        </div>

        <div className="analytics-card">

          <h3>Under Investigation</h3>

          <h1>
            {analytics?.underInvestigation || 0}
          </h1>

          <p>▲ 8.3% from last month</p>

        </div>

        <div className="analytics-card">

          <h3>Resolved</h3>

          <h1>
            {analytics?.resolvedComplaints || 0}
          </h1>

          <p>▲ 18.7% from last month</p>

        </div>

        <div className="analytics-card">

          <h3>Closed</h3>

          <h1>
            {analytics?.closedComplaints || 0}
          </h1>

          <p>▲ 15.4% from last month</p>

        </div>

      </div>

      {/* FIRST ROW */}

      <div className="analytics-grid">

        {/* LINE CHART */}

        <div className="chart-card">

          <h2>
            Complaints Trend
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <LineChart data={trendData}>

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line

                type="monotone"

                dataKey="complaints"

                stroke="#2563eb"

                strokeWidth={3}

              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        {/* CATEGORY PIE */}

        <div className="chart-card">

          <h2>
            Complaints by Category
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <PieChart>

              <Pie

                data={categoryData}

                dataKey="value"

                nameKey="name"

                outerRadius={100}

                label={({ name }) => name}

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

      </div>

      {/* SECOND ROW */}

      <div className="analytics-grid">

        {/* PRIORITY PIE */}

        <div className="chart-card">

          <h2>
            Complaints by Priority
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <PieChart>

              <Pie

                data={priorityData}

                dataKey="value"

                nameKey="name"

                outerRadius={100}

                label={({ name }) => name}

              >

                {

                  priorityData.map(

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

        {/* BAR CHART */}

        <div className="chart-card">

          <h2>
            Average Resolution Time
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <BarChart data={resolutionData}>

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Bar

                dataKey="days"

                fill="#2563eb"

                radius={[8, 8, 0, 0]}

              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </DashboardLayout>

  );

};

export default AnalyticsPage;