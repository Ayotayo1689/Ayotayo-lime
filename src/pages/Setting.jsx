import React, { useState } from "react";
import Profile from "../components/Profile";
import Team from "../components/Team";
import RolesAndPermission from "../components/RolesAndPermission";
import Security from "../components/Security";

const Setting = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Profile",
    "Team Settings",
    "Roles and Permission",
    "Security Settings",
  ];
  const tabContents = [
    <Profile />,
    <Team />,
    <RolesAndPermission />,
    <Security />,
  ];

  return (
    <div>
      <div className=" flex p-2 bg-white gap-2 rounded-[16px]">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={` p-2 rounded-[8px] flex justify-center items-center flex-1 cursor-pointer 
              ${
                activeTab === index
                  ? "bg-[#E7F0FE] text-[#084191]"
                  : "bg-[none]"
              } 
              `}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="mt-4">{tabContents[activeTab]}</div>
    </div>
  );
};

export default Setting;
