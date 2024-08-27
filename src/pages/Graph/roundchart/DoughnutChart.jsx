import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell, Label } from "recharts";
import "./roundchart.css";



const DoughnutChart = ({License, Charges, Electricity,  loading}) => {
 

  const data = [
    { name: "License", value: License, fill: "#F6D45B" },
    { name: "Charges", value: Charges, fill: "#1CCAB8" },
    { name: "Electricity", value: Electricity, fill: "#C2A8F8" },
];


const totalValue = data.reduce((acc, cur) => acc + cur.value, 0);
  return (
    <div  className="">
    
      <div className="doughnut-chart-body w-[100%] ">
        <ResponsiveContainer >
       {
        loading ? <div className="border h-[100%] flex justify-center items-center">Loading...</div> :   
          !License || !Charges || !Electricity ? <div className="border h-[100%] flex justify-center items-center">No Data</div> :  <PieChart>
          <Pie
            dataKey="value"
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            label
          >
           
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          {/* <Tooltip /> */}
          {/* <Legend /> */}
        </PieChart>
         }
       
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DoughnutChart;
