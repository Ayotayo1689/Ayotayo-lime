import React from "react";
import edit from "../assets/edit.svg";
import yems from "../assets/yems.svg";
import logout from "../assets/logout.svg";

const Profile = () => {
  return (
    <div className="p-4  min-h-[70svh] bg-[#fff]">
      <div className=" rounded-xl bg-[#F7F7F7] p-4">
        <div className="flex justify-between mb-4">
          <span>My Profile</span>
          <span className="flex items-center justify-center cursor-pointer ">
            <img src={edit} alt="" /> Edit
          </span>
        </div>
        <div className="flex items-center gap-4">
          <img src={yems} className=" rounded-full w-[60px] h-[60px]" alt="" />
          <div className="">
            <div className="text-[16px] font-[400]  ">Yemi Temiloluwa</div>
            <div className="font-[400] text-[14px] text-[#51515A] ">
              yemi.fig@gmail.com
            </div>
            <div className="text-[16px] font-[400]  mt-2 ">09122343354</div>
          </div>
        </div>
      </div>
      <div className=" cursor-pointer flex items-center gap-2 rounded-xl mt-4 bg-[#F7F7F7] p-4">
        <img src={logout} className=" rounded-full" alt="" />
        <div className="">Log Out</div>
      </div>
    </div>
  );
};

export default Profile;
