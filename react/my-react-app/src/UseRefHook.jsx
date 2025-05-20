import { useRef } from "react";

function UseRefHook() {
  const ref = useRef(0);
  console.log(ref.current);

  return (
    <div>
      <p>{ref.current}</p>
      <button
        onClick={() => {
          ref.current += 1;
          console.log(ref.current);
        }}
      >
        Add
      </button>
    </div>
  );
}
export default UseRefHook;
