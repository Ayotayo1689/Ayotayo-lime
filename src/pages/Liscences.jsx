// import React from 'react'
import user from "../assets/income.svg";
import React, { useState } from "react";
import totalcommunities from "../assets/total.svg";
import active from "../assets/active.svg";
import { FormControl, MenuItem, Select } from "@mui/material";

import inactive from "../assets/inactive.svg";
import download from "../assets/download.svg";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";

const Liscences = () => {
  const [age, setAge] = useState(10);
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

  const transactions = [
    { name: "Adegboye Kulibali", date: "15rd - March", amount: "N 34534" },
    { name: "Urban Heights Estate", date: "15rd - March", amount: "N 34534" },
    { name: "Adegboye Kulibali", date: "15rd - March", amount: "N 34534" },
    { name: "Elizabeth Abiodun", date: "15rd - March", amount: "N 34534" },
    { name: "Sarah Abubakar", date: "15rd - March", amount: "N 34534" },
    { name: "Elizabeth Ezemma", date: "15rd - March", amount: "N 34534" },
    { name: "Ruth Okafor", date: "15rd - March", amount: "N 34534" },
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

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <div className="flex gap-4   justify-between">
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
          }}
          className="bg-[#fff] p-3 flex-1  rounded-lg"
        >
          <div className="flex items-center gap-2">
            <img src={user} alt="" />
            <div className="flex flex-col">
              <span className="text-[13px]">Income from Licence</span>
              <span className="text-[25px] font-semibold ">0</span>
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
          }}
          className="bg-[#fff] p-3 flex-1  rounded-lg"
        >
          <div className="flex items-center gap-2">
            <img src={totalcommunities} alt="" />
            <div className="flex flex-col">
              <span className="text-[13px]">Total License Sold</span>
              <span className="text-[25px] font-semibold ">0</span>
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
          }}
          className="bg-[#fff] p-3 flex-1  rounded-lg"
        >
          <div className="flex items-center gap-2">
            <img src={active} alt="" />
            <div className="flex flex-col">
              <span className="text-[13px]">Active Licence</span>
              <span className="text-[25px] font-semibold ">0</span>
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
          }}
          className="bg-[#fff] p-3 flex-1  rounded-lg"
        >
          <div className="flex items-center gap-2">
            <img src={inactive} alt="" />
            <div className="flex flex-col">
              <span className="text-[13px]">Inactive License</span>
              <span className="text-[25px] font-semibold ">0</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex  gap-4 mt-4">
        <div className="min-h-[300px] h-[fit-content] flex-1 bg-white rounded-xl">
          <div className=" flex justify-between px-2 items-center">
            <div className="">Communities</div>
            <img src={download} alt="" className="cursor-pointer" />
          </div>
          <table className="min-w-full bg-white   ">
            <thead>
              <tr className="bg-[#eef3ff]">
                <th className="px-4 text-left font-[500] text-[#5E5E61] text-[#16px] py-2">
                  Community Name
                </th>
                <th className="px-4 text-left font-[500] text-[#5E5E61] text-[#16px] py-2">
                  Owner/Admin
                </th>

                <th className="px-4 text-center font-[500] text-[#5E5E61] text-[#16px] py-2">
                  Type
                </th>
                <th className="px-4 text-center font-[500] text-[#5E5E61] text-[#16px] py-2">
                  Active License
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
                  <td className="px-4 py-2  text-center  text-[#5E5E61] text-[16px] font-[350]">
                    {item.licenseUnits}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between bg-white items-center px-8 py-4">
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
                  currentPage < totalPages && handlePageChange(currentPage + 1)
                }
                disabled={currentPage === totalPages}
              >
                <img src={arrowRight} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" font-[500] mb-4 text-[20px]  ">License Dues</div>
          <div className="min-h-[300px] bg-white rounded-xl p-4">
            <div className=" flex justify-between gap-4 items-center ">
              <div className="flex flex-1  px-3 py-1 rounded-xl cursor-pointer bg-[#b9e1ff] items-center justify-center gap-1 text-[10px] text-[#808080] ">
                All
              </div>
              <div className="flex flex-1  px-3 py-1 rounded-xl cursor-pointer bg-[#fff] items-center justify-center gap-1 text-[10px] text-[#808080] ">
                Community
              </div>
              <div className="flex flex-1  px-3 py-1 rounded-xl cursor-pointer bg-[#fff] items-center justify-center gap-1 text-[10px] text-[#808080] ">
                Users
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

            <div className=" font-[500] my-4 text-[20px]  ">N 34534</div>

          <div className="max-h-[300px] overflow-auto">
          {transactions.map((transaction, index) => (
              <div
                key={index}
                className="flex justify-between items-start py-2"
              >
                <div className="flex items-center space-x-2">
                  <p className=" text-[#5E5E61] text-[14px] font-[400]">{transaction.name}</p>
                </div>
                <div className="text-right">
                  <div className="flex gap-2 items-center">
                    <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
                    <p className="text-[#5E5E61] text-[14px] font-[400]">{transaction.date}</p>
                  </div>
                  <p className="font-semibold text-[#5E5E61] text-[14px] ">{transaction.amount}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liscences;
