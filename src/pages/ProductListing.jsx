import React, { useEffect, useState } from "react";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/products", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  // useEffect(() => {

  //   fetch("/api/products")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => setProducts(data))
  //     .catch((err) => {
  //       setError(err);
  //       console.error("Error fetching data:", err);
  //     });
  // }, []);

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
