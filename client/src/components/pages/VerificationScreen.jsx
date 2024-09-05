import React from "react";

const VerificationCodeCard = () => {
  const handleVerify = () => {
    console.log("Verify");
  };
  return (
    <div className="flex flex-col justify-center bg-slate-200 items-center w-full h-screen font-poppins">
      <span className="text-center mx-auto text-lg py-4 font-medium tracking-wide">
        Please enter the One Time OTP to verify your account
      </span>
      <div className="flex justify-center items-center p-4 w-96 gap-2 mx-auto">
        <input
          type="number"
          id="Quantity"
          className="h-10 w-16 rounded border-gray-200 focus:outline-sky-300 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        />
        <input
          type="number"
          id="Quantity"
          className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        />
        <input
          type="number"
          id="Quantity"
          className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        />
        <input
          type="number"
          id="Quantity"
          className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        />
        <input
          type="number"
          id="Quantity"
          className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        />
        <input
          type="number"
          id="Quantity"
          className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        />
      </div>
      <button
        type="button"
        onClick={handleVerify}
        className="mt-4 bg-blue-500 rounded text-white p-2 w-64"
      >
        Verify
      </button>
    </div>
  );
};

export default VerificationCodeCard;
