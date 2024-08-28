import React from "react";
import { ScaleLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <ScaleLoader color="green" size="200" />
    </div>
  );
};

export default LoadingSpinner;
