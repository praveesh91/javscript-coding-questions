import React from "react";
import useOptimisedCounter from "../../hooks/useOptimisedCounter";

const ReactFeatures = () => {
  const { increment, counter, decrement, reset } = useOptimisedCounter(0);

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={increment}
      >
        Add
      </button>
      <button onClick={decrement}>Subtract</button>
      <button onClick={reset}>Reset</button>
      <p>{counter}</p>
    </div>
  );
};

export default ReactFeatures;
