import { useState } from "react";
const useOptimisedCounter = (intitialValue = 0) => {
  const [counter, setCounter] = useState(intitialValue);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(intitialValue);

  return { counter, setCounter, increment, decrement, reset };
};
export default useOptimisedCounter;
