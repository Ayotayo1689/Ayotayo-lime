import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  InputAdornment,
  OutlinedInput,
  Tooltip,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";

import Logo from "../assets/limestonelogo.svg";
import Bell from "../assets/bell.svg";
import Yemi from "../assets/yemi.svg";
import integrationblue from "../assets/integrationblue.svg";
import communityblue from "../assets/communityblue.svg";
import financeblue from "../assets/financeblue.svg";
import dashboardblue from "../assets/dashboardblue.svg";
import liscenceblue from "../assets/liscenceblue.svg";
import settingblue from "../assets/settingblue.svg";

import integration from "../assets/integration.svg";
import community from "../assets/community.svg";
import finance from "../assets/finance.svg";
import dashboard from "../assets/dashboard.svg";
import liscence from "../assets/liscence.svg";
import setting from "../assets/setting.svg";
import { SearchContext } from "../context/SearchContext";
import smallLime from "../assets/lime.svg";

const DashboardLayout = ({ children }) => {
  const { searchQuery, setSearchQuery, searchResults } =
    useContext(SearchContext);
  const [showRes, setShowRes] = useState(false);
  const [expand, setExpand] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setShowRes(true);
  };

  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    console.log(expand);
  }, [searchQuery, expand]);

  const sidebarContent = (
    <div className="w-[220px] p-4 h-full">
      <div
        className={`flex  ${
          !expand ? "items-center" : "items-start"
        } space-x-2`}
      >
        <img
          src={!expand ? smallLime : Logo}
          alt="Limestone"
          className={`h-[40px]  ${expand && "m-auto"} `}
        />
      </div>

      {mobileOpen && (
        <div className=" mt-8">
          <div className="flex flex-col items-center gap-4">
            <Avatar
              alt="Yemi Benson"
              sx={{
                width: "80px",
                height: "80px",
              }}
              src={Yemi}
            />
            <div className="flex items-center flex-col ml-2">
              <span className="text-[18px]">Yemi Benson</span>
              <span className="text-[16px] text-[#7b7b7b]">IT Technician</span>
              <Typography
                variant="body2"
                sx={{
                  marginRight: "25px",
                  marginTop: "20px",
                }}
                className="text-[#505050]"
              >
                Last Update: Just Now
              </Typography>
            </div>
          </div>
        </div>
      )}
      <nav className="flex flex-col pt-[30px] space-y-2">
        <NavLink
        onClick={()=>setMobileOpen(false)}
          to="/dashboard"
          className={({ isActive }) =>
            `p-2 rounded hover:bg-[#e8e7e7] ${
              isActive ? "bg-[#E7F0FE] text-[#084191]" : ""
            } flex items-center gap-5`
          }
        >
          {({ isActive }) => (
            <Tooltip
              title="Dashboard"
              placement="right"
              arrow
              disableHoverListener={expand}
            >
              <div className="flex items-center gap-4">
                <img src={isActive ? dashboardblue : dashboard} alt="" />
                {expand && "Dashboard"}
              </div>
            </Tooltip>
          )}
        </NavLink>

        <NavLink
        onClick={()=>setMobileOpen(false)}
          to="/communities"
          className={({ isActive }) =>
            `p-2 rounded hover:bg-[#e8e7e7] ${
              isActive ? "bg-[#E7F0FE] text-[#084191]" : ""
            } flex items-center gap-5`
          }
        >
          {({ isActive }) => (
            <Tooltip
              title="Communities"
              placement="right"
              arrow
              disableHoverListener={expand}
            >
              <div className="flex items-center gap-4">
                <img src={isActive ? communityblue : community} alt="" />
                {expand && "Communities"}
              </div>
            </Tooltip>
          )}
        </NavLink>

        <NavLink
        onClick={()=>setMobileOpen(false)}
          to="/financials"
          className={({ isActive }) =>
            `p-2 rounded hover:bg-[#e8e7e7] ${
              isActive ? "bg-[#E7F0FE] text-[#084191]" : ""
            } flex items-center gap-5`
          }
        >
          {({ isActive }) => (
            <Tooltip
              title="Financials"
              placement="right"
              arrow
              disableHoverListener={expand}
            >
              <div className="flex items-center gap-4">
                <img src={isActive ? financeblue : finance} alt="" />
                {expand && "Financials"}
              </div>
            </Tooltip>
          )}
        </NavLink>

        <NavLink
        onClick={()=>setMobileOpen(false)}
          to="/integrations"
          className={({ isActive }) =>
            `p-2 rounded hover:bg-[#e8e7e7] ${
              isActive ? "bg-[#E7F0FE] text-[#084191]" : ""
            } flex items-center gap-5`
          }
        >
          {({ isActive }) => (
            <Tooltip
              title="Integrations"
              placement="right"
              arrow
              disableHoverListener={expand}
            >
              <div className="flex items-center gap-4">
                <img src={isActive ? integrationblue : integration} alt="" />
                {expand && "Integrations"}
              </div>
            </Tooltip>
          )}
        </NavLink>

        <NavLink
        onClick={()=>setMobileOpen(false)}
          to="/licenses"
          className={({ isActive }) =>
            `p-2 rounded hover:bg-[#e8e7e7] ${
              isActive ? "bg-[#E7F0FE] text-[#084191]" : ""
            } flex items-center gap-5`
          }
        >
          {({ isActive }) => (
            <Tooltip
              title="Licenses"
              placement="right"
              arrow
              disableHoverListener={expand}
            >
              <div className="flex items-center gap-4">
                <img src={isActive ? liscenceblue : liscence} alt="" />
                {expand && "Licenses"}
              </div>
            </Tooltip>
          )}
        </NavLink>

        <NavLink
        onClick={()=>setMobileOpen(false)}
          to="/settings"
          className={({ isActive }) =>
            `p-2 rounded hover:bg-[#e8e7e7] ${
              isActive ? "bg-[#E7F0FE] text-[#084191]" : ""
            } flex items-center gap-5`
          }
        >
          {({ isActive }) => (
            <Tooltip
              title="Settings"
              placement="right"
              arrow
              disableHoverListener={expand}
            >
              <div className="flex items-center gap-4">
                <img src={isActive ? settingblue : setting} alt="" />
                {expand && "Settings"}
              </div>
            </Tooltip>
          )}
        </NavLink>

        {!mobileOpen && (
          <div className="">
            <NavLink
         
              className={`p-2 rounded hover:bg-[#e8e7e7]
                 flex items-center gap-5`}
              onClick={() => setExpand(!expand)}
            >
              <Tooltip
                title={!expand && "Expand Sidebar"}
                placement="right"
                arrow
                disableHoverListener={expand}
              >
                <div className="flex items-center gap-4">
                  <AlignHorizontalRightIcon
                    sx={{
                      fontWeight: 200,
                      color: "#6b6b6b",
                    }}
                  />
                  {expand && "Collapse Sidebar"}
                </div>
              </Tooltip>
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );

  return (
    <div className="flex h-screen">
      {/* Desktop Sidebar */}
      <div
        className={`bg-[#fff] hidden md:block overflow-hidden space-y-4 transition-width duration-300 ease-in-out`}
        style={{ width: expand ? "220px" : "55px" }}
      >
        {sidebarContent}
      </div>

      {/* Mobile Sidebar */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleMobileSidebar}
        classes={{
          paper: "bg-[#fff] w-[220px]",
        }}
      >
        {/* <IconButton sx={{
          border:"1px solid grey",
          height:"40px",
          width:"40px",
          marginLeft:"75%",
          mt:"20px"
        }} onClick={toggleMobileSidebar} className="p-2 ">
          <CloseIcon />
        </IconButton> */}

        {sidebarContent}
      </Drawer>

      <div className="flex-1 flex flex-col">
        <AppBar
          sx={{
            borderBottom: "0.5px solid #DADADA",
            boxShadow: "none",
          }}
          position="static"
          color="default"
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              border: "none",
            }}
          >
            <div className="flex items-center">
              {/* Hamburger Menu Icon for Mobile View */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggleMobileSidebar}
                sx={{
                  display: { xs: "flex", md: "none" }, // visible on mobile, hidden on md and larger screens
                  mr: 2,
                  height: "40px",
                  width: "40px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MenuIcon />
              </IconButton>

              <OutlinedInput
                onChange={handleSearchChange}
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
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </div>

            <div className="flex items-center gap-5 mr-4">
              <Typography
                variant="body2"
                sx={{
                  marginRight: "25px",
                }}
                className="text-[#505050] hidden md:flex items-center"
              >
                Last Update: Just Now
              </Typography>
              <img src={Bell} alt="" />
              <div className="hidden md:flex items-center gap-4">
                <Avatar alt="Yemi Benson" src={Yemi} />
                <div className="flex flex-col ml-2">
                  <span>Yemi Benson</span>
                  <span className="text-[12px] text-[#7b7b7b]">
                    IT Technician
                  </span>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>

        <div className="p-4 bg-gray-100 flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
