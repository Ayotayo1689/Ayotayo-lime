import { TextField } from "@mui/material";
import React from "react";

const Security = () => {
  return <div>
    <div className="flex  gap-4 flex-wrap bg-gray-100 min-h-screen">
      <div className="bg-white min-w-[320px] p-6 rounded-lg flex-1 h-[fit-content] w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Change Password</h2>
          <button className="text-blue-500 font-[500] underline cursor-pointer">Save</button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-[16px] font-[400] text-gray-700"><span className="mr-1 text-red-500">*</span>
              Current Password 
            </label>
          
            <TextField
                    sx={{
                      backgroundColor: "#eaf6ff",
                      width: "100%",
                      borderRadius: "8px",
                      marginTop:"5px"
                    }}
                    size="small"
                    id="outlined-basic"
                    placeholder="Input Current Password"
                    variant="outlined"
                    InputProps={{
                      style: {
                        fontSize: "14px",
                        borderRadius: "8px",
                        overflow: "auto",
                      },
                    }}
                  />
          </div>
          <div>
            <label className="block text-[16px] font-[400] text-gray-700"><span className="mr-1 text-red-500">*</span>
              Enter New Password 
            </label>
           
             <TextField
                    sx={{
                      backgroundColor: "#eaf6ff",
                      width: "100%",
                      borderRadius: "8px",
                      marginTop:"5px"
                    }}
                    size="small"
                    id="outlined-basic"
                    placeholder="Input desired Password"
                    variant="outlined"
                    InputProps={{
                      style: {
                        fontSize: "14px",
                        borderRadius: "8px",
                        overflow: "auto",
                      },
                    }}
                  />
          </div>
          <div>
            <label className="block text-[16px] font-[400] text-gray-700"><span className="mr-1 text-red-500">*</span>
              Repeat Password 
            </label>
          
              <TextField
                    sx={{
                      backgroundColor: "#eaf6ff",
                      width: "100%",
                      borderRadius: "8px",
                      marginTop:"5px"
                    }}
                    size="small"
                    id="outlined-basic"
                    placeholder="Repeat desired Password"
                    variant="outlined"
                    InputProps={{
                      style: {
                        fontSize: "14px",
                        borderRadius: "8px",
                        overflow: "auto",
                      },
                    }}
                  />
          </div>
        </form>
      </div>

      <div className="bg-white min-w-[320px] p-6 rounded-lg flex-1 h-[fit-content] w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Change Email</h2>
          <button className="text-blue-500 font-[500] underline cursor-pointer ">Save</button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-[16px] font-[400] text-gray-700"><span className="mr-1 text-red-500">*</span>
              Current Email 
            </label>
           
              <TextField
                    sx={{
                      backgroundColor: "#eaf6ff",
                      width: "100%",
                      borderRadius: "8px",
                      marginTop:"5px"
                    }}
                    size="small"
                    id="outlined-basic"
                    placeholder="Input Current Password"
                    variant="outlined"
                    InputProps={{
                      style: {
                        fontSize: "14px",
                        borderRadius: "8px",
                        overflow: "auto",
                      },
                    }}
                  />
          </div>
          <div>
            <label className="block text-[16px] font-[400] text-gray-700"><span className="mr-1 text-red-500">*</span>
              Enter New Email 
            </label>
           
               <TextField
                    sx={{
                      backgroundColor: "#eaf6ff",
                      width: "100%",
                      borderRadius: "8px",
                      marginTop:"5px"
                    }}
                    size="small"
                    id="outlined-basic"
                    placeholder="Input desired Password"
                    variant="outlined"
                    InputProps={{
                      style: {
                        fontSize: "14px",
                        borderRadius: "8px",
                        overflow: "auto",
                      },
                    }}
                  />
          </div>
          <p className="text-[16px] font-[400] text-blue-500 ">
            Changing your mail will require you verify your mail again
          </p>
        </form>
      </div>
    </div>
  </div>;
};

export default Security;
