import React, { useState } from "react";
import {
  Button,
  InputAdornment,
  OutlinedInput,
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
import TableSkeletonLoader from "../components/TableSkeletonLoader";

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

const CommunitiesLoading = () => {
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

  return (
    <div>
      <div className="">
      

        <div className=" mb-[14px] w-[150px] h-[40px] bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x rounded-lg"></div>

        <div className="flex gap-4 flex-wrap  justify-between">
          <div
            
            className="bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x p-3 flex-1  rounded-lg min-w-[200px] min-h-[130px]"
          >
        
          </div>
          <div
            
            className="bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x p-3 flex-1  rounded-lg min-w-[200px] min-h-[130px]"
          >
          
           
          </div>
          <div
            
            className="bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x p-3 flex-1  rounded-lg min-w-[200px] min-h-[130px]"
          >
         
          </div>
        </div>

      

        <div className="rounded-xl mt-5 overflow-auto  border">
        <TableSkeletonLoader/>
        </div>
      </div>
    
    </div>
  );
};

export default CommunitiesLoading;
