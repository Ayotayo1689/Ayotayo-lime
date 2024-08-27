import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./barchart.css";

const data = [
  { name: "Jan", License: 4000, Electricity: 2400 },
  { name: "Feb", License: 3000, Electricity: 1398 },
  { name: "Mar", License: 2000, Electricity: 9800 },
  { name: "Apr", License: 2780, Electricity: 3908 },
  { name: "May", License: 1890, Electricity: 4800 },
  { name: "Jun", License: 2390, Electricity: 3800 },
  { name: "Jul", License: 1500, Electricity: 2800 },
  { name: "Aug", License: 2100, Electricity: 3100 },
  { name: "Sep", License: 2700, Electricity: 4100 },
  { name: "Oct", License: 3200, Electricity: 3600 },
  { name: "Nov", License: 3800, Electricity: 4300 },
  { name: "Dec", License: 4300, Electricity: 3500 },
];

const CustomLegend = (props) => {
  const { payload } = props;
  return (
    <ul
      style={{
        display: "flex",
        listStyleType: "none",
        padding: 0,
        justifyContent: "center",
        marginTop:"20px"
      }}
    >
      {payload.map((entry, index) => (
        <li
          key={`item-${index}`}
          style={{ marginRight: 10, display: "flex", alignItems: "center" }}
        >
          <div
            style={{
              width: 15,
              height: 15,
              backgroundColor: entry.color,
              borderRadius: "50%",
              marginRight: 5,
            }}
          />
          <span>{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

const LimeBarChart = () => {
  return (
    <div
      style={{
        flex: "3",
      }}
      className=" bg-[#ffffff]    rounded-[16px]"
    >
      <div className=" p-3 text-[14px] flex justify-between items-center">
        <h3 className="flex items-center gap-4 ">
          Revenue <span className="text-[20px] font-[500]">N 5,000,000</span>{" "}
        </h3>
        <div className="flex cursor-pointer  p-2 rounded-[10px] bg-[#F1F1F1] text-[#707070] ">
          Select a Period {">"}
        </div>
      </div>
        <ResponsiveContainer  style={{
        fontSize: "14px",
      }} width="100%" height={250}>
          <BarChart   barSize={20} data={data}>
            <CartesianGrid strokeDasharray="0 3 " />
            <XAxis
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ dy: 10, textAnchor: 'middle' }} 
              interval={0} // Display all labels without interval
              minTickGap={20} // Minimum gap between ticks
            />
            <YAxis  tickLine={false}  axisLine={false} />
            <Tooltip />
            <Legend content={<CustomLegend />} />
            <Bar dataKey="License" stackId="a" fill="#0D6CF2" />
            <Bar dataKey="Electricity" stackId="a" fill="#78CFFF" />
         
          </BarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default LimeBarChart;
