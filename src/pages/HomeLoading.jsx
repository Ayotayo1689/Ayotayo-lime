import React from "react";


const HomeLoading = () => {
 
  return (
    <div>
      <div className="flex gap-4 flex-wrap justify-between">
      <div className="bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x p-3 flex-1 rounded-lg min-w-[200px] min-h-[130px]">
      </div>
        <div className="bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x p-3 flex-1  rounded-lg min-w-[200px] min-h-[130px]">
          <div className="flex items-center gap-2"></div>
          <div className="flex flex-col justify-end mt-0 items-end">
            <div className="flex flex-col  mt-0"></div>
          </div>
        </div>
        <div className=" p-3 flex-1 bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x rounded-lg min-w-[200px] min-h-[130px]">
          <div className="flex items-center gap-2"></div>
        </div>
        <div className="bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x p-3 flex-1  rounded-lg min-w-[200px] min-h-[130px]">
          <div className="flex items-center gap-2"></div>
        </div>
      </div>

      <div className=" mt-4 flex flex-wrap items-center gap-4">
        <div
          style={{
            flex: "2",
          }}
          className="bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x rounded-lg min-h-[300px] min-w-[320px] "
        ></div>

        <div
          style={{
            flex: "1",
          }}
          className="bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x h-[100%] aspect-square   rounded-lg min-w-[250px] "
        ></div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4 justify-between">
        <div className="min-h-[300px] min-w-[350px]  flex-1 rounded-lg bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x "></div>
        <div className="min-h-[300px]  min-w-[250px] p-4 flex-1 rounded-lg bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x "></div>
        <div className="min-h-[300px]  min-w-[300px] flex-1 rounded-lg bg-gradient-to-r from-gray-200 via-[#d2d2d2] to-gray-200 animate-gradient-x "></div>
      </div>
    </div>
  );
};

export default HomeLoading;
