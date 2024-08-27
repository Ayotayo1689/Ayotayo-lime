import React, { useEffect, useState } from "react";
import user from "../assets/user.svg";
import totalcommunities from "../assets/totalcommunities.svg";
import house from "../assets/house.svg";
import paystack from "../assets/paystack.svg";
import flutterwave from "../assets/flutterwave.svg";
import interswitch from "../assets/interswitch.svg";
import remita from "../assets/remita.svg";
import nepa from "../assets/nepa.svg";
import { Button } from "@mui/material";
import IntegrationsLoading from "./IntegrationsLoading";

const Integrations = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <IntegrationsLoading />
      ) : (
        <div>
          <div className="flex gap-4 flex-wrap justify-center items-center ">
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
              }}
              className="bg-[#fff] p-3 flex-1  rounded-lg min-w-[200px] min-h-[130px]"
            >
              <div className="flex items-center gap-2">
                <img src={user} alt="" />
                <div className="flex flex-col">
                  <span className="text-[13px]">Total Integrations</span>
                  <span className="text-[25px] font-semibold ">0</span>
                </div>
              </div>
            </div>
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
              }}
              className="bg-[#fff] p-3 flex-1  rounded-lg min-w-[200px] min-h-[130px]"
            >
              <div className="flex items-center gap-2">
                <img src={totalcommunities} alt="" />
                <div className="flex flex-col">
                  <span className="text-[13px]">Active integration</span>
                  <span className="text-[25px] font-semibold ">0</span>
                </div>
              </div>
            </div>
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
              }}
              className="bg-[#fff] p-3 flex-1  rounded-lg min-w-[200px] min-h-[130px]"
            >
              <div className="flex items-center gap-2">
                <img src={user} alt="" />
                <div className="flex flex-col">
                  <span className="text-[13px]">Inactive Integration</span>
                  <span className="text-[25px] font-semibold ">0</span>
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-4">
            <div className="bg-[#E7F0FE] mb-4  py-1 px-3 rounded-[20px] text-[#084191] w-[fit-content]  ">
              Payment Gateway
            </div>

            <div className="flex gap-4 flex-wrap  items-center">
              <div className="max-w-[400px] flex-1 border p-2 rounded-lg bg-[#fff] min-w-[200px] min-h-[130px] ">
                <div className="flex items-center justify-between">
                  <span className="flex gap-1 items-center text-[14px] font-[500] ">
                    <img src={paystack} alt="" className="h-4" /> Paystack
                  </span>{" "}
                  <Button
                    sx={{
                      borderRadius: "10px",
                      fontSize: "10px",
                      backgroundColor: "#D9EFE0",
                      color: "#009232",
                      padding: "5px",
                    }}
                  >
                    Active
                  </Button>
                </div>

                <p className="my-5 text-[13px]">
                  We use this to make payment on our various platform.
                </p>
              </div>
              <div className="max-w-[400px] flex-1 border p-2 rounded-lg bg-[#fff] min-w-[200px] min-h-[130px] ">
                <div className="flex items-center justify-between">
                  <span className="flex gap-1 items-center text-[14px] font-[500] ">
                    <img src={flutterwave} alt="" className="h-4" /> Flutterwave
                  </span>{" "}
                  <Button
                    sx={{
                      borderRadius: "10px",
                      fontSize: "10px",
                      backgroundColor: "#D9EFE0",
                      color: "#009232",
                      padding: "5px",
                    }}
                  >
                    Active
                  </Button>
                </div>

                <p className="my-5 text-[13px]">
                  We use this to make payment on our various platform.
                </p>
              </div>{" "}
              <div className="max-w-[400px] flex-1 border p-2 rounded-lg bg-[#fff] min-w-[200px] min-h-[130px] ">
                <div className="flex items-center justify-between">
                  <span className="flex gap-1 items-center text-[14px] font-[500] ">
                    <img src={interswitch} alt="" className="h-4" /> Interswitch
                  </span>{" "}
                  <Button
                    sx={{
                      borderRadius: "10px",
                      fontSize: "10px",
                      backgroundColor: "#D9EFE0",
                      color: "#009232",
                      padding: "5px",
                    }}
                  >
                    Active
                  </Button>
                </div>

                <p className="my-5 text-[13px]">
                  We use this to make payment on our various platform.
                </p>
              </div>{" "}
              <div className="max-w-[400px] flex-1 border p-2 rounded-lg bg-[#fff] min-w-[200px] min-h-[130px] ">
                <div className="flex items-center justify-between">
                  <span className="flex gap-1 items-center text-[14px] font-[500] ">
                    <img src={remita} alt="" className="h-4" /> Remita
                  </span>{" "}
                  <Button
                    sx={{
                      borderRadius: "10px",
                      fontSize: "10px",
                      backgroundColor: "#D9EFE0",
                      color: "#009232",
                      padding: "5px",
                    }}
                  >
                    Active
                  </Button>
                </div>

                <p className="my-5 text-[13px]">
                  We use this to make payment on our various platform.
                </p>
              </div>{" "}
              <div className="max-w-[400px] flex-1 border p-2 rounded-lg bg-[#fff] min-w-[200px] min-h-[130px] ">
                <div className="flex items-center justify-between">
                  <span className="flex gap-1 items-center text-[14px] font-[500] ">
                    <img src={flutterwave} alt="" className="h-4" /> VoguePay
                  </span>{" "}
                  <Button
                    sx={{
                      borderRadius: "10px",
                      fontSize: "10px",
                      backgroundColor: "#D9EFE0",
                      color: "#009232",
                      padding: "5px",
                    }}
                  >
                    Active
                  </Button>
                </div>

                <p className="my-5 text-[13px]">
                  We use this to make payment on our various platform.
                </p>
              </div>
            </div>
          </div>

          <div className=" mt-4">
            <div className="bg-[#E7F0FE] mb-4  py-1 px-3 rounded-[20px] text-[#084191] w-[fit-content]  ">
              Electricity
            </div>

            <div className="flex gap-4 flex-wrap  items-center">
              <div className="max-w-[400px] flex-1 border p-2 rounded-lg bg-[#fff] min-w-[200px] min-h-[130px] ">
                <div className="flex items-center justify-between">
                  <span className="flex gap-1 items-center text-[14px] font-[500] ">
                    <img src={paystack} alt="" className="h-4" /> Moomas
                  </span>{" "}
                  <Button
                    sx={{
                      borderRadius: "10px",
                      fontSize: "10px",
                      backgroundColor: "#D9EFE0",
                      color: "#009232",
                      padding: "5px",
                    }}
                  >
                    Active
                  </Button>
                </div>

                <p className="my-5 text-[13px]">
                  We use this to make payment on our various platform.
                </p>
              </div>
              <div className="max-w-[400px] flex-1 border p-2 rounded-lg bg-[#fff] min-w-[200px] min-h-[130px] ">
                <div className="flex items-center justify-between">
                  <span className="flex gap-1 items-center text-[14px] font-[500] ">
                    <img src={nepa} alt="" className="h-4" /> IBEDC
                  </span>{" "}
                  <Button
                    sx={{
                      borderRadius: "10px",
                      fontSize: "10px",
                      backgroundColor: "#D9EFE0",
                      color: "#009232",
                      padding: "5px",
                    }}
                  >
                    Active
                  </Button>
                </div>

                <p className="my-5 text-[13px]">
                  We use this to make payment on our various platform.
                </p>
              </div>
            </div>
          </div>

          <div className=" mt-4">
            <div className="bg-[#E7F0FE] mb-4  py-1 px-3 rounded-[20px] text-[#084191] w-[fit-content]  ">
              Security Hardware
            </div>

            <div className="flex gap-4 flex-wrap  items-center">
              <div className="max-w-[400px] flex-1 border p-2 rounded-lg bg-[#fff] min-w-[200px] min-h-[130px] ">
                <div className="flex items-center justify-between">
                  <span className="flex gap-1 items-center text-[14px] font-[500] ">
                    <img src={paystack} alt="" className="h-4" /> Halogeen
                  </span>{" "}
                  <Button
                    sx={{
                      borderRadius: "10px",
                      fontSize: "10px",
                      backgroundColor: "#D9EFE0",
                      color: "#009232",
                      padding: "5px",
                    }}
                  >
                    Active
                  </Button>
                </div>

                <p className="my-5 text-[13px]">
                  We use this to make payment on our various platform.
                </p>
              </div>
              <div className="max-w-[400px] flex-1 border p-2 rounded-lg bg-[#fff] min-w-[200px] min-h-[130px] ">
                <div className="flex items-center justify-between">
                  <span className="flex gap-1 items-center text-[14px] font-[500] ">
                    <img src={paystack} alt="" className="h-4" /> HardRock
                  </span>{" "}
                  <Button
                    sx={{
                      borderRadius: "10px",
                      fontSize: "10px",
                      backgroundColor: "#D9EFE0",
                      color: "#009232",
                      padding: "5px",
                    }}
                  >
                    Active
                  </Button>
                </div>

                <p className="my-5 text-[13px]">
                  We use this to make payment on our various platform.
                </p>
              </div>{" "}
              <div className="max-w-[400px] flex-1 border p-2 rounded-lg bg-[#fff] min-w-[200px] min-h-[130px] ">
                <div className="flex items-center justify-between">
                  <span className="flex gap-1 items-center text-[14px] font-[500] ">
                    <img src={paystack} alt="" className="h-4" /> RockofAges
                  </span>{" "}
                  <Button
                    sx={{
                      borderRadius: "10px",
                      fontSize: "10px",
                      backgroundColor: "#D9EFE0",
                      color: "#009232",
                      padding: "5px",
                    }}
                  >
                    Active
                  </Button>
                </div>

                <p className="my-5 text-[13px]">
                  We use this to make payment on our various platform.
                </p>
              </div>{" "}
              <div className="max-w-[400px] flex-1 border p-2 rounded-lg bg-[#fff] min-w-[200px] min-h-[130px] ">
                <div className="flex items-center justify-between">
                  <span className="flex gap-1 items-center text-[14px] font-[500] ">
                    <img src={paystack} alt="" className="h-4" /> Paystack
                  </span>{" "}
                  <Button
                    sx={{
                      borderRadius: "10px",
                      fontSize: "10px",
                      backgroundColor: "#D9EFE0",
                      color: "#009232",
                      padding: "5px",
                    }}
                  >
                    Active
                  </Button>
                </div>

                <p className="my-5 text-[13px]">
                  We use this to make payment on our various platform.
                </p>
              </div>
            </div>
          </div>
        </div>  
      )}
    </>
  );
};

export default Integrations;
