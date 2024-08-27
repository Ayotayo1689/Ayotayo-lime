import React, { useEffect, useState } from "react";
import RequestOtp from "../components/RequestOtp";
import InputOtp from "../components/InputOtp";
import SetNewPassword from "../components/SetNewPassword";
import ProceedToLogin from "../components/ProceedToLogin";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 ? (
        <RequestOtp move={setStep}  />
      ) : step === 2 ? (
        <InputOtp move={setStep}  />
      ) : step === 3 ? (
        <SetNewPassword move={setStep}  />
      ) : (
        <ProceedToLogin />
      )}
    </>
  );
};

export default ForgotPassword;
