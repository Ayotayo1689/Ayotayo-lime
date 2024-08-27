import React, { useEffect, useState } from "react";
import {
  Button,
  InputAdornment,
  OutlinedInput,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import user from "../assets/user.svg";
import totalcommunities from "../assets/totalcommunities.svg";
import house from "../assets/house.svg";
import security from "../assets/security.svg";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import arrowRight from "../assets/arrowRight.svg";
import arrowLeft from "../assets/arrowLeft.svg";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { position } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetCommunityQuery } from "../api/example";
import CommunitiesLoading from "./CommunitiesLoading";
import Refreshing from "../components/Refreshing";

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

const Communities = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [active, setActive] = useState(1);
  const itemsPerPage = 7;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const loggedUser = useSelector((state) => state);

  console.log(loggedUser);

  const { test, isLoading, isFetching, refetch } = useGetCommunityQuery(
    `/community/all?Search=${""}&PageNumber=1&PageSize=20`
  );

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

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    },1500);

    return () => clearTimeout(timer);
  }, []);

  return (
  <>
  {
    loading ?   <CommunitiesLoading/> :   <div>
    <div className="">
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          textTransform: "none",
          marginBottom: "14px",
        }}
      >
        + Add an estate
      </Button>

      {/* <div className="flex gap-4 flex-wrap  justify-between">
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
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
            boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
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
              <span className="text-[14px]">My Limestone users</span>
              <span className="text-[25px] font-semibold ">0</span>
            </div>
          </div>
        </div>
      </div> */}

        <div className="my-4 flex justify-between flex-wrap gap-4 items-center">
          <OutlinedInput
            placeholder="Search Limestone"
            id="outlined-adornment-amount"
            size="small"
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& .MuiOutlinedInput-input": {
                outline: "none",
              },
              "& .MuiInputAdornment-root": {
                marginRight: 0,
              },
              bgcolor: "#e6e6e6",
              maxWidth:"80vw",
              width: "300px",
            }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />

          <div className=" flex gap-2 text-[14px] ">
            <button className=" px-3 py-1 bg-[#E7F0FE] text-[#084191] rounded-3xl ">
              Registered Estate
            </button>
            <button className=" px-3 py-1 bg-[none] text-[#333333] rounded-3xl ">
              Active Estate
            </button>
            <button className=" px-3 py-1 bg-[none] text-[#333333] rounded-3xl ">
              Deactivated Estate
            </button>
          </div>
        </div>

     

    

      <div className="rounded-xl overflow-auto max-w-[91vw]  border">

            <TableContainer  sx={{ maxHeight: 440, overflow: 'auto'}}>
      <Table sx={{ minWidth: 800 }} stickyHeader >
        <TableHead>
          <TableRow>
            <TableCell sx={{ backgroundColor: '#eef3ff', height:"40px", padding:"10px 20px" }}>Community Name</TableCell>
            <TableCell  sx={{ backgroundColor: '#eef3ff', height:"40px", padding:"10px 20px" }} align="center">Owner/Admin</TableCell>
            <TableCell  sx={{ backgroundColor: '#eef3ff', height:"40px", padding:"10px 20px" }} align="center">Address</TableCell>
            <TableCell  sx={{ backgroundColor: '#eef3ff', height:"40px", padding:"10px 20px" }} align="center">License Units</TableCell>
            <TableCell  sx={{ backgroundColor: '#eef3ff', height:"40px", padding:"10px 20px" }} align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentItems.map((row, index) => (
            <TableRow key={index}>
              <TableCell sx={{ height:"40px", padding:"8px 20px" }} component="th" scope="row">
                {row.communityName}
              </TableCell>
              <TableCell sx={{ height:"40px", padding:"8px 20px" }} align="center">{row.owner}</TableCell>
              <TableCell sx={{ height:"40px", padding:"8px 20px" }} align="center">{row.address}</TableCell>
              <TableCell sx={{ height:"40px", padding:"8px 20px" }} align="center">{row.licenseUnits}</TableCell>
              <TableCell sx={{ height:"40px", padding:"8px 20px" }}>
                  <Link to={`/communities/${index}`}>
                    <Button
                      color="primary"
                      sx={{
                        textTransform: "none",
                        fontWeight: "350",
                      }}
                      size="small"
                    >
                      View
                    </Button>
                  </Link>
                  <Button
                    color="error"
                    sx={{
                      textTransform: "none",
                      fontWeight: "350",
                      marginLeft: "10px",
                    }}
                    size="small"
                  >
                    Deactivate
                  </Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        <div className="flex sm:justify-between justify-center  flex-wrap items-center px-8 py-4">
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex flex-wrap justify-center items-center gap-1">
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
  </div>
  }
  </>
  
  );
};

export default Communities;
