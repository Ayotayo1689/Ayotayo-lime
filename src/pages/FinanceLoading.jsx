import React from "react";

import TableSkeletonLoader from "../components/TableSkeletonLoader";

const FinanceLoading = () => {



  return (
    <div>
      <div className="flex gap-4 flex-wrap  justify-between">
        <div className="bg-gradient-to-r min-w-[200px] from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x min-h-[100px] p-3 flex-1  rounded-lg"></div>
        <div className="bg-gradient-to-r min-w-[200px] from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x min-h-[100px] p-3 flex-1  rounded-lg"></div>
        <div className="bg-gradient-to-r min-w-[200px] from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x min-h-[100px] p-3 flex-1  rounded-lg"></div>
        <div className="bg-gradient-to-r min-w-[200px] from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x min-h-[100px] p-3 flex-1  rounded-lg"></div>
      </div>
      <div className=" flex flex-wrap gap-4 min-h-[300px] mt-4 ">
        <div
          style={{
            flex: "2",
          }}
          className=" min-h-[300px] min-w-[200px]  flex flex-col gap-4"
        >
          <div className="min-h-[300px] bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x p-4 rounded-xl"></div>
          <div className="min-h-[300px] border rounded-xl">
            <TableSkeletonLoader />
          </div>
        </div>
        <div
          style={{
            flex: "1",
          }}
          className=" min-h-[300px] max-w-[320px]   min-w-[200px] m-auto flex flex-col gap-4 "
        >
          <div className="min-h-[300px] bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x p-4 rounded-xl"></div>

          <div className="min-h-[300px] mt-[50px] bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x rounded-xl p-4"></div>
        </div>
      </div>
    </div>
  );
};

export default FinanceLoading;
