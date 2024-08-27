// // import React from 'react'

// // const SetNewPassword = () => {
// //   return (
// //     <div>SetNewPassword</div>
// //   )
// // }

// // export default SetNewPassword

// import React, { useEffect, useState } from "react";
// import Logo from "../assets/limestonelogo.svg";

// import {
//   Button,
//   IconButton,
//   InputAdornment,
//   OutlinedInput,
//   TextField,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import UsePostCreateApiHooks from "../hooks/UseCommunity";
// import { useDispatch } from "react-redux";
// import { toast, ToastContainer } from "react-toastify";
// import { decodeToken } from "../utils/decodeToken";
// import { setUser } from "../redux/userSlice/userSlice";
// import "react-toastify/dist/ReactToastify.css";
// import ButtonLoader from "./ButtonLoader";

// const SetNewPassword = ({move}) => {
//   const { post } = UsePostCreateApiHooks();
//   const navigation = useNavigate();
//   const dispatch = useDispatch();

//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };
// const otp = localStorage.getItem("otp")
// const email = localStorage.getItem("email")
//   const [formData, setFormData] = useState({
//     otp:otp,
//     userEmailAddress: email,
//     newPassword: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       console.log(formData);
//       // move(4)  if (response.data.message === "Success") {
//       //   const response = await post("/auth/login", formData);

//       //   if (response.data.message === "Success") {
//       //     const decoded = decodeToken(response?.data?.data?.accessToken);
//       //     console.log(decoded);
//       //     if (decoded?.roles.length < 1) {
//       //       toast.error("You do not have permission to this portal");
//       //     } else {
//       //       localStorage.setItem("token", response?.data?.data?.accessToken);
//       //       dispatch(setUser(response.data));
//       //       navigation("/dashboard");
//       //     }

//       //     dispatch(setUser(response.data));
//       //     // toast.success("Login successful!");
//       //     navigation("/dashboard");
//       //   }
//       //   console.log("response", response);
//     } catch (error) {
//       console.log(error);
//       toast.error("Login failed. Please try again later.");
//     }
//     setLoading(false);
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div
//           style={{
//             boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
//           }}
//           className=" bg-[#fff] px-4 py-10 rounded-xl  max-w-[500px] w-[100%] min-h-[80svh]"
//         >
//           <img src={Logo} alt="" className="m-auto" />
//           <div className="flex gap-1 flex-col mt-6 justify-center items-center">
//             <span> Let’s get You Back Into your account</span>
//             <span className="text-[22px] font-semibold">
//               Set A new Password
//             </span>
//           </div>
//           <div className="  w-[80%] m-auto  mt-6">
//             <div className="  flex flex-col mb-4">
//               <label className="mb-2" htmlFor="">
//                 Password
//               </label>
//               <TextField
//                 sx={{
//                   backgroundColor: "#eaf6ff",
//                 }}
//                 value={formData.password}
//                 onChange={handleChange}
//                 name="newPassword"
//                 size="small"
//                 id="outlined-basic"
//                 placeholder="Input your password"
//                 variant="outlined"
//               />
//             </div>

//             <div className="  flex flex-col">
//               <label className="mb-2" htmlFor="">
//                 Repeat Password
//               </label>
//               <TextField
//                 sx={{
//                   backgroundColor: "#eaf6ff",
//                 }}
//                 // value={formData.repeatPassword}
//                 // onChange={handleChange}
//                 // name="repeatPassword"
//                 size="small"
//                 id="outlined-basic"
//                 placeholder="Repeat your password"
//                 variant="outlined"
//               />
//             </div>

//             {
//               loading ? <ButtonLoader/> :    <Button
//               onClick={handleSubmit}
//               sx={{
//                 width: "100%",
//                 mt: "30px",
//                 textTransform: "none",
//               }}
//               variant="contained"
//             >
//              Continue
//             </Button>
//             }

//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SetNewPassword;

import React, { useState } from "react";
import Logo from "../assets/limestonelogo.svg";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UsePostCreateApiHooks from "../hooks/UseCommunity";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { setUser } from "../redux/userSlice/userSlice";
import "react-toastify/dist/ReactToastify.css";
import ButtonLoader from "./ButtonLoader";

const SetNewPassword = ({ move }) => {
  const { post } = UsePostCreateApiHooks();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const otp = localStorage.getItem("otp");
  const email = localStorage.getItem("email");

  const [formData, setFormData] = useState({
    newPassword: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the fields
    if (!formData.newPassword || !formData.repeatPassword) {
      toast.error("All fields are required.");
      return;
    }

    if (formData.newPassword !== formData.repeatPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    // Prepare data to send to the API
    const apiData = {
      otp: otp,
      userEmailAddress: email,
      newPassword: formData.newPassword,
    };

    try {
      setLoading(true);
      console.log(apiData);
      // Uncomment the line below to send the data to the API
      const response = await post("/user/password/reset/verify-and-change", apiData);
      console.log(response);

        if (response?.data?.success === true){
          move(4)
        }else if(response.error.data.success === false){
          move(2)
        }
      // Handle success response
      // toast.success("Password reset successful!");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
          }}
          className="bg-[#fff] px-4 py-10 rounded-xl max-w-[500px] w-[100%] min-h-[80svh]"
        >
          <img src={Logo} alt="" className="m-auto" />
          <div className="flex gap-1 flex-col mt-6 justify-center items-center">
            <span>Let’s get You Back Into your account</span>
            <span className="text-[22px] font-semibold">
              Set A new Password
            </span>
          </div>
          <div className="w-[80%] m-auto mt-6">
            <div className="flex flex-col mb-4">
              <label className="mb-2" htmlFor="newPassword">
                Password
              </label>
              <TextField
                sx={{
                  backgroundColor: "#eaf6ff",
                }}
                value={formData.newPassword}
                onChange={handleChange}
                name="newPassword"
                size="small"
                id="newPassword"
                placeholder="Input your password"
                variant="outlined"
                type="password"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2" htmlFor="repeatPassword">
                Repeat Password
              </label>
              <TextField
                sx={{
                  backgroundColor: "#eaf6ff",
                }}
                value={formData.repeatPassword}
                onChange={handleChange}
                name="repeatPassword"
                size="small"
                id="repeatPassword"
                placeholder="Repeat your password"
                variant="outlined"
                type="password"
              />
            </div>

            {loading ? (
              <ButtonLoader />
            ) : (
              <Button
                onClick={handleSubmit}
                sx={{
                  width: "100%",
                  mt: "30px",
                  textTransform: "none",
                }}
                variant="contained"
              >
                Continue
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SetNewPassword;
