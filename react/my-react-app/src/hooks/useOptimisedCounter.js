import { useCallback, useState } from "react";
const useOptimisedCounter = (intitialValue = 0) => {
  const [counter, setCounter] = useState(intitialValue);

  const increment = useCallback(() => setCounter((prev) => prev + 1), []);
  const decrement = useCallback(() => setCounter((prev) => prev - 1), []);
  const reset = useCallback(() => setCounter(intitialValue), [intitialValue]);

  return { counter, setCounter, increment, decrement, reset };
};
export default useOptimisedCounter;
