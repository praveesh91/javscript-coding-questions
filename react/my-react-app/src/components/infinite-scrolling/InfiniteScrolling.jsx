import React, { useEffect, useState } from "react";

const InfiniteScrolling = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(3);

  const getData = async () => {
    try {
      setLoading(true);
      const request = await fetch(
        `https://dummyjson.com/products?limit=${page * 3}`
      );
      const res = await request.json();
      setLoading(false);
      setProducts(res);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    return () => {};
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {products?.products?.map((el) => (
        <div key={el.id} className="bg-gray-100 p-3">
          <img src={el.thumbnail} alt="" srcset="" />
          <h2 className="text-lg font-semibold mb-2">{el.title}</h2>
          <p>{el.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfiniteScrolling;
