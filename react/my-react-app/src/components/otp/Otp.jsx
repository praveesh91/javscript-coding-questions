import React, { useRef, useState } from "react";

const Otp = ({ otpLength = 6 }) => {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);

  console.log(ref);

  const handleKeydown = (event, index) => {
    if (isNaN(event.key)) {
      return;
    }
    const copyOtpFields = [...otpFields];
    copyOtpFields[index] = event.key;
    ref.current[index + 1].focus();
    setOtpFields(copyOtpFields);
  };

  return (
    <div className="">
      {otpFields.map((el, index) => {
        return (
          <input
            ref={(currentInput) => (ref.current[index] = currentInput)}
            className="w-10 h-10 text-center text-xl border border-gray-300 rounded-md focus:border-blue-500"
            key={index}
            value={el}
            type="text"
            onKeyDown={(event) => handleKeydown(event, index)}
          />
        );
      })}
    </div>
  );
};

export default Otp;
