import React, { useRef, useState } from "react";
import { useEffect } from "react";

const Otp = ({ otpLength = 6 }) => {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);

  const handleKeydown = (event, index) => {
    const key = event.key;
    const copyOtpFields = [...otpFields];

    if (key === "ArrowRight" && index < otpFields.length - 1) {
      ref.current[index + 1].focus();
    }
    if (key === "ArrowLeft" && index > 0) {
      ref.current[index - 1].focus();
    }

    if (key === "Backspace") {
      copyOtpFields[index] = "";
      setOtpFields(copyOtpFields);
      index > 0 && ref.current[index - 1].focus();
      return;
    }
    if (isNaN(key)) {
      return;
    }
    copyOtpFields[index] = key;

    if (index < otpFields.length - 1) {
      ref.current[index + 1].focus();
    }
    setOtpFields(copyOtpFields);
  };

  useEffect(() => {
    ref.current[0].focus();
    return () => {};
  }, []);

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
