import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Pagination,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import lisc from "../assets/lisc.svg";
import liscHouse from "../assets/liscHouse.svg";
import liscPay from "../assets/liscPay.svg";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import liscUser from "../assets/liscUser.svg";
import { Link } from "react-router-dom";



const dataTwo = [
    {
      communityName: "Community Estate 15",
      owner: " 15",
      address: "Address 15",
      licenseUnits: 15234,
    },
    {
      communityName: "Community Estate 16",
      owner: " 16",
      address: "Address 16",
      licenseUnits: 16234,
    },
    {
      communityName: "Community Estate 17",
      owner: " 17",
      address: "Address 17",
      licenseUnits: 17234,
    },
    {
      communityName: "Community Estate 18",
      owner: " 18",
      address: "Address 18",
      licenseUnits: 18234,
    },
    {
      communityName: "Community Estate 19",
      owner: " 19",
      address: "Address 19",
      licenseUnits: 19234,
    },
    {
      communityName: "Community Estate 20",
      owner: " 20",
      address: "Address 20",
      licenseUnits: 20234,
    },
    {
      communityName: "Community Estate 21",
      owner: " 21",
      address: "Address 21",
      licenseUnits: 21234,
    },
    {
      communityName: "Community Estate 22",
      owner: " 22",
      address: "Address 22",
      licenseUnits: 22234,
    },
    {
      communityName: "Community Estate 23",
      owner: " 23",
      address: "Address 23",
      licenseUnits: 23234,
    },
    {
      communityName: "Community Estate 24",
      owner: " 24",
      address: "Address 24",
      licenseUnits: 24234,
    },
  ];


const data = {
  estateName: "Elizabeth Amakiri",
  address: "221 - 231 Hahn Cape, Lekki Ajah, Nigeria",
  email: "yemi.fig@gmail.com",
  phoneNumber: "+23456554453",
  stats: {
    licensePurchased: 45678,
    numberOfResidents: 345,
    residentLinked: 345,
    unlinked: 0,
  },
  residents: [
    {
      year: "2021",
      months: [
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        true,
        false,
        true,
        false,
        true,
      ],
    },
    {
      year: "2022",
      months: [
        true,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        true,
        false,
      ],
    },
    {
      year: "2023",
      months: [
        false,
        true,
        false,
        true,
        false,
        true,
        true,
        false,
        true,
        false,
        true,
        false,
      ],
    },
    {
      year: "2024",
      months: [
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
      ],
    },
    {
      year: "2025",
      months: [
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        true,
        false,
        true,
      ],
    },
    {
      year: "2026",
      months: [
        false,
        false,
        true,
        false,
        true,
        true,
        false,
        true,
        false,
        true,
        true,
        false,
      ],
    },
  ],
};

const Userliscence = () => {
  const [age, setAge] = useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="w-[100%]">
      <Link
        to={"/licenses"}
        className="flex items-center gap-2 text-[#747474] cursor-pointer "
      >
        <button
          className={` h-6 w-6 flex justify-center items-center rounded-full border-2 ${"text-gray-400 cursor-pointer"}`}
        >
          <KeyboardArrowLeftIcon />
        </button>
        Go Back
      </Link>
      {/* Estate Information */}

      <div className="bg-[#fff] min-h-[150px] my-4 rounded-xl p-4">
        <div className="flex justify-between ">
          <div className="flex items-center  gap-4">
            <span className="font-[500]"> {data.estateName}</span>
            <span className="bg-[#c3daff] px-3 py-1 rounded-xl text-[#0D6CF2]">
              Deactivate User
            </span>
          </div>
          <span
            //   onClick={handleOpen}
            className="flex items-center gap-4  cursor-pointer"
          >
            <span>Status</span>
            <span className="w-2 h-2 rounded-full bg-[#067c3b]"></span>
            <span className="bg-[#d2fcdc] px-3 py-1 rounded-xl text-[#067c3b]">
              Active
            </span>
          </span>
        </div>
        <div className="flex gap-5 mt-6 text-[#646464] text-[14px]">
          <div className=" flex flex-col gap-1  ">
            <span>Address:</span>
            <span>Email:</span>
            <span>Phone No:</span>
          </div>
          <div className=" min-w-[150px]">
            <div className=" flex flex-col gap-1  ">
              <span>{data.address}</span>
              <span>{data.email}</span>
              <span>{data.phoneNumber}</span>
            </div>
          </div>
        </div>
      </div>

  <div className="flex gap-4">
    <div style={{
        flex:"2"
    }} className="">
            <div className="flex justify-between items-center mb-4 mx-2">
        <p className="font-[500] text-[20px]">History Checks</p>
      </div>
      <div className="overflow-auto border rounded-lg relative mt-4 min-h-[400px] ">
        <TableContainer
          sx={{
            position: "absolute",
            overflow: "auto",
            width: "100%",
            // border:"1px solid #bfbfbf"
            boxShadow: "rgba(0, 0, 0, 0.1) -4px 9px 25px -6px",
            minHeight: "100%",
          }}
          component={Paper}
        >
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow
                sx={{
                  bgcolor: "#EFF5FE",
                }}
              >
                <TableCell
                  sx={{
                    minWidth: "60px",
                  }}
                ></TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  Jan
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  Feb
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  Mar
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  Apr
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  May
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  Jun
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  Jul
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  Aug
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  Sep
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  Oct
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  Nov
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                  }}
                >
                  Dec
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.residents.map((resident, index) => (
                <TableRow key={index}>
                  <TableCell
                    sx={{
                      minWidth: "60px",

                      p: "5px 20px",
                      m: "0",
                    }}
                  >
                    {resident.year}
                  </TableCell>
                  {resident.months.map((checked, monthIndex) => (
                    <TableCell
                      sx={{
                        p: "auto",
                        // display:"flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                      key={monthIndex}
                    >
                      {/* <Checkbox sx={{
                   
                   m:"5px 10px",
                   width:"35px",
                     height:"35px"
                  }} checked={checked} /> */}

                      <Checkbox
                        checked={checked}
                        //   onChange={onChange}
                        sx={{
                          color: "#0D6CF2", // Default color when unchecked
                          "&.Mui-checked": {
                            color: "#0D6CF2", // Color when checked
                          },
                          "& .MuiSvgIcon-root": {
                            borderRadius: "10px", // Adjust border radius
                            width: "17px",
                            height: "17px",
                          },
                          "& .MuiCheckbox-root": {
                            borderWidth: checked ? "1px" : "1px", // Adjust border width when unchecked
                            //   borderColor: checked ? 'transparent' : '#f00', // Border color when unchecked
                          },
                        }}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <Typography variant="body2">Page 1 of 12</Typography>
        <Pagination count={12} color="primary" />
      </div>
    </div>
    <div style={{
        flex:"1"
    }} className="border rounded-lg border-[#D0D0D0]">
         <div className="min-h-[300px] bg-white rounded-xl">
                <div className=" flex justify-between px-2 items-center">
                  <div className="">Recent Transactions</div>
                  {/* <img src={download} alt="" className="cursor-pointer" /> */}
                </div>
                <table className="min-w-full bg-white   ">
                  <thead>
                    <tr className="bg-[#eef3ff]">
                      <th className="px-2 text-left  font-[500] text-[#5E5E61] text-[14px] py-2">
                      Date
                      </th>
                      <th className="px-2 text-center  font-[500] text-[#5E5E61] text-[14px] py-2">
                      Unit
                      </th>

                      <th className="px-2 text-center font-[500] text-[#5E5E61] text-[14px] py-2">
                      Amount (N)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataTwo.map((item, index) => (
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
                </table>
               
              </div>
    </div>
  </div>
    </div>
  );
};

export default Userliscence;
