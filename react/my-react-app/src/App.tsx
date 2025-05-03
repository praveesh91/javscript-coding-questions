import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  return (
    <>
      <div className="card">
        <button onClick={increment}>count is {count}</button>
      </div>
      <Child />
    </>
  );
}

export default App;

function Child() {
  console.log("child");

  return <>Rendered</>;
}
