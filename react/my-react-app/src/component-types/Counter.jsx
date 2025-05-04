function Counter({ count, increment, decrement, reset }) {
  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Subtract</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
export default Counter;
