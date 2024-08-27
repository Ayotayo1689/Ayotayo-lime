import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
    { name: "Jan", License: 2400 },
    { name: "Feb", License: 1398 },
    { name: "Mar", License: 9800 },
    { name: "Apr", License: 3908 },
    { name: "May", License: 4800 },
    { name: "Jun", License: 3800 },
    { name: "Jul", License: 2800 },
    { name: "Aug", License: 3100 },
    { name: "Sep", License: 4100 },
    { name: "Oct", License: 3600 },
    { name: "Nov", License: 4300 },
    { name: "Dec", License: 3500 },
  ];

export const LineGraph = () => {
  return (
    <ResponsiveContainer
      style={{
        fontSize: "12px",
        // border:"2px solid red",
      }}
      width="100%"
      height={220}
    >
      <AreaChart
       
        height={260}
        data={data}
        margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
      >
         <CartesianGrid strokeDasharray="3 3" vertical={false} /> 
        <XAxis 
        dataKey="name" 
        axisLine={false} 
        tickLine={false} 
        tick={{ dy: 10, textAnchor: 'middle' }} 
        interval={0} // Display all labels without interval
        minTickGap={20} // Minimum gap between ticks
       />
        <YAxis tickLine={false}  axisLine={false} />
        <Tooltip />
        <Area type="monotone" dataKey="License" stroke="#B4D1FB" fill="none"  strokeWidth={3} />
      </AreaChart>
    </ResponsiveContainer>
  );
};
