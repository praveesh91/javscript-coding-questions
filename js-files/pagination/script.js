document.addEventListener("DOMContentLoaded", function () {
  const paginationContainer = document.querySelector(".paginationContainer");
  let products = [];
  let page = 1;
  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();
      if (data && data.products) {
        products = data.products;
        render();
      }
    } catch (error) {
      console.log("Error fetching products", error);
    }
  };
  const render = () => {
    const productsContainer = document.createElement("div");
    productsContainer.classList.add("products");
    const pagination = document.createElement("div");
    pagination.classList.add("pagination");
    if (products.length > 0) {
      products.slice(page * 10 - 10, page * 10).forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product__single");
        productElement.innerHTML = `<img src=${product.thumbnail} alt=${product.title}/> <span>${product.title}</span>`;
        productsContainer.appendChild(productElement);
      });

      const createPaginationButton = (text, handler, isSelected = false) => {
        const button = document.createElement("button");
        button.textContent = text;
        button.addEventListener("click", handler);
        if (isSelected) {
          button.classList.add("pagination__selected");
        }
        return button;
      };
      const selectPageHandler = (selectedPage) => {
        if (
          selectedPage >= 1 &&
          selectedPage <= products.length / 10 &&
          selectedPage !== page
        ) {
          page = selectedPage;
          render();
        }
      };

      if (page > 0) {
        const prevButton = createPaginationButton("⬅️", () => {
          selectPageHandler(page - 1);
        });
        pagination.appendChild(prevButton);
      }

      for (let index = 0; index < products.length / 10; index++) {
        const pageButton = createPaginationButton(
          index + 1,
          () => {
            selectPageHandler(page + 1);
          },
          page === index + 1
        );
        pagination.appendChild(pageButton);
      }

      if (page < products.length / 10) {
        const nextButton = createPaginationButton("➡️", () => {
          selectPageHandler(page + 1);
        });
        pagination.appendChild(nextButton);
      }
      paginationContainer.innerHTML = "";
      paginationContainer.appendChild(productsContainer);
      paginationContainer.appendChild(pagination);
    }
  };
  fetchProducts();
});
