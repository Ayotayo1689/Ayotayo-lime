import React, { useEffect, useState } from "react";
import Logo from "../assets/limestonelogo.svg";
import "./login.css";

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
import ButtonLoader from "../components/ButtonLoader";

const Login = () => {
  const { post } = UsePostCreateApiHooks();
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [logoShow, setlogoShow] = useState(true);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [formData, setFormData] = useState({
    emailAddress: "",
    password: "",
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
    try {
      setLoading(true);
      console.log(formData);
      const response = await post("/admin/login", formData);

      if (response.data.message === "Success") {
        const decoded = decodeToken(response?.data?.data?.accessToken);
        console.log(decoded);
   
          localStorage.setItem("token", response?.data?.data?.accessToken);
          // navigation("/dashboard");

        dispatch(setUser(response.data));
        // toast.success("Login successful!");
        navigation("/dashboard");
      }
      console.log("response", response);
    } catch (error) {
      console.log(error);
      // toast.error("Login failed. Please try again later.");
    }
    setLoading(false);
  };

  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const fetchVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    // Fetch voices when the component mounts
    fetchVoices();

    // Update voices list when the list of voices changes
    window.speechSynthesis.onvoiceschanged = fetchVoices;

    // Cleanup to stop the speech if the component unmounts
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    if (voices.length > 0) {
      const textToSpeech = "Hello, welcome to Lime Stone admin portal.";
      const utterance = new SpeechSynthesisUtterance(textToSpeech);

      const femaleVoice = voices[5];

      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }

      window.speechSynthesis.speak(utterance);
    }
  }, [voices]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setlogoShow(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ToastContainer />

      {logoShow ? (
        <div className=" h-[100svh] flex justify-center items-center">
          <span class="login-loader"></span>
        </div>
      ) : (
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
              <span className="text-[14px] "> Login to continue </span>
            </div>

           <div className="h-[40px] mt-3 flex justify-center items-center ">
           <span className="eyes"></span>
           </div>
            <div className="  w-[80%] m-auto  mt-3">
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

              <div className="  mt-4  flex flex-col">
                <label className="mb-2" htmlFor="">
                  Password
                </label>

                <OutlinedInput
                  sx={{
                    backgroundColor: "#eaf6ff",
                  }}
                  value={formData.password}
                  onChange={handleChange}
                  size="small"
                  name="password"
                  placeholder="Input your password"
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <div className="text-[14px] underline ">Hide</div>
                        ) : (
                          <div className="text-[14px] underline ">Show</div>
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <div
                  onClick={() => navigate("/forgot_password")}
                  className="flex cursor-pointer justify-end mt-1 text-[13px] text-[#0D6CF2] font-medium "
                >
                  Reset Password
                </div>
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
                  Log in
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
