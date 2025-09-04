import React from "react";
import useCycle from "../../hooks/useCycle";

const Otp = () => {
  const [mode, cycle] = useCycle("one", "two", "three");
  console.log({ mode }, { cycle });

  return <div className="flex align-middle justify-center"></div>;
};

export default Otp;
