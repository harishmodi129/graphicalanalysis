// import React, { useState, useEffect } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   AreaChart,
//   Area,
// } from "recharts";
// import axios from "axios";
// import { curveCardinal } from "d3-shape";
// import "./App.css";
// import { data } from "./Data";

// function App() {
//   const [dataCollection, setDataCollection] = useState([]);

//   useEffect(() => {
//     setDataCollection(data); // Using dummy data for demonstration
//   }, []);

//   const processDataForPieChart = (data) => {
//     const categoryCount = data.reduce((acc, item) => {
//       const category = item?.alert?.category;
//       if (acc[category]) {
//         acc[category]++;
//       } else {
//         acc[category] = 1;
//       }
//       return acc;
//     }, {});
//     return Object.keys(categoryCount).map((key) => ({
//       name: key,
//       value: categoryCount[key],
//     }));
//   };

//   const pieChartData = processDataForPieChart(dataCollection);
//   const cardinal = curveCardinal.tension(0.2);

//   return (
//     <>
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <div
//           className="App"
//           style={{
//             width: "100%",
//             height: "100vh",
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-evenly",
//             alignItems: "center",
//           }}
//         >
//           {dataCollection && dataCollection.length > 0 && (
//             <div style={{ width: "45%", height: "80%" }}>
//               <h1 style={{ color: "white" }}>Line Chart Example</h1>
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart
//                   data={dataCollection}
//                   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//                 >
//                   <Line
//                     type="linear"
//                     dataKey="flow_id"
//                     stroke="#8884d8"
//                     strokeWidth={2}
//                   />
//                   <XAxis dataKey="timestamp" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <CartesianGrid stroke="#ccc" />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           )}

//           {pieChartData && pieChartData.length > 0 && (
//             <div style={{ width: "45%", height: "80%" }}>
//               <h2 style={{ color: "white" }}>Pie Chart</h2>
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     dataKey="value"
//                     isAnimationActive={false}
//                     cx="50%"
//                     cy="50%"
//                     outerRadius={150}
//                     data={pieChartData}
//                     fill="#8884d8"
//                     label
//                   />
//                   <Tooltip />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
//           )}
//         </div>

//         <div
//           class="chart-row"
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             background: "black",
//             width: "100%",
//             height: "100vh",
//             marginTop: "1rem",
//           }}
//         >
//           {dataCollection && dataCollection.length > 0 && (
//             <div
//               className="chart-container"
//               style={{ flex: 1, margin: "0 1rem" }}
//             >
//               <h2
//                 className="chart-title"
//                 style={{ color: "white", textAlign: "center" }}
//               >
//                 Area Chart
//               </h2>
//               <ResponsiveContainer width="100%" height={400}>
//                 <AreaChart
//                   data={dataCollection}
//                   margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
//                 >
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="timestamp" />
//                   <YAxis />
//                   <Tooltip />
//                   <Area
//                     type="monotone"
//                     dataKey="src_port"
//                     stroke="#8884d8"
//                     fill="#8884d8"
//                     fillOpacity={0.3}
//                   />
//                   <Area
//                     type="monotone"
//                     dataKey="src_port"
//                     stroke="#82ca9d"
//                     fill="#82ca9d"
//                     fillOpacity={0.3}
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           )}

//           {dataCollection && dataCollection.length > 0 && (
//             <div style={{ flex: 1, margin: "0 1rem" }}>
//               <h2 style={{ color: "white", textAlign: "center" }}>
//                 Tiny Area Chart
//               </h2>
//               <ResponsiveContainer width="100%" height={400}>
//                 <AreaChart
//                   data={dataCollection}
//                   margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
//                 >
//                   <Area
//                     type="monotone"
//                     dataKey="src_port"
//                     stroke="#8884d8"
//                     fill="#8884d8"
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  AreaChart,
  Area,
} from "recharts";
import { curveCardinal } from "d3-shape";
import "./App.css";
import { data } from "./Data";

function App() {
  const [dataCollection, setDataCollection] = useState([]);

  useEffect(() => {
    setDataCollection(data); // Using dummy data for demonstration
  }, []);

  const processDataForPieChart = (data) => {
    const categoryCount = data.reduce((acc, item) => {
      const category = item?.alert?.category;
      if (acc[category]) {
        acc[category]++;
      } else {
        acc[category] = 1;
      }
      return acc;
    }, {});
    return Object.keys(categoryCount).map((key) => ({
      name: key,
      value: categoryCount[key],
    }));
  };

  const pieChartData = processDataForPieChart(dataCollection);
  const cardinal = curveCardinal.tension(0.2);

  return (
    <div className="App">
      <div className="chart-row">
        {dataCollection.length > 0 && (
          <div className="chart-container">
            <h1 className="chart-title">Line Chart Example</h1>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={dataCollection}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <Line
                  type="linear"
                  dataKey="flow_id"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
                <XAxis dataKey="flow_id" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#ccc" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {pieChartData.length > 0 && (
          <div className="chart-container">
            <h2 className="chart-title">Pie Chart</h2>
            <ResponsiveContainer width="100%" height="90%">
              <PieChart>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  data={pieChartData}
                  fill="#8884d8"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      <div className="chart-row">
        {dataCollection.length > 0 && (
          <div className="chart-container">
            <h2 className="chart-title">Area Chart</h2>
            <ResponsiveContainer width="100%" height="90%">
              <AreaChart
                data={dataCollection}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="src_port" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="src_port"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.3}
                />
                <Area
                  type={cardinal}
                  dataKey="src_port"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}

        {dataCollection.length > 0 && (
          <div className="chart-container">
            <h2 className="chart-title">Tiny Area Chart</h2>
            <ResponsiveContainer width="100%" height="90%">
              <AreaChart
                data={dataCollection}
                margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
              >
                <Area
                  type="monotone"
                  dataKey="src_port"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
