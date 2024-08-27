import React from "react";
import "./Refresh.css"

const Refreshing = () => {
  return (
    <div className="flex p-2 items-center  relative gap-4">
      Refreshing...
      <span className="loader"></span>
    </div>
  );
};

export default Refreshing;
