import React, { useState, useRef } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link, useParams } from "react-router-dom";
import user from "../assets/user.svg";
import totalcommunities from "../assets/totalcommunities.svg";
import house from "../assets/house.svg";
import successImg from "../assets/success.svg";
import question from "../assets/question.svg";
import arrowRight from "../assets/arrowRight.svg";
import upload from "../assets/upload.svg";
import arrowLeft from "../assets/arrowLeft.svg";
import fileImg from "../assets/file.svg";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import * as XLSX from "xlsx";
import pay from "../assets/pay.svg";


import {
  IconButton,
  LinearProgress,
  //   UploadFile as UploadFileIcon,
} from "@mui/material";
// import { } from '@mui/icons-material';

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
};

const Liscence = () => {
    const {id} = useParams()
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fileData, setFileData] = useState([]);
  const dropzoneRef = useRef(null);
  const [fileName, setFileName] = useState(""); 
  const fileInputRef = useRef(null); 

  const handleFileUpload = (event) => {
    console.log("hi");
    const selectedFile = event.target.files[0];
    console.log(selectedFile);

    if (selectedFile) {
      setFileName(selectedFile.name);
      setFile(selectedFile);
      setLoading(true);
      simulateUpload(selectedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (dropzoneRef.current) {
      dropzoneRef.current.style.backgroundColor = "#e3f2fd";
    }
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (dropzoneRef.current) {
      dropzoneRef.current.style.backgroundColor = "#fafafa";
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (dropzoneRef.current) {
      dropzoneRef.current.style.backgroundColor = "#fafafa";
    }
    const selectedFile = event.dataTransfer.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name); // Update file name state
      setLoading(true);
      simulateUpload(selectedFile);
    }
  };

  const simulateUpload = (file) => {
    const uploadTime = 3000; // Simulate a 3-second upload time
    const intervalTime = uploadTime / 100;
    let progress = 0;

    const interval = setInterval(() => {
      progress += 1;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setLoading(false);
        readExcelFile(file);
        console.log(file);
      }
    }, intervalTime);
  };

  const readExcelFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      if (json.length > 0) {
        // Extract headers and trim any extra spaces
        const headers = json[0].map((header) => header.trim());

        // Convert rows to objects, trim cell values, and filter out empty rows
        const dataArray = json
          .slice(1)
          .map((row) => {
            const rowObject = {};
            headers.forEach((header, index) => {
              rowObject[header] = (row[index] || "").toString().trim(); // Convert to string and trim
            });
            return rowObject;
          })
          .filter((rowObject) =>
            Object.values(rowObject).some(
              (value) => value !== "" && value != null
            )
          ); // Filter out empty rows
        setFileData(dataArray);
        console.log(dataArray); // Log the array of objects
      }
    };
    reader.readAsArrayBuffer(file);
  };

  //   const handleRemoveFile = () => {
  //     setFile(null);
  //     setFileName(""); // Clear file name state
  //     setFileData([]);
  //     setUploadProgress(0);
  //   };
  //

  const handleRemoveFile = () => {
    setFile(null);
    setFileName("");
    setUploadProgress(0);
    setLoading(false);

    // Reset the file input value
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageFile, setCurrentPageFile] = useState(1);
  const [uploadModal, setUploadModal] = useState("choose");
  const itemsPerPage = 7;
  const [open, setOpen] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [deactivateSuccess, setDeactivateSuccess] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpenOption = () => setOpenOption(true);
  const handleClose = () => {
    setOpen(false);
    setDeactivateSuccess(false);
  };

  const handleCloseOption = () => {
    setOpenOption(false);
    setUploadProgress(0);
    setFile(null);
    setFileData([]);
    setUploadModal("choose");
  };

  const handleOpenDeactivateSuccess = () => {
    setDeactivateSuccess(true);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const totalPagesFile = Math.ceil(fileData.length / 10);

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

  const getPageNumbersFile = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 5;

    if (totalPagesFile <= maxPageNumbersToShow) {
      for (let i = 1; i <= totalPagesFile; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(
        1,
        currentPageFile - Math.floor(maxPageNumbersToShow / 2)
      );
      let endPage = Math.min(
        totalPagesFile,
        currentPageFile + Math.floor(maxPageNumbersToShow / 2)
      );

      if (startPage === 1) {
        endPage = maxPageNumbersToShow;
      }

      if (endPage === totalPagesFile) {
        startPage = totalPagesFile - maxPageNumbersToShow + 1;
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (startPage > 1) {
        pageNumbers.unshift(1, "...");
      }

      if (endPage < totalPagesFile) {
        pageNumbers.push("...", totalPagesFile);
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
            <span className="font-[500]">License</span>
            <Button sx={{
                textTransform:"none",
                bgcolor:"#0D6CF2"
            }} variant="contained">
                + Upload New License Details
            </Button>
        </div>
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
            }}
            className="bg-[#fff] p-3 flex-1  rounded-lg"
          >
            <div className="flex items-center gap-2">
              <img src={pay} alt="" />
              <div className="flex flex-col flex-1">
                <span className="text-[14px]">License Purchased</span>
                <span className="text-[25px] font-semibold ">0</span>
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-[14px]">Active License</span>
                <span className="text-[25px] font-semibold ">0</span>
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
                      Date
                    </th>
                    <th className="px-4 text-left font-[500] text-[#5E5E61] text-[#16px] py-2">
                    Amount
                    </th>

                    <th className="px-4 text-center font-[500] text-[#5E5E61] text-[#16px] py-2">
                    Price (N)
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
              </table>
              <div className="flex justify-between bg-white items-center px-8 py-4">
                <span>
                  Page {currentPageFile} of {totalPages}
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
        {deactivateSuccess ? (
          <Box sx={{ ...style, width: "300px" }}>
            <img src={successImg} alt="" className="m-auto h-[60px] " />
            <div className="text-center  mt-4">
              Estate has been deactivated successfully
            </div>
          </Box>
        ) : (
          <Box sx={{ ...style, width: "300px" }}>
            <img src={question} alt="" className="m-auto" />
            <div className="text-center  mt-6">
              Are you sure you deactivate this estate ?
            </div>
            <div className="flex items-center gap-6 mt-6">
              <Button
                onClick={handleOpenDeactivateSuccess}
                color="error"
                variant="outlined"
                sx={{
                  textTransform: "none",
                  flex: "1",
                }}
              >
                Yes
              </Button>
              <Button
                onClick={handleClose}
                variant="contained"
                sx={{
                  textTransform: "none",
                  flex: "1",
                  bgcolor: "#0D6CF2",
                }}
              >
                No
              </Button>
            </div>
          </Box>
        )}
      </Modal>

      <Modal
        open={openOption}
        onClose={handleCloseOption}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {uploadModal === "choose" ? (
          <Box sx={{ ...style, width: "300px" }}>
            <div className="text-center  ">
              Select the mode you will like to add resident
            </div>
            <div className="flex items-center gap-2 mt-6">
              <Button
                onClick={() => setUploadModal("bulk")}
                variant="outlined"
                sx={{
                  textTransform: "none",
                  px: "0px",
                  flex: "1",
                }}
              >
                Bulk Upload
              </Button>
              <Button
                onClick={() => setUploadModal("manual")}
                variant="contained"
                sx={{
                  textTransform: "none",
                  px: "0px",
                  flex: "1",
                  bgcolor: "#0D6CF2",
                }}
              >
                Manual Upload
              </Button>
            </div>
          </Box>
        ) : uploadModal === "manual" ? (
          <Box sx={{ ...style, maxWidth: "550px" }}>
            <CloseIcon
              onClick={handleCloseOption}
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

            <div className="font-[500] text-[20px] mb-9 ">Add a resident</div>

            <div className="mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[16px] mb-2 font-[400]  text-gray-700">
                    First Name
                  </label>

                  <TextField
                    sx={{
                      backgroundColor: "#eaf6ff",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    size="small"
                    id="outlined-basic"
                    placeholder="Input your first name"
                    variant="outlined"
                    InputProps={{
                      style: {
                        fontSize: "14px",
                        borderRadius: "8px",
                        overflow: "auto",
                      },
                    }}
                  />
                </div>
                <div>
                  <label className="block text-[16px] mb-2 font-[400]  text-gray-700">
                    Last Name
                  </label>
                  <TextField
                    sx={{
                      backgroundColor: "#eaf6ff",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    size="small"
                    id="outlined-basic"
                    placeholder="Input your last name"
                    variant="outlined"
                    InputProps={{
                      style: {
                        fontSize: "14px",
                        borderRadius: "8px",
                        overflow: "auto",
                      },
                    }}
                  />
                </div>
                <div>
                  <label className="block text-[16px] mb-2 font-[400]  text-gray-700">
                    Email Address
                  </label>
                  <TextField
                    sx={{
                      backgroundColor: "#eaf6ff",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    type="email"
                    size="small"
                    id="outlined-basic"
                    placeholder="Input your email address"
                    variant="outlined"
                    InputProps={{
                      style: {
                        fontSize: "14px",
                        borderRadius: "8px",
                        overflow: "auto",
                      },
                    }}
                  />
                </div>
                <div>
                  <label className="block text-[16px] mb-2 font-[400]  text-gray-700">
                    Phone Number
                  </label>
                  <TextField
                    type="tel"
                    sx={{
                      backgroundColor: "#eaf6ff",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    size="small"
                    id="outlined-basic"
                    placeholder="Input your phone number"
                    variant="outlined"
                    InputProps={{
                      style: {
                        fontSize: "14px",
                        borderRadius: "8px",
                        overflow: "auto",
                      },
                    }}
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-[16px] mb-2 font-[400]  text-gray-700">
                    House Address
                  </label>
                  <TextField
                    sx={{
                      backgroundColor: "#eaf6ff",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    size="small"
                    id="outlined-basic"
                    placeholder="Input your house address"
                    variant="outlined"
                    InputProps={{
                      style: {
                        fontSize: "14px",
                        borderRadius: "8px",
                        overflow: "auto",
                      },
                    }}
                  />
                </div>
              </div>
              <div className="">
                <button
                  onClick={() => setUploadModal("success")}
                  //   type="submit"
                  className="w-full mt-[50px] py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2760ff] hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  //   disabled
                >
                  Continue
                </button>
              </div>
            </div>
          </Box>
        ) : uploadModal === "success" ? (
          <Box sx={{ ...style, width: "300px" }}>
            <img src={successImg} alt="" className="m-auto h-[60px] " />
            <div className="text-center  mt-4">
              Resident has been Uploaded successfully
            </div>
          </Box>
        ) : uploadModal === "bulk" ? (
          <Box sx={{ ...style, width: "450px" }}>
            <CloseIcon
              onClick={handleCloseOption}
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

            <div className="font-[500] text-center text-[20px] mb-5 ">
              Bulk User Upload
            </div>
            <div className="text-[14px] text-center">
              Kindly upload the excel file that has been filled with the details
              of the addresses within your estate and upload here.
            </div>
            <Box
              ref={dropzoneRef}
              sx={{
                border: "1px dashed #90caf9",
                // padding: 2,
                borderRadius: 2,
                marginBottom: 2,
                cursor: "pointer",
                textAlign: "center",
                backgroundColor: "#fafafa",
                width: "65%",
                mt: "30px",
                mx: "auto",
              }}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                type="file"
                accept=".xlsx,.xls,.csv"
                style={{ display: "none" }}
                id="file-upload"
                onChange={handleFileUpload}
                ref={fileInputRef} 
              />
              <label htmlFor="file-upload">
                <Button
                  variant="outlined"
                  component="span"
                  sx={{
                    border: "none",
                    textTransform: "none",
                    display: "flex",
                    pb: "20px",
                    flexDirection: "column",
                    color: "#5E5E61",
                    ":hover": {
                      border: "none",
                    },
                  }}
                >
                  <Box
                    sx={{
                      textTransform: "none",
                      mb: "20px",
                      mt: "20px",
                      display: "flex",
                      border: "1px solid #0D6CF2",
                      borderRadius: "5px",
                      padding: "8px",
                      minWidth: "130px",
                      justifyContent: "center",
                      gap: "10px",
                      color: "#0D6CF2",
                    }}
                  >
                    <img src={upload} alt="" /> Upload file
                  </Box>
                  Click to select or drag and drop your excel sheet here
                </Button>
              </label>
            </Box>

            {file && (
              <div className="flex items-center gap-2">
                <img src={fileImg} alt="" />

                <div className="flex-1 ">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Typography>{file.name}</Typography>
                    </Box>
                    <IconButton onClick={handleRemoveFile}>
                      <CloseIcon
                        sx={{
                          color: "#EF4343",
                          bgcolor: "#FEF1F1",
                          borderRadius: "50%",
                          p: "4px",
                        }}
                      />
                    </IconButton>
                  </Box>

                  {file && (
                    <div
                      style={{
                        display: "flex",
                      }}
                      className=" justify-between items-center gap-2"
                    >
                      <LinearProgress
                        sx={{ height: "10px", borderRadius: "5px", flex: "1" }}
                        variant="determinate"
                        value={uploadProgress}
                      />
                      <Typography variant="body2" color="textSecondary">
                        {uploadProgress}%
                      </Typography>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="flex pt-[20px] ">
              <Button
                onClick={() => setUploadModal("table")}
                variant="contained"
                color="primary"
                disabled={loading}
                sx={{
                  textTransform: "none",
                  margin: "auto",
                  minWidth: "130px",
                  bgcolor: "#0D6CF2",
                }}
              >
                Continue
              </Button>
            </div>
          </Box>
        ) : uploadModal === "table" ? (
          <Box sx={{ ...style, width: "fit-content" }}>
            <div className="rounded-xl overflow-auto mt-4  border">
              <table className="min-w-full bg-white   ">
                <thead>
                  <tr className="bg-[#eef3ff]">
                    <th className="px-4 text-left font-[450] text-[#5E5E61] text-[#16px] py-2">
                      First Name
                    </th>
                    <th className="px-4 text-left font-[450] text-[#5E5E61] text-[#16px] py-2">
                      Last Name
                    </th>
                    <th className="px-4 text-left font-[450] text-[#5E5E61] text-[#16px] py-2">
                      Email Address
                    </th>
                    <th className="px-4 text-left font-[450] text-[#5E5E61] text-[#16px] py-2">
                      House Address
                    </th>

                    <th className="px-4 text-center font-[450] text-[#5E5E61] text-[#16px] py-2">
                      Phone Number
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {fileData.map((item, index) => (
                    <tr
                      key={index}
                      className={` cursor-pointer hover:bg-[#f5fcff] ${
                        index % 2 === 0 ? "bg-[#fff]" : "bg-[#f9f9f9]"
                      }`}
                    >
                      <td className="px-4 py-2  text-[#5E5E61] text-[14px] font-[400]">
                        {item?.FirstName}
                      </td>
                      <td className="px-4 py-2  text-[#5E5E61] text-[14px] font-[400]">
                        {item.LastName}
                      </td>
                      <td className="px-4 py-2  text-[#5E5E61] text-[14px] font-[400]">
                        {item.Email}
                      </td>
                      <td className="px-4 py-2  text-[#5E5E61] text-[14px] font-[400]">
                        {item.HouseNumber + "," + item.StreetName}
                      </td>

                      <td className="px-4 py-2  text-center  text-[#5E5E61] text-[14px] font-[400]">
                        {item.PhoneNumber}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between text-[12px] bg-white items-center px-8 py-4">
                <span>
                  Page {currentPageFile} of {totalPagesFile}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    className={` h-4 w-4 flex justify-center items-center rounded-full  ${
                      currentPageFile === 1
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-blue-600"
                    }`}
                    onClick={() =>
                      currentPageFile > 1 &&
                      handlePageChange(currentPageFile - 1)
                    }
                    disabled={currentPageFile === 1}
                  >
                    <img src={arrowLeft} alt="" />
                  </button>
                  {getPageNumbersFile().map((number, index) => (
                    <button
                      key={index}
                      className={`h-5 w-6 flex justify-center items-center rounded-md ${
                        number === currentPageFile
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
                    className={` h-4 w-4 flex justify-center items-center rounded-full ${
                      currentPageFile === totalPagesFile
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-blue-600"
                    }`}
                    onClick={() =>
                      currentPageFile < totalPagesFile &&
                      handlePageChange(currentPageFile + 1)
                    }
                    disabled={currentPageFile === totalPagesFile}
                  >
                    <img src={arrowRight} alt="" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex  justify-between items-center mt-5">
              <span className="text-[#e12b2b] ml-8 text-[14px] font-[500] cursor-pointer">
                Cancel
              </span>
              <Button
                onClick={() => setUploadModal("success")}
                variant="contained"
                sx={{
                  bgcolor: "#0D6CF2",
                  textTransform: "none",
                  minWidth: "250px",
                }}
              >
                Continue
              </Button>
            </div>
          </Box>
        ) : (
          <Box sx={style}>hello</Box>
        )}
      </Modal>
    </>
  );
};

export default Liscence;
