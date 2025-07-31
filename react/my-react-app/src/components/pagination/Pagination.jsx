import "./Pagination.css";
import React from "react";

const Pagination = () => {
  const [page, setPage] = React.useState(1);
  const [items, setItems] = React.useState([]);
  const [allProducts, setAllProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const itemsPerPage = 10;

  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetch(" https://dummyjson.com/products?limit=100");
      const data = await res.json();
      setAllProducts(data.products);
      setItems(data.products.slice(0, 10));
      setLoading(false);
    } catch (error) {
      console.log("Error ", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getData();
    return () => {};
  }, []);

  React.useEffect(() => {
    setItems(
      allProducts.slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage)
    );
    return () => {};
  }, [page]);

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (page < allProducts.length / itemsPerPage) setPage((prev) => prev + 1);
  };

  const handleChange = (page) => {
    setPage(page);
  };

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="container">
      <ul>
        {items.map((el) => (
          <li key={el.title}>{el.title}</li>
        ))}
      </ul>
      <div className="pagination">
        <div className="prev">
          <button disabled={page == 1} onClick={handlePrev}>
            prev
          </button>
        </div>
        {items.map((el, index) => (
          <button
            className={`${page === index + 1 ? "active" : ""}`}
            onClick={() => handleChange(index + 1)}
            key={index}
          >
            {index + 1}
          </button>
        ))}
        <div className="prev">
          <button
            disabled={page >= Math.ceil(allProducts.length / itemsPerPage)}
            onClick={handleNext}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
