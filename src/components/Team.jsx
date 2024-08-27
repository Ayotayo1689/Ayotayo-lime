import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import arrowRight from "../assets/arrowRight.svg";
import arrowLeft from "../assets/arrowLeft.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MoreVertIcon from '@mui/icons-material/MoreVert';

import {
  Button,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: "6px",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: "25px",
  outline: "none",
  position: "relative",
};

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

const Team = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

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
      {" "}
      <div>
        <div className="flex justify-end">
          <Button
            onClick={handleOpen}
            variant="contained"
            sx={{
              textTransform: "none",
              marginBottom: "14px",
            }}
          >
            + Add New Team Member
          </Button>
        </div>
        <div className="rounded-xl overflow-auto  border">
          <table className="min-w-full bg-white   ">
            <thead>
              <tr className="bg-[#eef3ff]">
                <th className="px-4 text-left font-[500] text-[#5E5E61] text-[14px] py-2 border-b">
                  Full name
                </th>
                <th className="px-4 text-left font-[500] text-[#5E5E61] text-[14px] py-2 border-b">
                  Email Address
                </th>
                <th className="px-4 text-left font-[500] text-[#5E5E61] text-[14px] py-2 border-b">
                  Phone number
                </th>
                <th className="px-4 text-left font-[500] text-[#5E5E61] text-[14px] py-2 border-b">
                  Role
                </th>
                <th className="px-4 text-left font-[500] text-[#5E5E61] text-[14px] py-2 border-b"></th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr
                  key={index}
                  className={`hover:bg-[#f5fcff] ${
                    index % 2 === 0 ? "bg-[#fff]" : "bg-[#f9f9f9]"
                  }`}
                >
                  <td className="px-4 py-2  text-[#5E5E61] text-[16px] font-[350]">
                    {item.communityName}
                  </td>
                  <td className="px-4 py-2  text-[#5E5E61] text-[16px] font-[350]">
                    {item.owner}
                  </td>
                  <td className="px-4 py-2  text-[#5E5E61] text-[16px] font-[350]">
                    {item.address}
                  </td>
                  <td className="px-4 py-2 text-[#0D6CF2] text-[16px] font-[450]">
                    {item.licenseUnits}
                  </td>
                  <td className="px-4 py-2  text-[#5E5E61] text-[16px] font-[350]">
                    <Button
                    style={{
                        background:"none",
                        color:"#5E5E61",
                        padding:"0",
                        width:"20px"
                    }}
                      id="basic-button"
                      aria-controls={openMenu ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={openMenu ? "true" : undefined}
                      onClick={handleClickMenu}
                    >
                     <MoreVertIcon/>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center px-8 py-4">
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
      </div>
      <Modal
        open={open}
        //  onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Set up an estate
          </Typography>
          <div className=" justify-center mt-[40px] items-center flex flex-col">
            <label className="mb-2" htmlFor="">
              Enter email address
            </label>
            <TextField
              sx={{
                backgroundColor: "#eaf6ff",
                width: "100%",
              }}
              size="small"
              id="outlined-basic"
              placeholder="e.g yemi.fig@gmail.com"
              variant="outlined"
            />
          </div>

          <Button
            disabled
            variant="contained"
            sx={{
              textTransform: "none",
              width: "100%",
              my: "30px",
            }}
          >
            Continue
          </Button>
        </Box>
      </Modal>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleCloseMenu}>Hello</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Ayotayo</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default Team;
