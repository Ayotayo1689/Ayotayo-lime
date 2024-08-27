import React from "react";

const TableSkeletonLoader = () => {
  return (
    <div className="p-4">
      <div className="bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x h-[50px] mb-4 rounded"></div>
      <div className="space-y-2">
        {/* Table Header Skeleton */}
        <div className="  mb-2">
          <div className="h-[40px] bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x "></div>
          {/* <div className="h-[50px] bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x "></div>
          <div className="h-[50px] bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x "></div>
          <div className="h-[50px] bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x "></div> */}
        </div>
        
        {/* Table Rows Skeleton */}
        {[...Array(5)].map((_, index) => (
          <div key={index} className=" ">
            <div className="h-[40px] bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x "></div>
            {/* <div className="h-[50px] bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x "></div>
            <div className="h-[50px] bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x "></div>
            <div className="h-[50px] bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x "></div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableSkeletonLoader;
