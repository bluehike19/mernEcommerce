import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductContainer from "../components/ProductContainer";

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
    <div className="App">
      <h1>Product List</h1>
      {products.map((product) => (
        <ProductContainer key={product.id} product={product} />
      ))}
    </div>

    //   <div >
    //     {products.map((product) => (
    //       <div key={product.id}>
    //         <img
    //           src={`${BACKEND}/images/products/${product.image}`}
    //           alt={product.name}
    //         />
    //         {/* <img src={product.image} alt="" /> */}
    //         <h2>{product.name}</h2>
    //         <p>{product.description}</p>
    //         <p>${product.price.toFixed(2)}</p>
    //       </div>
    //     ))}
    //   </div>
  );
};

export default ProductListing;
