import React, { useEffect, useState } from "react";
import user from "../assets/user.svg";
import totalcommunities from "../assets/totalcommunities.svg";
import house from "../assets/house.svg";
import { LineGraph } from "./Graph/Linegraph";
import { FormControl, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DoughnutChart from "./Graph/roundchart/DoughnutChart";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";
import download from "../assets/download.svg";
import FinanceLoading from "./FinanceLoading";

const Finance = () => {
  const [age, setAge] = useState(10);
  const [loading, setLoading] = useState(true);
  const [Charges, setCharges] = useState(0);
  const [License, setLicense] = useState(0);
  const [Electricity, setElectricity] = useState(0);

  const data = [
    {
      communityName: "Community Estate 1",
      owner: "Owner 1",
      address: "Address 1",
      licenseUnits: 12345,
    },
    {
      communityName: "Community Estate 2",
      owner: "Owner 2",
      address: "Address 2",
      licenseUnits: 23456,
    },
    {
      communityName: "Community Estate 3",
      owner: "Owner 3",
      address: "Address 3",
      licenseUnits: 34567,
    },
    {
      communityName: "Community Estate 4",
      owner: "Owner 4",
      address: "Address 4",
      licenseUnits: 45678,
    },
    {
      communityName: "Community Estate 5",
      owner: "Owner 5",
      address: "Address 5",
      licenseUnits: 56789,
    },
    {
      communityName: "Community Estate 6",
      owner: "Owner 6",
      address: "Address 6",
      licenseUnits: 67890,
    },
    {
      communityName: "Community Estate 7",
      owner: "Owner 7",
      address: "Address 7",
      licenseUnits: 78901,
    },
    {
      communityName: "Community Estate 8",
      owner: "Owner 8",
      address: "Address 8",
      licenseUnits: 89012,
    },
    {
      communityName: "Community Estate 9",
      owner: "Owner 9",
      address: "Address 9",
      licenseUnits: 90123,
    },
    {
      communityName: "Community Estate 10",
      owner: "Owner 10",
      address: "Address 10",
      licenseUnits: 10234,
    },
    {
      communityName: "Community Estate 11",
      owner: "Owner 11",
      address: "Address 11",
      licenseUnits: 11234,
    },
    {
      communityName: "Community Estate 12",
      owner: "Owner 12",
      address: "Address 12",
      licenseUnits: 12234,
    },
    {
      communityName: "Community Estate 13",
      owner: "Owner 13",
      address: "Address 13",
      licenseUnits: 13234,
    },
    {
      communityName: "Community Estate 14",
      owner: "Owner 14",
      address: "Address 14",
      licenseUnits: 14234,
    },
    {
      communityName: "Community Estate 15",
      owner: "Owner 15",
      address: "Address 15",
      licenseUnits: 15234,
    },
    {
      communityName: "Community Estate 16",
      owner: "Owner 16",
      address: "Address 16",
      licenseUnits: 16234,
    },
    {
      communityName: "Community Estate 17",
      owner: "Owner 17",
      address: "Address 17",
      licenseUnits: 17234,
    },
    {
      communityName: "Community Estate 18",
      owner: "Owner 18",
      address: "Address 18",
      licenseUnits: 18234,
    },
    {
      communityName: "Community Estate 19",
      owner: "Owner 19",
      address: "Address 19",
      licenseUnits: 19234,
    },
    {
      communityName: "Community Estate 20",
      owner: "Owner 20",
      address: "Address 20",
      licenseUnits: 20234,
    },
    {
      communityName: "Community Estate 21",
      owner: "Owner 21",
      address: "Address 21",
      licenseUnits: 21234,
    },
    {
      communityName: "Community Estate 22",
      owner: "Owner 22",
      address: "Address 22",
      licenseUnits: 22234,
    },
    {
      communityName: "Community Estate 23",
      owner: "Owner 23",
      address: "Address 23",
      licenseUnits: 23234,
    },
    {
      communityName: "Community Estate 24",
      owner: "Owner 24",
      address: "Address 24",
      licenseUnits: 24234,
    },
    {
      communityName: "Community Estate 1",
      owner: "Owner 1",
      address: "Address 1",
      licenseUnits: 12345,
    },
    {
      communityName: "Community Estate 2",
      owner: "Owner 2",
      address: "Address 2",
      licenseUnits: 23456,
    },
    {
      communityName: "Community Estate 3",
      owner: "Owner 3",
      address: "Address 3",
      licenseUnits: 34567,
    },
    {
      communityName: "Community Estate 4",
      owner: "Owner 4",
      address: "Address 4",
      licenseUnits: 45678,
    },
    {
      communityName: "Community Estate 5",
      owner: "Owner 5",
      address: "Address 5",
      licenseUnits: 56789,
    },
    {
      communityName: "Community Estate 6",
      owner: "Owner 6",
      address: "Address 6",
      licenseUnits: 67890,
    },
    {
      communityName: "Community Estate 7",
      owner: "Owner 7",
      address: "Address 7",
      licenseUnits: 78901,
    },
    {
      communityName: "Community Estate 8",
      owner: "Owner 8",
      address: "Address 8",
      licenseUnits: 89012,
    },
    {
      communityName: "Community Estate 9",
      owner: "Owner 9",
      address: "Address 9",
      licenseUnits: 90123,
    },
    {
      communityName: "Community Estate 10",
      owner: "Owner 10",
      address: "Address 10",
      licenseUnits: 10234,
    },
    {
      communityName: "Community Estate 11",
      owner: "Owner 11",
      address: "Address 11",
      licenseUnits: 11234,
    },
    {
      communityName: "Community Estate 12",
      owner: "Owner 12",
      address: "Address 12",
      licenseUnits: 12234,
    },
    {
      communityName: "Community Estate 13",
      owner: "Owner 13",
      address: "Address 13",
      licenseUnits: 13234,
    },
    {
      communityName: "Community Estate 14",
      owner: "Owner 14",
      address: "Address 14",
      licenseUnits: 14234,
    },
    {
      communityName: "Community Estate 15",
      owner: "Owner 15",
      address: "Address 15",
      licenseUnits: 15234,
    },
    {
      communityName: "Community Estate 16",
      owner: "Owner 16",
      address: "Address 16",
      licenseUnits: 16234,
    },
    {
      communityName: "Community Estate 17",
      owner: "Owner 17",
      address: "Address 17",
      licenseUnits: 17234,
    },
    {
      communityName: "Community Estate 18",
      owner: "Owner 18",
      address: "Address 18",
      licenseUnits: 18234,
    },
    {
      communityName: "Community Estate 19",
      owner: "Owner 19",
      address: "Address 19",
      licenseUnits: 19234,
    },
    {
      communityName: "Community Estate 20",
      owner: "Owner 20",
      address: "Address 20",
      licenseUnits: 20234,
    },
    {
      communityName: "Community Estate 21",
      owner: "Owner 21",
      address: "Address 21",
      licenseUnits: 21234,
    },
    {
      communityName: "Community Estate 22",
      owner: "Owner 22",
      address: "Address 22",
      licenseUnits: 22234,
    },
    {
      communityName: "Community Estate 23",
      owner: "Owner 23",
      address: "Address 23",
      licenseUnits: 23234,
    },
    {
      communityName: "Community Estate 24",
      owner: "Owner 24",
      address: "Address 24",
      licenseUnits: 24234,
    },
  ];

  const estates = [
    {
      name: "Urban Heights Estate",
      values: [
        { type: "License", amount: 2612593, color: "#F6D45B" },
        { type: "Electricity", amount: 612593, color: "#C2A8F8" },
        { type: "Charges", amount: 612593, color: "#1CCAB8" },
      ],
    },
    {
      name: "Luxe Condos Estate",
      values: [
        { type: "License", amount: 2612593, color: "#F6D45B" },
        { type: "Electricity", amount: 612593, color: "#C2A8F8" },
        { type: "Charges", amount: 612593, color: "#1CCAB8" },
      ],
    },
    {
      name: "Luxe Condos Estate",
      values: [
        { type: "License", amount: 2612593, color: "#F6D45B" },
        { type: "Electricity", amount: 612593, color: "#C2A8F8" },
        { type: "Charges", amount: 612593, color: "#1CCAB8" },
      ],
    },  
    {
      name: "Luxe Condos Estate",
      values: [
        { type: "License", amount: 2612593, color: "#F6D45B" },
        { type: "Electricity", amount: 612593, color: "#C2A8F8" },
        { type: "Charges", amount: 612593, color: "#1CCAB8" },
      ],
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 5;

    if (totalPages <= maxPageNumbersToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(
        1,
        currentPage - Math.floor(maxPageNumbersToShow / 2)
      );
      let endPage = Math.min(
        totalPages,
        currentPage + Math.floor(maxPageNumbersToShow / 2)
      );

      if (startPage === 1) {
        endPage = maxPageNumbersToShow;
      }

      if (endPage === totalPages) {
        startPage = totalPages - maxPageNumbersToShow + 1;
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (startPage > 1) {
        pageNumbers.unshift(1, "...");
      }

      if (endPage < totalPages) {
        pageNumbers.push("...", totalPages);
      }
    }
    return pageNumbers;
  };

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setCharges(28000); // Example Charges value
      setLicense(9000);
      setElectricity(5000); // Example License value
      setLoading(false);
    }, 1000); // Simulate loading time
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <FinanceLoading />
      ) : (
        <div>
          <div className="flex gap-4  flex-wrap justify-between">
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
              }}
              className="bg-[#fff] p-3 flex-1  rounded-lg min-w-[200px] min-h-[130px]"
            >
              <div className="flex items-center gap-2">
                <img src={user} alt="" />
                <div className="flex flex-col">
                  <span className="text-[13px]">Total Income generated</span>
                  <span className="text-[25px] font-semibold ">0</span>
                </div>
              </div>
            </div>
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
              }}
              className="bg-[#fff] p-3 flex-1  rounded-lg min-w-[200px] min-h-[130px]"
            >
              <div className="flex items-center gap-2">
                <img src={totalcommunities} alt="" />
                <div className="flex flex-col">
                  <span className="text-[13px]"> Income from Licence</span>
                  <span className="text-[25px] font-semibold ">0</span>
                </div>
              </div>
            </div>
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
              }}
              className="bg-[#fff] p-3 flex-1  rounded-lg min-w-[200px] min-h-[130px]"
            >
              <div className="flex items-center gap-2">
                <img src={user} alt="" />
                <div className="flex flex-col">
                  <span className="text-[13px]">Income from Electricity</span>
                  <span className="text-[25px] font-semibold ">0</span>
                </div>
              </div>
            </div>
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
              }}
              className="bg-[#fff] p-3 flex-1  rounded-lg min-w-[200px] min-h-[130px]"
            >
              <div className="flex items-center gap-2">
                <img src={totalcommunities} alt="" />
                <div className="flex flex-col">
                  <span className="text-[13px]">Income from Charges</span>
                  <span className="text-[25px] font-semibold ">0</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-wrap  gap-4 min-h-[300px] mt-4 ">
            <div
              style={{
                flex: "2",
              }}
              className=" min-h-[300px]   flex flex-col gap-4"
            >
              <div className="min-h-[300px] bg-white p-4 rounded-xl">
                <div className="flex justify-between items-center mb-3">
                  <span>Revenue</span>
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
                      <MenuItem value={10}>2021</MenuItem>
                      <MenuItem value={20}>2022</MenuItem>
                      <MenuItem value={30}>2023</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <LineGraph />
              </div>
              <div className="min-h-[300px]  bg-white rounded-xl">
                <div className=" flex justify-between px-2 items-center">
                  <div className="">Recent Transactions</div>
                  <img src={download} alt="" className="cursor-pointer" />
                </div>
                <TableContainer  sx={{ maxHeight: 440, overflow: 'auto', maxWidth:"92vw" }}>
      <Table sx={{ minWidth: 700 }} stickyHeader >
        <TableHead>
          <TableRow>
            <TableCell sx={{ backgroundColor: '#eef3ff', height:"40px", padding:"10px 20px" }}> Full Name</TableCell>
            <TableCell  sx={{ backgroundColor: '#eef3ff', height:"40px", padding:"10px 20px" }} align="center"> House Number</TableCell>
            <TableCell  sx={{ backgroundColor: '#eef3ff', height:"40px", padding:"10px 20px" }} align="center"> Phone Number</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {currentItems.map((row, index) => (
            <TableRow key={index}>
              <TableCell sx={{ height:"40px", padding:"8px 20px" }} component="th" scope="row">
                {row.communityName}
              </TableCell>
              <TableCell sx={{ height:"40px", padding:"8px 20px" }} align="center">{row.owner}</TableCell>
              <TableCell sx={{ height:"40px", padding:"8px 20px" }} align="center">{row.licenseUnits}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                {/* <table className="min-w-full bg-white   ">
                  <thead>
                    <tr className="bg-[#eef3ff]">
                      <th className="px-4 text-left font-[500] text-[#5E5E61] text-[#16px] py-2">
                        Full Name
                      </th>
                      <th className="px-4 text-left font-[500] text-[#5E5E61] text-[#16px] py-2">
                        House Number
                      </th>

                      <th className="px-4 text-center font-[500] text-[#5E5E61] text-[#16px] py-2">
                        Phone Number
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((item, index) => (
                      <tr
                        key={index}
                        className={` cursor-pointer hover:bg-[#f5fcff] ${
                          index % 2 === 0 ? "bg-[#fff]" : "bg-[#f9f9f9]"
                        }`}
                      >
                        <td className="px-4 py-2  text-[#5E5E61] text-[16px] font-[350]">
                          {item.communityName}
                        </td>
                        <td className="px-4 py-2  text-[#5E5E61] text-[16px] font-[350]">
                          {item.owner}
                        </td>

                        <td className="px-4 py-2  text-center  text-[#5E5E61] text-[16px] font-[350]">
                          {item.licenseUnits}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table> */}
                <div className="flex flex-wrap gap-4 justify-between bg-white items-center px-8 py-4">
                  <span>
                    Page {currentPage} of {totalPages}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      className={` h-6 w-6 flex justify-center items-center rounded-full  ${
                        currentPage === 1
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-blue-600"
                      }`}
                      onClick={() =>
                        currentPage > 1 && handlePageChange(currentPage - 1)
                      }
                      disabled={currentPage === 1}
                    >
                      <img src={arrowLeft} alt="" />
                    </button>
                    {getPageNumbers().map((number, index) => (
                      <button
                        key={index}
                        className={`h-6 w-7 flex justify-center items-center rounded-md ${
                          number === currentPage
                            ? "text-blue-600 bg-[#E7F0FE]"
                            : "text-[#BCBCBC]"
                        }`}
                        onClick={() =>
                          typeof number === "number" && handlePageChange(number)
                        }
                        disabled={typeof number !== "number"}
                      >
                        {number}
                      </button>
                    ))}
                    <button
                      className={` h-6 w-6 flex justify-center items-center rounded-full ${
                        currentPage === totalPages
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-blue-600"
                      }`}
                      onClick={() =>
                        currentPage < totalPages &&
                        handlePageChange(currentPage + 1)
                      }
                      disabled={currentPage === totalPages}
                    >
                      <img src={arrowRight} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                flex: "1",
              }}
              className=" min-h-[300px]  m-auto   flex flex-col gap-4 "
            >
              <div className="min-h-[300px] bg-white p-4 rounded-xl">
                <div className="flex justify-between items-center mb-3">
                  <span></span>
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
                      <MenuItem value={10}>march</MenuItem>
                      <MenuItem value={20}>April</MenuItem>
                      <MenuItem value={30}>May</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <DoughnutChart
                  License={License}
                  Charges={Charges}
                  Electricity={Electricity}
                  loading={loading}
                />

                <div className=" mt-3 flex justify-center gap-4 items-center ">
                  <div className="flex items-center justify-center gap-1 text-[12px] text-[#808080] ">
                    <div className="w-2 h-2 rounded-full bg-[#F6D45B]"></div>
                    License
                  </div>
                  <div className="flex items-center justify-center gap-1 text-[12px] text-[#808080] ">
                    <div className="w-2 h-2 rounded-full bg-[#1CCAB8]"></div>
                    Charges
                  </div>
                  <div className="flex items-center justify-center gap-1 text-[12px] text-[#808080] ">
                    <div className="w-2 h-2 rounded-full bg-[#C2A8F8]"></div>
                    Electricity
                  </div>
                </div>
              </div>
              <div className=" font-[500] text-[20px] text-center ">
                Top preforming estate
              </div>
              <div className="min-h-[300px] bg-white rounded-xl p-4">
                <div className=" flex justify-between gap-4 items-center ">
                  <div className="flex items-center justify-center gap-1 text-[11px] text-[#808080] ">
                    <div className="w-2 h-2 rounded-full bg-[#F6D45B]"></div>
                    License
                  </div>
                  <div className="flex items-center justify-center gap-1 text-[11px] text-[#808080] ">
                    <div className="w-2 h-2 rounded-full bg-[#1CCAB8]"></div>
                    Charges
                  </div>
                  <div className="flex items-center justify-center gap-1 text-[11px] text-[#808080] ">
                    <div className="w-2 h-2 rounded-full bg-[#C2A8F8]"></div>
                    Electricity
                  </div>
                  <FormControl
                    sx={{
                      //   minWidth: 80,
                      width: "fit-content",
                      backgroundColor: "#e4e4e4",
                      borderRadius: "5px",
                    }}
                    size="small"
                  >
                    <Select
                      sx={{
                        padding: "0",
                        height: "20px",
                        fontSize: "11px",
                      }}
                      size="small"
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={age}
                      // label="Super App"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>2021</MenuItem>
                      <MenuItem value={20}>April</MenuItem>
                      <MenuItem value={30}>May</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                {estates.map((estate, estateIndex) => (
                  <div key={estateIndex} className="mt-4  justify-between flex">
                    <h3 className="font-[400] text-[13px]">{estate.name}</h3>
                    <div className="  text-[12px]">
                      {estate.values.map((value, valueIndex) => (
                        <div
                          key={valueIndex}
                          className="flex gap-6 items-center"
                        >
                          <span
                            className="inline-block w-2 h-2 rounded-full mr-2"
                            style={{ backgroundColor: value.color }}
                          ></span>
                          <span className="text-gray-700">
                            N {value.amount.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Finance;
