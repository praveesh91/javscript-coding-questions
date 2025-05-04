import { useEffect, useLayoutEffect, useRef, useState } from "react";

function UseEffectHook() {
  const elementRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [elementWidth, setElementWidth] = useState(0);

  useLayoutEffect(() => {
    if (elementRef.current) {
      setElementWidth(elementRef.current.offsetWidth);
    }
  }, [elementRef.current]);
  useEffect(() => {
    getUsers();
    return () => {};
  }, []);

  const getUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    setUsers(users);
  };

  return (
    <div ref={elementRef}>
      <ul>
        {users.map((el) => (
          <li key={el.name}>{el.name}</li>
        ))}
      </ul>
      <p>Width: {elementWidth}px</p>
    </div>
  );
}
export default UseEffectHook;
