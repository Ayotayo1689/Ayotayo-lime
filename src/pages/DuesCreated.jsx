import React, { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Link, useParams } from "react-router-dom";
import user from "../assets/user.svg";
import arrowRight from "../assets/arrowRight.svg";
import arrowLeft from "../assets/arrowLeft.svg";
import CloseIcon from "@mui/icons-material/Close";
import pay from "../assets/pay.svg";
import licenseicon from "../assets/licenseicon.svg";
import house from "../assets/house.svg";


import {
  Box,
  Button,
  Modal,
  TextField,
  //   Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";

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

const sideTableData = [
  {
    date: "08, Mar 24",
    unit: "12345",
    amount: "200",
  },
  {
    date: "12, Apr 24",
    unit: "67890",
    amount: "350",
  },
  {
    date: "05, May 24",
    unit: "54321",
    amount: "150",
  },
  {
    date: "21, June 24",
    unit: "09876",
    amount: "400",
  },
  {
    date: "14, July 24",
    unit: "11223",
    amount: "220",
  },
  {
    date: "07, Aug 24",
    unit: "44556",
    amount: "310",
  },
  {
    date: "30, Sept 24",
    unit: "77889",
    amount: "280",
  },
  {
    date: "21, June 24",
    unit: "09876",
    amount: "400",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   minWidth: 300,
  borderRadius: "10px",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: "25px",
  outline: "none",
  position: "relative",
  maxHeight: "90vh",
  overflow: "auto",
};

const DuesCreated = () => {
  const { id } = useParams();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [loading, setLoading] = useState(false);

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

  return (
    <>
      <div>
        <Link
          to={`/communities/${id}`}
          className="flex items-center gap-2 text-[#747474] cursor-pointer "
        >
          <button
            className={` h-6 w-6 flex justify-center items-center rounded-full border-2 ${"text-gray-400 cursor-pointer"}`}
          >
            <KeyboardArrowLeftIcon />
          </button>
          Go Back
        </Link>

        <div className="bg-white mt-4 p-4 rounded-2xl">
          <div className=" gap-4 p-4 bg-[#f2f2f2] rounded-lg  justify-between">
            <div className="flex justify-between items-center mb-3">
              <span className="font-[500]">Dues</span>
              <Button
                onClick={handleOpen}
                sx={{
                  textTransform: "none",
                  bgcolor: "#0D6CF2",
                }}
                variant="contained"
              >
                + Create New Due
              </Button>
            </div>

            <div className="flex gap-4">
              <div
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
                }}
                className="bg-[#fff] p-3 flex-1  rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <img src={pay} alt="" />
                  <div className="flex flex-col flex-1">
                    <span className="text-[14px]">Dues Created</span>
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
                  <img src={licenseicon} alt="" />
                  <div className="flex flex-col flex-1">
                    <span className="text-[14px]">Active Dues</span>
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
                  <img src={house} alt="" />
                  <div className="flex flex-col flex-1">
                    <span className="text-[14px]">Paused Deus</span>
                    <span className="text-[25px] font-semibold ">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-[400px] mt-4 flex gap-4">
            <div
              className=""
              style={{
                flex: "1.8",
              }}
            >
              <div className="rounded-xl overflow-auto mt-4  border">
                <table className="min-w-full bg-white   ">
                  <thead>
                    <tr className="bg-[#eef3ff]">
                      <th className="px-4 text-left font-[500] text-[#5E5E61] text-[#16px] py-2">
                        Title
                      </th>
                      <th className="px-4 text-left font-[500] text-[#5E5E61] text-[#16px] py-2">
                        Occurence
                      </th>

                      <th className="px-4 text-center font-[500] text-[#5E5E61] text-[#16px] py-2">
                        Due Date
                      </th>
                      <th className="px-4 text-center font-[500] text-[#5E5E61] text-[#16px] py-2">
                        Amount (N)
                      </th>
                      <th className="px-4 text-center font-[500] text-[#5E5E61] text-[#16px] py-2">
                        Recipient
                      </th>
                      <th className="px-4 text-center font-[500] text-[#5E5E61] text-[#16px] py-2"></th>
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
                        <td className="px-4 py-2  text-center  text-[#5E5E61] text-[16px] font-[350]">
                          {item.licenseUnits}
                        </td>
                        <td className="px-4 py-2  text-center  font-[400] text-[#007929] text-[16px]">
                          Suspended
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
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: "450px" }}>

        <CloseIcon
              onClick={handleClose}
              sx={{
                padding: "5px",
                backgroundColor: "#e9e8e8",
                borderRadius: "50%",
                position: "absolute",
                right: "20px",
                top: "20px",
                cursor: "pointer",
              }}
            />
          {/* <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-md"> */}
          <h2 className="text-xl font-semibold mb-4">Create Due</h2>
          <form className="  ">
            <div className="flex mb-4 gap-4">
              <div className="flex-1">
                <InputLabel
                sx={{
                    fontSize:"13px",
                    marginBottom:"5px"
                }} >Due Title</InputLabel>
                <TextField
                  size="small"
                  sx={{
                    bgcolor: "#edfaff",
                    border: "1px solid #bfecfe",
                    borderRadius: "8px",
                    fontSize:"10px"
                  }}
                  fullWidth
                  //   label="Due Title"
                  variant="outlined"
                  required
                />
              </div>
              <div className="flex-1">
                <InputLabel
                sx={{
                    fontSize:"13px",
                    marginBottom:"5px"
                }} >Amount (N)</InputLabel>
                <TextField
                  size="small"
                  sx={{
                    bgcolor: "#edfaff",
                    border: "1px solid #bfecfe",
                    borderRadius: "8px",
                    fontSize:"10px"
                  }}
                  fullWidth
                  //   label="Amount (N)"
                  variant="outlined"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <InputLabel
              sx={{
                fontSize:"13px",
                marginBottom:"5px"
              }}  >Description</InputLabel>
              <TextField
                size="small"
                sx={{
                  bgcolor: "#edfaff",
                  border: "1px solid #bfecfe",
                  borderRadius: "8px",
                  marginBottom:"16px"
                }}
                fullWidth
                // label="Description"
                variant="outlined"
                required
                multiline
                rows={2}
              />
              <div className="flex gap-4 items-end justify-end ">
                <div className="   flex-1">
                  <InputLabel
                  sx={{
                    fontSize:"13px",
                    marginBottom:"5px"
                  }} >Select Wallet</InputLabel>
                  <FormControl fullWidth>
                    {/* <InputLabel>Select Wallet</InputLabel> */}
                    <Select
                      sx={{
                        bgcolor: "#edfaff",
                        border: "1px solid #bfecfe",
                        borderRadius: "8px",
                      }}
                      size="small"
                      required
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Wallet 1</MenuItem>
                      <MenuItem value={20}>Wallet 2</MenuItem>
                      <MenuItem value={30}>Wallet 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className=" flex flex-col flex-1">
                  <label  style={{
                fontSize:"13px",
                marginBottom:"5px"
            }} htmlFor="">Select Due Date</label>
                  <input
                    type="date"
                    placeholder="date"
                    className="border rounded-[8px] px-2 bg-[#edfaff] border-[#dbdbdb] h-[40px]  "
                  />
                </div>
              </div>
            </div>

            {/* <div className="m.b-4">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Set Due Date"
                    renderInput={(params) => (
                      <TextField
                      size="small" {...params} fullWidth required />
                    )}
                  />
                </LocalizationProvider>
              </div> */}
            <div className="mb-4">
              <label  style={{
                fontSize:"13px",
                marginBottom:"5px"
            }} className="">Occurrence</label>
              <div className="my-2 flex gap-2">
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    borderRadius: "10px",
                    fontSize: "10px",
                  }}
                >
                  No Occurrence
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    borderRadius: "10px",
                    fontSize: "10px",
                  }}
                >
                  Monthly
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    borderRadius: "10px",
                    fontSize: "10px",
                  }}
                >
                  Quarterly
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    borderRadius: "10px",
                    fontSize: "10px",
                  }}
                >
                  Yearly
                </Button>
              </div>
            </div>
            <div className="mb-4">
              <label style={{
                fontSize:"13px",
                marginBottom:"5px"
            }} className="">Select Due Payee</label>
              <div className="my-2 flex gap-2">
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    borderRadius: "10px",
                    fontSize: "10px",
                  }}
                >
                  All
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    borderRadius: "10px",
                    fontSize: "10px",
                  }}
                >
                  Landlord
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    borderRadius: "10px",
                    fontSize: "10px",
                  }}
                >
                  Resident
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    borderRadius: "10px",
                    fontSize: "10px",
                  }}
                >
                  Tenant
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    borderRadius: "10px",
                    fontSize: "10px",
                  }}
                >
                  Groups
                </Button>
              </div>
            </div>
            <div className="mb-[40px]">
            <InputLabel
            sx={{
                fontSize:"13px",
                marginBottom:"5px"
            }} >Select Group</InputLabel>
              <FormControl fullWidth>
             
                <Select
                 sx={{
                   bgcolor: "#edfaff",
                   border: "1px solid #bfecfe",
                   borderRadius: "8px",
                   maxWidth:"50%"
                 }} size="small" required>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Group 1</MenuItem>
                  <MenuItem value={20}>Group 2</MenuItem>
                  <MenuItem value={30}>Group 3</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Button sx={{
                fontSize:"16px",
                marginBottom:"5px",
                textTransform:"none"
            }} type="submit" variant="contained" color="primary" fullWidth>
              Continue
            </Button>
          </form>
          {/* </div> */}
        </Box>
      </Modal>
    </>
  );
};

export default DuesCreated;
