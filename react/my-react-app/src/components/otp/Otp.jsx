import React from "react";
import useCycle from "../../hooks/useCycle";

const Otp = () => {
  const [mode, cycle] = useCycle("one", "two", "three");

  return (
    <div className="flex align-middle justify-center" onClick={cycle}>
      {mode}
    </div>
  );
};

export default Otp;
