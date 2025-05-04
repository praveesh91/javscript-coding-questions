import { useState } from "react";

function withCounter(WrappedComponent) {
  function UpdatedComponent(props) {
    const [count, setCount] = useState(0);
    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => prev - 1);
    const reset = () => setCount(0);
    return (
      <>
        <WrappedComponent
          increment={increment}
          decrement={decrement}
          reset={reset}
          count={count}
          {...props}
        />
      </>
    );
  }
  return UpdatedComponent;
}
export default withCounter;
