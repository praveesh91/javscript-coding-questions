import React from "react";

const AnotherExpensive = ({ subtract }) => {
  console.log("AnotherExpensive");

  return (
    <div>
      AnotherExpensive
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={subtract}
      >
        Subtract
      </button>
    </div>
  );
};

export default React.memo(AnotherExpensive);
