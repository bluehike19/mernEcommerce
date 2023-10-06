import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductContainer from "../components/ProductContainer";
import MyErrorBoundary from "../components/MyErrorBoundary";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/products", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data);
  //     });
  // }, []);

  // const BACKEND = "http://localhost:3000";

  return (
    <>
      <MyErrorBoundary>
        <div className="app-container">
          {products.map((product) => (
            <ProductContainer key={product.id} product={product} />
          ))}
        </div>
      </MyErrorBoundary>
    </>
  );
};

export default ProductListing;
