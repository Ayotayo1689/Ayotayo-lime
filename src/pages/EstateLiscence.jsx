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

const data = {
  estateName: "Urban Heights Estate",
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
      name: "Elizabeth Amakiri",
      email: "Elizabethmakiri@gmail.com",
      phoneNumber: "09134524323",
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
      name: "Margaret Opuogbo",
      email: "MargaretO@gmail.com",
      phoneNumber: "09134554398",
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
      name: "Grace Ezemma",
      email: "GraceZemma@gmail.com",
      phoneNumber: "08134754355",
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
      name: "Lydia Omisore",
      email: "Lydiamisore@yahoo.com",
      phoneNumber: "07034954348",
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
      name: "Elizabeth Bashir",
      email: "Elizabethbashir@mailcu.uk",
      phoneNumber: "08034054329",
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
      name: "Martha Agu",
      email: "Marthagu@yahoo.com",
      phoneNumber: "09134514322",
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

const EstateLiscenceDashboard = () => {
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
          <span className="font-[500]"> {data.estateName}</span>
          <span
            //   onClick={handleOpen}
            className="flex items-center gap-4  cursor-pointer"
          >
            <span>License Type</span>
            <span className="w-2 h-2 rounded-full bg-[#0d65f2]"></span>
            <span className="bg-[#c3daff] px-3 py-1 rounded-xl text-[#0D6CF2]">
              Community Based
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

      {/* Statistics Cards */}

      <div className="flex gap-4   justify-between">
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
          }}
          className="bg-[#fff] p-3 flex-1  rounded-lg"
        >
          <div className="flex items-center gap-2">
            <img src={lisc} alt="" />
            <div className="flex flex-col">
              <span className="text-[13px]"> License Purchased</span>
              <span className="text-[25px] font-semibold ">
                {data.stats.licensePurchased}
              </span>
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
            <img src={liscHouse} alt="" />
            <div className="flex flex-col">
              <span className="text-[13px]"> Numbers of Resident</span>
              <span className="text-[25px] font-semibold ">
                {data.stats.numberOfResidents}
              </span>
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
            <img src={liscPay} alt="" />
            <div className="flex flex-col">
              <span className="text-[13px]">Resident Linked</span>
              <span className="text-[25px] font-semibold ">
                {data.stats.residentLinked}
              </span>
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
            <img src={liscUser} alt="" />
            <div className="flex flex-col">
              <span className="text-[13px]">Unlinked</span>
              <span className="text-[25px] font-semibold ">
                {data.stats.unlinked}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Residents Table */}
      <div className="flex justify-between items-center my-4 mx-2">
        <p className="font-[500] text-[20px]">Residents</p>
        <FormControl
              sx={{
                minWidth: 80,
                backgroundColor: "#b1d5ff",
                borderRadius: "5px",
                color:"#0b6bd8"
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
                <MenuItem value={10}>2022</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
      </div>
      <div className="overflow-auto border rounded-lg relative mt-4 min-h-[400px] ">
        <TableContainer
          sx={{
            position:"absolute",
            overflow: "auto",
            width: "100%",
            // border:"1px solid #bfbfbf"
            boxShadow: "rgba(0, 0, 0, 0.1) -4px 9px 25px -6px",
            minHeight:"100%"
          }}
          component={Paper}
        >
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">

            <TableHead>
              <TableRow sx={{
                bgcolor:"#EFF5FE"
              }}>
                <TableCell
                  sx={{
                    minWidth: "130px",
                  }}
                >
                  Full Name
                </TableCell>
                <TableCell
                  sx={{
                    minWidth: "130px",
                  }}
                >
                  Email
                </TableCell>
                <TableCell
                  sx={{
                    minWidth: "130px",
                  }}
                >
                  Phone Number
                </TableCell>
                <TableCell
               sx={{
                textAlign:"center"
               }}
                >
                  Jan
                </TableCell>
                <TableCell
               sx={{
                textAlign:"center"
               }}
                >
                  Feb
                </TableCell>
                <TableCell
               sx={{
                textAlign:"center"
               }}
                >
                  Mar
                </TableCell>
                <TableCell
               sx={{
                textAlign:"center"
               }}
                >
                  Apr
                </TableCell>
                <TableCell
               sx={{
                textAlign:"center"
               }}
                >
                  May
                </TableCell>
                <TableCell
               sx={{
                textAlign:"center"
               }}
                >
                  Jun
                </TableCell>
                <TableCell
               sx={{
                textAlign:"center"
               }}
                >
                  Jul
                </TableCell>
                <TableCell
               sx={{
                textAlign:"center"
               }}
                >
                  Aug
                </TableCell>
                <TableCell
               sx={{
                textAlign:"center"
               }}
                >
                  Sep
                </TableCell>
                <TableCell
               sx={{
                textAlign:"center"
               }}
                >
                  Oct
                </TableCell>
                <TableCell
               sx={{
                textAlign:"center"
               }}
                >
                  Nov
                </TableCell>
                <TableCell
               sx={{
                textAlign:"center"
               }}
                >
                  Dec
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {data.residents.map((resident, index) => (
              <TableRow key={index}>
                <TableCell sx={{
                    minWidth:"200px",
                  
                    p:"5px 20px"
                }}>{resident.name}</TableCell>
                <TableCell sx={{
                    minWidth:"200px",
                  
                    p:"5px 20px"
                }}>{resident.email}</TableCell>
                <TableCell sx={{
                    minWidth:"200px",
                  
                    p:"5px 20px",
                    m:"0"
                }}>{resident.phoneNumber}</TableCell>
                {resident.months.map((checked, monthIndex) => (
                  <TableCell sx={{
                  
                    p:"auto",
                    // display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    flexDirection:"row"
                  }} key={monthIndex}>
                    {/* <Checkbox sx={{
                   
                   m:"5px 10px",
                   width:"35px",
                     height:"35px"
                  }} checked={checked} /> */}

<Checkbox
      checked={checked}
    //   onChange={onChange}
      sx={{
        color: '#0D6CF2', // Default color when unchecked
        '&.Mui-checked': {
          color: '#0D6CF2', // Color when checked
        },
        '& .MuiSvgIcon-root': {
          borderRadius: '10px', // Adjust border radius
          width:"17px",
          height:"17px"
        },
        '& .MuiCheckbox-root': {
          borderWidth: checked ? '1px' : '1px', // Adjust border width when unchecked
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
  );
};

export default EstateLiscenceDashboard;
