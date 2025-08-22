import { useState } from "react";
export default function useCounter(initialValue = 0) {
  const [count, setCounter] = useState(initialValue);
  const increment = () => setCounter((prevCount) => prevCount + 1);
  const decrement = () => setCounter((prevCount) => prevCount - 1);
  const reset = () => setCounter(initialValue);
  const setCount = () => setCounter(count + 1);
  return { count, increment, decrement, reset, setCount };
}
