import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const CustomLoader = () => (
  <div className="spinnerStyle">
    <PuffLoader size={60} margin={2} color={"#3A4692"} />
  </div>
);

export default CustomLoader;
