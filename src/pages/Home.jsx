import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import user from "../assets/user.svg";
import totalcommunities from "../assets/totalcommunities.svg";
import house from "../assets/house.svg";
import security from "../assets/security.svg";
import LimeBarChart from "./Graph/Bar";
import { LineGraph } from "./Graph/Linegraph";
import HomeLoading from "./HomeLoading";

const Home = () => {
  const [age, setAge] = useState(10);



  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const data = [
    { community: "Bamakoo Estate", amount: "347K" },
    { community: "Simbiatu Lake view E...", amount: "247K" },
    { community: "Pouros Spur Estate", amount: "123K" },
    { community: "Williamson Plains", amount: "90K" },
    { community: "Rosina Greens Estate", amount: "55K" },
    { community: "Vada Corners Estate", amount: "34K" },
    { community: "Baumbach Phase 1", amount: "20K" },
    { community: "Baumbach Phase 1", amount: "20K" },
    { community: "Baumbach Phase 1", amount: "20K" },
  ];

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    },1500);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>{
        loading ?  <HomeLoading/> :
   
   
    <div>
      <div className="flex gap-4 flex-wrap justify-between">
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
          }}
          className="bg-[#fff] p-3 flex-1  rounded-lg min-w-[200px] min-h-[130px]"
        >
          <div className="flex items-center gap-2">
            <img src={user} alt="" />
            <div className="flex flex-col">
              <span className="text-[14px]">My Limestone users</span>
              <span className="text-[25px] font-semibold ">0</span>
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
          }}
          className="bg-[#fff] p-3 flex-1  rounded-lg min-w-[200px] min-h-[130px]"
        >
          <div className="flex items-center gap-2">
            <img src={totalcommunities} alt="" />
            <div className="flex flex-col">
              <span className="text-[14px]">Total Communities</span>
              <span className="text-[25px] font-semibold ">0</span>
            </div>
          </div>
          <div className="flex flex-col justify-end mt-0 items-end">
            <div className="flex flex-col  mt-0">
              <div className="text-[12px] font-semibold text-[#37AD4B]">
                0 Active
              </div>
              <div className="text-[12px] font-semibold text-[#E36464]">
                0 Inctive
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
          }}
          className="bg-[#fff] p-3 flex-1  rounded-lg min-w-[200px] min-h-[130px]"
        >
          <div className="flex items-center gap-2">
            <img src={house} alt="" />
            <div className="flex flex-col">
              <span className="text-[14px]">Total License Sold</span>
              <span className="text-[25px] font-semibold ">0</span>
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
          }}
          className="bg-[#fff] p-3 flex-1  rounded-lg min-w-[200px] min-h-[130px]"
        >
          <div className="flex items-center gap-2">
            <img src={security} alt="" />
            <div className="flex flex-col">
              <span className="text-[14px]">Security App users</span>
              <span className="text-[25px] font-semibold ">0</span>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-4 flex flex-wrap items-center gap-4">
        <div
          style={{
            flex: "2",
          }}
          className="bg-[#fff] rounded-lg min-h-[300px] min-w-[320px] "
        >
          <LimeBarChart />
        </div>

        <div
          style={{
            flex: "1",
          }}
          className="bg-[#fff]  rounded-lg min-w-[250px] "
        >
          <div className=" overflow-hidden  rounded-lg  ">
            <table className="min-w-full  divide-y divide-gray-200">
              <thead className="bg-gray-50 sticky top-0 z-10">
                <tr>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-[14px] font-medium text-gray-500"
                  >
                    Community Revenue
                  </th>
                  <th
                    scope="col"
                    className="px-1 py-3 text-end text-[14px] font-medium text-gray-500"
                  >
                    Amount (N)
                  </th>
                </tr>
              </thead>
            </table>
            <div className="max-h-[270px] overflow-auto ">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white">
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td className="px-3 py-2 whitespace-nowrap text-[14px] flex items-center gap-2 text-[#525151]">
                        <div className="w-[10px] h-[10px] rounded-full bg-[#b9b9b9]"></div>
                        {item.community}
                      </td>
                      <td className="px-3 py-2 text-end text-[14px] whitespace-nowrap text-sm text-[#525151]">
                        {item.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4 justify-between">
        <div className="min-h-[300px] min-w-[350px]  flex-1 rounded-lg bg-[#fff] ">
          <div className="flex  p-4 justify-between items-center mb-3">
            <span>User Metric</span>
            <FormControl
              sx={{
                minWidth: 80,
                backgroundColor: "#e4e4e4",
                borderRadius: "5px",
              }}
              size="small"
            >
              <Select
                sx={{
                  padding: "0",
                  height: "20px",
                  fontSize: "12px",
                }}
                size="small"
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                // label="Super App"
                onChange={handleChange}
              >
                <MenuItem value={10}>Super App</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>

          <LineGraph />
        </div>
        <div className="min-h-[300px]  min-w-[250px] p-4 flex-1 rounded-lg bg-[#fff] ">
          hi
        </div>
        <div className="min-h-[300px]  min-w-[300px] flex-1 rounded-lg bg-[#fff] ">
          <div className="border-b p-2">Transactions Summary</div>
          <div className="flex flex-col mt-4 mx-3">
            N 456,990,3343,444.895
            <div className="flex w-[100%] mt-2">
              <div className="h-[10px] border border-[#fff] w-[60%] bg-[#E1A1FF] "></div>
              <div className="h-[10px] border border-[#fff]  w-[40%] bg-[#FDC965]"></div>
            </div>
          </div>
          <div className="flex m-3 items-start gap-3">
            <div className="bg-[#E1A1FF] h-3 w-3 rounded-full mt-2 "></div>
            <div className="flex flex-col gap-2">
              <span className="text-[14px] text-[#848484]">
                Total Dues Paid via limestone{" "}
              </span>
              <span>N 556,990.895 </span>
            </div>
          </div>
          <div className="flex m-3 items-start gap-3">
            <div className="bg-[#FDC965] h-3 w-3 rounded-full mt-2 "></div>
            <div className="flex flex-col gap-2">
              <span className="text-[14px] text-[#848484]">
                Total Electricity Paid via limestone{" "}
              </span>
              <span>N 556,990.895 </span>
            </div>
          </div>
        </div>
      </div>
    </div>

}
    </>
  );
};

export default Home;
