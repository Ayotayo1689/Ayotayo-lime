// import React from 'react'

// const InputOtp = () => {
//   return (
//     <div>InputOtp</div>
//   )
// }

// export default InputOtp



import React, { useState, useRef } from 'react';
import otpImg from "../assets/otp.svg"

const InputOtp = ({move}) => {
  const savedMail = localStorage.getItem("email")
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  // const handleChange = (e, index) => {
  //   const value = e.target.value;
  //   // if (isNaN(value)) return;

  //   const newOtp = [...otp];
  //   newOtp[index] = value;
  //   setOtp(newOtp);

  //   // Move focus to the next input
  //   if (value && index < otp.length - 1) {
  //     inputRefs.current[index + 1].focus();
  //   }

  //   // Log value when the last input is complete
  //   if (index === otp.length - 1 && value) {
  //     console.log('OTP Entered:', newOtp.join(''));
  //     localStorage.setItem("otp",  newOtp.join('') )
  //     move(3)
  //   }
  // };

  const handleChange = (e, index) => {
    const value = e.target.value.toUpperCase(); // Converts to uppercase
  
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  
    // Move focus to the next input
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  
    // Log value when the last input is complete
    if (index === otp.length - 1 && value) {
      console.log('OTP Entered:', newOtp.join(''));
      localStorage.setItem("otp",  newOtp.join('') );
      move(3);
    }
  };
  

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
   <div className="flex justify-center items-center">

<div className="flex flex-col items-center justify-center min-h-screen  p-4">
      <img
        src={otpImg}
        alt="Verification illustration"
        className="w-1/2 mb-4"
      />
      <p className="text-lg text-center mb-2 max-w-[65%]">
        An OTP has been sent to <span className="font-bold">{savedMail}</span> kindly input the OTP once received below
      </p>
      <button className="text-blue-500 mb-4">Change Email</button>
      <div className="flex justify-center mb-2 space-x-4">
        {otp.map((digit, index) => (
          <input
          style={{
            background:"none"
          }}
            key={index}
            type="text"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            maxLength={1}
            className="w-12 bg-none h-12 border-2 border-[#a8a8a8] text-center rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8fa5ff]"
          />
        ))}
      </div>
      {/* <p className="text-red-500 mb-4">OTP incorrect kindly check again</p> */}
      <button onClick={()=>move(1)} className="text-blue-500">Resend OTP</button>
    </div>


   </div>
  );
};

export default InputOtp;
