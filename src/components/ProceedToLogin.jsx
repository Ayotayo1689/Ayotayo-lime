import React from 'react'
import check from "../assets/check.svg"
import { useNavigate } from 'react-router-dom'
const ProceedToLogin = () => {
    const navigate = useNavigate()
  return (
    <div className='flex justify-center items-center h-[100dvh]'>
        <div className="border  justify-center items-center p-4 flex flex-col gap-4 bg-white h-[300px] min-w-[400px] rounded-xl">
            <img src={check} alt="" />
            <div className="font-[500] text-[25px] ">Password reset  successfully</div>

            <p>Kindly set up you new password</p>

            <button onClick={()=>navigate("/")} className='bg-[#0D6CF2] text-[#fff] text-[18px] mb-8 mt-4 w-[100%] p-3 rounded-lg '>Proceed to login</button>
        </div>
    </div>
  )
}

export default ProceedToLogin