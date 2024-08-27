// import React from 'react'

// const RequestOtp = () => {
//   return (
//     <div>RequestOtp</div>
//   )
// }

// export default RequestOtp

import React, { useEffect, useState } from "react";
import Logo from "../assets/limestonelogo.svg";

import {
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import UsePostCreateApiHooks from "../hooks/UseCommunity";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { decodeToken } from "../utils/decodeToken";
import { setUser } from "../redux/userSlice/userSlice";
import "react-toastify/dist/ReactToastify.css";
import ButtonLoader from "./ButtonLoader";

const RequestOtp = ({move}) => {
  const { post } = UsePostCreateApiHooks();
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [formData, setFormData] = useState({
    emailAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    localStorage.setItem("email", formData.emailAddress)
    e.preventDefault();
    try {
      setLoading(true);
      console.log(formData);
      // move(2)
      const response = await post("/user/password/reset/request", formData);

      if (response.data.success) {
           move(2)
    
      }
      console.log("response", response);
    } catch (error) {
      console.log(error);
      // toast.error("Login failed. Please try again later.");
    }
    setLoading(false);
  };



  return (

   <>
    <ToastContainer />
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
        }}
        className=" bg-[#fff] px-4 py-10 rounded-xl  max-w-[500px] w-[100%] min-h-[80svh]"
      >
        <img src={Logo} alt="" className="m-auto" />
        <div className="flex gap-1 flex-col mt-6 justify-center items-center">
          <span> Welcome to</span>
          <span className="text-[22px] font-semibold">
            Limestone Admin Portal
          </span>
          <span className="text-[14px] "> Enter Email to Reset Password </span>
        </div>
        <div className="  w-[80%] m-auto  mt-6">
          <div className="  flex flex-col">
            <label className="mb-2" htmlFor="">
              Email
            </label>
            <TextField
              sx={{
                backgroundColor: "#eaf6ff",
              }}
              value={formData.emailAddress}
              onChange={handleChange}
                name="emailAddress"
              size="small"
              id="outlined-basic"
              placeholder="Input your email address"
              variant="outlined"
            />
          </div>

        

          {
            loading ? <ButtonLoader/> : <Button
            onClick={handleSubmit}
            sx={{
              width: "100%",
              mt: "30px",
              textTransform: "none",
            }}
            variant="contained"
          >
           Request OTP
          </Button>
          }
        </div>
      </div>
    </div>
   </>
  );
};

export default RequestOtp;
