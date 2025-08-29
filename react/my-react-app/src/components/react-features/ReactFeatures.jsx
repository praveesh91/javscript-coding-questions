import React from "react";
import useOptimisedCounter from "../../hooks/useOptimisedCounter";
import ExpensiveComponent from "./ExpensiveComponent";
import AnotherExpensive from "./AnotherExpensive";

const ReactFeatures = () => {
  const { increment, counter, decrement, reset } = useOptimisedCounter(0);
  console.log("Parent");

  return (
    <div>
      Parent
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={reset}
      >
        Reset
      </button>
      <p>{counter}</p>
      <ExpensiveComponent add={increment} />
      <AnotherExpensive subtract={decrement} />
    </div>
  );
};

export default ReactFeatures;
