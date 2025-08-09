import React, { useEffect, useRef, useState } from "react";

const InfiniteScrolling = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(3);
  let hasRun = useRef(true);

  const getData = async () => {
    try {
      setLoading(true);
      const request = await fetch(
        `https://dummyjson.com/products?limit=${page * 3}`
      );
      const res = await request.json();
      setLoading(false);
      setProducts(res);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  if (hasRun.current) {
    getData();
    hasRun.current = false;
  }

  function throttle(cb, delay) {
    let last = 0;
    return function (...args) {
      let now = new Date().getTime();
      if (now - last < delay) return;
      last = now;
      return cb(...args);
    };
  }

  const handleScroll = throttle(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1000 >
        document.documentElement.offsetHeight &&
      !loading
    ) {
      getData();
    }
  }, 500);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {products?.products?.map((el) => (
        <div key={el.id} className="bg-gray-100 p-3">
          <img src={el.thumbnail} alt={el.title} />
          <h2 className="text-lg font-semibold mb-2">{el.title}</h2>
          <p>{el.description}</p>
        </div>
      ))}
      {loading && <p>Loading</p>}
    </div>
  );
};

export default InfiniteScrolling;
